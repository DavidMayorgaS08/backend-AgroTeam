import { Router } from "express";
import httpProducciones from "../controllers/producciones.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import produccionesHelper from "../helpers/producciones.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpProducciones.getProducciones);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(produccionesHelper.validarId),
    validarCampos
], httpProducciones.getProduccionesID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpProducciones.getProduccionesActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpProducciones.getProduccionesInactivos);

router.get("/fechas/:fecha1/:fecha2",[
    validarJWT,
    validarCampos
], httpProducciones.getProduccionesFechas);

// router.get("/listar/por/cultivo/:id",[
//     validarJWT,
//     check("id", "No es un id válido").isMongoId(),
//     check("id").custom(produccionesHelper.validarIdCultivo),
//     validarCampos
// ], httpProducciones.getProduccionesCultivo);

router.post("/",[
    validarJWT,
    check("id_cultivo", "El id del cultivo es obligatorio").not().isEmpty(),
    check("fecha", "La fecha es obligatoria").not().isEmpty(),
    check("NroLote", "El NroLote es obligatorio").not().isEmpty(),
    check("especie", "La especie es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("cantidadTrabajadores", "La cantidad de trabajadores es obligatoria").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpProducciones.postProducciones);

router.put("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(produccionesHelper.validarId),
    check("id_cultivo", "El id del cultivo es obligatorio").not().isEmpty(),
    check("fecha", "La fecha es obligatoria").not().isEmpty(),
    check("NroLote", "El NroLote es obligatorio").not().isEmpty(),
    check("especie", "La especie es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("cantidadTrabajadores", "La cantidad de trabajadores es obligatoria").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpProducciones.putProducciones);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(produccionesHelper.validarId),
    validarCampos
], httpProducciones.putProduccionesActivar);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(produccionesHelper.validarId),
    validarCampos
], httpProducciones.putProduccionesDesactivar);

export default router;