require('dotenv').config();
const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ✅ SQLite setup
const db = new sqlite3.Database('./submissions.db');
db.run(`
  CREATE TABLE IF NOT EXISTS submissions (
    email TEXT,
    link TEXT,
    date TEXT
  )
`);

// ✅ Serve the main HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Submission endpoint
app.post('/submit', (req, res) => {
  console.log("📨 Received POST /submit");
  const { email, link } = req.body;
  const today = new Date().toISOString().split('T')[0];

  if (!email || !link) {
    return res.status(400).json({ message: '❌ Χρειάζονται email και link.' });
  }

  db.get(`SELECT * FROM submissions WHERE email = ? AND date = ?`, [email, today], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: '⚠️ Σφάλμα βάσης δεδομένων.' });
    }

    if (row) {
      return res.json({ message: '❌ Έχεις ήδη υποβάλει έναν σύνδεσμο σήμερα. Δοκίμασε ξανά αύριο!' });
    }

    db.run(`INSERT INTO submissions (email, link, date) VALUES (?, ?, ?)`, [email, link, today], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: '❌ Αποτυχία υποβολής.' });
      }

      res.json({ message: '✅ Ευχαριστούμε! Ο σύνδεσμος καταχωρήθηκε.' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
