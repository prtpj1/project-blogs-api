const userService = require('../services/userService');

const getAllUsers = async (req, res, next) => {
  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
  // #swagger.description = 'List all registered users'
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
  //  #swagger.parameters['id'] = { description: 'Search for an user by ID' }
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
  /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Adds a new user to the database',
            schema: {
                $displayName: 'your name here',
                $email: 'your email here',
                $password: 'your numeric password here',
                $image: 'paste image url here'
            }
    } */
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
  getUserById,
  createUser,
};