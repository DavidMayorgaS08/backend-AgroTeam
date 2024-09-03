import { Router } from "express";
import httpLogin from "../controllers/login.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.post("/", [
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email no es valido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos
], httpLogin.postLogin);

router.post("/recuperarContraseña", [
    check('email', 'El email debe estar bien escrito.').isEmail(),
    validarCampos
  ], httpLogin.recuperarPassword);

export default router;