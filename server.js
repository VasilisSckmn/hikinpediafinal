require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // ✅ NEW: CORS support

// === New: lowdb setup ===
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const adapter = new JSONFile('db.json');
const db = new Low(adapter);

// Initialize DB
async function initDB() {
    await db.read();
    // Check if the database is empty and initialize it with default data
    if (!db.data) {
        db.data = { submissions: [] }; // ✅ provide default structure
        await db.write();
    }
}
initDB(); // Ensure DB is initialized correctly before the app starts

// === Google API Key logic ===
const googleApiKey = process.env.GOOGLE_API_KEY;
console.log("Your Google API Key is:", googleApiKey);

const app = express();
const PORT = process.env.PORT || 3000;

// === Middleware ===
app.use(cors()); // ✅ NEW: Allow requests from other domains
app.use(bodyParser.json()); // Middleware to parse JSON body
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// === Submission route ===
function isSameDay(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

app.post('/submit', async (req, res) => {
    const { email, link } = req.body;

    // Check if email and link are provided
    if (!email || !link) {
        return res.status(400).send({ success: false, message: 'Missing email or link' });
    }

    await db.read(); // Refresh DB to ensure we're working with the latest data
    const now = new Date();
    const lastSubmission = db.data.submissions.find(
        (entry) => entry.email === email && isSameDay(new Date(entry.date), now)
    );

    // If the user already submitted today, return an error
    if (lastSubmission) {
        return res.status(429).send({ success: false, message: 'Already submitted today' });
    }

    // Store the new submission
    db.data.submissions.push({ email, link, date: now.toISOString() });
    await db.write(); // Save the updated data

    console.log(`✔ Submission received from ${email}: ${link}`);
    res.send({ success: true, message: 'Submission received successfully!' });
});

// === Static homepage route ===
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// === Start server ===
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
