'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Customers', [
      {
        name: 'Jeremiah Miller',
        email: 'jeremiahm33@live.com',
        phone: '402-686-5138',
        address: '1130 S. 218th St. Elkhorn, NE',
        
    },
    {
        name: 'Brandon Miller',
        email: 'brandonmiller@yahoo.com',
        phone: '402-637-5500',
        address: '8412 Keystone Dr. Omaha, NE',
        
    }
  ], {});
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
