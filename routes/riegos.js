import { Router } from "express";
import httpRiegos from "../controllers/riegos.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import riegosHelper from "../helpers/riegos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpRiegos.getRiegos);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(riegosHelper.validarId),
    validarCampos
], httpRiegos.getRiegosID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpRiegos.getRiegosActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpRiegos.getRiegosInactivos);

router.get("/fechas/:fecha1/:fecha2",[
    validarJWT,
    validarCampos
], httpRiegos.getRiegosFecha);

router.post("/",[
    validarJWT,
    check("id_cultivo", "El id_cultivo es obligatorio").not().isEmpty(),
    check("id_cultivo", "No es un id válido").isMongoId(),
    check("id_cultivo").custom(riegosHelper.validarIdCultivo),
    check("id_empleado", "El id_empleado es obligatorio").not().isEmpty(),
    check("id_empleado", "No es un id válido").isMongoId(),
    check("id_empleado").custom(riegosHelper.validarIdEmpleado),
    check("fecha", "La fecha es obligatoria").not().isEmpty(),
    check("diasTransplante", "Los días de transplante son obligatorios").not().isEmpty(),
    check("diasTransplante", "Los días de transplante deben ser un número").isNumeric(),
    check("estadoFenologico", "El estado fenológico es obligatorio").not().isEmpty(),
    check("horaInicio", "La hora de inicio es obligatoria").not().isEmpty(),
    check("horaFin", "La hora de fin es obligatoria").not().isEmpty(),
    check("dosis", "La dosis es obligatoria").not().isEmpty(),
    check("dosis", "La dosis debe ser un número").isNumeric(),
    check("cantidadAgua", "La cantidad de agua es obligatoria").not().isEmpty(),
    check("cantidadAgua", "La cantidad de agua debe ser un número").isNumeric(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpRiegos.postRiegos);

router.put("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(riegosHelper.validarId),
    check("id_cultivo", "El id_cultivo es obligatorio").not().isEmpty(),
    check("id_cultivo", "No es un id válido").isMongoId(),
    check("id_cultivo").custom(riegosHelper.validarIdCultivo),
    check("id_empleado", "El id_empleado es obligatorio").not().isEmpty(),
    check("id_empleado", "No es un id válido").isMongoId(),
    check("id_empleado").custom(riegosHelper.validarIdEmpleado),
    check("fecha", "La fecha es obligatoria").not().isEmpty(),
    check("diasTransplante", "Los días de transplante son obligatorios").not().isEmpty(),
    check("diasTransplante", "Los días de transplante deben ser un número").isNumeric(),
    check("estadoFenologico", "El estado fenológico es obligatorio").not().isEmpty(),
    check("horaInicio", "La hora de inicio es obligatoria").not().isEmpty(),
    check("horaFin", "La hora de fin es obligatoria").not().isEmpty(),
    check("dosis", "La dosis es obligatoria").not().isEmpty(),
    check("dosis", "La dosis debe ser un número").isNumeric(),
    check("cantidadAgua", "La cantidad de agua es obligatoria").not().isEmpty(),
    check("cantidadAgua", "La cantidad de agua debe ser un número").isNumeric(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpRiegos.putRiegos);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(riegosHelper.validarId),
    validarCampos
], httpRiegos.activarRiegos);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(riegosHelper.validarId),
    validarCampos
], httpRiegos.desactivarRiegos);

export default router;