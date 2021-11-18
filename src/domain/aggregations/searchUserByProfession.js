const UserModel = require('../models/user.model');

const recentProductsAggregate = async (search) => {
  const users = await UserModel.aggregate([
    {
      $lookup: {
        from: 'professions',
        localField: 'profession_id',
        foreignField: '_id',
        as: 'profession',
      },
    },
    {
      $unwind: {
        path: '$profession',
        includeArrayIndex: 'index',
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        _id: '$_id',
        name: {
          $concat: ['$name', ' ', '$last_name'],
        },
        profession: '$profession.name',
        image_url: '$image_url',
      },
    },
    {
      $match: {
        profession: {
          $regex: `^.*(${search}).*$`,
          $options: 'si',
        },
      },
    },
  ]);
  return users;
};

module.exports = recentProductsAggregate;
