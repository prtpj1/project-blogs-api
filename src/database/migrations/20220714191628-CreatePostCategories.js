'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').queryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   * @returns 
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      categoryId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Categories',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('PostCategories');
  }
};
