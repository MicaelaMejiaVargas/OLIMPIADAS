const express = require('express');
const router = express.Router();

const userController = require('../controladores/user_controlador');

router.get('/', userController.showUsers);
router.post('/',userController.createUser);
router.put('/:correo', userController.updateUser);
router.delete('/:correo', userController.deleteUser);
router.get('/:correo', userController.showOneUser);

module.exports = router