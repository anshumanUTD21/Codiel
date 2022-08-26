const express = require("express");
const router = express.Router();

const users_Controller = require("../controllers/users_controller");
router.get("/profile", users_Controller.profile);
router.get("/profile/picture", users_Controller.picture);

module.exports = router;
