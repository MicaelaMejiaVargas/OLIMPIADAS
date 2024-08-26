const producto = require('../model/product_model');
// const producto = require("../model/modelos");

const showProducts=async (req,res)=>{
    try {
        const product = await producto.findAll();
        return res.json(product);
    } catch (error) {
        return res.json({err: error})
    }
}

const createProduct=async(req,res)=>{
    try {
        const {id_producto,precio,stock,descripcion}=req.body;
        const nuevoProducto= await producto.create({ 
            id_producto,precio,stock,descripcion
        });
        nuevoProducto.save();
        return res.status(200).json({
            message: "producto creado!",
            data: nuevoProducto
        })
        
    } catch (error) {
        return res.json({err: error})
        // return res.status(500).json({error: "Internal Server Error"})
    }
}

const updateProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const {id_producto,precio,stock,descripcion} = req.body;

      const buscarProducto = await producto.findOne({ where: { id_producto: id } });
  
      if(!buscarProducto){
        return res.status(400).json({
          message: "Producto no encontrado."
        });
      }
  
      const actProducto = await buscarProducto.update({id_producto,precio,stock,descripcion});
      
      return res.status(200).json({
        message: "Producto actualizado!",
        data: actProducto
      })
    } catch (error) {
      return res.status(500).json({error: "Internal Server Error"})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id= req.params.id
        const buscarProducto = await producto.findOne({where: {id_producto: id}});

        if(!buscarProducto){
            return res.status(404).json({ message: "Producto no encontrado."});
        }

        const borrarProducto = await buscarProducto.destroy();
        return res.status(200).json({
            message: "Producto Borrado con exito!",
            data: borrarProducto
        })
    } catch (error) {
        return res.status(500).json({error: "Internal Server Error"})
    }
}
const showOneProduct = async (req, res) => {
    try {
      const { id } = req.params
      const product = await producto.findByPk(id)
    
      return res.status(200).json(product) 
    } catch (error) {
      return res.status(500).json({error: "Internal Server Error"})
    }
  }
module.exports={
    showProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    showOneProduct
}