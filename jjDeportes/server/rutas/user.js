const express = require('express');
const router = express.Router();
const userController = require('../controladores/user')
router.get('/', userController.showUsers);
router.post('/crear',userController.createUser)
module.exports = router