const jwt = require('jsonwebtoken');
const UserModel = require('../model/UserModel');
const { handleValidationErrors } = require('../helpers/Validation');
const { body } = require('express-validator');
require('dotenv').config();
class AuthController {
    static login(req, res) {
      // Validate request body
      body('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true })(req, res, () => {});
      body('password', 'Password is required').notEmpty()(req, res, () => {});
  
      // Handle validation errors
      handleValidationErrors(req, res, () => {});
  
      const { email, password } = req.body;
  
      // Perform authentication against your user table in the database
      UserModel.findUser(email, password, (err, results) => {
        if (err) {
          console.error('Error executing MySQL query:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        if (results.length > 0) {
          // User authenticated successfully, generate and send a JWT token
          const token = jwt.sign({ email }, 'your_secret_key', { expiresIn: '1h' });
          return res.status(200).json({ token });
        } else {
          // Invalid credentials
          return res.status(401).json({ error: 'Invalid credentials' });
        }
      });
    }
  }
  
module.exports = AuthController;