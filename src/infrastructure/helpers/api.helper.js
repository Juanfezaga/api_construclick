const {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_SERVER_ERROR_INTERNAL,
  HTTP_STATUS_UNAUTHORIZED,
  HTTP_STATUS_SUCCESS,
} = require('../../application/constants/api');

exports.success = (res, data) => {
  res.status(HTTP_STATUS_SUCCESS).json({ data });
};

exports.badRequest = (res, error) => {
  res.status(HTTP_STATUS_BAD_REQUEST).json({ error });
};

exports.notFound = (res, error) => {
  res.status(HTTP_STATUS_NOT_FOUND).json({ error });
};

exports.unauthorized = (res, error) => {
  res.status(HTTP_STATUS_UNAUTHORIZED).json({ error });
};

exports.internalError = (res, error) => {
  res.status(HTTP_STATUS_SERVER_ERROR_INTERNAL).json({ error });
};
