const user = require('./user.routes');
const city = require('./city.routes');
const post = require('./post.routes');
const order = require('./order.routes');
const image = require('./image.routes');
const health = require('./health.routes');
const product = require('./products.routes');
const category = require('./category.routes');
const calculator = require('./calculator.routes');
const profession = require('./profession.routes');
const marketplace = require('./marketplace.routes');
const construction = require('./construction.routes');
const shoppingCart = require('./shoppingCart.routes');

module.exports = [
  ['/', health],
  ['/calculator', calculator],
  ['/user', user],
  ['/product', product],
  ['/post', post],
  ['/city', city],
  ['/profession', profession],
  ['/image', image],
  ['/order', order],
  ['/category', category],
  ['/marketplace', marketplace],
  ['/shopping-cart', shoppingCart],
  ['/construction', construction],
];
