import Factura from '../models/facturas.js';
import Compradores from '../models/compradores.js';
import Productos from '../models/productos.js';

const facturasHelper = {
    validarId: async (id) => {
        const factura = await Factura.findById(id);
        if (!factura) {
            throw new Error(`El id ${id} no existe`);
        }
    },
    validarIdProducto: async (id_producto) => {
        const producto = await Productos.findById(id_producto);
        if (!producto) {
            throw new Error(`El id de producto ${id_producto} no existe`);
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
