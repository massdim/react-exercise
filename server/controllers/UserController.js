const { User, Item } = require("../models");

class UserController {
  static async showAll(req, res) {
    const users = await User.findAll({ include: [Item] });
    res.status(200).json({
      status: 200,
      message: "Users displayed successfully!",
      users,
    });
  }
}

module.exports = UserController;
