import proveedores from "../models/proveedores.js";

const proveedoresHelper = {
    validarId: async (id) => {
        const existe = await proveedores.findById(id);
        if (!existe) {
            throw new Error(`El id no existe ${id}`);
        }
    }
}

export default proveedoresHelper;