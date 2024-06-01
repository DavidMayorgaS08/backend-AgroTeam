import Administradores from '/../model/administradores.js';

const httpadministradores = {

    async postadministradores (req,res) {
        const body = req.body;
        try {
            const administradores = await Administradores.create (body);
            res.json({administradores});
        }
        catch (error){
            res.status(500).json({error: error.massage});
        }
    },

    async putadministradores (req, res){
        const _id = req.params.id;
        const body = req.body;
        try{
            const administradores = await Administradores.findByAndUpdate(_id, body, {new: true});
            res.json(administradores);
        }
        catch (error) {
            res.status(500).json({error: error.massage});
        }
    },

    async getadministradores (req,res){
        try {
            const administradores = await Administradores.find();
            res.json({administradores});
        } catch(error) {
            res.status(500).json({error: error.massage});
        }
    },

    async getadministradoresID (req,res){
        const _id = req.params.id;
        const administradores = await Administradores.findById(_id);
        res.json(administradores);
    },
}

export default httpadministradores