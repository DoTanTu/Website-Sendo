const express = require("express");
const updateSellerController = require("../controller/UpdateSellerController"); 
const Authenticate = require("../middleware/AuthMiddleware");
const router = express.Router();
router.get('/seller/request-pending',updateSellerController.getSellerRequest);
router.put('/update-to-seller-request',Authenticate.authenticateToken ,updateSellerController.updateToSellerRequest);
router.put('/approve-seller-request/:userId',updateSellerController.approveSellerRequest);
module.exports = router;
