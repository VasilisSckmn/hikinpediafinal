require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const Database = require('better-sqlite3');

// === Initialize SQLite DB ===
const db = new Database('submissions.db');

// Ensure table exists
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    link TEXT NOT NULL,
    date TEXT NOT NULL
  )
`);

const app = express();
const PORT = process.env.PORT || 3000;

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
  const dateStr = now.toISOString();

  // Check if user submitted today
  const stmt = db.prepare('SELECT * FROM submissions WHERE email = ? ORDER BY date DESC LIMIT 1');
  const last = stmt.get(email);

  if (last && isSameDay(new Date(last.date), now)) {
    return res.status(429).json({ success: false, message: 'Already submitted today' });
  }

  // Insert submission
  const insert = db.prepare('INSERT INTO submissions (email, link, date) VALUES (?, ?, ?)');
  insert.run(email, link, dateStr);

  console.log('✔ Submission saved:', { email, link, date: dateStr });
  res.json({ success: true, message: 'Submission received successfully!' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
