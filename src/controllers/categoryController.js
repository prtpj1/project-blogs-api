const categoryService = require('../services/categoryService');

const getAllCategories = async (req, res, next) => {
  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
  // #swagger.description = 'List all registered categories'
  try {
    const categories = await categoryService.getAllCategories();

    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};
const createCategory = async (req, res, next) => {
  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
  /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Adds a new category to the database',
            schema: {
                "name": "Type the category name here"
            }
    } */
  try {
    const { name } = req.body;
    const newCategory = await categoryService.createCategory({ name });

    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
  createCategory,
};