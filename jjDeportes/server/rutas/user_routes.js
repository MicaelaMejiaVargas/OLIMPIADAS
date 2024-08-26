const express = require('express');
const router = express.Router();

const userController = require('../controladores/user_controlador');

router.get('/', userController.showUsers);
router.post('/',userController.createUser);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.deleteUser);
router.get('/:username', userController.showOneUser);

module.exports = router