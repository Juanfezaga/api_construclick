const {
  HTTP_STATUS_NOT_FOUND,
} = require('../api');

const base = 'USER';

module.exports = [
  {
    name: `${base}:not_found`,
    statusCode: HTTP_STATUS_NOT_FOUND,
    msg: 'El usuario no ha sido encontrado.',
  },
];
