import semillas from "../models/semillas.js";
import Fincas from "../models/fincas.js";

const semillasHelper = {
    validarId: async (id) => {
        const existe = await semillas.findById(id);
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

export default semillasHelper;