const user = require('./user.routes');
const post = require('./post.routes');
const image = require('./image.routes');

module.exports = [
  ['/user', user],
  ['/post', post],
  ['/image', image],
];
