const {
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_SERVER_ERROR_INTERNAL,
  HTTP_STATUS_UNAUTHORIZED,
} = require('../api');

const base = 'USER';

module.exports = [
  {
    name: `${base}:not_found`,
    statusCode: HTTP_STATUS_NOT_FOUND,
    msg: 'El usuario no ha sido encontrado.',
  },
  {
    name: `${base}:internal`,
    statusCode: HTTP_STATUS_SERVER_ERROR_INTERNAL,
    msg: 'Error interno, vuelva a intentarlo.',
  },
  {
    name: `${base}:create:exist_email`,
    statusCode: HTTP_STATUS_BAD_REQUEST,
    msg: 'Este correo ya está en uso.',
  },
  {
    name: `${base}:create:exist_phone`,
    statusCode: HTTP_STATUS_BAD_REQUEST,
    msg: 'Este celular ya está en uso.',
  },
  {
    name: `${base}:credentials`,
    statusCode: HTTP_STATUS_UNAUTHORIZED,
    msg: 'Credenciales incorrectas',
  },
];
