const api = require('./api.errors');
const user = require('./user.erros');
const post = require('./post.erros');
const shoppingCart = require('./shoppingCart.erros');

module.exports = [
  ...api,
  ...user,
  ...post,
  ...shoppingCart,
];
