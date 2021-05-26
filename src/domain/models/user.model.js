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
  type: {
    type: String,
    enum: ['persona', 'empresa'],
    required: true,
  },
  last_name: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image_url: String,
  gender: {
    type: String,
    enum: ['Masculino', 'Femenino'],
    required: false,
  },
  birthdate: {
    type: Date,
    required: false,
  },
  profession_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Profession',
  },
  city_id: {
    type: mongoose.Types.ObjectId,
    ref: 'City',
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
  email_legal_representative: {
    type: String,
    required: false,
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', user);
