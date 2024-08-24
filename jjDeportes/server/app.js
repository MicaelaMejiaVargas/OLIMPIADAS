const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Confuguración del middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Usuario
const usuario=require('./rutas/user_routes');
app.use('/user',usuario);

// Productos
const productos=require('./rutas/product_routes');
app.use('/productos',productos);

// Ruta INICIO
app.get('/', (req, res) => {
  res.send('Bienvenidos al inicio de la página');
});

app.listen(3000, () => {
  console.log('Mi aplicacion esta funcionando en el puerto 3000!');
})