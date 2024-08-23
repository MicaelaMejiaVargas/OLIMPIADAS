const express = require('express');
const router = express.Router();

const userController = require('../controladores/user_controlador');

router.get('/', userController.showUsers);
router.post('/',userController.createUser);

module.exports = router