const { config } = require('../config');
const { CustomError, getErrorByName } = require('../../infrastructure/helpers/error.helper');

const middleware = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property], {
    allowUnknown: false,
    abortEarly: true,
    convert: false,
  });
  if (!error) {
    next();
  } else {
    if (config.ENV === 'development') {
      console.log(error.details);
    }
    throw new CustomError({
      ...getErrorByName('API:schema'),
      error,
    });
  }
};
module.exports = middleware;
