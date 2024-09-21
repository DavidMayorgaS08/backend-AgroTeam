import proveedores from "../models/proveedores.js";
import Fincas from "../models/fincas.js";

const proveedoresHelper = {
    validarId: async (id) => {
        const existe = await proveedores.findById(id);
        if (!existe) {
            throw new Error(`El id no existe ${id}`);
        }
    },
    validarIdFinca: async (id) => {
        const existe = await Fincas.findById(id);
        if (!existe) {
            throw new Error(`El id de la finca no existe ${id}`);
        }
    }
}

export default proveedoresHelper;