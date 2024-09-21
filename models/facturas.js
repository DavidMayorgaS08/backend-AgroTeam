import mongoose from 'mongoose';

const FacturaSchema = new mongoose.Schema({
    fecha: {type: Date, required: true},
    valor: {type: Number, required: true},
    detalle:[{
        id_producto: {type: mongoose.Schema.Types.ObjectId, ref: 'Productos', required: true},
        cantidad: {type: Number, required: true},
        nombreProducto: {type: String, required: true},
        subTotal: {type: Number, required: true},
        iva: {type: Number, required: true},
        total: {type: Number, required: true},
    }],
    id_comprador: {type: mongoose.Schema.Types.ObjectId, ref: 'Compradores', required: true},
    NroLoteComercial: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Factura', FacturaSchema);