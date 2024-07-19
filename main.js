import express from 'express';
import 'dotenv/config';
import dbConexion from './database/cnxmongoose.js';
import cors from 'cors';
import administradores from "./routes/administradores.js";
import analisis_suelos from "./routes/analisis suelos.js";
import climas from "./routes/climas.js"
import compradores from "./routes/compradores.js"
import control_plagas from "./routes/control plagas.js"
import cultivos from "./routes/cultivos.js"
import elaboracion_sustratos from "./routes/elaboracion sustratos.js"
import empleados from "./routes/empleados.js"
import facturas from "./routes/facturas.js"
import fertilizantes from "./routes/fertilizaciones.js"
import fincas from "./routes/fincas.js"
import gastos from "./routes/gastos.js"
import insumos from "./routes/insumos.js"
import inventarios from "./routes/inventarios.js"
import mantenimientos from "./routes/mantenimientos.js"
import maquinaria_herramientas from "./routes/maquinaria&herramientas.js"
import nominas from "./routes/nominas.js"
// import parcelas from "./routes/parcelas.js"
// import preparacion_suelos from "./routes/preparacion suelos.js"
// import procesos from "./routes/procesos.js"
// import producciones from "./routes/producciones.js"
// import proveedores from "./routes/proveedores.js"
// import riegos from "./routes/riegos.js"
// import semillas from "./routes/semillas.js"
// import siembras from "./routes/siembras.js"

const app = express();
app.use(express.json());
app.use("/api/administradores", administradores)
app.use("/api/analisis_suelos", analisis_suelos)
app.use("/api/climas", climas)
app.use("/api/compradores", compradores)
app.use("/api/control_plagas", control_plagas)
app.use("/api/cultivos", cultivos)
app.use("/api/elaboracion_sustratos", elaboracion_sustratos)
app.use("/api/empleados", empleados)
app.use("/api/facturas", facturas)
app.use("/api/fertilizantes", fertilizantes)
app.use("/api/fincas", fincas)
app.use("/api/gastos", gastos)
app.use("/api/insumos", insumos)
app.use("/api/inventarios", inventarios)
app.use("/api/mantenimientos", mantenimientos)
app.use("/api/maquinaria_herramientas", maquinaria_herramientas)
app.use("/api/nominas", nominas)
// app.use("/api/parcelas", parcelas)
// app.use("/api/preparacion_suelos", preparacion_suelos)
// app.use("/api/procesos", procesos)
// app.use("/api/producciones", producciones)
// app.use("/api/proveedores", proveedores)
// app.use("/api/riegos", riegos)
// app.use("/api/semillas", semillas)
// app.use("/api/siembras", siembras)






app.listen(process.env.PORT, function () {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    dbConexion();
});


