import Gastos from "../models/gastos.js"

const httpGastos = {

    getGastos: async(req, res) => {
        const gasto = await Gastos.find()
        res.json({gasto})
    },


    getGastosID: async(req, res) => {
        const {id} = req.params 
        const gasto = await Gastos.findById(id)
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
            res.json();
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },

}

export default httpGastos