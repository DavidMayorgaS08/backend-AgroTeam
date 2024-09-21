import Empleados from "../models/empleados.js";
import Fincas from "../models/fincas.js";

const empleadosHelper = {
    validarId: async (id) => {
        const existeEmpleado = await Empleados.findById(id);
        if (!existeEmpleado) {
            throw new Error('El id del empleado no existe');
        }
    },
    validarIdFinca: async (id) => {
        const existeFinca = await Fincas.findById(id);
        if (!existeFinca) {
            throw new Error('El id de la finca no existe');
        }
    },
};

export default empleadosHelper;