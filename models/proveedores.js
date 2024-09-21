import mongoose from 'mongoose';

const ProveedoresSchema = new mongoose.Schema({
    id_finca: {type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true},
    nombre: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: String, required: true},
    email: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Proveedores', ProveedoresSchema);