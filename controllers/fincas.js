import Fincas from '../models/fincas.js';

const httpFincas = {
    // crear una finca
    async postFincas(req, res) {
        const body = req.body;
        try {
            const finca = await Fincas.create(body);
            res.json({ finca });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una finca
    async putFincas(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const finca = await Fincas.findByIdAndUpdate(_id, body, {new: true});
            res.json(finca);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las fincas
    async getFincas(req, res) {
        try {
            const finca = await Fincas.find();
            res.json({ finca });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una finca por id
    async getFincasID(req, res) {
        const _id = req.params.id;
        const finca = await Fincas.findById(_id);
        res.json(finca);
    }
};

export default httpFincas