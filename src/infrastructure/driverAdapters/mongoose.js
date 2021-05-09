const mongoose = require('mongoose');

const { config } = require('../../application/config');

const bootMongoose = () => {
  console.log('Mongo init loader');
  return mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  bootMongoose,
};
