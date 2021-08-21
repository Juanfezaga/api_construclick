const mongoose = require('mongoose');

const business = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  name_commercial: {
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

module.exports = mongoose.model('Business', business);
