const { Sequelize } = require('sequelize');
const db = require('../config/db_sequelize');

const Usuario = db.define('usuario', {
    username:{
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 50],
            msg: 'Nombre inválido: debe tener entre 3 y 50 caracteres'
          },
          notEmpty: true
      }
    },
    correo: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        isEmail:{
          msg: "Formato de email inválido."
        },
        notEmpty: true
      }
    },
    passw:{
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 100],
          msg: "La contraseña debe tener al menos 8 caracteres."
        },
        notEmpty: true,
        is: {
          args: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/,
          msg: "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial."
        }
      }
    },
    accType:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        isIn: {
          args: [[true, false]],
          msg: "El tipo de cuenta debe ser verdadero o falso."
        }
      }
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