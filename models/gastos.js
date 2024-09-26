import mongoose from 'mongoose';

const GastosSchema = new mongoose.Schema({
    id_finca: {type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true},
    nombre: {type: String, required: true},
    fecha: {type: Date, required: true},
    NroFactura: {type: String, required: true},
    descripcion: {type: String, required: true},
    total: {type: Number, required: true},
    insumos: [
        {
            id_proveedor: {type: mongoose.Schema.Types.ObjectId, ref: 'Proveedores', required: true},
            id_insumo: {type: mongoose.Schema.Types.ObjectId, ref: 'Insumos', required: true},
            unidad: {type: String, required: true},
            cantidad: {type: Number, required: true},
            total: {type: Number, required: true}
        }
    ],
    semillas: [
        {
            id_proveedor: {type: mongoose.Schema.Types.ObjectId, ref: 'Proveedores', required: true},
            id_semilla: {type: mongoose.Schema.Types.ObjectId, ref: 'Semillas', required: true},
            unidadTotal: {type: String, required: true},
            cantidad: {type: Number, required: true},
            total: {type: Number, required: true}
        }
    ],
    estado: {type: Number, required: true}
});

export default mongoose.model('Gastos', GastosSchema);