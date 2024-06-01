import Factura from '../models/facturas.js';

const httpFacturas = {
    // crear una factura
    async postFacturas(req, res) {
        const body = req.body;
        try {
            const factura = await Factura.create(body);
            res.json({ factura });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una factura
    async putFacturas(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const factura = await Factura.findByIdAndUpdate(_id, body, {new: true});
            res.json(factura);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las facturas
    async getFacturas(req, res) {
        try {
            const factura = await Factura.find();
            res.json({ factura });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una factura por id
    async getFacturasID(req, res) {
        const _id = req.params.id;
        const factura = await Factura.findById(_id);
        res.json(factura);
    }
};

export default httpFacturas