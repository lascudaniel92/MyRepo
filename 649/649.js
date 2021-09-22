'use strict';

let leaderboard = [];
let sortedLeaderboard;
const topresults = document.querySelector('[data-topresults]');
const MAX = 49;
const COUNT = 6;
for (let i = 0; i < MAX + 1; i++) {
  let obj = {};
  obj[i] = 0;
  leaderboard.push(obj);
}

function compare(a, b) {
  if (a[Object.keys(a)[0]] > b[Object.keys(b)[0]]) {
    return -1;
  }
  if (a[Object.keys(a)[0]] < b[Object.keys(b)[0]]) {
    return 1;
  }
  return 0;
}

function numbersGenerator(count, max) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result = generateUnique(result, max);
  }

  result.sort((a, b) => a - b);
  sortedLeaderboard = JSON.parse(JSON.stringify(leaderboard));
  sortedLeaderboard.sort(compare);
  dataresult.innerHTML += '<div class="theresults2 grid-element">' + result.join(', ') + '</div>';
  topresults.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    let number = Object.keys(sortedLeaderboard[i])[0];
    let weight = Object.values(sortedLeaderboard[i])[0];
    if (weight !== 0) {
      topresults.innerHTML += '<div class="topresults2">' + number + ` appeared ` + weight + ` times` + '</div>';
    }
  }

  topresults.classList.remove('hidden');
}

function generateUnique(array, max) {
  let rng = Math.floor(Math.random() * max + 1);
  while (array.includes(rng)) {
    rng = Math.floor(Math.random() * max + 1);
  }
  array.push(rng);
  leaderboard[rng][rng]++;
  return array;
}

const dataresult = document.querySelector('[data-result]');

const generate = document.querySelector('[data-generator]');
generate.addEventListener('click', () => {
  numbersGenerator(COUNT, MAX);
});
