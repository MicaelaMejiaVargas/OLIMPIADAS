const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const UsuarioM = require('./model/user_model');
const ProductoM = require('./model/product_model');
const PedidoM = require('./model/orders_model');

// Confuguración del middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middleware para verificacion de usuarios
const esVendedor = (req, res, next) => {
  const { accType } = req.user; // Suponiendo que accType esté en el objeto usuario en req

  if (accType === true) { // true significa que es un Vendedor
      next(); // Si es un vendedor, continúa a la siguiente función
  } else {
      return res.status(403).json({ message: "Acceso denegado: solo los Vendedores pueden acceder a esta página." });
  }
};

const esUsuarioComun = (req, res, next) => {
  const { accType } = req.user;

  if (accType === false) { // false significa que es un Usuario Común
      next(); // Si es un usuario común, continúa a la siguiente función
  } else {
      return res.status(403).json({ message: "Acceso denegado: solo los Usuarios Comunes pueden acceder a esta página." });
  }
};

// Usuario
const usuario=require('./rutas/user_routes');
app.use('/user',usuario);

// Productos
const productos=require('./rutas/product_routes');
app.use('/productos',productos);

// Pedidos
const pedidos=require('./rutas/orders_routes');
app.use('/pedidos',pedidos);

// PERMISOS
app.get('/registro-productos', esVendedor, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'vendedor_registro_productos.html'));
});

app.get('/vista-productos', esUsuarioComun, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'usuario_vista_productos.html'));
});


// Ruta INICIO
app.get('/', (req, res) => {
  res.send('Bienvenidos al inicio de la página');
});


app.listen(3000, () => {
  console.log('Mi aplicacion esta funcionando en el puerto 3000!');
});

// Sincronizar modelos
(async () => {
  try {
      await UsuarioM.sync({ force: false });
      console.log('Usuario sincronizado correctamente');
      
      await ProductoM.sync({ force: false });
      console.log('Producto sincronizado correctamente');
      
      await PedidoM.sync({ force: false });
      console.log('Pedido sincronizado correctamente');
      
      // app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
  } catch (err) {
      console.error('Error al sincronizar:', err);
  }
})();

