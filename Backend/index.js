const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const User = require('./models/User');
const authRoutes = require('./routes/auth');

const app = express();

// ✅ Middleware
app.use(cors({
    origin: 'http://localhost:3000',  // frontend origin
    credentials: true
}));
app.use(express.json()); // parse JSON

// ✅ Session
app.use(session({
    secret: 'hardcodedSecret123',   // normally in .env
    resave: false,
    saveUninitialized: false
}));

// ✅ Passport setup
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ✅ Routes
app.use('/api/auth', authRoutes);

// ✅ Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/passportAuthApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.log(err));