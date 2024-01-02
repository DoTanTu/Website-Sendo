const express = require("express");
const router = express.Router();
const Authenticate = require("../middleware/AuthMiddleware");
const productController = require('../controller/ProductController');
router.get('/products', productController.getAllProduct);
router.post('/create/product',Authenticate.authenticateToken,productController.addNewProduct);
router.put('/update/product/:productId',Authenticate.authenticateToken,productController.updateProduct);
router.get('/product/:productId',productController.getProductById);
module.exports = router;