import mongoose from 'mongoose';

const InsumosSchema = new mongoose.Schema({
    id_finca: {type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true},
    nombre: {type: String, required: true},
    registroICA: {type: String, required: true},
    registroInvima: {type: String, required: true},
    relacionNPK: {type: String, required: true},
    cantidad: {type: Number, required: true},
    unidad: {type: String, required: true}, //kg, litros
    observaciones: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Insumos', InsumosSchema);