const router = require('express').Router();

const {
  signInController,
  getDataBasicUserController,
} = require('../../infrastructure/entryPoints/api/user.controller');

router.post('/', signInController);
router.get('/:id', getDataBasicUserController);

module.exports = router;
