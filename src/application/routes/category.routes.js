const router = require('express').Router();

const {
  createCategoryController,
  getCategoryControllers,
} = require('../../infrastructure/entryPoints/api/category.controller');

router.post('/', createCategoryController);
router.get('/', getCategoryControllers);

module.exports = router;
