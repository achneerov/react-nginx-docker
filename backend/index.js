// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle calculation requests
app.post('/calculate', (req, res) => {
  const inputData = req.body.input;
  // Perform calculation (Replace this with your actual calculation logic)
  const result = inputData * 2; // Simple example: doubling the input value
  res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
