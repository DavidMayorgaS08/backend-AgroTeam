import Insumos from "../models/insumos.js"

const httpInsumos = {

    getInsumos: async (req,res) => {
        const insumos = await Insumos.find()
        res.json ({insumos})
    },

    getInsumosID: async (req, res) => {
        const { id } = req.params
        const insumos = await Insumos.findById(id)
        res.json({insumos})
    },

    postInsumos: async (req, res) => {
        const body = req.body;
        try {
            const insumos = await Insumos.create(body);
            res.json({ insumos });
        } catch (error) {
            res.status(400).json({ error: "No se pudo crear el registro" })
        }
    },

    putInsumos: async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const insumos = await Insumos.findByIdAndUpdate(_id, body, {new: true});
            res.json(insumos);
        }
        catch (error) {
            res.status(400).json({ error: "No se pudo modificar el registro" })
        }
    },

}
export default httpInsumos