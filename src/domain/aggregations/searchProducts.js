const ProductModel = require('../models/product.model');

const searchProductsAggregate = async (search) => {
  const products = await ProductModel.aggregate([
    {
      $match: {
        $or: [
          {
            title: {
              $regex: `^.*(${search}).*$`,
              $options: 'si',
            },
          },
          {
            description: {
              $regex: `^.*(${search}).*$`,
              $options: 'si',
            },
          },
          {
            tags: {
              $elemMatch: {
                $regex: `^.*(${search}).*$`,
                $options: 'si',
              },
            },
          },
        ],
        state: 'ENABLED',
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
      $unwind: {
        path: '$user',
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        _id: '$_id',
        title: '$title',
        userId: '$user._id',
        userName: '$user.name',
        image_url: '$image_url',
        price: '$price',
        discount: '$discount',
        createdAt: '$createdAt',
        state: '$state',
        categoryId: '$categoryId',
        tags: '$tags',
      },
    },
  ]);
  return products;
};

module.exports = searchProductsAggregate;
