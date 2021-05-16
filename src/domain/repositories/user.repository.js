/* eslint-disable no-console */
const Repository = require('./repository');
const Model = require('../models/user.model');

class UserRepository extends Repository {
  constructor() {
    super(Model);
  }
}

module.exports = new UserRepository();
