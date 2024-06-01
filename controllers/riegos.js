import Riegos from '../models/riegos.js';

const httpRiegos = {
    // crear un riego
    async postRiegos(req, res) {
        const body = req.body;
        try {
            const riego = await Riegos.create(body);
            res.json({ riego });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar un riego
    async putRiegos(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const riego = await Riegos.findByIdAndUpdate(_id, body, {new: true});
            res.json(riego);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los riegos
    async getRiegos(req, res) {
        try {
            const riego = await Riegos.find();
            res.json({ riego });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar un riego por id
    async getRiegosID(req, res) {
        const _id = req.params.id;
        const riego = await Riegos.findById(_id);
        res.json(riego);
    },
};

export default httpRiegos