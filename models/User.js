const mongoose = require('mongoose');

const { Schema } = mongoose;
// equivalent to (EJ6 destructuring):
// const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);