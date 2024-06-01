import Siembras from '../models/siembras.js';

const httpSiembras = {
    // crear una siembra
    async postSiembras(req, res) {
        const body = req.body;
        try {
            const siembra = await Siembras.create(body);
            res.json({ siembra });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una siembra
    async putSiembras(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const siembra = await Siembras.findByIdAndUpdate(_id, body, {new: true});
            res.json(siembra);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las siembras
    async getSiembras(req, res) {
        try {
            const siembra = await Siembras.find();
            res.json({ siembra });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una siembra por id
    async getSiembrasID(req, res) {
        const _id = req.params.id;
        const siembra = await Siembras.findById(_id);
        res.json(siembra);
    }
};

export default httpSiembras