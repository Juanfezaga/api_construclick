const { success } = require('../../helpers/api.helper');

const {
  getProductById, getProductsByCategory, searchProducts,
  createProduct, getProducts, updateProduct, deleteProduct,
} = require('../../../domain/useCases/product/product.service');

const createProductController = async (req, res, next) => {
  try {
    const response = await createProduct(req.body);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const searchProductsController = async (req, res, next) => {
  try {
    const response = await searchProducts(req.params.search);
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

const getProductsByCategoryControllers = async (req, res, next) => {
  try {
    const { categoryId } = req.query;
    const response = await getProductsByCategory(categoryId);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getProductByIdControllers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await getProductById(id);
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

const getProductsWithSearchWithUserControllers = async (req, res, next) => {
  try {
    const { notIds, filters, q } = req.query;
    const { userId } = req.params;
    const response = await getProducts({
      notIds,
      filters: {
        ...filters,
        userId,
      },
      search: q,
    });
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const updateProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const response = await updateProduct({ id, newData: data });
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const deleteProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await deleteProduct(id);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductsControllers,
  updateProductController,
  createProductController,
  deleteProductController,
  searchProductsController,
  getProductByIdControllers,
  getProductsByCompanyControllers,
  getProductsByCategoryControllers,
  getProductsWithSearchControllers,
  getProductsWithSearchWithUserControllers,
};
