const { bootMongoose } = require('./driverAdapters/mongoose');

const boot = async () => {
  await bootMongoose();
};

module.exports = {
  boot,
};
