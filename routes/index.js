const express = require("express");
const router = express.Router();
// console.log("router loaded");
const homeController = require("../controllers/home_controller");
// const profileController = require("../controllers/users_controller");
router.get("/", homeController.home);
router.get("/friends", homeController.friends);
router.use("/users", require("./users"));

router.use("/setting", require("./setting"));
router.use("/posts", require("./posts"));

module.exports = router;
