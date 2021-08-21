const mongoose = require('mongoose');

const profession = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Profession', profession);
