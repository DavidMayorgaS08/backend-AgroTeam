import Procesos from "../models/procesos.js"

const httpProcesos = {

    getGastos: async(req, res) => {
        const proceso = await Procesos.find()
        res.json({proceso})
    },


    getProcesosID: async(req, res) => {
        const {id} = req.params 
        const proceso = await Procesos.findById(id)
        res.jos({proceso})
    },

    postProcesos: async(req, res) => {
        const body = req.body;
        try {
            const proceso = await Procesos.create(body)
            res.json({proceso})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putProcesos: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const proceso = await Procesos.findByIdAndUpdate(_id, body, {new: true});
            res.json();
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },

}

export default httpProcesos