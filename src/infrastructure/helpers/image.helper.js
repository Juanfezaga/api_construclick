const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const { CustomError, getErrorByName } = require('./error.helper');
const { config } = require('../../application/config');

aws.config.update({
  secretAccessKey: config.AWS.keySecret,
  accessKeyId: config.AWS.keyId,
  region: config.AWS.region,
});

const fileFilter = (_req, file, cb) => {
  switch (String(file.mimetype).toLowerCase()) {
    case 'image/gif':
    case 'image/jpeg':
    case 'image/jpg':
    case 'image/png':
      cb(null, true);
      break;
    default:
      cb(
        new CustomError({
          ...getErrorByName('IMAGE:mimetype'),
        }),
        false,
      );
  }
};
class ImageRepository {
  constructor() {
    this.s3 = new aws.S3();
  }

  uploadImage() {
    return multer({
      fileFilter,
      storage: multerS3({
        s3: this.s3,
        bucket: config.AWS.bucket,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata(_req, file, cb) {
          cb(null, {
            fieldName: file.fieldname,
            contentType: file.mimetype,
          });
        },
        key(_req, _file, cb) {
          cb(null, `${Date.now().toString()}`);
        },
      }),
    });
  }
}

module.exports = ImageRepository;
