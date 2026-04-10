import express from 'express';
import bcrypt from 'bcrypt';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const router = express.Router();

// Initialize SQLite database
let db;
(async () => {
  db = await open({
    filename: './users.db', // your local SQLite file
    driver: sqlite3.Database,
  });

  // Create table if not exists
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);
})();

// ===== SIGNUP =====
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await db.get(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );

    if (existingUser) {
      return res.json({ success: false, error: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.run('INSERT INTO users (username, password) VALUES (?, ?)', [
      username,
      hashedPassword,
    ]);

    res.json({ success: true, message: 'Signup successful!' });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: 'Signup error.' });
  }
});

// ===== LOGIN =====
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await db.get('SELECT * FROM users WHERE username = ?', [
      username,
    ]);

    if (!user) {
      return res.json({ success: false, error: 'Invalid credentials.' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ success: false, error: 'Invalid credentials.' });
    }

    res.json({ success: true, message: 'Login successful!' });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: 'Login error.' });
  }
});

// ===== LOGOUT =====
router.post('/logout', (req, res) => {
  res.json({ success: true, message: 'Logged out successfully.' });
});

export default router;
