const Comment = require("../models/comment");
const Post = require("../models/post");

module.exports.create = function (req, res) {
  Post.findById(req.body.post, function (err, post) {
    if (err) {
      return res.redirect("back");
    }
    if (post) {
      Comment.create(
        {
          content: req.body.content,
          post: req.body.post,
          user: req.user._id,
        },
        function (err, comment) {
          // handle error
          if (err) {
            console.log("error in creating a comment");
            return;
          }

          post.comments.push(comment);
          //to update the databse use save();
          post.save();
          return res.redirect("/");
        }
      );
    }
  });
};
