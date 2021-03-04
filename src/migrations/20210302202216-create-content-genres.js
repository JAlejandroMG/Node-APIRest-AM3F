'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ContentGenres', {
      id_Content: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:"Contents",
          foreignKey:"id"
        }
      },
      id_Genre: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:"Genres",
          foreignKey:"id"
        }
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
    await queryInterface.dropTable('ContentGenres');
  }
};