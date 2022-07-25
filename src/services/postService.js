const { BlogPost, User, Category } = require('../database/models');

const getAllPosts = async () => {
  console.log('qq coisa');
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  console.log('🚀 ~ posts', posts);

  if (!posts) {
    const err = new Error();
    err.name = 'userNotExist';
    throw err;
  }

  return posts;
};

module.exports = {
  getAllPosts,
};