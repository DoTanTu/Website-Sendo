const express = require("express");
const router = express.Router();
const Authenticate = require("../middleware/AuthMiddleware");
const orderController = require('../controller/OrderController');
router.post('/order/create-order', Authenticate.authenticateToken,orderController.createOrder);
router.get('/order/order-user', Authenticate.authenticateToken,orderController.getOrdersByUser);
router.put('/approveOrder', Authenticate.authenticateToken,orderController.approveOrder);
module.exports = router;