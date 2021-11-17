const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/order.repository');
const { statesOrder } = require('../../../application/constants/order');
const ShoppingCartItems = require('../../repositories/shoppingCartItem.repository');

const createOrder = async (shoppingCartId) => {
  try {
    const items = ShoppingCartItems.findOne({
      shoppingCartId,
    });
    if (items) {
      const totalValue = items.reduce(
        (prev, current) => prev + (current.unitPrice * current.quantity),
      );
      const order = await Repository.create({
        shoppingCartId,
        state: statesOrder[0],
        totalAmount: totalValue,
        paymentDate: null,
        responsePayment: null,
      });
      return order;
    }
    throw new Error();
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('PROFESSION:internal'),
      error,
    });
  }
};

const setPaymentResponseSuccess = async (id, response) => {
  try {
    await Repository.update(id, {
      state: statesOrder[1],
      responsePayment: response,
    });
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('PROFESSION:internal'),
      error,
    });
  }
};

const setPaymentResponseFail = async (id, response) => {
  try {
    await Repository.update(id, {
      state: statesOrder[2],
      responsePayment: response,
    });
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('PROFESSION:internal'),
      error,
    });
  }
};

const getOrderById = async (id) => {
  try {
    const order = await Repository.findById(id);
    return order;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('PROFESSION:internal'),
      error,
    });
  }
};

module.exports = {
  createOrder,
  getOrderById,
  setPaymentResponseFail,
  setPaymentResponseSuccess,
};
