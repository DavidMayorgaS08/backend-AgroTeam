import Administradores from "../models/administradores.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generarJWT } from "../middlewares/validar-jwt.js";

const httpLogin = {
  async postLogin(req, res) {
    const { email, password } = req.body;
    try {
      const admin = await Administradores.findOne({ email });
      if (!admin) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // verificar si el usuario esta activo
      if (admin.estado === 0) {
        return res.status(400).json({ message: "Usuario inactivo" });
      }
      // verificar la contraseña
      const validarPassword = bcrypt.compare(password, admin.password);
      if (!validarPassword) {
        return res.status(400).json({ message: "Contraseña incorrecta" });
      }
      // generar el token
      const token = jwt.sign(
        {
          id: admin._id,
          nombre: admin.nombre,
          email: admin.email,
          rol: admin.rol,
        },
        process.env.SECRETORPRIVATEKEY,
        { expiresIn: "4h" }
      );
      res.json({ admin, token });
    } catch (error) {
      res.status(500).json({ message: "Error al iniciar sesión" });
    }
  },

  recuperarPassword: async (req, res) => {
    const { email } = req.body;
    try {
      const user = await Administradores.findOne({ email });
      if (!user) {
        return res.status(404).json({ msg: "Administrador no encontrado" });
      }

      const token = await generarJWT(user._id);

      res.json({ msg: "Correo de recuperación enviado" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Error interno del servidor" });
    }
  },
};

export default httpLogin;
