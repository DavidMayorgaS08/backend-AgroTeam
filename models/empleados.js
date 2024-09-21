import mongoose from 'mongoose';

const EmpleadosSchema = new mongoose.Schema({
    id_finca: {type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true},
    nombre: {type: String, required: true},
    correo: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: String, required: true},
    estudios: {type: String, required: true},
    descripcion: {type: String, required: true},
    fechaContratacion: {type: Date, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Empleados', EmpleadosSchema);