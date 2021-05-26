const mongoose = require('mongoose');

const post = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  type: String,
  title: String,
  image_url: String,
  attributes: [
    {
      name: String,
      value: String,
    },
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', post);
