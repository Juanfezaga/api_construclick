const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/user.repository');

const signIn = async (data) => {
  try {
    const user = await Repository.create(data);
    return user;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('USER:internal'),
      error,
    });
  }
};

const getDataBasicUser = async (id) => {
  try {
    const user = await Repository.findOne({ localId: id });
    return user;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('USER:not_found'),
      error,
    });
  }
};

module.exports = {
  signIn,
  getDataBasicUser,
};
