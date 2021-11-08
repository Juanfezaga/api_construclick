const mongoose = require('mongoose');

const item = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  constructionId: {
    type: mongoose.Types.ObjectId,
    ref: 'Construction',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Item', item);
