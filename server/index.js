import express from 'express';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const app = express();
const db = new sqlite3.Database('./users.db');
const SECRET = 'scholarscircle_secret_key'; // ⚠️ In production, move to .env

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);

// ✅ Register route
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: 'Username and password required.' });

    // Check if username already exists
    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, row) => {
      if (row) return res.status(400).json({ error: 'Username already exists.' });

      const hashed = await bcrypt.hash(password, 10);
      db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashed], (err) => {
        if (err) return res.status(500).json({ error: 'Database error during registration.' });
        res.json({ success: true, message: 'User registered successfully!' });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// ✅ Login route
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ error: 'Username and password required.' });

  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (err || !user)
      return res.status(400).json({ error: 'Invalid username or password.' });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ error: 'Invalid username or password.' });

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET, {
      expiresIn: '2h',
    });

    res.json({ success: true, token });
  });
});

// ✅ Middleware for authentication
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied. Token required.' });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token.' });
    req.user = user;
    next();
  });
}

// ✅ Example protected route
app.get('/api/auth/profile', authenticateToken, (req, res) => {
  res.json({ success: true, username: req.user.username });
});

// ✅ Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Auth server running at http://localhost:${PORT}`);
});
