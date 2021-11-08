const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/construction.repository');

const createConstruction = async (data) => {
  try {
    const construction = await Repository.create(data);
    return construction;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const getConstructionById = async (id) => {
  try {
    const construction = await Repository.findById(id);
    return construction;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const getConstructionsByUser = async (userId) => {
  try {
    const constructions = await Repository.find({ userId });
    return constructions;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

module.exports = {
  createConstruction,
  getConstructionById,
  getConstructionsByUser,
};
