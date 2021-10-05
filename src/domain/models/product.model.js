const mongoose = require('mongoose');

const { statesProduct } = require('../../application/constants/products');

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
  state: {
    type: String,
    enum: statesProduct,
    default: statesProduct[0],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', product);
