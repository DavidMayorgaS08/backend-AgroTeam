import Nominas from '../models/nominas.js';

const httpNominas = {
    // crear una nomina
    async postNominas(req, res) {
        const body = req.body;
        try {
            const nomina = await Nominas.create(body);
            res.json({ nomina });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una nomina
    async putNominas(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const nomina = await Nominas.findByIdAndUpdate(_id, body, {new: true});
            res.json(nomina);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las nominas
    async getNominas(req, res) {
        try {
            const nomina = await Nominas.find();
            res.json({ nomina });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una nomina por id
    async getNominasID(req, res) {
        const _id = req.params.id;
        const nomina = await Nominas.findById(_id);
        res.json(nomina);
    },

    putNominasActivar: async (req, res) => {
        const _id = req.params
        try {
            const nomina = await Nominas.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ nomina }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putNominasDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const nomina = await Nominas.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ nomina }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

    getNominasActivos: async (req, res)=> {
        try {
            const nomina = await Nominas.find({ estado: 1 });
            res.json({ nomina });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getNominasInactivos: async (req, res)=> {
        try {
            const nomina = await Nominas.find({ estado: 0 });
            res.json({ nomina });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

export default httpNominas