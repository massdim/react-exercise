const ItemController = require("../controllers/ItemController");

const userRouter = require("./user");
const itemRouter = require("./item");

const express = require("express");
const router = express.Router();

router.get("/", ItemController.showAll); // halaman home
router.use("/users", userRouter);
router.use("/items", itemRouter);

module.exports = router;
