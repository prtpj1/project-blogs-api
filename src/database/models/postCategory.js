'use strict';

/**
   * 
   * @param {import('sequelize').DataTypes} 
   * @param {import('sequelize').Sequelize} 
   * @returns 
   */

const createPostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    tableName: 'PostCategories',
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foriegnKey: 'postId',
      as: 'blogPosts',
      through: 'BlogPostCategories',
      otherKey: 'categoryId',
    })
    models.BlogPost.belongsToMany(models.Category, {
      foriegnKey: 'categoryId',
      as: 'categories',
      through: 'BlogPostCategories',
      otherKey: 'postId',
    });
  };

  return PostCategory
};

module.exports = createPostCategoryModel;