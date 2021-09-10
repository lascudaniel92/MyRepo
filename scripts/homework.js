'use strict';

/* HOMEWORK */

/*First one*/
let result = '';
for (let i = 1; i < 51; i++) {
  result = result + i + ' ';
}

console.log(result);

/* Second one */
let result2 = '';
for (let i = 1; i < 51; i++) {
  if (i % 2 == 1) {
    result2 = result2 + i + ' ';
  }
}

console.log(result2);

/*Second one v2*/

let result3 = '';
for (let i = 0; i < 50; i++) {
  i += 1;
  result3 = result3 + i + ' ';
}

console.log(result3);

/* Third one */
function addition(first, last) {
  let sum = 0;
  if (first < last) {
    for (let j = first; j <= last; j++) {
      sum += j;
    }
  } else if (first >= last) {
    for (let j = last; j <= first; j++) {
      sum += j;
    }
  }
  return sum;
}
console.log(addition(9, 10));

/*Third one v2*/
let sum2 = 0;

function addition2(first, last) {
  let range = 0;
  let average = 0;

  if (first > last) {
    range = first - last;
  } else if (last > first) {
    range = last - first;
  }
  average = (first + last) / 2;
  sum2 = (range + 1) * average;
  return sum2;
}
console.log(addition2(9, 10));

/*Fourth one*/

function maximum(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else if (c > a && c > b) {
    console.log(c);
  } else if (a >= b || a >= c) {
    console.log(a);
  } else if (b >= c || b >= a) {
    console.log(b);
  }
}

maximum(5, 5, 5);
/*Fourth one v2*/

function maximum2(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      console.log(a);
      return;
    } else if (c >= b) {
      console.log(c);
      return;
    }
  } else if (b >= c) {
    console.log(b);
    return;
  } else if (c >= a) {
    console.log(c);
    return;
  }
}

maximum2(5, 5, 5);

/*Fifth one*/
function fizzBuzz(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result = result + 'fizzbuzz ';
      continue;
    }
    if (i % 3 === 0) {
      result = result + 'fizz ';
    } else if (i % 5 === 0) {
      result = result + 'buzz ';
    } else {
      result = result + i + ' ';
    }
  }
  return result;
}

console.log(fizzBuzz(61));

/*Fifth one v2*/
function fizzBuzz2(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    let temp = i + ' ';
    if (i % 3 === 0) {
      result = result + 'fizz';
      temp = ' ';
    }
    if (i % 5 === 0) {
      result = result + 'buzz';
      temp = ' ';
    }

    result = result + temp;
  }
  return result;
}

console.log(fizzBuzz2(61));

/*The Challenge*/

function theBox(w, h) {
  let box = '';
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (j % 2 == 1) {
        if (i % 2 == 1) {
          box = box + '0 ';
        } else if (i % 2 == 0) {
          box = box + '1 ';
        }
      } else if (j % 2 == 0) {
        if (i % 2 == 1) {
          box = box + '1 ';
        } else if (i % 2 == 0) {
          box = box + '0 ';
        }
      }
    }
    box = box + '\n';
  }
  return box;
}

console.log(theBox(3, 10));

/*The Challenge v2*/

function theBox2(w, h) {
  let box = '';
  for (let i = 0; i < h; i++) {
    for (let j = 0 + i; j < w + i; j++) {
      if (j % 2 == 1) {
        box = box + '1 ';
      } else if (j % 2 == 0) {
        box = box + '0 ';
      }
    }
    box = box + '\n';
  }
  return box;
}

console.log(theBox2(3, 10));
