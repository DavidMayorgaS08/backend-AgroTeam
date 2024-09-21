import Insumos from '../models/insumos.js';
import fincas from '../models/fincas.js';

const insumosHelper = {
    validarId: async (id) => {
        const existeInsumo = await Insumos.findById(id);
        if (!existeInsumo) {
            throw new Error('El id del insumo no existe');
        }
    },

    validarIdFinca: async (id_finca) => {
        const existeFinca = await fincas.findById(id_finca);
        if (!existeFinca) {
            throw new Error('El id de la finca no existe');
        }
    }
};

export default insumosHelper;