require('dotenv');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const newToken = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '365d',
    algorithm: 'HS256',
  });

  return newToken;
};

const verifyToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    
    return data;
  } catch (error) {
    return new Error('Expired or invalid token');
  }
};

module.exports = {
  createToken,
  verifyToken,
};