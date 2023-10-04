// src/index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/db'); // Import the database configuration


// Import and use middleware from src/config/middleware.js

// Import and use routes here
app.use(express.json()); // Middleware for JSON parsing
app.use('/api/users', require('./api/users/user.routes'));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

