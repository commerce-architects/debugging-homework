'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'souperpower',
      Sequelize.STRING
    )
  }
};
