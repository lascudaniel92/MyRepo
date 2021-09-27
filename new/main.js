// const PI = 3.1416;
// // PI = 3.141593; // err
// const PI = 3.141594; // err

'use strict';

// var obj = {
//   // does not create a new scope
//   i: 10,
//   b: () => console.log(this),
//   c: function () {
//     console.log(this);
//   },
// };

// // obj.b(); // prints undefined, Window {...} (or the global object)
// obj.c(); // prints 10, Object {...}

// let group = {
//   title: 'Our Group',
//   students: ['John', 'Pete', 'Alice'],

//   showList() {
//     // debugger;
//     // this.students.forEach((student) => console.log(this.title + ': ' + student));
//     var me = this;
//     this.students.forEach(function (student) {
//       console.log(me.title + ':' + student);
//     });
//   },
// };

// group.showList();

// function Timer() {
//   this.value = 0;
//   setInterval(function incr() {
//     this.value++;
//     console.log(this.value);
//   }, 3000);
//   //   console.log(this);
// }

// function Timer() {
//   var that = this;
//   that.value = 0;
//   setInterval(function incr() {
//     that.value++;
//     console.log(that.value);
//   }, 3000);
// }

// function Timer() {
//   this.value = 0;
//   setInterval(() => {
//     debugger;
//     this.value++;
//     console.log(this.value);
//   }, 2000);
// }

// const timer = new Timer();

// const sum = (x, y) => {
//   return x + y;
// };

// const sum = (x, y) => x + y;

// console.log(sum(2, 3));
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// const p = new Person('Daniel', 'Lascu'); // Reference Error
// // class Person {}
// console.log(p);

// const Person = class {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   }
//   static defaultFullName() {
//     return 'John Doe';
//   }
//   get fullName() {
//     return this.computeFullName();
//   }
//   computeFullName() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   set fullName(name) {
//     var words = name.toString().split(' ');
//     this.firstName = words[0] || '';
//     this.lastName = words[1] || '';
//   }
// };

// const p = new Person('Daniel', 'Lascu'); // Reference Error

// // // console.log(p.computeFullName());
// console.log(p.defaultFullName());
// // //console.log(p.fName('Florin'));
// // p.firstName = 'Florin';
// // console.log(p);
// // p.fullName = 'Andrei Popescu';
// // console.log(p);

// console.log(Person.defaultFullName());

function steamrollArray(arr) {
  debugger;
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

// test here
console.log(steamrollArray([1, [2], [3, [[4]]]]));
