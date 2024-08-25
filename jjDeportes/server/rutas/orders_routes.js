const express = require('express');
const router = express.Router();

const pedidosController = require('../controladores/orders_controller');
router.get('/', pedidosController.showOrders);
router.post('/',pedidosController.createOrder);
router.get('/:id', pedidosController.showOneOrder);
router.put('/:id', pedidosController.updateOrder);
router.delete('/:id', pedidosController.deleteOrder);

module.exports = router