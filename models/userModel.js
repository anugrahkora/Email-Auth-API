const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    uid: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        max: 64

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;