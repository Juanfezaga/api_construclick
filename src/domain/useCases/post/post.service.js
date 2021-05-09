const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const Repository = require('../../repositories/post.repository');

const createPost = async (data) => {
  try {
    const post = await Repository.create(data);
    return post;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('POST:internal'),
      error,
    });
  }
};

const getPosts = async ({ notIds, type }) => {
  try {
    const posts = await Repository.findComplex(notIds, type, 5);
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
};
