const {
  CustomError,
  getErrorByName,
} = require('../../../infrastructure/helpers/error.helper');
const aggregations = require('../../aggregations/aggregates');
const { grillMarketplaceList } = require('../../../application/constants/grillMarketplace');

const getGrillMarketplace = (cityId) => {
  try {
    const grills = grillMarketplaceList.map(async ({ name, aggregate }) => ({
      name,
      products: await aggregations[aggregate](cityId),
    }));
    const result = Promise.all(grills);
    return result;
  } catch (error) {
    throw new CustomError({
      ...getErrorByName('MKTP:internal'),
      error,
    });
  }
};

module.exports = {
  getGrillMarketplace,
};
