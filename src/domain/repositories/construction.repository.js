const Repository = require('./repository');
const Model = require('../models/construction.model');

class ConstructionRepository extends Repository {
  constructor() {
    super(Model);
  }
}

module.exports = new ConstructionRepository();
