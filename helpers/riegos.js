import riegos from "../models/riegos.js";
import cultivos from "../models/cultivos.js";
import empleados from "../models/empleados.js";

const riegosHelper = {
    validarId: async (id) => {
        const riego = await riegos.findById(id);
        if (!riego) {
            throw new Error("El id del riego no existe");
        }
    },
    validarIdCultivo: async (id) => {
        const cultivo = await cultivos.findById(id);
        if (!cultivo) {
            throw new Error("El id del cultivo no existe");
        }
    },
    validarIdEmpleado: async (id) => {
        const empleado = await empleados.findById(id);
        if (!empleado) {
            throw new Error("El id del empleado no existe");
        }
    }
};

export default riegosHelper;