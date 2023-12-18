const express = require("express");
const { body } = require('express-validator');
const AuthController = require('../controller/AuthController.js');
const { authenticateToken } = require('../middleware/AuthMiddleware.js');
const { handleValidationErrors } = require('../helpers/Validation.js');
const router = express.Router();

router.post('/login', [
    body('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    body('password', 'Password is required').notEmpty(),
    handleValidationErrors,
  ], AuthController.login);
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});
router.post('/register', AuthController.signup);
router.get('/verify', AuthController.verifyEmail)
router.get('/', (req, res) => {
    res.send('Hello, this is the homepage!');
  });

module.exports = router;

