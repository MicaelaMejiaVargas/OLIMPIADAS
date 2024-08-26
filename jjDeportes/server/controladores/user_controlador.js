const usuario = require('../model/user_model');
// const usuario = require("../model/modelos")

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
        let {username,correo,passw,accType}=req.body;

        accType = accType === 'true';

        const nuevoUsuario= await usuario.create({ 
            username,correo,passw,accType
        });
        nuevoUsuario.save();
        return res.status(200).json({
            message: "usuario creado!",
            data: nuevoUsuario,
            accType: nuevoUsuario.accType
        })
        
    } catch (error) {
        // return res.json({err: error})
        console.log(error);
        // return res.status(500).json({error: "Internal Server Error"})
    }
}

const updateUser = async (req, res) => {
    try {
      let pasarUser = req.params.username;
      let {username, correo, passw, accType} = req.body;

      accType = accType === 'true';
  
      if (!username || username.length < 3 || username.length >50) { 
        return res.status(401).json({error: "Nombre de usuario inválido"})
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correo || !emailRegex.test(correo)) {
        return res.status(401).json({error: "Correo electrónico inválido"});
      }

      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
      if (!passw || !passwordRegex.test(passw)) {
        return res.status(401).json({error: "Contraseña inválida. Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial."});
      }

      const validarTipoCuenta = [true,false];
      if (!accType || !validarTipoCuenta.includes(accType)) {
        return res.status(401).json({error: "Tipo de cuenta inválido"});
      }

      const buscarUsuario = await usuario.findOne({ where: { username: pasarUser } });
  
      if(!buscarUsuario){
        return res.status(400).json({
          message: "Usuario no encontrado."
        });
      }
  
      const actUser = await buscarUsuario.update({username, passw, accType});
      
      return res.status(200).json({
        message: "Usuario actualizado!",
        data: actUser,
        accType: actUser.accType
      })
    } catch (error) {
      return res.status(500).json({error: "Internal Server Error"})
    }
}

const deleteUser = async (req, res) => {
    try {
        const username= req.params.username
        const buscarUser = await usuario.findOne({where: {username}});

        if(!buscarUser){
        return res.status(404).json({ message: "User no encontrado."});
        }

        const borrarUser = await buscarUser.destroy();
        return res.status(200).json({
            message: "Usuario Borrado con exito!",
            data: borrarUser
        })
    } catch (error) {
        return res.status(500).json({error: "Internal Server Error"})
    }
}
const showOneUser = async (req, res) => {
    try {
      const { username } = req.params
      const user = await usuario.findByPk(username)
      // if(!user){
      //   return res.status(404).json({ message: "User no encontrado."});
      // }
      return res.status(200).json(user) 
    } catch (error) {
      return res.status(500).json({error: "Internal Server Error"})
    }
  }
module.exports={
    showUsers,
    createUser,
    updateUser,
    deleteUser,
    showOneUser
}