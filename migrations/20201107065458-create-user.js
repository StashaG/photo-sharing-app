'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      spotifyId: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      genre1: {
        type: Sequelize.STRING
      },
      genre2: {
        type: Sequelize.STRING
      },
      genre3: {
        type: Sequelize.STRING
      },
      songTitles: {
        type: Sequelize.STRING
      },
      albums: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};