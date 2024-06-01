import Cultivos from '../models/cultivos.js';

const httpCultivos = {
    // crear un cultivo
    async postCultivos(req, res) {
        const body = req.body;
        try {
            const cultivo = await Cultivos.create(body);
            res.json({ cultivo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar un cultivo
    async putCultivos(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const cultivo = await Cultivos.findByIdAndUpdate(_id, body, {new: true});
            res.json(cultivo);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los cultivos
    async getCultivos(req, res) {
        try {
            const cultivo = await Cultivos.find();
            res.json({ cultivo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar un cultivo por id
    async getCultivosID(req, res) {
        const _id = req.params.id;
        const cultivo = await Cultivos.findById(_id);
        res.json(cultivo);
    },
};

export default httpCultivos