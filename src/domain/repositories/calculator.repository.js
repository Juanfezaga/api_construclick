const Repository = require('./repository');
const Model = require('../models/calculator.model');

class CalculatorRepository extends Repository {
  constructor() {
    super(Model);
  }
}

module.exports = new CalculatorRepository();
