const Repository = require('./repository');
const Model = require('../models/viewProducts');

class ViewProductRepository extends Repository {
  constructor() {
    super(Model);
  }

  findComplex(id, filters, limit) {
    return limit
      ? this.model.find({
        ...filters,
        _id: id,
      }).limit(limit).sort({ createdAt: 'desc' })
      : this.model.find({
        ...filters,
        _id: id,
      }).sort({ createdAt: 'desc' });
  }
}

module.exports = new ViewProductRepository();
