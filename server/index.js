import express from 'express';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const app = express();
const db = new sqlite3.Database('./users.db');
const SECRET = 'scholarscircle_secret_key';

app.use(cors());
app.use(bodyParser.json());

// Create users table if not exists
 db.run(`CREATE TABLE IF NOT EXISTS users (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   username TEXT UNIQUE,
   password TEXT
 )`);

// Signup route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required.' });
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ error: 'Error hashing password.' });
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], function(err) {
      if (err) return res.status(400).json({ error: 'Username already exists.' });
      res.json({ success: true });
    });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err || !user) return res.status(400).json({ error: 'Invalid username or password.' });
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '2h' });
        res.json({ success: true, token });
      } else {
        res.status(400).json({ error: 'Invalid username or password.' });
      }
    });
  });
});

// Auth middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Example protected route
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ username: req.user.username });
});

app.listen(3001, () => {
  console.log('Auth server running on http://localhost:3001');
});
