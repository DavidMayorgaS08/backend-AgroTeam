import { Router } from "express";
import httpadministradores from "../controllers/administradores.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import administradoresHelper from "../helpers/administradores.js";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpadministradores.getadministradores);

router.get("/:id",[
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(administradoresHelper.validarId),
    validarCampos
], httpadministradores.getadministradoresID);

router.get("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(administradoresHelper.validarId),
    validarCampos
], httpadministradores.activaradministradores);

router.get("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(administradoresHelper.validarId),
    validarCampos
], httpadministradores.desactivaradministradores);

router.put ("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(administradoresHelper.validarId),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("direccion", "La dirección es obligatoria").not().isEmpty(),
    check("telefono", "El teléfono es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("municipio", "El municipio es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("rol", "El rol es obligatorio").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpadministradores.putadministradores);

router.post("/",[
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("direccion", "La dirección es obligatoria").not().isEmpty(),
    check("telefono", "El teléfono es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("municipio", "El municipio es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("rol", "El rol es obligatorio").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpadministradores.postadministradores);




