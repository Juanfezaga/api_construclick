const router = require('express').Router();

const {
  calculateController,
  createCalculatorController,
} = require('../../infrastructure/entryPoints/api/calculator.controller');

router.post('/calculate', calculateController);
router.post('/', createCalculatorController);

module.exports = router;
