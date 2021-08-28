const router = require('express').Router();

const {
  createCityController,
  getCityControllers,
} = require('../../infrastructure/entryPoints/api/city.controller');

router.post('/', createCityController);
router.get('/', getCityControllers);

module.exports = router;
