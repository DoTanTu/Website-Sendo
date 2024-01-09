const express = require("express");
const cartControllers = require("../controller/CartController");
const Authenticate = require("../middleware/AuthMiddleware");
const router = express.Router();
router.get('/get-all-cart',Authenticate.authenticateToken,cartControllers.getAllCart);
router.post('/add-to-cart',Authenticate.authenticateToken,cartControllers.addToCart);
module.exports = router;