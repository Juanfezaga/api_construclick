const router = require('express').Router();

const {
  getProductsControllers,
  createProductController,
  getProductsByCompanyControllers,
  getProductsWithSearchControllers,
} = require('../../infrastructure/entryPoints/api/product.controller');

router.post('/', createProductController);
router.get('/', getProductsControllers);
router.get('/search', getProductsWithSearchControllers);
router.get('/:userId', getProductsByCompanyControllers);
module.exports = router;
