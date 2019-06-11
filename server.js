

const express = require("express")
const path = require("path")
// var friendArray = require("./app/data/friends");
const reducer = (a, b) => a + b;

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ================================================================================
// Math (Find the user total sum) - user[i](sum)
// ================================================================================

var friendArray = require("./app/data/friends");

function sum(){
  for (var i = 0; i < friendArray.Length; i++) {
    let x = userData.scores.reduce(reducer)
    let y = friendArray[i].scores.reduce(reducer)
    let z = [Math.abs(x - y)]
    let bestBuddy = Math.min(z)
    console.log("bb: "+bestBuddy)
    console.log("Z array" + z)
  }
}
// app.get("/api/friends", function(req, res) {
//   res.json(friendData);
// });

var friendlol= this.bestBuddy
var bestFriendImg = this.photo
var bestFriendName = this.name
console.log(friendlol)
console.log(bestFriendImg)
console.log(bestFriendName)
// console.log(res)
// console.log(friendData)

// var img = $("<img>").bestFriendImg;
// $("#BFImage").append(img)
// $("#modalName").append(bestFriendName)

sum()

// console.log("Total: "+friendArray[0].scores.reduce(reducer))
  

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


