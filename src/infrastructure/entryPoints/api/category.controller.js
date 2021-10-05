const { success } = require('../../helpers/api.helper');

const { createCategory, getCategorys } = require('../../../domain/useCases/category/category.service');

const createCategoryController = async (req, res, next) => {
  try {
    const response = await createCategory(req.body);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getCategoryControllers = async (req, res, next) => {
  try {
    const response = await getCategorys();
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategoryControllers,
  createCategoryController,
};
