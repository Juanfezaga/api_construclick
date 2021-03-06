const Repository = require('./repository');
const Model = require('../models/post.model');

class PostRepository extends Repository {
  constructor() {
    super(Model);
  }

  findComplex(notIds, filters, limit) {
    return this.model.find({
      ...filters,
      _id: { $nin: notIds },
    }).limit(limit).sort({ createdAt: 'desc' });
  }
}

module.exports = new PostRepository();
