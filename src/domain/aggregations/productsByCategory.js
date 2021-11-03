const { Types } = require('mongoose');
const UserModel = require('../models/user.model');

const productsByCategoryAggregate = async (categoryId) => {
  const products = await UserModel.aggregate([
    {
      $match: {
        type: 'empresa',
      },
    },
    {
      $lookup: {
        from: 'products',
        localField: '_id',
        foreignField: 'userId',
        as: 'product',
      },
    },
    {
      $unwind: {
        path: '$product',
        includeArrayIndex: 'index',
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        _id: '$product._id',
        title: '$product.title',
        userId: '$_id',
        userName: '$name',
        image_url: '$product.image_url',
        price: '$product.price',
        discount: '$product.discount',
        createdAt: '$product.createdAt',
        state: '$product.state',
        categoryId: '$product.categoryId',
      },
    },
    {
      $match: {
        state: 'ENABLED',
        categoryId: Types.ObjectId(categoryId),
      },
    },
  ]);
  return products;
};

module.exports = productsByCategoryAggregate;
