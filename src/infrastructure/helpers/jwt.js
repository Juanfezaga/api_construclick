const jwt = require('jsonwebtoken');

const { JWT_KEY_PRIVATE } = require('../../application/config');

const generateToken = (payload) => jwt.sign(payload, JWT_KEY_PRIVATE);

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_KEY_PRIVATE);
    return decoded;
  } catch (error) {
    return false;
  }
};

module.exports = {
  generateToken,
  validateToken,
};
