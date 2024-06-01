import Compradores from "../models/compradores.js"

const httpCompradores = {

    getCompradores: async (req,res) => {
        const compradores = await Compradores.find()
        res.json ({compradores})
    },

    getCompradoresID: async (req, res) => {
        const { id } = req.params
        const compradores = await Compradores.findById(id)
        res.json({compradores})
    },

    postCompradores: async (req, res) => {
        const body = req.body;
        try {
            const compradores = await Compradores.create(body);
            res.json({ compradores });
        } catch (error) {
            res.status(400).json({ error: "No se pudo crear el registro" })
        }
    },

    putCompradores: async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const compradores = await Compradores.findByIdAndUpdate(_id, body, {new: true});
            res.json(compradores);
        }
        catch (error) {
            res.status(400).json({ error: "No se pudo modificar el registro" })
        }
    },

}
export default httpCompradores 



