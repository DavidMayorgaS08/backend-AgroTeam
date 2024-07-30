import PreparacionSuelos from '../models/preparacion suelos.js';
import parcelas from '../models/parcelas.js';
import empleados from '../models/empleados.js';

const preparacionSuelosHelper = {
    validarId: async (id) => {
        const preparacionSuelos = await PreparacionSuelos.findById(id);
        if (!preparacionSuelos) {
            throw new Error(`El id ${id} no existe`);
        }
    },
    validarIdParcela: async (id) => {
        const parcela = await parcelas.findById(id);
        if (!parcela) {
            throw new Error(`El id ${id} no existe`);
        }
    },
    validarIdEmpleado: async (id) => {
        const empleado = await empleados.findById(id);
        if (!empleado) {
            throw new Error(`El id ${id} no existe`);
        }
    }
}

export default preparacionSuelosHelper;