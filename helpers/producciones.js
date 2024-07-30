import produccion from "../models/producciones.js";
import cultivos from "../models/cultivos.js";

const produccionesHelper = {
    validarId: async (id) => {
        const produccionEncontrada = await produccion.findById(id);
        if (!produccionEncontrada) {
            throw new Error("El id no existe");
        }
    },
    validarIdCultivo: async (id) => {
        const cultivoEncontrado = await cultivos.findById(id);
        if (!cultivoEncontrado) {
            throw new Error("El id del cultivo no existe");
        }
    }
}

export default produccionesHelper;