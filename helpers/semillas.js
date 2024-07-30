import semillas from "../models/semillas.js";
import proveedores from "../models/proveedores.js";

const semillasHelper = {
    validarId: async (id) => {
        const existe = await semillas.findById(id);
        if (!existe) {
            throw new Error(`El id no existe ${id}`);
        }
    },
    validarIdProveedor: async (id) => {
        const proveedor = await proveedores.findById(id);
        if (!proveedor) {
            throw new Error("El id del proveedor no existe");
        }
    }
}

export default semillasHelper;