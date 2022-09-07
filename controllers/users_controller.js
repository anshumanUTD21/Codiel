const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Profile",
  });
};

module.exports.picture = function (req, res) {
  res.end("<b>Set Profile picture</b>");
};

//RENDER SIGN UP PAGE
module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_Sign_Up", {
    title: "Codeial | Sign Up",
  });
};

//RENDER SIGN IN PAGE
module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_Sign_In", {
    title: "Codeial | Sign In",
  });
};

//get the sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  User.findOne(
    {
      email: req.body.email,
    },
    function (err, user) {
      if (err) {
        console.log("error in finding user in signing up");
        return;
      }
      if (!user) {
        User.create(req.body, function (err, user) {
          if (err) {
            console.log("error in creating user while signing up");
            return;
          }
          return res.redirect("/users/sign-in");
        });
      } else {
        return res.redirect("back");
      }
    }
  );
};

//sign in and create a session for users
module.exports.createSession = function (req, res) {
  return res.redirect("/");
};

module.exports.destroySession = function (req, res) {
  req.logout(function (err) {
    if (err) {
      return console.log("error", err);
    }
  });
  return res.redirect("/");
};
