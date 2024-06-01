import AnalisisSuelo from '../models/analisis suelos.js';

const httpAnalisisSuelos = {
    // crear un analisis de suelo
    async postAnalisisSuelos(req, res) {
        const body = req.body;
        try {
            const analisisSuelo = await AnalisisSuelo.create(body);
            res.json({ analisisSuelo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar un analisis de suelo
    async putAnalisisSuelos(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const analisisSuelo = await AnalisisSuelo.findByIdAndUpdate(_id, body, {new: true});
            res.json(analisisSuelo);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los analisis de suelo
    async getAnalisisSuelos(req, res) {
        try {
            const analisisSuelo = await AnalisisSuelo.find();
            res.json({ analisisSuelo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar un analisis de suelo por id
    async getAnalisisSuelosID(req, res) {
        const _id = req.params.id;
        const analisisSuelo = await AnalisisSuelo.findById(_id);
        res.json(analisisSuelo);
    },
};

export default httpAnalisisSuelos