const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/category.repository');

const createCategory = async (data) => {
  try {
    const category = await Repository.create(data);
    return category;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('category:internal'),
      error,
    });
  }
};

const getCategorys = async () => {
  try {
    const categorys = await Repository.find();
    return categorys;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('category:internal'),
      error,
    });
  }
};

module.exports = {
  getCategorys,
  createCategory,
};
