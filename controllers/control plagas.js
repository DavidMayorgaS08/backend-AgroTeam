import ControlPlagas from '../models/control plagas.js';

const httpControlPlagas = {
    // crear un control de plagas
    async postControlPlagas(req, res) {
        const body = req.body;
        try {
            const controlPlagas = await ControlPlagas.create(body);
            res.json({ controlPlagas });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar un control de plagas
    async putControlPlagas(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const controlPlagas = await ControlPlagas.findByIdAndUpdate(_id, body, {new: true});
            res.json(controlPlagas);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los controles de plagas
    async getControlPlagas(req, res) {
        try {
            const controlPlagas = await ControlPlagas.find();
            res.json({ controlPlagas });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar un control de plagas por id
    async getControlPlagasID(req, res) {
        const _id = req.params.id;
        const controlPlagas = await ControlPlagas.findById(_id);
        res.json(controlPlagas);
    },
};

export default httpControlPlagas