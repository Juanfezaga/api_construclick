const mongoose = require('mongoose');

const { statesShoppingCart } = require('../../application/constants/shoppingCart');

const shoppingCart = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  state: {
    type: String,
    enum: statesShoppingCart,
    default: statesShoppingCart[0],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('ShoppingCart', shoppingCart);
