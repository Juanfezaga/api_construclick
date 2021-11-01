const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/calculator.repository');

const createCalculator = async (data) => {
  try {
    const calculate = await Repository.create(data);
    return calculate;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('category:internal'),
      error,
    });
  }
};

const calculate = () => {
  try {
    console.log("Here");
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('category:internal'),
      error,
    });
  }
};

module.exports = {
  createCalculator,
};
