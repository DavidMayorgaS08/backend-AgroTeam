import Gastos from '../models/gastos.js';
import Fincas from '../models/fincas.js';
import Insumos from '../models/insumos.js';
import Semillas from '../models/semillas.js';
import Proveedores from '../models/proveedores.js';

const gastosHelper = {
    validarId: async (id) => {
        const gasto = await Gastos.findById(id);
        if (!gasto) {
            throw new Error(`El id ${id} no existe`);
        }
    },

    validarIdFinca: async (id_finca) => {
        const finca = await Fincas.findById(id_finca);
        if (!finca) {
            throw new Error(`El id de finca ${id_finca} no existe`);
        }
    },

    validarIdInsumo: async (id_insumo) => {
        const insumo = await Insumos.findById(id_insumo);
        if (!insumo) {
            throw new Error(`El id de insumo ${id_insumo} no existe`);
        }
    },

    validarIdSemilla: async (id_semilla) => {
        const semilla = await Semillas.findById(id_semilla);
        if (!semilla) {
            throw new Error(`El id de semilla ${id_semilla} no existe`);
        }
    },

    validarIdProveedor: async (id_proveedor) => {
        const proveedor = await Proveedores.findById(id_proveedor);
        if (!proveedor) {
            throw new Error(`El id de proveedor ${id_proveedor} no existe`);
        }
    }
};

export default gastosHelper;
