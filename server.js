require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Path to our JSON store
const dbPath = path.join(__dirname, 'db.json');

// Load submissions from disk (or initialize)
let submissions = [];
try {
  const raw = fs.readFileSync(dbPath, 'utf-8');
  submissions = JSON.parse(raw).submissions || [];
  console.log(`Loaded ${submissions.length} submissions from disk.`);
} catch (e) {
  console.log('No valid db.json found, starting with empty submissions.');
  submissions = [];
  // Write initial file
  fs.writeFileSync(dbPath, JSON.stringify({ submissions }, null, 2));
}

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helpers
function isSameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth()    === d2.getMonth() &&
         d1.getDate()     === d2.getDate();
}

// Routes
app.post('/submit', (req, res) => {
  const { email, link } = req.body;
  if (!email || !link) {
    return res.status(400).json({ success: false, message: 'Missing email or link' });
  }

  const now = new Date();
  const last = submissions.find(s => s.email === email && isSameDay(new Date(s.date), now));
  if (last) {
    return res.status(429).json({ success: false, message: 'Already submitted today' });
  }

  const entry = { email, link, date: now.toISOString() };
  submissions.push(entry);

  // Persist to disk
  try {
    fs.writeFileSync(dbPath, JSON.stringify({ submissions }, null, 2));
    console.log('✔ Submission saved:', entry);
    res.json({ success: true, message: 'Submission received successfully!' });
  } catch (err) {
    console.error('Error saving submission:', err);
    res.status(500).json({ success: false, message: 'Server error, try again later.' });
  }
});

// New route to see all submissions
app.get('/submissions', (req, res) => {
  res.json({ submissions });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
