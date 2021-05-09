const { v4: uuid } = require('uuid');

const { findOneInArray } = require('./array.helper');
const errorsList = require('../../application/constants/errors');
const { dataStatus } = require('../../application/constants/api');

class CustomError {
  constructor({
    name, statusCode, msg, error,
  }) {
    const e = error || new Error();
    this.code = name;
    this.status = statusCode;
    this.message = msg;
    this.stack = e.stack;
    this.error = e;
  }
}

CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;

const getInfoFromStatus = (statusCode) => findOneInArray(dataStatus, 'statusCode', statusCode);

const getErrorByName = (name) => findOneInArray(errorsList, 'name', name);

const getErrorStructure = (err) => {
  const info = getInfoFromStatus(err.status || 500) || {};

  return {
    id: uuid(),
    href: info.url,
    status: info.statusCode,
    code: err.code || 'NO_DEFINED',
    title: info.title,
    detail: err.message || 'NO_DEFINED',
  };
};

module.exports = {
  CustomError,
  getErrorByName,
  getErrorStructure,
};
