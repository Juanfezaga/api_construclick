const router = require('express').Router();

const {
  createConstructionController,
  updateConstructionController,
  getConstructionByIdControllers,
  getConstructionByUserIdControllers,
} = require('../../infrastructure/entryPoints/api/construction.controller');

router.post('/', createConstructionController);

router.get('/id', getConstructionByIdControllers);
router.get('/userId', getConstructionByUserIdControllers);

router.put('/:id', updateConstructionController);

module.exports = router;
