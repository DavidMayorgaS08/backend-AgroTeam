import Mantenimientos from '../models/mantenimientos.js';

const httpMantenimientos = {
    // crear un mantenimiento
    async postMantenimientos(req, res) {
        const body = req.body;
        try {
            const mantenimiento = await Mantenimientos.create(body);
            res.json({ mantenimiento });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar un mantenimiento
    async putMantenimientos(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const mantenimiento = await Mantenimientos.findByIdAndUpdate(_id, body, {new: true});
            res.json(mantenimiento);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los mantenimientos
    async getMantenimientos(req, res) {
        try {
            const mantenimiento = await Mantenimientos.find();
            res.json({ mantenimiento });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar un mantenimiento por id
    async getMantenimientosID(req, res) {
        const _id = req.params.id;
        const mantenimiento = await Mantenimientos.findById(_id);
        res.json(mantenimiento);
    }
};

export default httpMantenimientos