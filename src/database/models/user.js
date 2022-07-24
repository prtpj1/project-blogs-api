'use strict';

/**
   * 
   * @param {import('sequelize').DataTypes} 
   * @param {import('sequelize').Sequelize} 
   * @returns 
   */

const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foriegnKey: 'userId',
      as: 'blogPost',
    });
  };

  return User
};

module.exports = createUserModel;