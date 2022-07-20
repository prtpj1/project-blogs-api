// const Joi = require('joi');

const { User } = require('../database/models');
const passwordHashing = require('./passwordService');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const validateBody = (displayName, email, password) => {
  if (displayName.length < 8) {
    throw new Error('"displayName" length must be at least 8 characters long');
  }

  const isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (!isValidEmail) {
    throw new Error('"email" must be a valid email');
  }

  if (password.length < 6) {
    throw new Error('"password" length must be at least 6 characters long');
  }
};

const createUser = async ({ displayName, email, password, image }) => {
  validateBody({ displayName, email, password });
  const passwordEncrypted = passwordHashing.encryptPassword(password);
  const newUser = await User.create({
    displayName,
    email,
    password: passwordEncrypted,
    image,
  });

  return newUser;
};

module.exports = {
  getAllUsers,
  createUser,
};