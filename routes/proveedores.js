import { Router } from "express";
import httpProveedores from "../controllers/proveedores.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import proveedoresHelper from "../helpers/proveedores.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpProveedores.getProveedores);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(proveedoresHelper.validarId),
    validarCampos
], httpProveedores.getProveedoresID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpProveedores.getProveedoresActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpProveedores.getProveedoresInactivos);

router.post("/",[
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("direccion", "La dirección es obligatoria").not().isEmpty(),
    check("telefono", "El teléfono es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpProveedores.postProveedores);

router.put ("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(proveedoresHelper.validarId),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("direccion", "La dirección es obligatoria").not().isEmpty(),
    check("telefono", "El teléfono es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpProveedores.putProveedores);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(proveedoresHelper.validarId),
    validarCampos
], httpProveedores.putProveedoresActivar);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(proveedoresHelper.validarId),
    validarCampos
], httpProveedores.putProveedoresDesactivar);

export default router;