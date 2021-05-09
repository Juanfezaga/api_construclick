const HTTP_STATUS_SUCCESS = 200;

const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_UNAUTHORIZED = 401;

const HTTP_STATUS_SERVER_ERROR_INTERNAL = 500;

const dataStatus = [
  {
    statusCode: 400,
    title: 'Bad Request',
    url: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
  },
  {
    statusCode: 401,
    title: 'Unauthorized',
    url: 'https://tools.ietf.org/html/rfc7231#section-3.1',
  },
  {
    statusCode: 403,
    title: 'Forbidden',
    url: 'https://tools.ietf.org/html/rfc7231#section-6.5.3',
  },
  {
    statusCode: 404,
    title: 'Not Found',
    url: 'https://tools.ietf.org/html/rfc7231#section-6.5.4',
  },
  {
    statusCode: 500,
    title: 'Internal Server Error',
    url: 'https://tools.ietf.org/html/rfc7231#section-6.6.1',
  },
  {
    statusCode: 503,
    title: 'Service Unavailable',
    url: 'https://tools.ietf.org/html/rfc7231#section-6.6.4',
  },
];

module.exports = {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_SERVER_ERROR_INTERNAL,
  HTTP_STATUS_SUCCESS,
  HTTP_STATUS_UNAUTHORIZED,
  dataStatus,
};
