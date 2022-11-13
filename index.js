let firstCard = 14;
let secondCard = 5;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to take a new card?";
  } else if (sum === 21) {
    message = "Whoo! You won!";
    hasBlackJack = true;
  } else {
    message = "You are out of game!";
    isAlive = false;
  }
  console.log(message);
  messageEl.textContent = message;

  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards:" + cards[0] + " & " + cards[1];
}

function newCard() {
  console.log("Drawing new card from deck!");
  let card = 3;

  sum += card;
  cards.push(card);
  renderGame();
}

function startGame() {
  renderGame();
}
