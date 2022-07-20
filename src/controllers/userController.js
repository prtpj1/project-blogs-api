const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  return res.status(201).json(newUser);
};

module.exports = {
  getAllUsers,
  createUser,
};