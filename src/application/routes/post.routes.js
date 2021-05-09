const router = require('express').Router();

const {
  getPostsControllers,
  createPostController,
} = require('../../infrastructure/entryPoints/api/post.controller');

router.post('/', createPostController);
router.get('/', getPostsControllers);

module.exports = router;
