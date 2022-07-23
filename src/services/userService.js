const Joi = require('joi');
const { User } = require('../database/models');
const passwordHashing = require('./passwordService');
const jwt = require('./jwtService');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

  const schema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const validateUser = (error) => {
  if (error.message.includes('displayName')) {
    const err = new Error();
    err.name = 'nameInvalid';
    throw err;
  }
  if (error.message.includes('email')) {
    const err = new Error();
    err.name = 'emailInvalid';
    throw err;
  }
  if (error.message.includes('password')) {
    const err = new Error();
    err.name = 'passwordInvalid';
    throw err;
  }
};

const createUser = async ({ displayName, email, password, image }) => {
  const { error } = schema.validate({ displayName, email, password, image });

  if (error) validateUser(error);

  const user = await User.findOne({ where: { email } });
  if (user) {
    const err = new Error();
    err.name = 'userExist';
    throw err;
  }
  const passwordEncrypted = passwordHashing.encryptPassword(password);
  const newUser = await User.create({ displayName, email, password: passwordEncrypted, image });
  const token = jwt.createToken(newUser);

  return { token };
};

module.exports = {
  getAllUsers,
  createUser,
};