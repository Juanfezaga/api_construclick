const mongoose = require('mongoose');

const user = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  lastName: String,
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  photoUrl: String,
  gender: {
    type: String,
    required: false,
  },
  birthday: {
    type: Date,
    required: false,
  },
  profession: {
    type: String,
    required: false,
  },
  nit: {
    type: String,
    required: false,
  },
  name_legal_representative: {
    type: String,
    required: false,
  },
  phone_legal_representative: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', user);
