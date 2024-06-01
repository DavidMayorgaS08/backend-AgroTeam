import Climas from "../models/climas.js"

const httpClimas = {

    getClimas: async(req, res) => {
        const clima = await Climas.find()
        res.json({clima})
    },


    getClimasID: async(req, res) => {
        const {id} = req.params 
        const clima = await Climas.findById(id)
        res.jos({clima})
    },

    postClimas: async(req, res) => {
        const body = req.body;
        try {
            const clima = await Climas.create(body)
            res.json({clima})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putClimas: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const clima = await Climas.findByIdAndUpdate(_id, body, {new: true});
            res.json();
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },

}

export default httpClimas