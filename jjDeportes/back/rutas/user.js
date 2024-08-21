const express = require('express');
const router = express.Router();
const userController = require('../controladores/user')
router.get('/', userController.users);

module.exports = router