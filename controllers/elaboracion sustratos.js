import ElaboracionSustratos from '../models/elaboracion sustratos.js';

const httpElaboracionSustratos = {
    // crear una elaboracion de sustratos
    async postElaboracionSustratos(req, res) {
        const body = req.body;
        try {
            const elaboracionSustratos = await ElaboracionSustratos.create(body);
            res.json({ elaboracionSustratos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una elaboracion de sustratos
    async putElaboracionSustratos(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const elaboracionSustratos = await ElaboracionSustratos.findByIdAndUpdate(_id, body, {new: true});
            res.json(elaboracionSustratos);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las elaboraciones de sustratos
    async getElaboracionSustratos(req, res) {
        try {
            const elaboracionSustratos = await ElaboracionSustratos.find();
            res.json({ elaboracionSustratos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una elaboracion de sustratos por id
    async getElaboracionSustratosID(req, res) {
        const _id = req.params.id;
        const elaboracionSustratos = await ElaboracionSustratos.findById(_id);
        res.json(elaboracionSustratos);
    },
};

export default httpElaboracionSustratos