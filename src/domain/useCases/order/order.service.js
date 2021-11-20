/* eslint-disable no-underscore-dangle */
const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/order.repository');
const { statesOrder } = require('../../../application/constants/order');
const ShoppingCart = require('../../repositories/shoppingCart.repository');
const ShoppingCartItems = require('../../repositories/shoppingCartItem.repository');
const { statesShoppingCart } = require('../../../application/constants/shoppingCart');
const { statesShoppingCartItems } = require('../../../application/constants/shoppingCart');

const createOrder = async (shoppingCartId) => {
  try {
    const items = await ShoppingCartItems.find({
      shoppingCartId,
    });
    if (items && items.length > 0) {
      const totalValue = items.map((item) => item.unitPrice * item.quantity)
        .reduce((prev, current) => prev + current);
      const order = await Repository.create({
        shoppingCartId,
        state: statesOrder[0],
        totalAmount: totalValue,
        paymentDate: null,
        responsePayment: null,
      });
      await ShoppingCart.update(shoppingCartId, { state: statesShoppingCart[2] });
      return order;
    }
    throw new Error();
  } catch (error) {
    console.error(error);
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
      responsePayment: JSON.stringify(response),
      paymentDate: new Date(),
    });
    const order = await Repository.findById(id);
    await ShoppingCart.update(order.shoppingCartId, { state: statesShoppingCart[1] });
    const items = await ShoppingCartItems.find({ shoppingCartId: order.shoppingCartId });
    await Promise.all(items.map((item) => ShoppingCartItems.update(item._id, {
      ...item,
      state: statesShoppingCartItems[1],
    })));
    return true;
  } catch (error) {
    console.error(error);
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
      responsePayment: JSON.stringify(response),
    });
  } catch (error) {
    console.log(error);
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

const setPaymentResponse = async (data) => {
  const id = data.reference_sale;
  const success = data.response_code_pol === 1;
  if (success) {
    await setPaymentResponseSuccess(id, data);
  } else {
    await setPaymentResponseFail(id, data);
  }
  return true;
};

module.exports = {
  createOrder,
  getOrderById,
  setPaymentResponse,
  setPaymentResponseFail,
  setPaymentResponseSuccess,
};
