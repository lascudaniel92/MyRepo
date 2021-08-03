'use strict';

const result = document.getElementById('result');
const allChoices = document.querySelectorAll('button');
let playerChoice;
let pcChoice;

allChoices.forEach((allChoices) =>
  allChoices.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    generatePcChoice();
    runGame();
  })
);

function generatePcChoice() {
  const pcNumbers = Math.floor(Math.random() * 3);

  if (pcNumbers === 0) {
    pcChoice = 'rock';
  }
  if (pcNumbers === 1) {
    pcChoice = 'paper';
  }
  if (pcNumbers === 2) {
    pcChoice = 'scissors';
  }
}
function runGame() {
  let gameResult;

  if (playerChoice === pcChoice) {
    gameResult = `It's a draw`;
  }

  if (playerChoice === 'rock' && pcChoice === 'paper') {
    gameResult = 'You Lost ! Paper beats Rock!';
  }

  if (playerChoice === 'rock' && pcChoice === 'scissors') {
    gameResult = 'You Won ! Rock beats Scissors!';
  }

  if (playerChoice === 'paper' && pcChoice === 'rock') {
    gameResult = 'You Won ! Paper beats Rock!';
  }

  if (playerChoice === 'paper' && pcChoice === 'scissors') {
    gameResult = 'You Lost ! Scissors beats Paper!';
  }

  if (playerChoice === 'scissors' && pcChoice === 'rock') {
    gameResult = 'You Lost ! Rock beats Scissors!';
  }

  if (playerChoice === 'scissors' && pcChoice === 'paper') {
    gameResult = 'You Won ! Scissors beats Paper!';
  }

  result.innerHTML = gameResult;
  console.log(gameResult);
}
