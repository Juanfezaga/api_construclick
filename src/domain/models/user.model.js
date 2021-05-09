const mongoose = require('mongoose');

const user = mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  displayName: String,
  fullName: String,
  photoUrl: String,
  providerId: String,
  localId: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', user);
