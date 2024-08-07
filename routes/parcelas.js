import { Router } from "express";
import httpParcelas from "../controllers/parcelas.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import parcelasHelper from "../helpers/parcelas.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    // validarJWT,
    validarCampos
], httpParcelas.getParcelas);

router.get("/:id",[
    // validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(parcelasHelper.validarId),
    validarCampos
], httpParcelas.getParcelasID);

router.get("/listar/activos",[
    // validarJWT,
    validarCampos
], httpParcelas.getParcelasActivas);

router.get("/listar/inactivos",[
    // validarJWT,
    validarCampos
], httpParcelas.getParcelasInactivas);

router.get("listar/por/cultivoActual",[
    // validarJWT,
    validarCampos
], httpParcelas.getParcelasPorTipoCultivo);

router.get("listar/entre/fechas",[
    // validarJWT,
    validarCampos
], httpParcelas.getParcelasPorFecha);

router.post("/",[
    // validarJWT,
    check("numero", "El número es obligatorio").not().isEmpty(),
    check("ubicacionGeografica", "La ubicación geográfica es obligatoria").not().isEmpty(),
    check("cultivoAnterior", "El cultivo anterior es obligatorio").not().isEmpty(),
    check("cultivoActual", "El cultivo actual es obligatorio").not().isEmpty(),
    check("detalles", "Los detalles son obligatorios").not().isEmpty(),
    check("area", "El área es obligatoria").not().isEmpty(),
    check("asistenteTecnico", "El asistente técnico es obligatorio").not().isEmpty(),
    check("id_finca", "El id de la finca es obligatorio").not().isEmpty(),
    check("id_finca", "No es un id válido").isMongoId(),
    check("id_finca").custom(parcelasHelper.validarIdFinca),
    check("fecha_Creacion", "La fecha de creación es obligatoria").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    validarCampos
], httpParcelas.postParcelas);

router.put("/:id",[
    // validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(parcelasHelper.validarId),
    check("numero", "El número es obligatorio").not().isEmpty(),
    check("ubicacionGeografica", "La ubicación geográfica es obligatoria").not().isEmpty(),
    check("cultivoAnterior", "El cultivo anterior es obligatorio").not().isEmpty(),
    check("cultivoActual", "El cultivo actual es obligatorio").not().isEmpty(),
    check("detalles", "Los detalles son obligatorios").not().isEmpty(),
    check("area", "El área es obligatoria").not().isEmpty(),
    check("asistenteTecnico", "El asistente técnico es obligatorio").not().isEmpty(),
    check("id_finca", "El id de la finca es obligatorio").not().isEmpty(),
    check("id_finca", "No es un id válido").isMongoId(),
    check("id_finca").custom(parcelasHelper.validarIdFinca),
    check("fecha_Creacion", "La fecha de creación es obligatoria").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    validarCampos
], httpParcelas.putParcelas);

router.put("/activar/:id",[
    // validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(parcelasHelper.validarId),
    validarCampos
], httpParcelas.putParcelasActivar);

router.put("/desactivar/:id",[
    // validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(parcelasHelper.validarId),
    validarCampos
], httpParcelas.putParcelasDesactivar);

export default router;
