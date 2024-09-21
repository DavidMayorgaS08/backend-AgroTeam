import { Router } from 'express';
import httpGastos from '../controllers/gastos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import gastosHelper from '../helpers/gastos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], httpGastos.getGastos);

router.get('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(gastosHelper.validarId),
    validarCampos
], httpGastos.getGastosID);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(gastosHelper.validarId),
    validarCampos
], httpGastos.putGastosActivar);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(gastosHelper.validarId),
    validarCampos
], httpGastos.putGastosDesactivar);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(gastosHelper.validarId),
    check('id_finca', 'El id de finca es obligatorio').not().isEmpty(),
    check('id_finca').custom(gastosHelper.validarIdFinca),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('NroFactura', 'El número de factura es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('total', 'El total debe ser un número válido').isNumeric(),
    check('iinsumos.*.id_proveedor', 'El id de proveedor de insumos es obligatorio').not().isEmpty(),
    check('iinsumos.*.id_proveedor').custom(gastosHelper.validarIdProveedor),
    check('iinsumos.*.id_insumo', 'El id de insumo es obligatorio').not().isEmpty(),
    check('iinsumos.*.id_insumo').custom(gastosHelper.validarIdInsumo),
    check('iinsumos.*.unidad', 'La unidad de insumos es obligatoria').not().isEmpty(),
    check('iinsumos.*.cantidad', 'La cantidad de insumos debe ser un número válido').isNumeric(),
    check('iinsumos.*.total', 'El total de insumos debe ser un número válido').isNumeric(),
    check('semillas.*.id_proveedor', 'El id de proveedor de semillas es obligatorio').not().isEmpty(),
    check('semillas.*.id_proveedor').custom(gastosHelper.validarIdProveedor),
    check('semillas.*.id_semilla', 'El id de semilla es obligatorio').not().isEmpty(),
    check('semillas.*.id_semilla').custom(gastosHelper.validarIdSemilla),
    check('semillas.*.unidadTotal', 'La unidad total de semillas es obligatoria').not().isEmpty(),
    check('semillas.*.cantidad', 'La cantidad de semillas debe ser un número válido').isNumeric(),
    check('semillas.*.total', 'El total de semillas debe ser un número válido').isNumeric(),
    check('estado', 'El estado debe ser un número válido').isNumeric(),
    validarCampos
], httpGastos.putGastos);

router.post('/', [
    validarJWT,
    check('id_finca', 'El id de finca es obligatorio').not().isEmpty(),
    check('id_finca').custom(gastosHelper.validarIdFinca),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('NroFactura', 'El número de factura es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('total', 'El total debe ser un número válido').isNumeric(),
    check('iinsumos.*.id_proveedor', 'El id de proveedor de insumos es obligatorio').not().isEmpty(),
    check('iinsumos.*.id_proveedor').custom(gastosHelper.validarIdProveedor),
    check('iinsumos.*.id_insumo', 'El id de insumo es obligatorio').not().isEmpty(),
    check('iinsumos.*.id_insumo').custom(gastosHelper.validarIdInsumo),
    check('iinsumos.*.unidad', 'La unidad de insumos es obligatoria').not().isEmpty(),
    check('iinsumos.*.cantidad', 'La cantidad de insumos debe ser un número válido').isNumeric(),
    check('iinsumos.*.total', 'El total de insumos debe ser un número válido').isNumeric(),
    check('semillas.*.id_proveedor', 'El id de proveedor de semillas es obligatorio').not().isEmpty(),
    check('semillas.*.id_proveedor').custom(gastosHelper.validarIdProveedor),
    check('semillas.*.id_semilla', 'El id de semilla es obligatorio').not().isEmpty(),
    check('semillas.*.id_semilla').custom(gastosHelper.validarIdSemilla),
    check('semillas.*.unidadTotal', 'La unidad total de semillas es obligatoria').not().isEmpty(),
    check('semillas.*.cantidad', 'La cantidad de semillas debe ser un número válido').isNumeric(),
    check('semillas.*.total', 'El total de semillas debe ser un número válido').isNumeric(),
    check('estado', 'El estado debe ser un número válido').isNumeric(),
    validarCampos
], httpGastos.postGastos);

router.get('/listar/activos', [
    validarJWT,
    validarCampos
], httpGastos.getGastosActivos);

router.get('/listar/inactivos', [
    validarJWT,
    validarCampos
], httpGastos.getGastosInactivos);

router.get('/fechas/:fecha1/:fecha2', [
    validarJWT,
    check('fecha1', 'La primera fecha es obligatoria').not().isEmpty(),
    check('fecha2', 'La segunda fecha es obligatoria').not().isEmpty(),
    validarCampos
], httpGastos.getGastosFecha);

router.get('/total', [
    validarJWT,
    validarCampos
], httpGastos.getGastosTotal);

export default router;