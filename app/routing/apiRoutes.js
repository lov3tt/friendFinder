

var friendData = require("../data/friends");


module.exports = function(app) {

console.log("routing: " + friendData)
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });
  app.post("/api/friends", function(req, res) {
    friendData.push(req.body);
    res.json(true);
  });
}
