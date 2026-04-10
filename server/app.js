const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// --- MongoDB User Model ---
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String
});
const User = mongoose.model('User', userSchema);

// --- Connect to MongoDB ---
mongoose.connect('mongodb://127.0.0.1:27017/scholarsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// --- Signup Route ---
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.json({ success: false, error: "Missing fields" });
  try {
    const existing = await User.findOne({ username });
    if (existing) return res.json({ success: false, error: "User already exists" });
    const hash = await bcrypt.hash(password, 10);
    await User.create({ username, password: hash });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: "Signup error" });
  }
});

// --- Login Route ---
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.json({ success: false, error: "Missing fields" });
  try {
    const user = await User.findOne({ username });
    if (!user) return res.json({ success: false, error: "Invalid credentials" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ success: false, error: "Invalid credentials" });
    // For demo: use user._id as token
    res.json({ success: true, token: user._id });
  } catch (err) {
    res.json({ success: false, error: "Login error" });
  }
});

// --- Start Server ---
app.listen(3001, () => console.log('Server started on http://localhost:3001'));