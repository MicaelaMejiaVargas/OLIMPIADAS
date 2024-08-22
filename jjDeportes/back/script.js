const express = require('express');
const app = express();
const usuario=require('./rutas/user');
app.use('/user',usuario)
// Ruta INICIO
app.get('/', (req, res) => {
  res.send('Bienvenidos al inicio de la página RIAB');
});
app.listen(3000, () => {
  console.log('Mi aplicacion esta funcionando en el puerto 3000!');
})