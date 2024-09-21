import MaquinariaHerramientas from '../models/maquinaria&herramientas.js';
import Proveedores from '../models/proveedores.js';
import insumos from '../models/insumos.js';
import Empleados from '../models/empleados.js';

const maquinariaHerramientasHelper = {
    validarId: async (id) => {
        const existeMaquinariaHerramientas = await MaquinariaHerramientas.findById(id);
        if (!existeMaquinariaHerramientas) {
            throw new Error('El id de la maquinaria o herramienta no existe');
        }
    },
    validarIdProveedor: async (id) => {
        const existeProveedor = await Proveedores.findById(id);
        if (!existeProveedor) {
            throw new Error('El id del proveedor no existe');
        }
    },
    validarIdInsumo: async (id) => {
        const existeInsumo = await insumos.findById(id);
        if (!existeInsumo) {
            throw new Error('El id del insumo no existe');
        }
    },
    validarIdEmpleado: async (id) => {
        const existeEmpleado = await Empleados.findById(id);
        if (!existeEmpleado) {
            throw new Error('El id del empleado no existe');
        }
    },
};

export default maquinariaHerramientasHelper;