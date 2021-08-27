const { success } = require('../../helpers/api.helper');

const { getProfessions, createProfession } = require('../../../domain/useCases/profession/profession.service');

const createProfessionController = async (req, res, next) => {
  try {
    const response = await createProfession(req.body);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getProfessionControllers = async (req, res, next) => {
  try {
    const response = await getProfessions();
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfessionControllers,
  createProfessionController,
};
