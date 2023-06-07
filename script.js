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
*/

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