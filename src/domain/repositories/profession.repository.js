/* eslint-disable no-console */
const Repository = require('./repository');
const Model = require('../models/profession.model');

class ProfessionRepository extends Repository {
  constructor() {
    super(Model);
  }
}

module.exports = new ProfessionRepository();
