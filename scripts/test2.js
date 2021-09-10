'use strict';
var count = 0;

function cc(card) {
  // Only change code below this line
  var message = '';
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count = count + 1;
  }

  if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count = count - 1;
  }

  if (card === 7 || card === 8 || card === 9) {
    count = count;
  }
  if (count <= 0) {
    message = ' Hold';
  }
  if (count > 0) {
    message = ' Bet';
  }
  return count + message;
  // Only change code above this line
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));
