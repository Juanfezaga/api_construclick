const router = require('express').Router();

const {
  getPostsControllers,
  createPostController,
  getProjectsControllers,
} = require('../../infrastructure/entryPoints/api/post.controller');

router.post('/', createPostController);

router.get('/projects', getProjectsControllers);
router.get('/', getPostsControllers);

module.exports = router;
