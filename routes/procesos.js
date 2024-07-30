import { Router } from "express";
import httpProcesos from "../controllers/procesos.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import procesosHelper from "../helpers/procesos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpProcesos.getProcesos);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(procesosHelper.validarId),
    validarCampos
], httpProcesos.getProcesosID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpProcesos.getProcesosActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpProcesos.getProcesosInactivos);

router.post("/",[
    validarJWT,
    check("id_cultivo", "El id_cultivo es obligatorio").not().isEmpty(),
    check("id_cultivo", "No es un id válido").isMongoId(),
    check("id_cultivo").custom(procesosHelper.validarIdCultivo),
    check("id_empleado", "El id_empleado es obligatorio").not().isEmpty(),
    check("id_empleado", "No es un id válido").isMongoId(),
    check("id_empleado").custom(procesosHelper.validarIdEmpleado),
    check("tipo", "El tipo es obligatorio").not().isEmpty(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("fechaInicio", "La fecha de inicio es obligatoria").not().isEmpty(),
    check("fechaFin", "La fecha de fin es obligatoria").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    validarCampos
], httpProcesos.postProcesos);

router.put ("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(procesosHelper.validarId),
    check("id_cultivo", "El id_cultivo es obligatorio").not().isEmpty(),
    check("id_cultivo", "No es un id válido").isMongoId(),
    check("id_cultivo").custom(procesosHelper.validarIdCultivo),
    check("id_empleado", "El id_empleado es obligatorio").not().isEmpty(),
    check("id_empleado", "No es un id válido").isMongoId(),
    check("id_empleado").custom(procesosHelper.validarIdEmpleado),
    check("tipo", "El tipo es obligatorio").not().isEmpty(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("fechaInicio", "La fecha de inicio es obligatoria").not().isEmpty(),
    check("fechaFin", "La fecha de fin es obligatoria").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    validarCampos
], httpProcesos.putProcesos);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(procesosHelper.validarId),
    validarCampos
], httpProcesos.putProcesosActivar);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(procesosHelper.validarId),
    validarCampos
], httpProcesos.putProcesosDesactivar);

export default router;