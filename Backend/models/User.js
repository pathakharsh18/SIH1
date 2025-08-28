const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: String, // required by passport-local
    email: String     // optional additional field
});

userSchema.plugin(passportLocalMongoose); // adds hashing, auth, etc.

module.exports = mongoose.model('User', userSchema);