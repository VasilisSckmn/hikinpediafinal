require('dotenv').config();

// Step 3: Access your environment variables
const googleApiKey = process.env.GOOGLE_API_KEY;

// Use the Google API key in your application logic
console.log("Your Google API Key is:", googleApiKey);

fetch(`https://api.example.com/data?key=${googleApiKey}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

const express = require('express');
const path = require('path');
const cors = require('cors'); // Needed for frontend JS fetch
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const submitRoutes = require('./submit'); // ✅ Import your submit.js

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // ✅ Allow cross-origin requests
app.use(express.json()); // ✅ Parse JSON bodies

// Firebase Admin init (needed for Firestore)
initializeApp({
  credential: applicationDefault(),
});

// Static frontend
app.use(express.static(path.join(__dirname, 'public')));

// ✅ API routes (submit + verify)
app.use('/', submitRoutes); // Mount submit.js handlers

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
