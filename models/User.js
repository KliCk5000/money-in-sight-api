const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  token: String,
});

mongoose.model('users', userSchema);
