const { success } = require('../../helpers/api.helper');

const { getGrillMarketplace } = require('../../../domain/useCases/marketplace/marketplace.service');

const getGrillMarketplaceController = async (req, res, next) => {
  try {
    const { cityId } = req.query;
    const response = await getGrillMarketplace(cityId);
    success(res, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGrillMarketplaceController,
};
