const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const generateHash = (txt) => bcrypt.hashSync(txt, salt);

const compareHash = (txt, hash) => bcrypt.compareSync(txt, hash);

module.exports = {
  compareHash,
  generateHash,
};
