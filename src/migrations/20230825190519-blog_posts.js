'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('blog_posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        },
        primaryKey: true
      },
      published: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: true,
      },
      updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: true,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('blog_posts')
  }
};
