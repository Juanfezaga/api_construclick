const jwt = require('jsonwebtoken');

const { config } = require('../../application/config');

const generateToken = (payload) => jwt.sign(payload, config.JWT_KEY_PRIVATE);

const validateToken = (token) => {
  try {
    return jwt.verify(token, config.JWT_KEY_PRIVATE);
  } catch (error) {
    return false;
  }
};

module.exports = {
  generateToken,
  validateToken,
};
