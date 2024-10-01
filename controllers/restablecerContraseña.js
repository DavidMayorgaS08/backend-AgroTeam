import nodemailer from 'nodemailer';
import Administradores from '../models/administradores.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

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
    const admin = await Administradores.findOne({ email: req.body.email });

    if (!admin) {
      return res.status(404).json({ message: 'No existe una cuenta con ese correo electrónico' });
    }

    const token = jwt.sign({
      id: admin._id,
      nombre: admin.nombre,
      email: admin.email,
      rol: admin.rol
    }, process.env.SECRETORPRIVATEKEY, { expiresIn: '1h' });

    const resetUrl = `http://localhost:5173/#/NuevaContrasena/${token}`;
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

    await transporter.sendMail(mailOptions);

    res.json({ message: 'Se ha enviado un correo electrónico para restablecer tu contraseña' });
  } catch (error) {
    res.status(500).json({ message: 'Error al restablecer la contraseña' });
  }
}

export const nuevaContrasena = async (req, res) => {
  try {
    const { token, password } = req.body;
    const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    const admin = await Administradores.findById(id);

    if (!admin) {
      return res.status(404).json({ message: 'No existe una cuenta con ese correo electrónico' });
    }

    admin.password = password;
    await admin.save();

    res.json({ message: 'Contraseña actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al restablecer la contraseña' });
  }
}