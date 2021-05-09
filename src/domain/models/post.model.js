const mongoose = require('mongoose');

const post = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  type: String,
  title: String,
  photoUrl: String,
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
