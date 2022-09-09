const Post = require("../models/post");

module.exports.create = function (req, res) {
  console.log(req.user._id);

  Post.create(
    {
      content: req.body.content,
      user: req.user._id,
    },
    function (err, post) {
      console.log(post);
      if (err) {
        console.log("error in creating a post");
        return;
      }

      return res.redirect("back");
    }
  );
};
