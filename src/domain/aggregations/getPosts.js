const PostModel = require('../models/post.model');

const getPostsAggregate = async (type) => {
  const posts = await PostModel.aggregate([
    {
      $match: {
        type,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    },
    {
      $project: {
        _id: '$_id',
        imagesUrl: '$imagesUrl',
        userId: '$userId',
        title: '$title',
        createdAt: '$createdAt',
        type: '$type',
        attributes: '$attributes',
        user: {
          $arrayElemAt: ['$user', 0],
        },
      },
    },
    {
      $project: {
        _id: '$_id',
        imagesUrl: '$imagesUrl',
        userId: '$userId',
        title: '$title',
        type: '$type',
        attributes: '$attributes',
        userName: '$user.name',
        userLastname: '$user.last_name',
        userImage: '$user.image_url',
        createdAt: '$createdAt',
      },
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
  ]);
  return posts;
};

module.exports = getPostsAggregate;
