const router = require('express').Router();

const {
  signInController,
  registerController,
  getDataBasicUserController,
  searchUserByProfessionController,
} = require('../../infrastructure/entryPoints/api/user.controller');

router.post('/auth', signInController);
router.post('/register', registerController);

router.get('/search-by-profession/:search', searchUserByProfessionController);
router.get('/:id', getDataBasicUserController);

module.exports = router;
