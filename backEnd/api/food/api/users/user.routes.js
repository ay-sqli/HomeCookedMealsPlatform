const express = require('express');
const router = express.Router();
const User = require('./user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {sendPasswordResetEmail} = require('../../../../../src/utils/email.handler');
require('dotenv').config();

// Register a new user
router.post('/register', async (req, res) => {
  try {

    const { username, email, password } = req.body;
    await sendPasswordResetEmail(email, password);
    // Registration logic here
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Send a registration confirmation email
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Rest of the routes (login, delete, reset-password) here

module.exports = router;
