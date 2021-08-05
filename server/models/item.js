"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.User);
    }
  }
  Item.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "user id cannot be empty",
          },
          notNull: {
            msg: "user id cannot be null",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "name cannot be empty",
          },
          notNull: {
            msg: "name cannot be null",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "category cannot be empty",
          },
          notNull: {
            msg: "category cannot be null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
