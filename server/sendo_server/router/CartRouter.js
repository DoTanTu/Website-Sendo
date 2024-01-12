const express = require("express");
const cartControllers = require("../controller/CartController");
const Authenticate = require("../middleware/AuthMiddleware");
const router = express.Router();
router.get('/get-all-cart',Authenticate.authenticateToken,cartControllers.getAllCart);
router.post('/add-to-cart',Authenticate.authenticateToken,cartControllers.addToCart);
router.delete('/delete-cart/:id',Authenticate.authenticateToken,cartControllers.deleteProductInCart);
router.put('/update-variant/:id', Authenticate.authenticateToken, cartControllers.updateVariant);
module.exports = router;    