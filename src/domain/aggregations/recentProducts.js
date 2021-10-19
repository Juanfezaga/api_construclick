const { Types } = require('mongoose');
const UserModel = require('../models/user.model');
const { limitGrills } = require('../../application/constants/grillMarketplace');

const recentProductsAggregate = async (cityId) => {
  const products = await UserModel.aggregate([
    {
      $match: {
        type: 'empresa',
        cityId: Types.ObjectId(cityId),
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
      },
    },
    {
      $match: {
        state: 'ENABLED',
      },
    },
    {
      $sort: {
        createdAt: 1,
      },
    },
    {
      $limit: limitGrills,
    },
  ]);
  return products;
};

module.exports = recentProductsAggregate;
