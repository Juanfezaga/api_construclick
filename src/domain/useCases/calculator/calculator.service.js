const Equations = require('equations').default;

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

const calculate = async (nameCalculator, values) => {
  try {
    const calculator = await Repository.findOne({
      name: nameCalculator,
    });
    return calculator.equations.map(({ name, equation }) => {
      const keys = Object.keys(values);
      let eqEnd = equation;
      for (let index = 0; index < keys.length; index += 1) {
        eqEnd = eqEnd.replace(`{${keys[index]}}`, values[keys[index]]);
      }
      return {
        name,
        result: Equations.solve(eqEnd),
      };
    });
  } catch (error) {
    console.error(error);
    throw new CustomError({
      ...getErrorByName('category:internal'),
      error,
    });
  }
};

module.exports = {
  calculate,
  createCalculator,
};
