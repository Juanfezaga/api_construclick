const health = require('./health.routes');
const user = require('./user.routes');
const city = require('./city.routes');
const profession = require('./profession.routes');
const post = require('./post.routes');
const image = require('./image.routes');
const product = require('./products.routes');
const category = require('./category.routes');

module.exports = [
  ['/', health],
  ['/user', user],
  ['/product', product],
  ['/post', post],
  ['/city', city],
  ['/profession', profession],
  ['/image', image],
  ['/category', category],
];
