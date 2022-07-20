const { User } = require('../database/models');
const { createToken } = require('./jwtService');

const login = async (email, password) => {
  if (!email || !password) {
    throw new Error('Some required fields are missing');
  }

  const checkUser = await User.findOne({ where: { email } });
  if (!checkUser) {
    throw new Error('Invalid fields');
  }

  const token = createToken(checkUser);

  return token;
};

module.exports = { login };