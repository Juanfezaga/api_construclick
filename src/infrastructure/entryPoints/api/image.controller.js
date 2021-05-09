const { success } = require('../../helpers/api.helper');
const ImageRepository = require('../../helpers/image.helper');

const uploadImageController = async (req, res, next) => {
  try {
    const singleUpload = new ImageRepository().uploadImage().single('image');
    singleUpload(req, res, (error) => {
      if (error) {
        next(error);
      } else {
        success(res, req.file.location);
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadImageController,
};
