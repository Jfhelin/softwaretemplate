// Import the express module
const express = require('express');

// Create a new router object
const router = express.Router();

// Define a route for the root URL
router.get('/', (req, res) => {
  // Render the index view and pass in a title variable
  res.render('index', { title: 'Home' });
});

// Export the router object
module.exports = router;