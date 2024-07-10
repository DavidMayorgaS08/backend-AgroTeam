import { Router } from "express";
import httpadministradores from "../controllers/control plagas.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import administradoresHelper from "../helpers/administradores.js";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
