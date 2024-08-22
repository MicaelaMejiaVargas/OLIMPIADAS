// const promiseQuery = require('../config/db_sequelize');
const usuario = require('../model/user_model')
const showUsers=async (req,res)=>{
    try {
        const user = await usuario.findAll();
        return res.json(user);
    } catch (error) {
        return res.json({err: error})
    }
}

const createUser=async(req,res)=>{
    try {
        const {correo,username,passw,accType}=req.body;
        const nuevoUsuario= await usuario.create({ 
            correo,username,passw,accType
        });
        nuevoUsuario.save();
        return res.status(200).json({
            message: "usuario creado!",
            data: nuevoUsuario
        })
        // const user
    } catch (error) {
        return res.json({err: error})
    }
}

module.exports={
    showUsers,
    createUser
}