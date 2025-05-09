require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // ✅ NEW: CORS support
const fs = require('fs');

// === Lowdb setup ===
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const adapter = new JSONFile(path.join(__dirname, 'db.json')); // Absolute path for file

// Ensure that db.json exists and has data
if (!fs.existsSync(path.join(__dirname, 'db.json'))) {
    console.log("Creating db.json with default data...");
    fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify({ submissions: [] }));
}

const db = new Low(adapter);

// Initialize DB with default data
async function initDB() {
    await db.read();

    if (!db.data) {
        db.data = { submissions: [] }; // Default data
        await db.write();
    }
}
initDB();

// === Google API Key logic ===
const googleApiKey = process.env.GOOGLE_API_KEY;
console.log("Your Google API Key is:", googleApiKey);

const app = express();
const PORT = process.env.PORT || 3000;

// === Middleware ===
app.use(cors()); // ✅ NEW: Allow requests from other domains
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

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

    if (!email || !link) {
        return res.status(400).send({ success: false, message: 'Missing email or link' });
    }

    await db.read(); // Refresh DB
    const now = new Date();
    const lastSubmission = db.data.submissions.find(
        (entry) => entry.email === email && isSameDay(new Date(entry.date), now)
    );

    if (lastSubmission) {
        return res.status(429).send({ success: false, message: 'Already submitted today' });
    }

    db.data.submissions.push({ email, link, date: now.toISOString() });
    await db.write();

    console.log(`✔ Submission received from ${email}: ${link}`);
    res.send({ success: true, message: 'Submission received successfully!' });
});

// === Static homepage ===
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// === Start server ===
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
