const express = require("express");
const profileControllers = require("../controller/ProfileController"); // Kiểm tra dòng này
const Authenticate = require("../middleware/AuthMiddleware");
const router = express.Router();

router.get('/profile', Authenticate.authenticateToken, profileControllers.getProfileUser);
router.put('/profile/update',Authenticate.authenticateToken,profileControllers.updateProfile);
module.exports = router;
