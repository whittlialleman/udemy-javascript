'use strict';
/*
//////////////////////////////////////////
//Default parameters
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 800); //This sets it back to the default value

/////////////////////////////////////////
//How passing arguments works: Value vs. Reference
const flight = 'LH234';
const whip = {
    name: 'Whittli Alleman',
    passport: 2048573894,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mrs. ' + passenger.name;

    if (passenger.passport === 2048573894) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    };
};

// checkIn(flight, whip);
// console.log(flight);
// console.log(whip);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000000)
};

newPassport(whip);
checkIn(flight, whip);

////////////////////////////////////
//Functions Accepting Callback Functions

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//Higher-Order Function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best', upperFirstWord); //Functions here are called callback functions
transformer('JavaScript is the best', oneWord);

//JS uses callbacks all the time - allows us to break up our code into more usable chunks
const high5 = function() {
    console.log('✋');
}
document.body.addEventListener('click', high5);

['Whip', 'Gavin', 'Ashlyn'].forEach(high5);

////////////////////////////////////
//Functions Returning Functions

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
};

const greeterHey = greet('Hey');
greeterHey('Whip'); //Console log shows Hey Whip
greeterHey('Gavin'); //Console log shows Hey Gavin

greet('Hello')('Whip'); //Console log shows Hello Whip

//Challenge - rewriting greet with arrow functions
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Arrows');

////////////////////////////////////
//Call and Apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Whittli Alleman');
lufthansa.book(635, 'Gavin Garr');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//book(23, 'Ashlyn McKee'); //This doesn't work because the this keyword returns undefined

//Call method
book.call(eurowings, 23, 'Ashlyn McKee'); //The first argument sets the this keyword so it points to the eurowings function
console.log(eurowings);
book.call(lufthansa, 239, 'Kaston McKee');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); //This is the same as book.call(swiss, ...flightData)
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method
//book.call(eurowings, 23, 'Ashlyn McKee');

const bookEW = book.bind(eurowings); //This sets the this keyword for each airline so we can use the new function
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Gavin Garr');

const bookEW23 = book.bind(eurowings, 23); //This sets the first argument for the function - called partial application
bookEW23('Nigel Barrus');
bookEW23('Ben Davis');

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + (value * rate);
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + (value * 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) { //This is another way of doing the same thing as above
    return function(value) {
        return value + value*rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

///////////////////////////////////////
//Coding Challenge 1

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        console.log(answer);

        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++; //This is short circuiting - if the first two are true, the last one will execute
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

//poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5,2,3]}, 'string');
poll.displayResults.call({answers: [1,5,3,9,6,1]});

///////////////////////////////////////
//Immediately Invoked Function Expressions
const runOnce = function() {
    console.log('This will never run again');
};
runOnce();

//IIFE standard
(function() {  //Putting this into parentheses makes it an expression so JS accepts it
    console.log('This will never run again');
    const isPrivate = 23;
})();

//IIFE Arrow
(() => console.log('This will also never run again'))();

{
    const isPrivate = 23; //Const is block scoped so it is not available outside the block
    var notPrivate = 36; //Var is not block scoped so it is available outside the block
};

console.log(notPrivate);
*/

/////////////////////////////////////
//Closures

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);