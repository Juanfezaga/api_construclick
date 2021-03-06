const { success } = require('../../helpers/api.helper');

const {
  createPost, getPosts, getProjects, getPostById, getPostsByUserId,
} = require('../../../domain/useCases/post/post.service');

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
    const { type } = req.query;
    const response = await getPosts(type);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getPostsByUserIdControllers = async (req, res, next) => {
  try {
    const { userId } = req.query;
    const response = await getPostsByUserId(userId);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getProjectsControllers = async (req, res, next) => {
  try {
    const { userId } = req.query;
    const response = await getProjects(userId);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

const getPostByIdControllers = async (req, res, next) => {
  try {
    const { id } = req.query;
    const response = await getPostById(id);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPostsControllers,
  createPostController,
  getProjectsControllers,
  getPostByIdControllers,
  getPostsByUserIdControllers,
};
