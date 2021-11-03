const mongoose = require('mongoose');

const post = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  type: String,
  title: String,
  imagesUrl: [String],
  attributes: Array,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', post);
