const router = require('express').Router();

const { getGrillMarketplaceController } = require('../../infrastructure/entryPoints/api/marketplace.controller');

router.get('/', getGrillMarketplaceController);

module.exports = router;
