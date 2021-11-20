const router = require('express').Router();

const {
  createOrderController,
  getOrderByIdController,
  confirmationPayuController,
} = require('../../infrastructure/entryPoints/api/order.controller');

router.post('/confirmation', confirmationPayuController);
router.post('/:shoppingCartId', createOrderController);

router.get('/:id', getOrderByIdController);

module.exports = router;
