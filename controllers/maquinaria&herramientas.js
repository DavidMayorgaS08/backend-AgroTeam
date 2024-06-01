import MaquinariaHerramientas from "../models/maquinaria&herramientas.js"

const httpMaquinariaHerramientas = {

    getMaquinariaHerramientas: async(req, res) => {
        const maquinaria_herramientas = await MaquinariaHerramientas.find()
        res.json({maquinaria_herramientas})
    },


    getMaquinariaHerramientasID: async(req, res) => {
        const {id} = req.params 
        const maquinaria_herramientas = await MaquinariaHerramientas.findById(id)
        res.jos({maquinaria_herramientas})
    },

    postMaquinariaHerramientas: async(req, res) => {
        const body = req.body;
        try {
            const maquinaria_herramientas = await MaquinariaHerramientas.create(body)
            res.json({maquinaria_herramientas})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putMaquinariaHerramientas: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const maquinaria_herramientas = await MaquinariaHerramientas.findByIdAndUpdate(_id, body, {new: true});
            res.json();
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },

}

export default httpMaquinariaHerramientas