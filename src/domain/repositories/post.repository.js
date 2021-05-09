const Model = require('../models/post.model');

class PostRepository {
  static find(filters) {
    return Model.find(filters);
  }

  static findComplex(notIds, type, limit) {
    return Model.find({
      type,
      _id: { $nin: notIds },
    }).limit(limit).sort({ createdAt: 'desc' });
  }

  static async create(data) {
    return Model.create(data);
  }
}

module.exports = PostRepository;
