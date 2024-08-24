const express = require('express');
const router = express.Router();

const productController = require('../controladores/product_controller');
router.get('/', productController.showProducts);
router.post('/',productController.createProduct);
router.get('/:id', productController.showOneProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router