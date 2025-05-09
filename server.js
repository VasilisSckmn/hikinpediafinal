require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

// === Lowdb setup ===
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const dbPath = path.join(__dirname, 'db.json'); // Absolute path for file
const adapter = new JSONFile(dbPath);

// Check if db.json exists and create with default data if missing
if (!fs.existsSync(dbPath)) {
    console.log("db.json file does not exist. Creating db.json with default data...");
    fs.writeFileSync(dbPath, JSON.stringify({ submissions: [] }, null, 2));  // Default data
} else {
    console.log("db.json file exists.");
}

// Initialize the lowdb database
const db = new Low(adapter);

// Force initialization of DB with default data if missing or empty
async function initDB() {
    try {
        await db.read();
        
        // Log current database state
        console.log("Database read:", db.data);

        // If the db is empty or data is missing, we will set the default
        if (!db.data || !db.data.submissions) {
            console.log("Initializing default data in db.json...");
            db.data = { submissions: [] };  // Ensure the default data structure
            await db.write();
        }
    } catch (error) {
        console.error("Error initializing DB:", error);
    }
}

initDB();

// === Google API Key logic ===
const googleApiKey = process.env.GOOGLE_API_KEY;
console.log("Your Google API Key is:", googleApiKey);

const app = express();
const PORT = process.env.PORT || 3000;

// === Middleware ===
app.use(cors());
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
