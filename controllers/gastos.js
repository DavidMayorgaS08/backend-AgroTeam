import Gastos from "../models/gastos.js"

const httpGastos = {

    getGastos: async(req, res) => {
        const gasto = await Gastos.find()
        res.json({gasto})
    },


    getGastosID: async(req, res) => {
        const _id = req.params 
        const gasto = await Gastos.findById(_id)
        res.jos({gasto})
    },

    postGastos: async(req, res) => {
        const body = req.body;
        try {
            const gasto = await Gastos.create(body)
            res.json({gasto})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putGastos: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const gasto = await Gastos.findByIdAndUpdate(_id, body, {new: true});
            res.json(gasto);
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },

    putGastosActivar: async (req, res) => {
        const _id = req.params
        try {
            const gasto = await Gastos.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ gasto }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putGastosDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const gasto = await Gastos.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ gasto }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

    getGastosActivos: async (req, res) => {
        try {
            const gasto = await Gastos.find({estado: 1})
            res.json({gasto})
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo mostrar los registros activos" });
        }
    },

    getGastosInactivos: async (req, res) => {
        try {
            const gasto = await Gastos.find({estado: 0})
            res.json({gasto})
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo mostrar los registros inactivos" });
        }
    },
}

export default httpGastos