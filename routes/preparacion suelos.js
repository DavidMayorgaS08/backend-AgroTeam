import { Router } from "express";
import httpPreparacionSuelos from "../controllers/preparacion suelos.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import preparacionSuelosHelper from "../helpers/preparacion suelos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpPreparacionSuelos.getPreparacionSuelos);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(preparacionSuelosHelper.validarId),
    validarCampos
], httpPreparacionSuelos.getPreparacionSuelosID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpPreparacionSuelos.getPreparacionSuelosActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpPreparacionSuelos.getPreparacionSuelosInactivos);

router.get("/listar/entre/fecha",[
    validarJWT,
    validarCampos
], httpPreparacionSuelos.getPreparacionSuelosEntreFechas);

router.post("/",[
    validarJWT,
    check("fecha", "La fecha es obligatoria").not().isEmpty(),
    check("id_parcela", "El id de la parcela es obligatorio").not().isEmpty(),
    check("id_parcela", "No es un id válido").isMongoId(),
    check("id_parcela").custom(preparacionSuelosHelper.validarIdParcela),
    check("id_empleado", "El id del empleado es obligatorio").not().isEmpty(),
    check("id_empleado", "No es un id válido").isMongoId(),
    check("id_empleado").custom(preparacionSuelosHelper.validarIdEmpleado),
    check("operario", "El operario es obligatorio").not().isEmpty(),
    check("responsable", "El responsable es obligatorio").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    validarCampos
], httpPreparacionSuelos.postPreparacionSuelos);

router.put ("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(preparacionSuelosHelper.validarId),
    check("fecha", "La fecha es obligatoria").not().isEmpty(),
    check("id_parcela", "El id de la parcela es obligatorio").not().isEmpty(),
    check("id_parcela", "No es un id válido").isMongoId(),
    check("id_parcela").custom(preparacionSuelosHelper.validarIdParcela),
    check("id_empleado", "El id del empleado es obligatorio").not().isEmpty(),
    check("id_empleado", "No es un id válido").isMongoId(),
    check("id_empleado").custom(preparacionSuelosHelper.validarIdEmpleado),
    check("operario", "El operario es obligatorio").not().isEmpty(),
    check("responsable", "El responsable es obligatorio").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    validarCampos
], httpPreparacionSuelos.putPreparacionSuelos);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(preparacionSuelosHelper.validarId),
    validarCampos
], httpPreparacionSuelos.putPreparacionSuelosActivar);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(preparacionSuelosHelper.validarId),
    validarCampos
], httpPreparacionSuelos.putPreparacionSuelosDesactivar);

export default router;