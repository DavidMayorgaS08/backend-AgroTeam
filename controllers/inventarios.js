import inventarios from '../models/inventarios.js';

const httpinventarios = {

    async postinventarios (req, res){
        const body = req.body;
        try {
            const inventarios = await inventarios.create (body);
            res.json({inventarios});
        } catch (error){
            res.status(500),json({error: error.message});
        }
    },

    async putinventarios (req, res) {
        const _id = req.params.id;
        const body =req.body;
        try {
            const inventarios = await inventarios.findByIdAndUpdate(_id, body, {new:true});
            res,json(inventarios);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },

    async getinventarios(req, res){
        try {
            const inventarios = await inventarios.find();
            res.json({inventarios});
        } catch (error){
            res,status(500).json ({error:error.message});
        }
    },

    async getinventariosID (req, res) {
        const _id = req.params.id; 
        const inventarios =await inventarios.findById(_id);
        res.json(inventarios);
    },
}

export default httpinventarios