const promiseQuery = require('../config/db_sequelize');
const Usuarios = require('../model/user_model')
const users=async (req,res)=>{
    try {
        const Usuarios = await Usuarios.findAll()
        return res.json(Usuarios);
    } catch (error) {
        return res.json({err: error})
    }
}
module.exports={
    users
}