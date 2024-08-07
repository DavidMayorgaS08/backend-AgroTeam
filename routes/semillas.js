import { Router } from "express";
import httpSemillas from "../controllers/semillas.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import semillasHelper from "../helpers/semillas.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    // validarJWT,
    validarCampos
], httpSemillas.getSemillas);

router.get("/:id",[
    // validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(semillasHelper.validarId),
    validarCampos
], httpSemillas.getSemillasID);

router.get("/listar/activos",[
    // validarJWT,
    validarCampos
], httpSemillas.getSemillasActivas);

router.get("/listar/inactivos",[
    // validarJWT,
    validarCampos
], httpSemillas.getSemillasInactivas);

router.get("listar/por/proveedor",[
    // validarJWT,
    validarCampos
], httpSemillas.getSemillasProveedor);

router.post("/",[
    // validarJWT,
    check("id_proveedor", "El id_proveedor es obligatorio").not().isEmpty(),
    check("id_proveedor", "No es un id válido").isMongoId(),
    check("id_proveedor").custom(semillasHelper.validarIdProveedor),
    check("NumFactura", "El número de factura es obligatorio").not().isEmpty(),
    check("fechaCompra", "La fecha de compra es obligatoria").not().isEmpty(),
    check("fechaCompra", "La fecha de compra no es válida").isDate(),
    check("fechaVencimiento", "La fecha de vencimiento es obligatoria").not().isEmpty(),
    check("especieVariedad", "La fecha de la variedad es obligatoria").not().isEmpty(),
    check("proveedorSemillas", "El proveedor de las semillas es obligatorio").not().isEmpty(),
    check("NroLote", "El número de lote es obligatorio").not().isEmpty(),
    check("origen", "El origen es obligatorio").not().isEmpty(),
    check("poderGerminativo", "El poder germinativo es obligatorio").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("unidadTotal", "La unidad total es obligatoria").not().isEmpty(),
    check("total", "El total es obligatorio").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpSemillas.postSemillas);

router.put("/:id",[
    // validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(semillasHelper.validarId),
    check("id_proveedor", "El id_proveedor es obligatorio").not().isEmpty(),
    check("id_proveedor", "No es un id válido").isMongoId(),
    check("id_proveedor").custom(semillasHelper.validarIdProveedor),
    check("NumFactura", "El número de factura es obligatorio").not().isEmpty(),
    check("fechaCompra", "La fecha de compra es obligatoria").not().isEmpty(),
    check("fechaCompra", "La fecha de compra no es válida").isDate(),
    check("fechaVencimiento", "La fecha de vencimiento es obligatoria").not().isEmpty(),
    check("especieVariedad", "La fecha de la variedad es obligatoria").not().isEmpty(),
    check("proveedorSemillas", "El proveedor de las semillas es obligatorio").not().isEmpty(),
    check("NroLote", "El número de lote es obligatorio").not().isEmpty(),
    check("origen", "El origen es obligatorio").not().isEmpty(),
    check("poderGerminativo", "El poder germinativo es obligatorio").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("unidadTotal", "La unidad total es obligatoria").not().isEmpty(),
    check("total", "El total es obligatorio").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpSemillas.putSemillas);

router.put("/activar/:id",[
    // validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(semillasHelper.validarId),
    validarCampos
], httpSemillas.putSemillasActivar);

router.put("/desactivar/:id",[
    // validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(semillasHelper.validarId),
    validarCampos
], httpSemillas.putSemillasDesactivar);

export default router;
