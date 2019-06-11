

// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express")
const path = require("path")
var friendArray = require("./app/data/friends");
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

function sum(){
  for (var i = 0; i < friendArray.Length; i++) {
    let z = []
    let x = userInput.scores.reduce(reducer)
    let y = friendArray[i].scores.reduce(reducer)
    let z = Math.abs(x - y)
    let bestBuddy = Math.min(z)
    console.log("bb: "+bestBuddy)
    console.log("Z array" + z)
  }

}
console.log("Total: "+friendArray[0].scores.reduce(reducer))
  

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


