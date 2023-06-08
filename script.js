'use strict';
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//////////////////////////////////////
//Creating Dom Elements - video 147
const displayMovements = function(movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
console.log(arr.slice(2)); //Log shows c d e
console.log(arr.slice(2, 4)); //Log shows c and d
console.log(arr.slice(-2)); //Log shows d and e
console.log(arr.slice(-1)); //Log shows e
console.log(arr.slice(1, -2)); //Log shows b and c
console.log(arr.slice()); //Shows the full array by creating a shallow copy
console.log([...arr]); //Shows the full array by spreading

//splice
// console.log(arr.splice(2)); //Splice mutates the original array, so this shows c d and e and
// console.log(arr); //this shows a and b

arr.splice(-1); //Removes last element
console.log(arr); //shows a b c d
arr.splice(1, 2); //removes two elements starting at position 1
console.log(arr); //shows a and d

//Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //Reverse mutates the array
console.log(arr2); //This shows the array backwards

//concat
const letters = arr.concat(arr2);
console.log(letters); //This shows the two arrays together as one

//Join
console.log(letters.join(' - ')); //Shows a - b - c - d - etc

//////////////////////////////////////////
//The at Method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//Getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('whip'.at(0));
console.log('whip'.at(-1));

///////////////////////////////////////
//Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for(const movement of movements) {
for(const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
};

console.log('----forEach----')
movements.forEach(function(mov, i, arr) {
  if(mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
//You cannot break out of a forEach loop, so continue and break don't work - if you need those, use a for of loop

/////////////////////////////////////
//forEach with Maps and Sets

//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) { //The underscore is for a throwaway value
  console.log(`${value}: ${value}`);
});
*/

/////////////////////////////////
//Coding Challenge 1

const dogsJulia = [3,5,2,12,7];
const dogsKate = [4,1,15,8,3];

const checkDogs = function(dogsJulia, dogsKate) {
  const juliaCorrected = dogsJulia.slice(1,3); //Could have done a slice and then splice here to mutate the data
  console.log(juliaCorrected);

  const dogsAll = juliaCorrected.concat(dogsKate);
  console.log(dogsAll);
  
  dogsAll.forEach(function(age, dog, dogsAll) {
    if(age >= 3) {
      console.log(`Dog number ${dog + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${dog + 1} is still a puppy`);
    }
  });
};

checkDogs(dogsJulia, dogsKate);