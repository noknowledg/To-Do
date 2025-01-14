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

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      phone:{
        type:Sequelize.STRING,
        allowNull:false
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue: new Date(),
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue: new Date(),
        }
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('Users');
}
};