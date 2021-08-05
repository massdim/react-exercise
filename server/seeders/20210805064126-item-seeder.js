"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          UserId: 1,
          name: "Mouse Gaming",
          category: "mouse",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 1,
          name: "Keyboard Mecha",
          category: "keyboard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
