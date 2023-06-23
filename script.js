'use strict';

/////////////////////////////////////
//Constructor Functions and the New Operator

const Person = function(firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never create a method (function) inside of a constructor function
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // };
};

const whip = new Person('Whip', 1997);
console.log(whip);

//1. New empty object {} is created
//2. function is called, this keyword is set to the empty object {}
//3. {} is linked to prototype
//4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(whip instanceof Person);

/////////////////////////////////////
//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

whip.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(whip.__proto__);
console.log(whip.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(whip)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false - it is the prototype of the linked objects, not of itself

Person.prototype.species = "Homo Sapiens";
console.log(whip, matilda);

console.log(whip.hasOwnProperty('firstName')); //true
console.log(whip.hasOwnProperty('species')); //false