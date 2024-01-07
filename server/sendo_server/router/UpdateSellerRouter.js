const express = require("express");
const updateSellerController = require("../controller/UpdateSellerController"); 
const Authenticate = require("../middleware/AuthMiddleware");
const router = express.Router();
router.get('/seller/request-pending',updateSellerController.getSellerRequest);
router.put('/seller/update-to-seller',Authenticate.authenticateToken,profileControllers.updateProfile);
module.exports = router;
