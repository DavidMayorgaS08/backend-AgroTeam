import Fertilizaciones from "../models/fertilizaciones.js"

const httpFertilizaciones = {

    getFertilizaciones: async(req, res) => {
        const fertilizacion = await Fertilizaciones.find()
        res.json({fertilizacion})
    },


    getFertilizacionesID: async(req, res) => {
        const {id} = req.params 
        const fertilizacion = await Fertilizaciones.findById(id)
        res.jos({fertilizacion})
    },

    postFertilizaciones: async(req, res) => {
        const body = req.body;
        try {
            const fertilizacion = await Fertilizaciones.create(body)
            res.json({fertilizacion})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putFertilizaciones: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const fertilizacion = await Fertilizaciones.findByIdAndUpdate(_id, body, {new: true});
            res.json();
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },

}

export default httpFertilizaciones