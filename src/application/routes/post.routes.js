const router = require('express').Router();

const {
  getPostsControllers,
  createPostController,
  getProjectsControllers,
  getPostByIdControllers,
  getPostsByUserIdControllers,
} = require('../../infrastructure/entryPoints/api/post.controller');

router.post('/', createPostController);

router.get('/id', getPostByIdControllers);
router.get('/projects', getProjectsControllers);
router.get('/', getPostsControllers);
router.get('/userId', getPostsByUserIdControllers);

module.exports = router;
