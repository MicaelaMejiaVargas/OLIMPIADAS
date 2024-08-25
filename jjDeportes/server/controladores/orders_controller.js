const pedido = require('../model/orders_model.js');

const showOrders=async (req,res)=>{
    try {
        const product = await pedido.findAll();
        return res.json(product);
    } catch (error) {
        return res.json({err: error})
    }
}

const createOrder=async(req,res)=>{
    try {
        const {nombre,nombre_producto}=req.body;
        const nuevoPedido= await pedido.create({ 
          nombre,nombre_producto
        });
        nuevoPedido.save();
        return res.status(200).json({
            message: "Pedido creado!",
            data: nuevoPedido
        })
        
    } catch (error) {
        return res.json({err: error})
        // return res.status(500).json({error: "Internal Server Error"})
    }
}

const updateOrder = async (req, res) => {
    try {
      const id = req.params.id;
      const {id_producto,precio,stock} = req.body;

      const buscarPedido = await pedido.findOne({ where: { id_producto: id } });
  
      if(!buscarPedido){
        return res.status(404).json({
          message: "Pedido no encontrado."
        });
      }
  
      const actPedido = await buscarpedido.update({id_producto,precio,stock});
      
      return res.status(200).json({
        message: "Pedido actualizado!",
        data: actPedido
      })
    } catch (error) {
      return res.status(500).json({error: "Internal Server Error"})
    }
}

const deleteOrder = async (req, res) => {
    try {
        const id= req.params.id
        const buscarPedido = await pedido.findOne({where: {id_producto: id}});

        if(!buscarPedido){
            return res.status(404).json({ message: "Pedido no encontrado."});
        }

        const borrarPedido = await buscarPedido.destroy();
        return res.status(200).json({
            message: "Pedido Borrado con exito!",
            data: borrarPedido
        })
    } catch (error) {
        return res.status(500).json({error: "Internal Server Error"})
    }
}
const showOneOrder = async (req, res) => {
    try {
      const { id } = req.params
      const buscarPedido = await pedido.findByPk(id)
    
      return res.status(200).json(buscarPedido) 
    } catch (error) {
      return res.status(500).json({error: "Internal Server Error"})
    }
  }
module.exports={
    showOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    showOneOrder
}