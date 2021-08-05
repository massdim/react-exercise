const { Item, User } = require("../models");

class ItemController {
  static async showAll(req, res) {
    const items = await Item.findAll({ order: [["id", "ASC"]] });
    res.status(200).json({
      status: 200,
      message: "Items displayed successfully!",
      items,
    });
  }

  static async add(req, res) {
    const { UserId, name, category } = req.body;

    try {
      const item = await Item.create({ UserId, name, category });
      res.status(201).json({
        status: 201,
        message: "Item added successfully!",
      });
    } catch (err) {
      res.json({
        status: 500,
        message: "Validation error!",
        err,
      });
    }
  }

  static async edit(req, res) {
    const id = +req.params.id;

    try {
      const item = await Item.findOne({ include: [User], where: { id } });

      if (item) {
        res.status(200).json({
          status: 200,
          message: "Item displayed successfully!",
          item,
        });
      } else {
        throw {
          status: 404,
          message: "Item not found",
        };
      }
    } catch (err) {
      res.status(err.status || 500).json(err);
    }
  }

  static async update(req, res) {
    const id = +req.params.id;
    const { name, category } = req.body;

    try {
      const item = await Item.findOne({ where: { id } });

      if (item) {
        await item.update({ name, category }, { where: { id } });
        res.status(200).json({
          status: 200,
          message: "Item updated successfully!",
        });
      } else {
        throw {
          status: 404,
          message: "Item not found",
        };
      }
    } catch (err) {
      res.json({
        status: 500,
        message: "Validation error!",
        err,
      });
    }
  }

  static async delete(req, res) {
    const id = +req.params.id;

    try {
      const item = await Item.findOne({ where: { id } });

      if (item) {
        await item.destroy({ where: { id } });
        res.status(200).json({
          status: 200,
          message: "Item deleted successfully!",
        });
      } else {
        throw {
          status: 404,
          message: "Item not found",
        };
      }
    } catch (err) {
      res.status(err.status || 500).json(err);
    }
  }
}

module.exports = ItemController;
