const { success } = require('../../helpers/api.helper');

const { createProduct, getProducts } = require('../../../domain/useCases/product/product.service');

const createProductController = async (req, res, next) => {
  try {
    const response = await createProduct(req.body);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getProductsControllers = async (req, res, next) => {
  try {
    const { notIds, filters } = req.query;
    const response = await getProducts({ notIds, filters });
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductsControllers,
  createProductController,
};
