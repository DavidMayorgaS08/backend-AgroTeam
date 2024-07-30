import procesos from "../models/procesos.js";
import cultivos from "../models/cultivos.js";
import empleados from "../models/empleados.js";

const procesosHelper = {
    validarId: async (id) => {
        const proceso = await procesos.findById(id);
        if (!proceso) {
            throw new Error(`El id ${id} no existe`);
        }
    },
    validarIdCultivo: async (id) => {
        const cultivo = await cultivos.findById(id);
        if (!cultivo) {
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

export default procesosHelper;