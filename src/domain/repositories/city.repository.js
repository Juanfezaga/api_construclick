/* eslint-disable no-console */
const Repository = require('./repository');
const Model = require('../models/city.model');

class CityRepository extends Repository {
  constructor() {
    super(Model);
  }
}

module.exports = new CityRepository();
