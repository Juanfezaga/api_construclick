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

  async update(id, data) {
    const doc = await this.findById(id);
    if (doc) {
      doc.overwrite(data);
      await doc.save();
      return doc;
    }
    throw new Error();
  }

  delete(id) {
    return this.model.deleteOne({ _id: id });
  }
}

module.exports = Repository;
