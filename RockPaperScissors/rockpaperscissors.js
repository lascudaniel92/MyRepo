'use strict';

function rockpaperscissors() {
  let output = '';

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function computerChoice() {
    return getRandomInt(3);
  }

  let userWin = 0;
  let computerWin = 0;
  const userWinner = document.querySelector('[data-your-score]');
  const computerWinner = document.querySelector('[data-computer-score]');

  function runGame(userChoice) {
    let computer = computerChoice();
    switch (userChoice) {
      case 0:
        switch (computer) {
          case 0:
            output = `It's a draw!`;
            break;
          case 1:
            output = `Sorry, the computer won! Paper beats rock!`;
            break;
          case 2:
            output = `Congrats, you won! Rock beats scissors!`;
            break;
        }
        break;
      case 1:
        switch (computer) {
          case 1:
            output = `It's a draw!`;
            break;
          case 2:
            output = `Sorry, the computer won! Scissors beats paper!`;
            break;
          case 0:
            output = `Congrats, you won! Paper beats rock!`;
            break;
        }
        break;
      case 2:
        switch (computer) {
          case 2:
            output = `It's a draw!`;
            break;
          case 0:
            output = `Sorry, the computer won! Rock beats scissors!`;
            break;
          case 1:
            output = `Congrats, you won! Scissors beats paper!`;
            break;
        }
        break;
    }
    outputElement.innerText = output;

    if (output.includes(`Congrats, you won!`)) {
      userWin++;
      userWinner.innerText = userWin;
    }
    if (output.includes(`Sorry, the computer won!`)) {
      computerWin++;
      computerWinner.innerText = computerWin;
    }
  }

  const outputElement = document.querySelector('[data-counter-output]');

  const rockButton = document.querySelector('[data-selection=rock]');
  rockButton.addEventListener('click', () => {
    runGame(0);
  });

  const paperButton = document.querySelector('[data-selection=paper]');
  paperButton.addEventListener('click', () => {
    runGame(1);
  });

  const scissorsButton = document.querySelector('[data-selection=scissors]');
  scissorsButton.addEventListener('click', () => {
    runGame(2);
  });
}
rockpaperscissors();
