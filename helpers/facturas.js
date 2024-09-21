import Factura from '../models/facturas.js';
import Compradores from '../models/compradores.js';
import Insumos from '../models/insumos.js';

const facturasHelper = {
    validarId: async (id) => {
        const factura = await Factura.findById(id);
        if (!factura) {
            throw new Error(`El id ${id} no existe`);
        }
    },
    validarIdInsumo: async (id_insumo) => {
        const insumo = await Insumos.findById(id_insumo);
        if (!insumo) {
            throw new Error(`El id de insumo ${id_insumo} no existe`);
        }
    },
    validarIdComprador: async (id_comprador) => {
        const comprador = await Compradores.findById(id_comprador);
        if (!comprador) {
            throw new Error(`El id de comprador ${id_comprador} no existe`);
        }
    },
    validarEstado: (estado) => {
        const estadosPermitidos = [0, 1];
        if (!estadosPermitidos.includes(estado)) {
            throw new Error(`El estado ${estado} no es válido`);
        }
    }
};

export default facturasHelper;
