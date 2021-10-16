const mongoose = require('mongoose');

const viewProduct = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('ViewProdut', viewProduct);
