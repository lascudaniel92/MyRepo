'use strict';

/* const person = {
  fName: 'Daniel',
  lName: 'Lascu',
  age: 29,
  'phone-numbers': ['0769434165', '1234567890'],
  getFullName: function () {
    console.log(this);
    return this.fName + ' ' + this.lName;
  },
};

const person2 = {
  fName: 'Cristina',
  lName: 'Lascu',
  age: 29,
  'phone-numbers': ['0769434165', '1234567890'],
  getFullName: function () {
    return this.fName + ' ' + this.lName;
  },
};

const dubios = person.getFullName;

console.log('Full Name: ', person.getFullName());
console.log('Full Name: ', person2.getFullName());
console.log('Full Name: ', dubios());
console.log('Full Name: ', window.dubios()); */

function Animal(noLegs) {
  this.noLegs = noLegs;
}

Animal.prototype.move = function () {
  console.log(`This animal has ${this.noLegs} legs and is moving!`);
};

Animal.prototype.altceva = function () {
  console.log(`Altceva`);
};

const animal = new Animal(4);
const animal2 = new Animal(2);

animal.altceva();
animal2.altceva();
