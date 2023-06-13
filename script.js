'use strict';

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
const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};


const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
  .filter(mov => mov > 0)
  .map(deposit => deposit * acc.interestRate/100)
  .filter((int, i, arr) => {
    return int >= 1;
  })
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accts) {
  accts.forEach(function(acct) {
    acct.username = acct.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
};

createUsernames(accounts);

const updateUI = function(acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
};

//Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    //Doing the transfer and updating interface
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
  
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  
  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    //Delete Account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

///////////////////////////////
//The Map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;
const movementsUSD = movements.map(function(mov) {
  return mov * eurToUSD;
});

// const movementsUSD = movements.map(mov => //Same as above re-written with arrow function
//   mov * eurToUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) {
  movementsUSDfor.push(mov * eurToUSD);
}
console.log(movementsUSDfor);

const movementsDescription = movements.map((mov, i) =>
    `Movement ${i + 1}: You deposited ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescription);

////////////////////////////////
//The Filter Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function(mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// const depositsFor = []; //Same way of writing the filter code above
// for(const mov of movements) {
//   if(mov > 0) {
//     depositsFor.push(mov);
//   }
// };
// console.log(depositsFor);

const withdrawals = movements.filter(function(mov) {
  return mov < 0;
});
console.log(withdrawals);

///////////////////////////////////
//Reduce Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//accumulator is like a snowball
const balance = movements.reduce(function(acc, curr, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
}, 0); //0 is the first value of acc
console.log(balance);

// let balance2 = 0; //Another way of doing the reduce code above
// for(const mov of movements) {
//   balance2 += mov;
// };
// console.log(balance2);

//maximum value
const max = movements.reduce((acc, mov) => {
  if(acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

 //////////////////////////////////////////////////////
 //Coding CHallenge 2

 const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? (2 * age) : (16 + age *4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
 };
const test1 = calcAverageHumanAge([5,2,4,1,15,8,3]);
const test2 = calcAverageHumanAge([16,6,10,5,6,1,4]);
console.log(test1, test2);

///////////////////////////////////
//Magic of Chaining Methods

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;
//Pipeline
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUSD).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

////////////////////////////////////////
//Coding Challenge 3

const calcAverageHumanAge = ages => ages.map(age => age <= 2 ? (2 * age) : (16 + age *4)).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const test1 = calcAverageHumanAge([5,2,4,1,15,8,3]);
const test2 = calcAverageHumanAge([16,6,10,5,6,1,4]);
console.log(test1, test2);

/////////////////////////////////////////
//Find Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account);

/////////////////////////////////////
//Some and Every

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//Some
//Checks for equality
console.log(movements.includes(-130));

//Checks for a condition
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

/////////////////////////////////////////////
//Flat and flatMap

const arr = [[1,2,3], [4,5,6], 7, 8];
console.log(arr.flat()); //Puts all values in one array

const arrDeep = [[[1,2],3], [4,[5,6]], 7, 8];
console.log(arrDeep.flat()); //Keeps two arrays in a new array - only goes one level of nesting deep
console.log(arrDeep.flat(2)); //This sets the depth of nesting, so this shows all values in one array - default depth is 1

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

//Doing all of the above with flat and chaining
const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flatMap - can only go one level deep
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

/////////////////////////////////////
//Sorting Arrays

//Strings
const owners = ['Whip', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners); //sort mutates the array so logging it again will show the new arrangement

//Numbers
console.log(movements);

console.log(movements.sort()); //log shows [-130, -400, -650, 1300, 200, 3000, 450, 70] because they are "alphabetically" sorted
//return < 0, a comes before b (keep order) - return > 0, a comes after b (switch order)

//Ascending
movements.sort((a, b) => {
  if(a > b) {
    return 1
  }
  if(b > a) {
    return -1
  }
});

movements.sort((a,b) => a - b); //Simpler way to write the above code
console.log(movements);

//Descending
movements.sort((a, b) => {
  if(a > b) {
    return -1
  }
  if(b > a) {
    return 1
  }
});

movements.sort((a,b) => b - a); //Simpler way to write the above code
console.log(movements);
*/

/////////////////////////////////////////////
//Creating and Filling Arrays

const arr = [1,2,3,4,5,6,7];
const x = new Array(7); //This creates an array with 7 empty slots
console.log(x);
console.log(x.map(() => 5));

//x.fill(1); //This fills the array with 1's
//x.fill(1, 3); //This fills the array with 1's starting at index 3
x.fill(1, 3, 5); //This fills the array with 1's starting at index 3 and ending at index 5
console.log(x);

arr.fill(23, 2, 6); //replaces the values in the array from indices 2-6 with 23
console.log(arr);

//Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (cur, i) => i+1);
console.log(z);

labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
  console.log(movementsUI);
});