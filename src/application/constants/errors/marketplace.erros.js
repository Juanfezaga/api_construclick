const {
  HTTP_STATUS_NOT_FOUND,
} = require('../api');

const base = 'MKTP';

module.exports = [
  {
    name: `${base}:not_found`,
    statusCode: HTTP_STATUS_NOT_FOUND,
    msg: 'El servicio no ha sido encontrado.',
  },
  {
    name: `${base}:internal`,
    statusCode: HTTP_STATUS_NOT_FOUND,
    msg: 'Error interno, vuelva a intentarlo.',
  },
];
