const Database = require('better-sqlite3');
const db = new Database('submissions.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    link TEXT NOT NULL,
    date TEXT NOT NULL
  )
`);

console.log('✅ SQLite DB initialized');
