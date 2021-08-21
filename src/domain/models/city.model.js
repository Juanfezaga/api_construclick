const mongoose = require('mongoose');

const city = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('City', city);
