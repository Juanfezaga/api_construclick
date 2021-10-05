const Repository = require('./repository');
const Model = require('../models/product.model');

class ProductRepository extends Repository {
  constructor() {
    super(Model);
  }

  findComplex(notIds, filters, limit, search) {
    const searchQuery = search ? {
      $or: [
        { title: { $regex: `.*${search}.*`, $options: 'i' } },
        { description: { $regex: `.*${search}.*`, $options: 'i' } },
        {
          tags: {
            $elemMatch: {
              $regex: `.*${search}.*`, $options: 'i',
            },
          },
        },
      ],
    } : {};
    return this.model.find({
      ...filters,
      _id: { $nin: notIds },
      ...searchQuery,
    }).limit(limit).sort({ createdAt: 'desc' });
  }
}

module.exports = new ProductRepository();
