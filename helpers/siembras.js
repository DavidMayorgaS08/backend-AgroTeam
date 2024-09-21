import siembras from "../models/siembras.js";
import cultivos from "../models/cultivos.js";
import empleados from "../models/empleados.js";
import semillas from "../models/semillas.js";

const siembrasHelper = {
    validarId: async (id) => {
        const siembra = await siembras.findById(id);
        if (!siembra) {
            throw new Error('El id no existe');
        }
    },
    validarIdCultivo: async (id) => {
        const cultivo = await cultivos.findById(id);
        if (!cultivo) {
            throw new Error('El id_cultivo no existe');
        }
    },
    validarIdEmpleado: async (id) => {
        const empleado = await empleados.findById(id);
        if (!empleado) {
            throw new Error('El id_empleado no existe');
        }
    },
    validarIdSemilla: async (id) => {
        const semilla = await semillas.findById(id);
        if (!semilla) {
            throw new Error('El id_semilla no existe');
        }
    }
}

export default siembrasHelper;