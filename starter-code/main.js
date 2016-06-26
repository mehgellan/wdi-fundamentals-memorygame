console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardTwo === cardFour) {
//   alert("Sorry, try again.");
// }
// else if (cardThree === cardFour) {
//   alert("You found a match!");
// }

var memoryBoard = document.getElementById('game-board');
// create div for each card
for (var i = 0; i < 4; i++) {
  var newCard = document.createElement('div');
  newCard.className = 'card';
  memoryBoard.appendChild(newCard);
}

// create function for HTML cards
var createBoard = function() {
  for (var i = 0; i < 4 ; i++) {
    var newHTML = document.querySelector('.card');
    newHTML.innerHTML = "<p>Hello</p>";
    memoryBoard.appendChild(newHTML);
  }
};
createBoard();
