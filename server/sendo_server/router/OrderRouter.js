const express = require("express");
const router = express.Router();
const Authenticate = require("../middleware/AuthMiddleware");
const orderController = require('../controller/OrderController');
router.post('/order/create-order', Authenticate.authenticateToken,orderController.createOrder);

module.exports = router;