const jwt = require('jsonwebtoken');
const UserModel = require('../model/UserModel');
const mailer = require('../config/Mailer');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const verificationEmail = require('../views/verificationEmail.jsx');
const { handleValidationErrors } = require('../helpers/Validation');
const { body } = require('express-validator');
require('dotenv').config();
class AuthController {
  static login(req, res) {
    // Validate request body
    body('email', 'Please enter a valid email!').isEmail().normalizeEmail({ gmail_remove_dots: true })(req, res, () => {});
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
        const users = results[0];
        const tokenPayload = {
          email: users.email,
          is_Seller: users.is_Seller,
          is_verified: users.is_verified,
          id: users.id,
          name : users.name,
        };
        const token = jwt.sign(tokenPayload, 'your_secret_key', { expiresIn: '2h' });
        return res.status(200).json({ token });
      } else {
        // Invalid credentials
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  }
    static signup(req, res) {
      const { name, email, password } = req.body;
      UserModel.findUserByEmail(email, (err, existingUser) => {
      if (err) {
        return res.status(500).send('Internal Server Error');
      }

      if (existingUser) {
        // Email is already registered
        return res.status(400).send('Email is already registered');
      }

      // Email is not registered, proceed with user registration


        const verification_token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const user = {
          name,
          email,
          password,
          verification_token,
        };

        // Create the user
        UserModel.createUser(user, (createErr, result) => {
          if (createErr) {
            console.error('Error inserting user:', createErr);
            return res.status(500).send('Internal Server Error');
          }

          const verificationLink = `http://localhost:3000/api/verify?token=${verification_token}`;
          const mailOptions = {
            to: email,
            subject: 'Email Verification',
            html: verificationEmail(verificationLink),
          };

          // Send verification email
          mailer.sendMail(mailOptions, (mailError, info) => {
            if (mailError) {
              console.error(mailError);
              return res.status(500).send('Internal Server Error');
            }
            console.log(`Email sent: ${info.response}`);
            res.status(200).send('Registration successful. Check your email for verification. \n Quay lại đăng nhập theo link sau: http://localhost:4000/login');
          });
        });
      });
    }
    static verifyEmail(req, res) {
      const { token } = req.query;  
      UserModel.updateUserVerification(token, (err, result) => {
        if (err) throw err;  
        if (result.changedRows === 0) {
          return res.status(400).send('Invalid verification token.');
        } 
        res.status(200).send('Email verification successful.');
      });
    }
  }
  
module.exports = AuthController;