'use strict';

/**
   * 
   * @param {import('sequelize').DataTypes} 
   * @param {import('sequelize').Sequelize} 
   * @returns 
   */

const createBlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
		id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
		// tableName: 'BlogPost',
		timestamps: false,
    // underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foriegnKey: 'userId',
    });
  }

  
  return BlogPost;
};

module.exports = createBlogPostModel;