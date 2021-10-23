/* eslint-disable no-console */
const { Types } = require('mongoose');

const Repository = require('./repository');
const Model = require('../models/shoppingCartItem.model');

class ShoppingCartItemRepository extends Repository {
  constructor() {
    super(Model);
  }

  async aggregateFindItems(shoppingCartId) {
    return this.model.aggregate([
      {
        $match: {
          shoppingCartId: Types.ObjectId(shoppingCartId),
        },
      },
      {
        $lookup: {
          from: 'products',
          localField: 'productId',
          foreignField: '_id',
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
          productId: '$product.id',
          unitPrice: '$product.price',
          titleProduct: '$product.title',
          image_url: '$product.image_url',
          quantity: '$quantity',
        },
      },
    ]);
  }
}

module.exports = new ShoppingCartItemRepository();
