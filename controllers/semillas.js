import Semillas from "../models/semillas.js"

const httpSemillas = {

    getSemillas: async (req,res) => {
        const semillas = await Semillas.find()
        res.json ({semillas})
    },

    getSemillasID: async (req, res) => {
        const { id } = req.params
        const semillas = await Semillas.findById(id)
        res.json({semillas})
    },

    postSemillas: async (req, res) => {
        const body = req.body;
        try {
            const semillas = await Semillas.create(body);
            res.json({ semillas });
        } catch (error) {
            res.status(400).json({ error: "No se pudo crear el registro" })
        }
    },

    putSemillas: async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const semillas = await Semillas.findByIdAndUpdate(_id, body, {new: true});
            res.json(semillas);
        }
        catch (error) {
            res.status(400).json({ error: "No se pudo modificar el registro" })
        }
    },

}
export default httpSemillas