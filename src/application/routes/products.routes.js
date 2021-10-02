const router = require('express').Router();

const {
  getProductsControllers,
  createProductController,
} = require('../../infrastructure/entryPoints/api/product.controller');

router.post('/', createProductController);
router.get('/', getProductsControllers);

module.exports = router;
