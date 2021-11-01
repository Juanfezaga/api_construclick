const { success } = require('../../helpers/api.helper');

const { createCalculator } = require('../../../domain/useCases/calculator/calculator.service');

const createCalculatorController = async (req, res, next) => {
  try {
    const response = await createCalculator(req.body);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCalculatorController,
};
