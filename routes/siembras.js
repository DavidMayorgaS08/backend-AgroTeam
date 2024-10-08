import { Router } from "express";
import httpSiembras from "../controllers/siembras.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import siembrasHelper from "../helpers/siembras.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpSiembras.getSiembras);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(siembrasHelper.validarId),
    validarCampos
], httpSiembras.getSiembrasID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpSiembras.getSiembrasActivas);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpSiembras.getSiembrasInactivas);

router.post("/",[
    validarJWT,
    check("id_cultivo", "El id_cultivo es obligatorio").not().isEmpty(),
    check("id_cultivo", "No es un id válido").isMongoId(),
    check("id_cultivo").custom(siembrasHelper.validarIdCultivo),
    check("id_empleado", "El id_empleado es obligatorio").not().isEmpty(),
    check("id_empleado", "No es un id válido").isMongoId(),
    check("id_empleado").custom(siembrasHelper.validarIdEmpleado),
    check("fechaSiembra", "La fecha de siembra es obligatoria").not().isEmpty(),
    check("fechaSiembra", "La fecha de siembra no es válida").isDate(),
    check("fechaCosecha", "La fecha de cosecha es obligatoria").not().isEmpty(),
    check("fechaCosecha", "La fecha de cosecha no es válida").isDate(),
    check("transplante", "El transplante es obligatorio").not().isEmpty(),
    check("cultivoAnterior", "El cultivo anterior es obligatorio").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad debe ser un número").isNumeric(),
    check("id_semilla", "El id_semilla es obligatorio").not().isEmpty(),
    check("id_semilla", "No es un id válido").isMongoId(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpSiembras.postSiembras);

router.put("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(siembrasHelper.validarId),
    check("id_cultivo", "El id_cultivo es obligatorio").not().isEmpty(),
    check("id_cultivo", "No es un id válido").isMongoId(),
    check("id_cultivo").custom(siembrasHelper.validarIdCultivo),
    check("id_empleado", "El id_empleado es obligatorio").not().isEmpty(),
    check("id_empleado", "No es un id válido").isMongoId(),
    check("id_empleado").custom(siembrasHelper.validarIdEmpleado),
    check("fechaSiembra", "La fecha de siembra es obligatoria").not().isEmpty(),
    check("fechaSiembra", "La fecha de siembra no es válida").isDate(),
    check("fechaCosecha", "La fecha de cosecha es obligatoria").not().isEmpty(),
    check("fechaCosecha", "La fecha de cosecha no es válida").isDate(),
    check("transplante", "El transplante es obligatorio").not().isEmpty(),
    check("cultivoAnterior", "El cultivo anterior es obligatorio").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad debe ser un número").isNumeric(),
    check("id_semilla", "El id_semilla es obligatorio").not().isEmpty(),
    check("id_semilla", "No es un id válido").isMongoId(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpSiembras.putSiembras);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(siembrasHelper.validarId),
    validarCampos
], httpSiembras.putSiembrasActivar);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(siembrasHelper.validarId),
    validarCampos
], httpSiembras.putSiembrasDesactivar);

export default router;