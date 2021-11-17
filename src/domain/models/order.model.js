const mongoose = require('mongoose');

const { statesOrder } = require('../../application/constants/order');

const order = mongoose.Schema({
  shoppingCartId: {
    type: mongoose.Types.ObjectId,
    ref: 'ShoppingCart',
  },
  totalAmount: Number,
  state: {
    type: String,
    enum: statesOrder,
    default: statesOrder[0],
  },
  paymentDate: Date,
  responsePayment: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Order', order);
