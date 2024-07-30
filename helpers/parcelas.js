import parcelas from "../models/parcelas.js";
import Fincas from "../models/fincas.js";

const parcelasHelper = {
    validarId: async (id) => {
        const parcela = await parcelas.findById(id);
        if (!parcela) {
            throw new Error(`El id ${id} no existe`);
        }
    },
    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error(`El id ${id} no existe`);
        }
    }
}

export default parcelasHelper;