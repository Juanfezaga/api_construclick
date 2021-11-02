const { success } = require('../../helpers/api.helper');

const { calculate, createCalculator } = require('../../../domain/useCases/calculator/calculator.service');

const calculateController = async (req, res, next) => {
  try {
    const { name, values } = req.body;
    const response = await calculate(name, values);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const createCalculatorController = async (req, res, next) => {
  try {
    const response = await createCalculator(req.body);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  calculateController,
  createCalculatorController,
};
