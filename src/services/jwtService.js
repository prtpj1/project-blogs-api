require('dotenv');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '24h',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (err) {
    const error = new Error('Invalid Token');
    error.name = 'UnauthorizedError';
    throw error;
  }
};

module.exports = {
  createToken,
  validateToken,
};