const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/profession.repository');

const createProfession = async (data) => {
  try {
    const profession = await Repository.create(data);
    return profession;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('PROFESSION:internal'),
      error,
    });
  }
};

const getProfessions = async () => {
  try {
    const professions = await Repository.find();
    return professions;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('PROFESSION:internal'),
      error,
    });
  }
};

module.exports = {
  getProfessions,
  createProfession,
};
