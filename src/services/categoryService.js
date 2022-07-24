const Joi = require('joi');
const { Category } = require('../database/models');

const schema = Joi.object({
  name: Joi.string().required(),
});

const validateCategory = (error) => {
  if (error.message.includes('name')) {
    const err = new Error();
    err.name = 'nameRequired';
    throw err;
  }
};

const createCategory = async ({ name }) => {
  const { error } = schema.validate({ name });

  if (error) validateCategory(error);

  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  createCategory,
};