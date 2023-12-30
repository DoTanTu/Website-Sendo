const express = require("express");
const ProfileController = require("../controller/ProfileController");
const router = express.Router();
router.get('/profile/:id', ProfileController.getProfileUser);
module.exports = router;