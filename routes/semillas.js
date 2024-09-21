import { Router } from "express";
import httpSemillas from "../controllers/semillas.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import semillasHelper from "../helpers/semillas.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpSemillas.getSemillas);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(semillasHelper.validarId),
    validarCampos
], httpSemillas.getSemillasID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpSemillas.getSemillasActivas);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpSemillas.getSemillasInactivas);

// router.get("listar/por/:proveedor",[
//     validarJWT,
//     validarCampos
// ], httpSemillas.getSemillasProveedor);

router.post("/",[
    validarJWT,
    check("id_finca", "El id de la finca es obligatorio").not().isEmpty(),
    check("id_finca", "No es un id válido").isMongoId(),
    check("id_finca").custom(semillasHelper.validarIdFinca),
    check("registroICA", "El registro ICA es obligatorio").not().isEmpty(),
    check("registroInvima", "El registro INVIMA es obligatorio").not().isEmpty(),
    check("fechaVencimiento", "La fecha de vencimiento es obligatoria").not().isEmpty(),
    check("especieVariedad", "La fecha de la variedad es obligatoria").not().isEmpty(),
    check("NroLote", "El número de lote es obligatorio").not().isEmpty(),
    check("origen", "El origen es obligatorio").not().isEmpty(),
    check("poderGerminativo", "El poder germinativo es obligatorio").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpSemillas.postSemillas);

router.put("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(semillasHelper.validarId),
    check("id_finca", "El id de la finca es obligatorio").not().isEmpty(),
    check("id_finca", "No es un id válido").isMongoId(),
    check("id_finca").custom(semillasHelper.validarIdFinca),
    check("registroICA", "El registro ICA es obligatorio").not().isEmpty(),
    check("registroInvima", "El registro INVIMA es obligatorio").not().isEmpty(),
    check("fechaVencimiento", "La fecha de vencimiento es obligatoria").not().isEmpty(),
    check("especieVariedad", "La fecha de la variedad es obligatoria").not().isEmpty(),
    check("NroLote", "El número de lote es obligatorio").not().isEmpty(),
    check("origen", "El origen es obligatorio").not().isEmpty(),
    check("poderGerminativo", "El poder germinativo es obligatorio").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpSemillas.putSemillas);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(semillasHelper.validarId),
    validarCampos
], httpSemillas.putSemillasActivar);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(semillasHelper.validarId),
    validarCampos
], httpSemillas.putSemillasDesactivar);

export default router;
