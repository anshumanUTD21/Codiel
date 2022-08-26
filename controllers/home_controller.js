module.exports.home = function (req, res) {
  return res.end("<h1>Express is up for codeial</h1>");
};

module.exports.friends = function (req, res) {
  return res.end("<h1>Friend list</h1>");
};
