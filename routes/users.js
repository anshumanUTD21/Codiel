const express = require("express");
const router = express.Router();

const users_Controller = require("../controllers/users_controller");
router.get("/profile", users_Controller.profile);
router.get("/profile/picture", users_Controller.picture);
router.get("/sign-up", users_Controller.signUp);
router.get("/sign-in", users_Controller.signIn);

router.post("/create", users_Controller.create);
module.exports = router;
