const router = require('express').Router();

const {
  uploadImageController,
} = require('../../infrastructure/entryPoints/api/image.controller');

router.post('/', uploadImageController);

module.exports = router;
