const router = require('express').Router();

const {
  createOrderController,
} = require('../../infrastructure/entryPoints/api/order.controller');

router.post('/:shoppingCartId', createOrderController);

module.exports = router;
