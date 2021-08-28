const health = require('./health.routes');
const user = require('./user.routes');
const city = require('./city.routes');
const profession = require('./profession.routes');
const post = require('./post.routes');
const image = require('./image.routes');

module.exports = [
  ['/', health],
  ['/user', user],
  ['/post', post],
  ['/city', city],
  ['/profession', profession],
  ['/image', image],
];
