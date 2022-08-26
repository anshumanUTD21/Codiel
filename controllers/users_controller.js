module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Profile",
  });
};

module.exports.picture = function (req, res) {
  res.end("<b>Set Profile picture</b>");
};
