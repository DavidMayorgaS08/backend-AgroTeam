import Administradores from '../models/administradores.js';
import bcryptjs from 'bcryptjs';

const httpadministradores = {

    async postadministradores (req,res) {
        const body = req.body;
        body.password = bcryptjs.hashSync(body.password, 10);
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
        if(body.password){
            body.password = bcryptjs.hashSync(body.password, 10);
        }
        try{
            const administradores = await Administradores.findByIdAndUpdate(_id, body, {new: true});
            res.json(administradores);
        }
        catch (error) {
            console.log(error);
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

    async activaradministradores(req, res) {
        const _id = req.params.id;
        try {
            const administradores = await Administradores.findByIdAndUpdate(_id,{estado:1},{new: true});
            res.json(administradores);
        } catch(error) {
            res.status(500).json({error: error.massage});
        }
    },

    async desactivaradministradores  (req, res){
        const _id = req.params.id;
        try {
            const administradores = await Administradores.findByIdAndUpdate(_id, {estado: 0}, {new: true});
            res.json(administradores);
        } catch (error){
            res.status(500).json({error:error.massage});
        }
    },

    async getadministradoresActivos(req, res){
        try {
            const administradores =await Administradores.find({estado:1});
            res.json({administradores});
        } catch (error) {
            res.status(500).json({error: error.massage});
        }
    },

    async getadministradoresInactivos(req, res){
        try {
            const administradores= await Administradores.find({estado:0});
            res.json({administradores});
        } catch (error){
            res.status(500).json({error:error.massage});
        }
    }
}

export default httpadministradores