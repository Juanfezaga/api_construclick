const health = require('./health.routes');
const user = require('./user.routes');
const post = require('./post.routes');
const image = require('./image.routes');

module.exports = [
  ['/', health],
  ['/user', user],
  ['/post', post],
  ['/image', image],
];
