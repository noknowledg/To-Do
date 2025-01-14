// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };


'use strict';

const { Model } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Todos','userId',{
    type:Sequelize.INTEGER,
    allownull:true,
    references:{
      model: 'Users',
      key: 'id',
   },
  });
  await queryInterface.addColumn('Todos','public',{
    type:Sequelize.BOOLEAN,
    allownull:false,
    defaultValue:false,
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Todos','userId');
  await queryInterface.removeColumn('TOdos','public');
  }
  };