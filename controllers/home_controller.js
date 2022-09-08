const Post = require("../models/post");

module.exports.home = function (req, res) {
  // console.log(req.cookies);
  // res.cookie("id", 22);
  // Post.find({}, function (err, posts) {
  //   return res.render("home", {
  //     title: "Codeial |Home",
  //     posts: posts,
  //   });
  // });

  //populate the user of each post
  Post.find({})
    .populate("user")
    .exec(function (err, posts) {
      return res.render("home", {
        title: "Codeial | Home",
        posts: posts,
      });
    });
};

module.exports.friends = function (req, res) {
  return res.end("<h1>Friend list</h1>");
};
