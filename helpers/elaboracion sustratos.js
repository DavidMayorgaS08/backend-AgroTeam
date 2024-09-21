import ElaboracionSustratos from '../models/elaboracion sustratos.js';
import Cultivos from '../models/cultivos.js';
import Empleados from '../models/empleados.js'

const elaboracionSustratosHelper = {
    validarId: async (id) => {
        const existeElaboracionSustratos = await ElaboracionSustratos.findById(id);
        if (!existeElaboracionSustratos) {
            throw new Error('El id de la elaboracion de sustratos no existe');
        }
    },
    validarIdCultivo: async (id) => {
        const existeCultivo = await Cultivos.findById(id);
        if (!existeCultivo) {
            throw new Error('El id del cultivo no existe');
        }
    },
    validarIdEmpleado: async (id) => {
        const existeEmpleado = await Empleados.findById(id);
        if (!existeEmpleado) {
            throw new Error('El id del empleado no existe');
        }
    }
};

export default elaboracionSustratosHelper;