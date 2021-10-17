const mongoose = require('mongoose');

const shoppingCartItem = mongoose.Schema({
  shoppingCartId: {
    type: mongoose.Types.ObjectId,
    ref: 'ShoppingCart',
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
  },
  unitPrice: Number,
  quantity: Number,
}, {
  timestamps: true,
});

module.exports = mongoose.model('ShoppingCartItem', shoppingCartItem);
