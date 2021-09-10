'use strict';
const demoArr = [
  { id: 1, color: 'red', height: 15, width: 20, distance: 10 },
  { id: 2, color: 'green', height: 5, width: 30, distance: 15 },
  { id: 3, color: 'turqoize', height: 7, width: 9, distance: 8 },
  { id: 4, color: 'blue', height: 2, width: 3, distance: 3 },
  { id: 5, color: 'red', height: 10, width: 10, distance: 2 },
  { id: 6, color: 'crimson', height: 7, width: 8, distance: 16 },
];
/*
10. Sa se scrie o functie care returneaza un array cu toate elementele care au o culoare unica. 
Oricare element dupa primul care are o culoare care s-ar repeta nu este inclus in array.
*/

function uniqueColors(arr) {
  // let res = [];
  // for (let i = 0; i < arr.length; i++) {
  //   const obj = arr[i];
  //   if (!res.find((elem) => elem.color === obj.color)) {
  //     res.push(obj);
  //   }
  // }
  // return res;

  const seenColors = {}; // {red: true, green: true}
  const res = []; /*
  [
    { id: 1, color: 'red', height: 15, width: 20, distance: 10 },
    { id: 2, color: 'green', height: 5, width: 30, distance: 15 }
  ]
  */
  for (const obj of arr) {
    if (!seenColors[obj.color]) {
      res.push(obj);
      seenColors[obj.color] = true;
    }
  }

  return res;
}
console.log('Unique Colors: ', uniqueColors(demoArr));

// 12. Folosind array-ul de mai jos, vreau sa se obtina o variabila care contine un array de obiecte strcturat astfel:
// [
//   {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
//   ...
// ]

const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];

const details = ['subject', 'time', 'teacher'];

function objClasses(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    for (let j = 0; j < arr[i].length; j++) {
      obj[details[j]] = arr[i][j];
    }
    res[i] = obj;
  }
  return res;
}

function transformArr(arr) {
  const res = [];
  for (const elem of arr) {
    const obj = {
      subject: elem[0],
      time: elem[1],
      teacher: elem[2],
    };
    res.push(obj);
  }
  return res;
}

function transformArr2(arr) {
  return arr.map((elem) => ({
    subject: elem[0],
    time: elem[1],
    teacher: elem[2],
  }));
}

function transformArr3(arr) {
  const res = [];

  for (const [subject, time, teacher] of arr) {
    // const [subject, time, teacher] = elem;
    const obj = { subject, time, teacher };
    // res.push(obj);
    res.push({ subject, time, teacher });
  }
  return res;
}

function transformArr4(arr) {
  return arr.map(([subject, time, teacher]) => ({
    subject,
    time,
    teacher,
  }));
}

console.log('Classes1: ', objClasses(classes));
console.log('Classes2: ', transformArr(classes));
console.log('Classes3: ', transformArr2(classes));
console.log('Classes4: ', transformArr3(classes));
console.log('Classes5: ', transformArr4(classes));

const result1 = [
  { id: 1, name: 'Sandra', type: 'user', username: 'sandra', email: 'sandra@gmail.com' },
  { id: 2, name: 'John', type: 'admin', username: 'johnny2', email: 'john@gmail.com' },
  { id: 3, name: 'Peter', type: 'user', username: 'pete', email: 'peter@gmail.com' },
  { id: 4, name: 'Bobby', type: 'user', username: 'be_bob', email: 'bobby@gmail.com' },
];

const result2 = [
  { id: 2, name: 'John', email: 'john@gmail.com' },
  { id: 3, name: 'Daniel', email: 'daniel@gmail.com' },
  { id: 4, name: 'Bobby', email: 'bobby@example.com' },
  { id: 4, name: 'Bobby', type: 'user', username: 'be_bob', email: 'bobby@gmail.com' },
];

// intersectia array-urilor unde "name" e acelasi
function arrayIntersection(arr1, arr2, prop) {
  const intersection = arr1.filter((obj1) => arr2.some((obj2) => obj1[prop] === obj2[prop]));
  return intersection;
}

console.log('Intersection:', arrayIntersection(result1, result2, 'id'));

// intersectia array-urilor unde proprietatile din props sunt aceleasi props = {email, name}
const props = ['id', 'name', 'email'];
function arrayIntersection2(arr1, arr2, props) {
  return arr1.filter((obj1) =>
    arr2.some(
      (obj2) =>
        obj1[props[0]] === obj2[props[0]] && obj1[props[1]] === obj2[props[1]] && obj1[props[2]] === obj2[props[2]]
    )
  );
}

console.log('Intersection2:', arrayIntersection2(result1, result2, props));

function noColors(arr) {
  let res = {};

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i]; // { id: 1, color: 'red', height: 15, width: 20, distance: 10 }

    if (res[obj.color] !== undefined) {
      res[obj.color]++;
    } else {
      res[obj.color] = 1;
    }
  }

  return res;
}

function arrayIntersection3(arr1, arr2) {
  const res = [];
  for (const obj1 of arr1) {
    for (const obj2 of arr2) {
      if (obj1.name === obj2.name) {
        res.push(obj1);
      }
    }
  }
  return res;
}

console.log('Intersection3:', arrayIntersection3(result1, result2, 'id'));

function arrayIntersection4(arr1, arr2, prop) {
  return arr1.filter((obj1) => arr2.some((obj2) => obj1[prop] === obj2[prop]));
}

console.log('Intersection4:', arrayIntersection4(result1, result2, 'id'));

function arrayIntersection15(arr1, arr2, props) {
  const res = [];

  for (const obj1 of arr1) {
    for (const obj2 of arr2) {
      let isTheSame = true;

      for (const prop of props) {
        if (obj1[prop] !== obj2[prop]) {
          isTheSame = false;
          break;
        }
      }
      if (isTheSame) {
        res.push(obj1);
      }
    }
  }
  return res;
}

console.log('Intersection15:', arrayIntersection15(result1, result2, props));

function arrayIntersection555(arr1, arr2) {
  const res = [];

  for (const obj1 of arr1) {
    for (const obj2 of arr2) {
      let isTheSame = true;

      for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
          isTheSame = false;
          break;
        }
      }
      if (isTheSame) {
        res.push(obj1);
      }
    }
  }
  return res;
}

console.log('Intersection555:', arrayIntersection555(result1, result2));
