const express = require("express");
const router = express.Router();
const productController = require('../controller/ProductController');
router.get('/products', productController.getAllProduct);
router.post('/create/product',productController.addNewProduct);
module.exports = router;