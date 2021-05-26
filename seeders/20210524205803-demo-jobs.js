'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Jobs', [
      {
        address: '1130 S. 218th St. Elkhorn, NE',
        square_ft: 2800,
        bid_amt: 3900,
        contact: 'Andrew Hokamp',
        customerId: 1
        
    },
    {
        address: '3531 N. Main Cir. Elkhorn, NE',
        square_ft: 1800,
        bid_amt: 2900,
        contact: 'Tony Strom',
        customerId: 1
        
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
