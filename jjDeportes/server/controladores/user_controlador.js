const usuario = require('../model/user_model');

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
        const {username,correo,passw,accType}=req.body;
        const nuevoUsuario= await usuario.create({ 
            username,correo,passw,accType
        });
        nuevoUsuario.save();
        return res.status(200).json({
            message: "usuario creado!",
            data: nuevoUsuario
        })
        
    } catch (error) {
        return res.json({err: error})
        // return res.status(500).json({error: "Internal Server Error"})
    }
}

const updateUser = async (req, res) => {
    try {
      const pasarCorreo = req.params.correo;
      const {username, correo, passw, accType} = req.body;
  
      if (!username || username.length < 3 || username.length >50) { 
        return res.status(401).json({error: "User inválido"})
      }
      if (!correo || correo.length < 3) {
        return res.status(401).json({error: "Nombre inválido"})
      }
      if (!apellido || apellido.length < 3) {
        return res.status(401).json({error: "Apellido inválido"})
      }
      if (isNaN(telefono)) {
        return res.status(401).json({error: "Número de Telefono inválido"})
      }
      
      const buscarUsuario = await usuario.findOne({ where: { correo: pasarCorreo } });
  
      if(!buscarUsuario){
        return res.status(400).json({
          message: "Usuario no encontrado."
        });
      }
  
      const actUser = await buscarUsuario.update({username, passw, accType});
      
      return res.status(200).json({
        message: "Usuario actualizado!",
        data: actUser
      })
    } catch (error) {
      return res.status(500).json({error: "Internal Server Error"})
    }
}

const deleteUser = async (req, res) => {
    try {
        const correo= req.params.correo
        const buscarUser = await user.findOne({where: {correo}});

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
      const { correo } = req.params
      const user = await user.findByPk(correo)
    
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