import Fertilizaciones from '../models/fertilizaciones.js';
import Cultivos from '../models/cultivos.js';
import Empleados from '../models/empleados.js';
import Insumos from '../models/insumos.js';

const fertilizacionesHelper = {
    validarId: async (id) => {
        const fertilizacion = await Fertilizaciones.findById(id);
        if (!fertilizacion) {
            throw new Error(`El id ${id} no existe`);
        }
    },

    validarIdCultivo: async (id_cultivo) => {
        const cultivo = await Cultivos.findById(id_cultivo);
        if (!cultivo) {
            throw new Error(`El id de cultivo ${id_cultivo} no existe`);
        }
    },

    validarIdEmpleado: async (id_empleado) => {
        const empleado = await Empleados.findById(id_empleado);
        if (!empleado) {
            throw new Error(`El id de empleado ${id_empleado} no existe`);
        }
    },

    validarIdInsumo: async (id_insumo) => {
        const insumo = await Insumos.findById(id_insumo);
        if (!insumo) {
            throw new Error(`El id de insumo ${id_insumo} no existe`);
        }
    }
}

export default fertilizacionesHelper;
