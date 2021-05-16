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
}

module.exports = Repository;
