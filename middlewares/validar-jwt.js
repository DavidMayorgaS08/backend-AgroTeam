import bcryptjs from "bcryptjs"; 
import jwt from "jsonwebtoken"; 
import Administradores from "../models/administradores.js";

// const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid};
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: "100y"
        }, (err, token) => {
            if (err) {

                reject("No se pudo generar el token")
            } else {
                resolve(token)
            }
        })
    })
}

const validarJWT = async (req, res, next) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la peticion"
        })
    }
    
    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        let Administrador = await Administradores.findById(uid);

        if (!Administrador) {
            return res.status(401).json({
                msg: "Token no válido!"//- usuario no existe DB
            })
        }

        if (Administrador.estado == 0) {
            return res.status(401).json({
                msg: "Token no válido!!" //- usuario con estado: false
            })
        }

        req.Administradorbdtoken = Administrador
        next();
    } catch (error) {
        res.status(401).json({
            msg: "Token no valido",
            msg: error
        })
    }
}

export { generarJWT, validarJWT }