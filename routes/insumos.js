import { Router } from "express";
import httpInsumos from "../controllers/insumos.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import insumosHelper from "../helpers/insumos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpInsumos.getInsumos);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(insumosHelper.validarId),
    validarCampos
], httpInsumos.getInsumosID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpInsumos.getInsumosActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpInsumos.getInsumosInactivos);

router.post("/",[
    validarJWT,
    check("id_finca", "El id de la finca es obligatorio").not().isEmpty(),
    check("id_finca").custom(insumosHelper.validarIdFinca),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("registroICA", "El registro ICA es obligatorio").not().isEmpty(),
    check("registroInvima", "El registro INVIMA es obligatorio").not().isEmpty(),
    check("relacionNPK", "La relación NPK es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("unidad", "La unidad es obligatoria").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpInsumos.postInsumos);

router.put("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(insumosHelper.validarId),
    check("id_finca", "El id de la finca es obligatorio").not().isEmpty(),
    check("id_finca").custom(insumosHelper.validarIdFinca),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("registroICA", "El registro ICA es obligatorio").not().isEmpty(),
    check("registroInvima", "El registro INVIMA es obligatorio").not().isEmpty(),
    check("relacionNPK", "La relación NPK es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("unidad", "La unidad es obligatoria").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpInsumos.putInsumos);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(insumosHelper.validarId),
    validarCampos
], httpInsumos.putInsumosActivar);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(insumosHelper.validarId),
    validarCampos
], httpInsumos.putInsumosDesactivar);

export default router;