const mongoose = require('mongoose');

const calculator = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  equations: [
    {
      name: String,
      equation: String,
    },
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Calculator', calculator);
