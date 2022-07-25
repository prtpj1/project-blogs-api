'use strict';

/**
   * 
   * @param {import('sequelize').DataTypes} 
   * @param {import('sequelize').Sequelize} 
   * @returns 
   */

const createCategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
		id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
		// tableName: 'Categories',
		timestamps: false,
    // underscored: true,
  });

  return Category;
};

module.exports = createCategoryModel;