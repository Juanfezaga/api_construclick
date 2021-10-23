const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/shoppingCart.repository');
const RepositoryItem = require('../../repositories/shoppingCartItem.repository');
const { statesShoppingCart } = require('../../../application/constants/shoppingCart');

const initShoppingCart = async (userId) => {
  try {
    let items = [];
    let shoppingCart = await Repository.findOne({
      userId,
      state: statesShoppingCart[0],
    });
    if (shoppingCart) {
      console.log(shoppingCart.id);
      items = await RepositoryItem.aggregateFindItems(shoppingCart.id);
    } else {
      shoppingCart = await Repository.create({
        userId,
        state: statesShoppingCart[0],
      });
    }
    return {
      ...shoppingCart._doc,
      items,
      total: items.length > 0 && items.map(({ unitPrice, quantity }) => unitPrice * quantity)
        .reduce((prev, current) => current + prev),
    };
  } catch (error) {
    console.log(error);
    throw new CustomError({
      ...getErrorByName('SHOPPING_CART:internal'),
      error,
    });
  }
};

const addItemToShoppingCart = async (productId, shoppingCartId, unitPrice, quantity) => {
  try {
    const item = await RepositoryItem.create({
      productId,
      shoppingCartId,
      unitPrice,
      quantity,
    });
    return item;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('SHOPPING_CART:internal'),
      error,
    });
  }
};

const updateItemShoppingCart = async (id, newData) => {
  try {
    await Repository.update(id, newData);
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('SHOPPING_CART:internal'),
      error,
    });
  }
};

const removeItemToShoppingCart = async (productId, shoppingCartId) => {
  try {
    await RepositoryItem.deleteMany({
      productId,
      shoppingCartId,
    });
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('SHOPPING_CART:internal'),
      error,
    });
  }
};

module.exports = {
  initShoppingCart,
  addItemToShoppingCart,
  updateItemShoppingCart,
  removeItemToShoppingCart,
};
