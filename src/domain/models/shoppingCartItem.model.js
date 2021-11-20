const mongoose = require('mongoose');
const { statesShoppingCartItems } = require('../../application/constants/shoppingCart');

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
  state: {
    type: String,
    enum: statesShoppingCartItems,
    default: statesShoppingCartItems[0],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('ShoppingCartItem', shoppingCartItem);
