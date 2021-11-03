const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const aggregations = require('../../aggregations/aggregates');
const Repository = require('../../repositories/post.repository');

const createPost = async (data) => {
  try {
    const post = await Repository.create(data);
    return post;
  } catch (error) {
    console.log(error);
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const getPosts = async (type) => {
  try {
    const posts = await aggregations.getPosts(type);
    return posts;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const getProjects = async (userId) => {
  try {
    const posts = await aggregations.getProjects(userId);
    return posts;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

module.exports = {
  getPosts,
  createPost,
  getProjects,
};
