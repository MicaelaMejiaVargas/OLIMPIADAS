const { Sequelize } = require('sequelize');
const db = require('../config/db_sequelize');

const Usuario = db.define('usuario', {
    username: {
        type: Sequelize.STRING,
        primaryKey: true,
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
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Formato de email inválido."
        },
        notEmpty: true,
        unique: {
          msg: "Este correo ya tiene una cuenta"
        }
      }
    },
    passw: {
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
    accType: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        isIn: {
          args: [[true, false]],
          msg: "El tipo de cuenta debe ser verdadero o falso."
        }
      }
    }
}, {
    timestamps: false
});

const Producto = db.define('producto', {
    id_producto: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false
});

const Pedido = db.define('pedido', {
    id_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'username'
        }
    },
    nombre_producto: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Producto,
            key: 'descripcion'
        }
    }
}, {
    timestamps: false
});

// Sincroniza las tablas en el orden correcto
Usuario.sync({ force: false })
    .then(() => {
        console.log('Usuario sincronizado correctamente');
        return Producto.sync({ force: false });
    })
    .then(() => {
        console.log('Producto sincronizado correctamente');
        return Pedido.sync({ force: false });
    })
    .then(() => {
        console.log('Pedido sincronizado correctamente');
    })
    .catch(err => {
        console.error('Error al sincronizar:', err);
    });
