const { Sequelize } = require('sequelize');
const sequelize = require('../config/db_sequelize');
const Usuario = sequelize.define('usuario', {
    correo: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    username:{
        type:Sequelize.STRING
    },
    passw:{
        type:Sequelize.STRING
    },
    accType:{
        type:Sequelize.BOOLEAN
    }
},{
    timestamps:false
})

Usuario.sync({ force: false })
  .then(() => {
    console.log('Modelo de Persona sincronizado correctamente');
  })
  .catch(err => {
    console.error('Error al sincronizar el Modelo de Persona:', err);
  }
);
module.exports = Usuario;