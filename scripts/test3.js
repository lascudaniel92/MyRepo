'use strict';
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value !== '' && value !== undefined && value !== null) {
    if (id in records) {
      const record = records[id];
      if (prop in record) {
        if (prop === 'tracks') {
          record[prop].push(value);
        }
        let objectValue = record[prop];
        if (objectValue !== value) {
          objectValue = value;
        }
      } else {
        if (prop === 'tracks') {
          record[prop] = [];
          record[prop].push(value);
        } else {
          record[prop] = value;
        }
      }
    } else {
      records[id][prop] = value;
    }
  } else {
    delete records[id][prop];
  }

  return records;
}

updateRecords(recordCollection, 1245, 'tracks', 'AAAAAAAAAAA');

// Setup
var myArray = [];

// Only change code below this line
var i = 5;
while (i > 0) {
  myArray.push(i);
  i--;
}

console.log(myArray);

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

console.log(sum([3, 5, 7, 9, 11, 13], 3));

// Setup
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let contactFound = false;
  for (let i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName) {
      contactFound = true;
      if (prop in contacts[i]) {
        return contacts[i][prop];
      }
    }
  }
  if (contactFound === true) {
    return 'No such property';
  }
  return 'No such contact';

  // Only change code above this line
}

lookUpProfile('Akira', 'likes');

//Only change code below this line
function countdown(n) {
  if (startNum < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

function rangeOfNumbers(startNum, endNum) {
  if (endNum == startNum) {
    return [endNum];
  } else {
    const final = [];
    return final.concat(rangeOfNumbers(startNum, endNum - 1), endNum);
  }
}

console.log(rangeOfNumbers(2, 5));

// Only change code above this line

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
// const half = (stats) => (stats.max + stats.min) / 2.0;
const half = ({ max, standard_deviation, median, mode, min, average }) => {
  return (max + min) / 2;
};
// Only change code above this line

console.log(half(stats));

const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
};
function makeList(arr) {
  // Only change code below this line
  let failureItems = [];
  for (let i = 0; i < result.failure.length; i++) {
    let item = result.failure[i];
    let failureItem = `<li class="text-warning">${item}</li>`;
    failureItems.push(failureItem);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(makeList(result.failure));
console.log(result.failure.length);

// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9) / 5 + 32;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
