// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Import the MongoDB connection

const app = express();

app.use(bodyParser.json());

// Define your routes here
// Example: app.use('/users', require('./routes/users'));

const PORT = 3000; // Change the port number if needed

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
