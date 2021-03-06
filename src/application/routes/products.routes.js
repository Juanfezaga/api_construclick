const router = require('express').Router();

const {
  getProductsControllers,
  createProductController,
  updateProductController,
  deleteProductController,
  searchProductsController,
  getProductByIdControllers,
  getProductsByCompanyControllers,
  getProductsByCategoryControllers,
  getProductsWithSearchWithUserControllers,
} = require('../../infrastructure/entryPoints/api/product.controller');

router.post('/', createProductController);

router.get('/category', getProductsByCategoryControllers);
router.get('/search/:search', searchProductsController);
router.get('/id/:id', getProductByIdControllers);

router.get('/:userId/search', getProductsWithSearchWithUserControllers);
router.get('/:userId', getProductsByCompanyControllers);

router.get('/', getProductsControllers);

router.put('/:id', updateProductController);

router.delete('/:id', deleteProductController);

module.exports = router;
