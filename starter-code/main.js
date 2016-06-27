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

// create function for HTML cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    memoryBoard.appendChild(cardElement);
    cardElement.addEventListener('click', isTwoCards);
  }
};
createBoard();
function isMatch() {
  if (cardsInPlay) {}
}
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
  alert("Card was clicked!");
}
