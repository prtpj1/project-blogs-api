const postService = require('../services/postService');

const getAllPosts = async (req, res, next) => {
  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
  // #swagger.description = 'List all created posts'
  try {
    const posts = await postService.getAllPosts();

    return res.status(200).json(posts);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllPosts,
};