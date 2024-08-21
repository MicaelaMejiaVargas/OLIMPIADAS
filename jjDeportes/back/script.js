const express = require('express');
const app = express();
const usuario=require('./rutas/user');
app.use('/mostrar',usuario)
app.listen(3000, () => {
  console.log('Mi aplicacion esta funcionando en el puerto 3000!');
})