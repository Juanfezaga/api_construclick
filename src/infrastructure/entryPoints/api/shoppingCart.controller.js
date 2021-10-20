const { success } = require('../../helpers/api.helper');
const {
  initShoppingCart,
  addItemToShoppingCart,
  updateItemShoppingCart,
  removeItemToShoppingCart,
} = require('../../../domain/useCases/shoppingCart/shoppingCart.service');

const getShoppingCartByUserIdController = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const response = await initShoppingCart(userId);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const addItemToCartController = async (req, res, next) => {
  try {
    const {
      shoppingCartId, productId, quantity, unitPrice,
    } = req.body;

    const response = await addItemToShoppingCart(productId, shoppingCartId, unitPrice, quantity);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const removeItemToCartController = async (req, res, next) => {
  try {
    const {
      shoppingCartId, productId,
    } = req.body;

    const response = await removeItemToShoppingCart(productId, shoppingCartId);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addItemToCartController,
  removeItemToCartController,
  getShoppingCartByUserIdController,
};
