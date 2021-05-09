const { config } = require('../config');
const { getErrorStructure } = require('../../infrastructure/helpers/error.helper');

const errorMiddleware = (err, _req, res, next) => {
  const errorResponse = getErrorStructure(err);
  const bodyResponse = { error: [errorResponse] };
  if (config.ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error(err);
  }
  res.status(errorResponse.status).json(bodyResponse);
  next();
};

module.exports = errorMiddleware;
