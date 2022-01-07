const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    uid: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        trim: true,
        max: 64

    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid Email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        trim: true,
        minlength: [6, 'Password length should be minimum 6 characters'],
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;