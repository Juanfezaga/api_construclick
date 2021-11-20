/* eslint-disable no-underscore-dangle */
class Repository {
  constructor(model) {
    this.model = model;
  }

  find(filters) {
    return this.model.find(filters);
  }

  findOne(filters) {
    return this.model.findOne(filters);
  }

  create(data) {
    return this.model.create(data);
  }

  findById(id) {
    return this.model.findById(id);
  }

  async findOrCreate(data, conditions) {
    let doc = await this.findOne(conditions || data);
    if (!doc) {
      doc = await this.create(data);
    }
    return doc;
  }

  async update(id, data, withoutSync = false) {
    if (withoutSync) {
      return this.model.update(id, data);
    }
    const doc = await this.findById(id);
    if (doc) {
      doc.overwrite({ ...doc._doc, ...data });
      await doc.save();
      return doc;
    }
    throw new Error();
  }

  delete(id) {
    return this.model.deleteOne({ _id: id });
  }

  deleteMany(conditions) {
    return this.model.deleteMany(conditions);
  }
}

module.exports = Repository;
