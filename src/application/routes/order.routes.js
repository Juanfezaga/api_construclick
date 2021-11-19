const router = require('express').Router();

const {
  createOrderController,
  getOrderByIdController,
} = require('../../infrastructure/entryPoints/api/order.controller');

router.post('/:shoppingCartId', createOrderController);

router.get('/:id', getOrderByIdController);

module.exports = router;
