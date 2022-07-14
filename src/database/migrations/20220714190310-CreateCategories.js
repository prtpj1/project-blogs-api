'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').queryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   * @returns 
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Categories');
  }
};
