console.log("JS file is connected to HTML! Woo!");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var memoryBoard = document.getElementById('game-board');

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    memoryBoard.appendChild(cardElement);
    cardElement.addEventListener('click', isTwoCards);
  }

};

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  // show card img
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img src="../img/king.png" alt="King of Clubs">';
  } else if (this.getAttribute('data-card') === 'queen') {
    this.innerHTML = '<img src="../img/queen.png" alt="Queen of Hearts">';
  }

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You've found a match!");
  } else {
    alert("Sorry, try again :(");
  }
}

createBoard();
