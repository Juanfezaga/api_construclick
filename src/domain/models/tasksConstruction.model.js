const mongoose = require('mongoose');

const task = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  itemId: {
    type: mongoose.Types.ObjectId,
    ref: 'Item',
  },
  dateInit: Date,
  dateLimit: Date,
  assingUserId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  presupuesto: Number,
  unit: String,
  quantity: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Task', task);
