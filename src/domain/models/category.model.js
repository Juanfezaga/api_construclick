const mongoose = require('mongoose');

const category = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Category', category);
