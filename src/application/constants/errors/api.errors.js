const { HTTP_STATUS_BAD_REQUEST } = require('../api');

const base = 'API';

module.exports = [
  {
    name: `${base}:schema`,
    statusCode: HTTP_STATUS_BAD_REQUEST,
    msg: 'La informacion enviada no es valida',
  },
];
