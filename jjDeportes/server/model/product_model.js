const { Sequelize } = require('sequelize');
const db = require('../config/db_sequelize');
const Producto = db.define('producto', {
    id_producto:{
        type:Sequelize.INTEGER,
        allowNull: false,
        // primaryKey: true
    },
    precio:{
        type:Sequelize.FLOAT,
        allowNull: false
    },
    stock:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    descripcion:{
      type:Sequelize.STRING,
      allowNull:false,
      primaryKey: true
    }
},{
    timestamps:false
})

// Producto.sync({ force: false })
//   .then(() => {
//     console.log('Modelo de Producto sincronizado correctamente');
//   })
//   .catch(err => {
//     console.error('Error al sincronizar el Modelo de Producto:', err);
//   }
// );
module.exports = Producto;