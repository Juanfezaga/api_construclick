const { success } = require('../../helpers/api.helper');

const { createOrder, getOrderById, setPaymentResponse } = require('../../../domain/useCases/order/order.service');

const createOrderController = async (req, res, next) => {
  try {
    const { shoppingCartId } = req.params;
    const response = await createOrder(shoppingCartId);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getOrderByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await getOrderById(id);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const confirmationPayuController = async (req, res, next) => {
  try {
    const data = req.body;
    await setPaymentResponse(data);
    success(res, true);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrderController,
  getOrderByIdController,
  confirmationPayuController,
};
