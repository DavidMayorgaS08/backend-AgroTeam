import siembras from "../models/siembras.js";
import cultivos from "../models/cultivos.js";
import empleados from "../models/empleados.js";
import inventario from "../models/inventarios.js";

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
    validarIdInventario: async (id) => {
        const inventarios = await inventario.findById(id);
        if (!inventarios) {
            throw new Error('El id_inventario no existe');
        }
    }
}

export default siembrasHelper;