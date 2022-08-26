module.exports.profile = function (req, res) {
  res.end("<h1>User Profile</h1>");
};

module.exports.picture = function (req, res) {
  res.end("<b>Set Profile picture</b>");
};
