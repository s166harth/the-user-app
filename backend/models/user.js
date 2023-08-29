const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Others'], required: true },
  heardAbout: [{ type: String }],
  city: { type: String, enum: ['Mumbai', 'Pune', 'Ahmedabad'], required: true },
  state: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
