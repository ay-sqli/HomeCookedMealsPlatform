// src/config/db.js

const mongoose = require('mongoose');
require("dotenv").config()
const dbURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(dbURI);

// Get the default connection
const db = mongoose.connection;

// Handle database connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
