const express = require("express");
const router = express.Router();
const passport = require("passport");

const users_Controller = require("../controllers/users_controller");
router.get(
  "/profile/:id",
  passport.checkAuthentication,
  users_Controller.profile
);
router.post(
  "/update/:id",
  passport.checkAuthentication,
  users_Controller.update
);
router.get("/profile/picture", users_Controller.picture);
router.get("/sign-up", users_Controller.signUp);
router.get("/sign-in", users_Controller.signIn);

router.post("/create", users_Controller.create);
//user passport as a middleware to authenticate
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/sign-in" }),
  users_Controller.createSession
);

router.get("/sign-out", users_Controller.destroySession);
module.exports = router;
