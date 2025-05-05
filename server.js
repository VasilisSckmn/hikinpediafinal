require('dotenv').config();

// Step 3: Access your environment variables
const googleApiKey = process.env.GOOGLE_API_KEY;

// Use the Google API key in your application logic
console.log("Your Google API Key is:", googleApiKey);

// Example: Using the key for an API request
// You can now use the native fetch without requiring 'node-fetch'
fetch(https://api.example.com/data?key=${googleApiKey})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // ✅ Updated to support Azure

// Serve static files (HTML, CSS, JS, images) from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html as the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(✅ Server is running on port ${PORT});
});