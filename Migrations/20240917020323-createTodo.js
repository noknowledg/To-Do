'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.createTable('Todos',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: Sequelize.STRING,

        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,

      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue:new Date(),
      },

      UpdatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue:new Date(),
      },
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Todos');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  } 
};
