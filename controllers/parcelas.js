import Parcelas from '../models/parcelas.js';

const httpParcelas = {
    // crear una parcela
    async postParcelas(req, res) {
        const body = req.body;
        try {
            const parcela = await Parcelas.create(body);
            res.json({ parcela });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una parcela
    async putParcelas(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const parcela = await Parcelas.findByIdAndUpdate(_id, body, {new: true});
            res.json(parcela);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las parcelas
    async getParcelas(req, res) {
        try {
            const parcela = await Parcelas.find();
            res.json({ parcela });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una parcela por id
    async getParcelasID(req, res) {
        const _id = req.params.id;
        const parcela = await Parcelas.findById(_id);
        res.json(parcela);
    }

    putParcelasActivar: async (req, res) => {
        const _id = req.params
        try {
            const parcelas = await Parcelas.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ parcelas }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putParcelasDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const parcelas = await Parcelas.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ parcelas }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },
            // listar Parcelas activas
     async getParcelasActivas(req, res) {
        try {
            const parcelas = await Parcelas.find({ estado: 1 });
            res.json({ parcelas });
        } catch (error) {
              res.status(500).json({ error: error.message });
          }
       },

     // listar Parcelas inactivas
    async getParcelasInactivas(req, res) {
      try {
            const parcelas = await Parcelas.find({ estado: 0 });
             res.json({ parcelas });
         } catch (error) {
              res.status(500).json({ error: error.message });
          }
      },
};

export default httpParcelas