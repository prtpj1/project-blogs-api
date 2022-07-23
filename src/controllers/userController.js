const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.createUser({ displayName, email, password, image });

    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};