import Proveedores from "../models/proveedores.js"

const httpProveedores = {

    getProveedores: async(req, res) => {
        const proveedor = await Proveedores.find()
        res.json({gasto})
    },


    getProveedoresID: async(req, res) => {
        const {id} = req.params 
        const proveedor = await Proveedores.findById(id)
        res.jos({proveedor})
    },

    postProveedores: async(req, res) => {
        const body = req.body;
        try {
            const proveedor = await Proveedores.create(body)
            res.json({proveedor})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putProveedores: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const proveedor = await Proveedores.findByIdAndUpdate(_id, body, {new: true});
            res.json();
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },

}

export default httpProveedores