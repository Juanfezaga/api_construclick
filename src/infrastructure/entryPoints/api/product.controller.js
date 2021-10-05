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

const getProductsByCompanyControllers = async (req, res, next) => {
  try {
    const { notIds, filters } = req.query;
    const { userId } = req.params;
    const response = await getProducts({
      notIds,
      filters: {
        ...filters,
        userId,
      },
    });
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getProductsWithSearchControllers = async (req, res, next) => {
  try {
    const { notIds, filters, q } = req.query;
    const response = await getProducts({
      notIds,
      filters,
      search: q,
    });
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductsControllers,
  createProductController,
  getProductsByCompanyControllers,
  getProductsWithSearchControllers,
};
