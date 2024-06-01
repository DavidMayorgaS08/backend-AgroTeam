import PreparacionSuelos from "../models/preparacion suelos.js"

const httpPreparacionSuelos = {

    getPreparacionSuelos: async (req,res) => {
        const preparacionSuelos = await PreparacionSuelos.find()
        res.json ({preparacionSuelos})
    },

    getPreparacionSuelosID: async (req, res) => {
        const { id } = req.params
        const preparacionSuelos = await PreparacionSuelos.findById(id)
        res.json({preparacionSuelos})
    },

    postPreparacionSuelos: async (req, res) => {
        const body = req.body;
        try {
            const preparacionSuelos = await PreparacionSuelos.create(body);
            res.json({ preparacionSuelos });
        } catch (error) {
            res.status(400).json({ error: "No se pudo crear el registro" })
        }
    },

    putPreparacionSuelos: async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const preparacionSuelos = await PreparacionSuelos.findByIdAndUpdate(_id, body, {new: true});
            res.json(preparacionSuelos);
        }
        catch (error) {
            res.status(400).json({ error: "No se pudo modificar el registro" })
        }
    },

}
export default httpPreparacionSuelos