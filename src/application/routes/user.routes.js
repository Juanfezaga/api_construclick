const router = require('express').Router();

const {
  signInController,
  registerController,
  getDataBasicUserController,
} = require('../../infrastructure/entryPoints/api/user.controller');

router.post('/auth', signInController);
router.post('/register', registerController);

router.get('/:id', getDataBasicUserController);

module.exports = router;
