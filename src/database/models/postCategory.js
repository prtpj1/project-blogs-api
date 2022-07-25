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
      foreignKey: 'categoryId',
      as: 'blogPost',
      through: PostCategory,
      otherKey: 'postId',
    })
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      as: 'categories',
      through: PostCategory,
      otherKey: 'categoryId',
    });
  };

  return PostCategory
};

module.exports = createPostCategoryModel;