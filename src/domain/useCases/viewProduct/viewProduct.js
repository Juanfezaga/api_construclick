const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/viewProduct.repository');

const getViewsByProductId = async (id, filters, limit) => {
  try {
    const product = await Repository.findComplex(id, filters, limit);
    return product;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const registerViewInProduct = async (productId, userId) => {
  try {
    const product = await Repository.create({
      productId,
      userId,
    });
    return product;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

module.exports = {
  getViewsByProductId,
  registerViewInProduct,
};
