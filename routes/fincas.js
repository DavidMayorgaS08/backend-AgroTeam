import { Router } from 'express';
import httpFincas from '../controllers/fincas.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import fincasHelper from '../helpers/fincas.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], httpFincas.getFincas);

router.get('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(fincasHelper.validarId),
    validarCampos
], httpFincas.getFincasID);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(fincasHelper.validarId),
    validarCampos
], httpFincas.activarFincas);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(fincasHelper.validarId),
    validarCampos
], httpFincas.desactivarFincas);

router.get('/listar/activos', [
    validarJWT,
    validarCampos
], httpFincas.getFincasActivas);

router.get('/listar/inactivos', [
    validarJWT,
    validarCampos],
    httpFincas.getFincasInactivas);


router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(fincasHelper.validarId),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('rut', 'El RUT es obligatorio').not().isEmpty(),
    check('direccion', 'La dirección es obligatoria').not().isEmpty(),
    check('ubicacionGeografica', 'La ubicación geográfica es obligatoria').not().isEmpty(),
    check('area', 'El área debe ser un número válido').isNumeric(),
    check('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
    check("documentos", "Los documentos son obligatorios").not().isEmpty(),
    check('departamento', 'El departamento es obligatorio').not().isEmpty(),
    check('limites.*.norte', 'El límite norte es obligatorio').not().isEmpty(),
    check('limites.*.sur', 'El límite sur es obligatorio').not().isEmpty(),
    check('limites.*.este', 'El límite este es obligatorio').not().isEmpty(),
    check('limites.*.oeste', 'El límite oeste es obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número válido').isNumeric(),
    validarCampos
], httpFincas.putFincas);

router.post('/', [
    validarJWT,
    check('id_administrador', 'El ID del administrador es obligatorio').not().isEmpty(),
    check('id_administrador').custom(fincasHelper.validarIdAdministrador),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('rut', 'El RUT es obligatorio').not().isEmpty(),
    check('direccion', 'La dirección es obligatoria').not().isEmpty(),
    check('ubicacionGeografica', 'La ubicación geográfica es obligatoria').not().isEmpty(),
    check('area', 'El área debe ser un número válido').isNumeric(),
    check('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
    check("documentos", "Los documentos son obligatorios").isEmpty(),
    check('departamento', 'El departamento es obligatorio').not().isEmpty(),
    check('limites.*.norte', 'El límite norte es obligatorio').not().isEmpty(),
    check('limites.*.sur', 'El límite sur es obligatorio').not().isEmpty(),
    check('limites.*.este', 'El límite este es obligatorio').not().isEmpty(),
    check('limites.*.oeste', 'El límite oeste es obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número válido').isNumeric(),
    validarCampos
], httpFincas.postFincas);

export default router;