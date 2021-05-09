const { success } = require('../../helpers/api.helper');

const { createPost, getPosts } = require('../../../domain/useCases/post/post.service');

const createPostController = async (req, res, next) => {
  try {
    const response = await createPost(req.body);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getPostsControllers = async (req, res, next) => {
  try {
    const { notIds, type } = req.query;
    const response = await getPosts({ notIds, type });
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPostsControllers,
  createPostController,
};
