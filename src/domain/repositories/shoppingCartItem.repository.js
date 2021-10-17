/* eslint-disable no-console */
const Repository = require('./repository');
const Model = require('../models/shoppingCartItem.model');

class ShoppingCartItemRepository extends Repository {
  constructor() {
    super(Model);
  }
}

module.exports = new ShoppingCartItemRepository();
