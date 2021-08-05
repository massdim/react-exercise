const ItemController = require("../../controllers/ItemController");

const express = require("express");
const route = express.Router();

route.get("/", ItemController.showAll);
route.post("/add", ItemController.add);
route.put("/:id/edit", ItemController.edit);
route.patch("/:id/update", ItemController.update);
route.delete("/:id/delete", ItemController.delete);

module.exports = route;
