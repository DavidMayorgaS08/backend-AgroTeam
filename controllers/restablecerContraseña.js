import crypto from 'crypto';
import nodemailer from 'nodemailer';
import Administradores from '../models/administradores.js';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const restablecerContrasena = async (req, res) => {
    try {
        const admin = await Administradores.findOne({email: req.body.email});

        if (!admin) {
            return res.status(404).json({message: 'No existe una cuenta con ese correo electrónico'});
        }

        const token = crypto.randomBytes(32).toString('hex');
        admin.resetPasswordToken = token;
        admin.resetPasswordExpires = Date.now() + 3600000;
        await admin.save();

        const resetUrl = `http://localhost:5173/reset-password/${token}`;
        const mailOptions = {
            to: admin.email,
            from: process.env.EMAIL_USER,
            subject: 'Restablecer contraseña',
            html: `
                <h2>Has solicitado restablecer tu contraseña</h2>
                <p>Si no has sido tú, ignora este mensaje</p>
                <p>De lo contrario, haz clic en el siguiente enlace:</p>
                <a href="${resetUrl}">Restablecer contraseña</a>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({
                    message: 'Error al enviar el correo electrónico',
                    error: error.message
                });
            }

            res.status(200).json({message: 'Se ha enviado un enlace a tu correo electrónico'});
        });
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const restablecerContrasenaToken = async (req, res) => {
    const token = req.params.token;
    const { newPassword, confirmNewPassword } = req.body;

    if (newPassword !== confirmNewPassword) {
        return res.status(400).json({message: 'Las contraseñas no coinciden'});
    }

    const admin = await Administradores.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() }
    });

    if (!admin) {
        return res.status(404).json({message: 'El token es inválido o ha expirado'});
    }

    admin.password = newPassword;
    admin.resetPasswordToken = undefined;
    admin.resetPasswordExpires = undefined;
    await admin.save();

    res.status(200).json({message: 'Contraseña restablecida correctamente'});
}