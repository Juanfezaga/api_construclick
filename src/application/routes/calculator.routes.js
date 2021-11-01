const router = require('express').Router();

const {
  createCalculatorController,
} = require('../../infrastructure/entryPoints/api/calculator.controller');

router.post('/', createCalculatorController);

module.exports = router;
