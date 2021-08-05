const UserController = require("../../controllers/UserController");

const express = require("express");
const route = express.Router();

route.get("/", UserController.showAll);

module.exports = route;
