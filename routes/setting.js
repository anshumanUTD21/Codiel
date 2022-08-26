const express = require("express");
const router = express.Router();

const setting_Controller = require("../controllers/setting_controller");
router.get("/setting", setting_Controller.credential);

module.exports = router;
