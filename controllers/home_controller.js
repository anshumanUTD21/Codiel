module.exports.home = function (req, res) {
  console.log(req.cookies);
  res.cookie("id", 22);
  return res.render("home", {
    title: "Home",
  });
};

module.exports.friends = function (req, res) {
  return res.end("<h1>Friend list</h1>");
};
