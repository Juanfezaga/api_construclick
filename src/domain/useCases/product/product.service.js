const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/product.repository');

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

const getProducts = async ({ notIds, filters }) => {
  try {
    const products = await Repository.findComplex(notIds, filters, 10);
    return products;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
};
