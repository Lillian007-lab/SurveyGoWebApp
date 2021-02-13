const mongoose = require("mongoose");

const { Schema } = mongoose;
// equivalent to (EJ6 destructuring):
// const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 10 },
});

mongoose.model("users", userSchema);
