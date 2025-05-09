// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const app = express();
const port = process.env.PORT || 3000;

// DB setup
const adapter = new JSONFile('db.json');
const db = new Low(adapter);
await db.read();
db.data ||= { submissions: [] };

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // or your static folder

// Helper: Check if two dates are the same day
function isSameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

app.post('/submit', async (req, res) => {
  const { email, link } = req.body;

  if (!email || !link) return res.status(400).send({ success: false, message: 'Missing email or link' });

  const now = new Date();
  const lastSubmission = db.data.submissions.find(
    (entry) => entry.email === email && isSameDay(new Date(entry.date), now)
  );

  if (lastSubmission) {
    return res.status(429).send({ success: false, message: 'Already submitted today' });
  }

  db.data.submissions.push({ email, link, date: now.toISOString() });
  await db.write();

  res.send({ success: true, message: 'Submission received' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
