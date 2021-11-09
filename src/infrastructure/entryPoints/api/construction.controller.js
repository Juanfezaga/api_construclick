const { success } = require('../../helpers/api.helper');

const {
  createConstruction,
  updateConstruction,
  getConstructionById,
  getConstructionsByUser,
} = require('../../../domain/useCases/construction/construction.service');

const createConstructionController = async (req, res, next) => {
  try {
    const response = await createConstruction(req.body);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const updateConstructionController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { newData } = req.body;
    const response = await updateConstruction(id, newData);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getConstructionByUserIdControllers = async (req, res, next) => {
  try {
    const { userId } = req.query;
    const response = await getConstructionsByUser(userId);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getConstructionByIdControllers = async (req, res, next) => {
  try {
    const { id } = req.query;
    const response = await getConstructionById(id);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createConstructionController,
  updateConstructionController,
  getConstructionByIdControllers,
  getConstructionByUserIdControllers,
};
