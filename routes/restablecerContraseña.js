import { Router } from "express";
import { restablecerContrasena, restablecerContrasenaToken } from "../controllers/restablecerContraseña.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { check } from "express-validator";

const router = Router();

router.post("/",[
    check("email", "El correo electrónico es obligatorio").isEmail(),
    validarCampos
], restablecerContrasena);
router.post("/:token", restablecerContrasenaToken);

export default router;