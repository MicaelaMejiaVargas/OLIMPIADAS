
const { Sequelize } = require('sequelize');
const db = require('../config/db_sequelize');
const Pedido = db.define('pedido', {
    id_pedido:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type:Sequelize.STRING,
        allowNull: false,
        references: 'usuarios',
        referencesKey: 'correo'
    },
    nombre_producto:{
        type:Sequelize.STRING,
        allowNull: false,
        references: 'productos',
        referencesKey: 'descripcion'
    }
},{
    timestamps:false
})

Pedido.sync({ force: false })
  .then(() => {
    console.log('Modelo de Pedidos sincronizado correctamente');
  })
  .catch(err => {
    console.error('Error al sincronizar el Modelo de Pedidos:', err);
  }
);
module.exports = Pedido;