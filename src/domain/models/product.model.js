const mongoose = require('mongoose');

const product = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  image_url: String,
  description: String,
  tags: [String],
  price: Number,
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', product);
