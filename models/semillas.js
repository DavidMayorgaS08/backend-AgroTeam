import mongoose from 'mongoose';

const SemillasSchema = new mongoose.Schema({
    id_finca: {type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true},
    nombre: {type: String, required: true},
    registroICA: {type: String, required: true},
    registroInvima: {type: String, required: true},
    fechaVencimiento: {type: Date, required: true},
    especieVariedad: {type: String, required: true},
    NroLote: {type: String, required: true},
    origen: {type: String, required: true},
    poderGerminativo: {type: Number, required: true},
    observaciones: {type: String, required: true},
    cantidad: {type: Number, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Semillas', SemillasSchema);