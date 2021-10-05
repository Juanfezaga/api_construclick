/* eslint-disable no-console */
const Repository = require('./repository');
const Model = require('../models/category.model');

class CategoryRepository extends Repository {
  constructor() {
    super(Model);
  }
}

module.exports = new CategoryRepository();
