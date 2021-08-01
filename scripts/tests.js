'use strict';

function numbersGenerator(count, max) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result = generateUnique(result, max);
  }
  result.sort((a, b) => a - b);
  dataresult.innerHTML += '<div class="theresults2">' + result + '</div>';
}

function generateUnique(array, max) {
  let rng = Math.floor(Math.random() * max + 1);
  while (array.includes(rng)) {
    rng = Math.floor(Math.random() * max + 1);
  }
  array.push(rng);
  return array;
}

const dataresult = document.querySelector('[data-result]');

const generate = document.querySelector('[data-generator]');
generate.addEventListener('click', () => {
  numbersGenerator(6, 49);
});
