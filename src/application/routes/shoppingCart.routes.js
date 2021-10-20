const router = require('express').Router();

const {
  addItemToCartController,
  removeItemToCartController,
  getShoppingCartByUserIdController,
} = require('../../infrastructure/entryPoints/api/shoppingCart.controller');

router.get('/:userId', getShoppingCartByUserIdController);

router.post('/add-item', addItemToCartController);
router.post('/remove-item', removeItemToCartController);

module.exports = router;
