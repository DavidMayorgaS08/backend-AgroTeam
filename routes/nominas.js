import { Router } from 'express';
import httpNominas from '../controllers/nominas.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';
import nominasHelper from '../helpers/nominas.js';

const router = Router();

router.post('/', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('id_empleado', 'El ID del empleado es obligatorio').isMongoId(),
    check('id_empleado').custom(nominasHelper.validarIdEmpleado),
    check('tipo', 'El tipo es obligatorio').not().isEmpty(),
    check('valor', 'El valor debe ser un número').isNumeric(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpNominas.postNominas);

router.put('/:id', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(nominasHelper.validarId),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('id_empleado', 'El ID del empleado es obligatorio').isMongoId(),
    check('tipo', 'El tipo es obligatorio').not().isEmpty(),
    check('valor', 'El valor debe ser un número').isNumeric(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpNominas.putNominas);

router.get('/', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    validarCampos
], httpNominas.getNominas);

router.get('/:id', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(nominasHelper.validarId),
    validarCampos
], httpNominas.getNominasID);

router.put('/activar/:id', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(nominasHelper.validarId),
    validarCampos
], httpNominas.putNominasActivar);

router.put('/desactivar/:id', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(nominasHelper.validarId),
    validarCampos
], httpNominas.putNominasDesactivar);

router.get('/listar/activas', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    validarCampos
], httpNominas.getNominasActivos);

router.get('/listar/inactivas', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    validarCampos
], httpNominas.getNominasInactivos);

router.get('/fechas/:fecha1/:fecha2', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    check('fechaInicio', 'La fecha de inicio es obligatoria').isDate(),
    check('fechaFin', 'La fecha de fin es obligatoria').isDate(),
    validarCampos
], httpNominas.getNominasEntreFechas);

router.get('/empleado/:id', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(nominasHelper.validarIdEmpleado),
    validarCampos
], httpNominas.getNominaPorEmpleado);

router.get('/total/nominas', [
    // validarJWT, // Comentario añadido para desactivar validarJWT
    validarCampos
], httpNominas.getTotalNominas);

export default router;
