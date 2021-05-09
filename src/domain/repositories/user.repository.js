const Model = require('../models/user.model');

class UserRepository {
  static find(filters) {
    return Model.find(filters);
  }

  static findOne(filters) {
    return Model.findOne(filters);
  }

  static async create(data) {
    const user = await this.findOne({ localId: data.localId });
    return user || Model.create(data);
  }
}

module.exports = UserRepository;
