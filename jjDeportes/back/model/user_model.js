const { Sequelize } = require('sequelize');
const sequelize = require('../config/db_sequelize');
const Usuarios = sequelize.define('usuario', {
    correo: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    username:{
        type:Sequelize.STRING
    },
    contraseña:{
        type:Sequelize.STRING
    },
    accType:{
        type:Sequelize.BOOLEAN
    }
})
Usuarios.sync();
// Usuarios.sync({alter: true});

module.exports = Usuarios;