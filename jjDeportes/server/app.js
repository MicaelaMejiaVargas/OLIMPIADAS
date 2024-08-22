const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Confuguración del middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const usuario=require('./rutas/user');

app.use('/user',usuario);

// Ruta INICIO
app.get('/', (req, res) => {
  res.send('Bienvenidos al inicio de la página');
});

app.listen(3000, () => {
  console.log('Mi aplicacion esta funcionando en el puerto 3000!');
})