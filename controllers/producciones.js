import Produccion from '../models/producciones.js';

const httpProducciones = {
    // crear una produccion
    async postProducciones(req, res) {
        const body = req.body;
        try {
            const produccion = await Produccion.create(body);
            res.json({ produccion });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una produccion
    async putProducciones(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const produccion = await Produccion.findByIdAndUpdate(_id, body, {new: true});
            res.json(produccion);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las producciones
    async getProducciones(req, res) {
        try {
            const produccion = await Produccion.find();
            res.json({ produccion });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una produccion por id
    async getProduccionesID(req, res) {
        const _id = req.params.id;
        const produccion = await Produccion.findById(_id);
        res.json(produccion);
    }
};

export default httpProducciones