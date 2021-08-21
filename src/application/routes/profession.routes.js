const router = require('express').Router();

const {
  getProfessionControllers,
  createProfessionController,
} = require('../../infrastructure/entryPoints/api/profession.controller');

router.post('/', createProfessionController);
router.get('/', getProfessionControllers);

module.exports = router;
