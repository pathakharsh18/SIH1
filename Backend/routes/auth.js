const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

// ✅ Signup Route
router.post('/signup', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = new User({ username, email });
        await User.register(user, password);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ Login Route
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ message: 'Login successful', user: req.user });
});

// ✅ Logout Route
router.post('/logout', (req, res) => {
    req.logout(err => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Logged out successfully' });
    });
});

module.exports = router;