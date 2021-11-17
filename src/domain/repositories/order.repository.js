/* eslint-disable no-console */
const Repository = require('./repository');
const Model = require('../models/order.model');

class OrderRepository extends Repository {
  constructor() {
    super(Model);
  }
}

module.exports = new OrderRepository();
