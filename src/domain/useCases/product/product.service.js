const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const aggregates = require('../../aggregations/aggregates');
const Repository = require('../../repositories/product.repository');

const getProductById = async (id) => {
  try {
    const product = await Repository.findById(id);
    return product;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const createProduct = async (data) => {
  try {
    const product = await Repository.create(data);
    return product;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const getProducts = async ({ notIds, filters, search }) => {
  try {
    const products = await Repository.findComplex(notIds, filters, 10, search);
    return products;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const getProductsByCategory = async (categoryId) => {
  try {
    const products = await aggregates.productsByCategory(categoryId);
    return products;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const updateProduct = async ({ id, newData }) => {
  try {
    await Repository.update(id, newData);
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const deleteProduct = async (id) => {
  try {
    await Repository.delete(id);
  } catch (error) {
    console.log(error);
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getProductsByCategory,
};
