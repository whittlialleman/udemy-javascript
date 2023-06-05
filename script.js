'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/////////////////////////////////////////////////
//Destructuring Arrays
// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,
  
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delivious pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////////
//Sets

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

console.log(new Set('Whip'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

for(const order of ordersSet) {
  console.log(order);
};

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('whittlialleman').size);

/*
////////////////////////////////////////
//Looping Objects: Object Keys, Values, and Entries

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `
for(const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
//console.log(entries);

for(const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
};

////////////////////////////////////////
//Optional Chaining

if(restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
};

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open); //This will only run if mon exists - otherwise it will show undefined
console.log(restaurant.openingHours?.mon?.open); //this checks to see if openingHours and mon exist

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
};

//Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist'); //this shows the expected order because restaurant.order exists
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist'); //This shows the string because orderRisotto does not exist

//Arrays
const users = [
  {name: 'Whip',
  email: 'hello@whip.com'}
];

console.log(users[0]?.name ?? 'User array empty'); //This shows Whip because users[0] exists

/////////////////////////////////////////
//The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
};

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
};

//console.log([...menu.entries()]);

////////////////////////////////////
//Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10; //This is a more concise way of writing the two lines above, but won't work if the value is 0
//rest2.numGuests ||= 10;

//nullish assignment operator
rest1.numGuests ??= 10; //This works because it allows 0 to be a truthy value
rest2.numGuests ??= 10;

//AND assignment operator
rest2.owner = rest2.owner && '<ANONYMOUS>'; //This sets the owner name equal to the string because the first value is truthy and it went to the next value
rest1.owner = rest1.owner && '<ANONYMOUS>'; //This shows the owner as undefined because the first value is falsy

rest1.owner &&= '<ANONYMOUS>'; //This is a shorter way of writing the two lines above, but it doesn't show the owner as undefined which is better
rest2.owner &&= '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);

////////////////////////////////////
//Nullish Coalescing Operator

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//nullish values are null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10; //This shows 0 as it accepts 0 as a 'truthy' value here
console.log(guestCorrect);

///////////////////////////////////////
//Short Circuiting

console.log('--------OR-----------')
//Use any data type, return any data type, and they use short-circuiting
console.log(3 || 'Whip'); //This shows 3 because 3 is truthy
console.log('' || 'Whip'); //This shows Whip because an empty string is falsy
console.log(true || 0); //This shows true because true is truthy
console.log(undefined || null); //This shows null because undefined is falsy
console.log(undefined || 0 || 'Hello' || 23 || null); //This shows 'Hello' because it's the first truthy value

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //This shows 23 because we set the value above

const guests2 = restaurant.numGuests || 10;
console.log(guests2); //This also shows 23 because it is set above

console.log('--------AND-----------')
console.log(0 && 'Whip'); //This shows 0 because its falsy
console.log(7 && 'Whip'); //This returns Whip because 7 is true and it moves on

console.log('Hello' && 23 && null && 'Whip'); //This returns null because that is the first falsy value

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //This is a shorter way to write the if statement from above - if orderPizza exists, it will be truthy, and it will move on to the next value

//////////////////////////////////////
//Rest Pattern and Parameters

//1) Destructuring

//SPREAD, because the dots are on the right side of the = sign
const arr = [1, 2, ...[3, 4]];

//REST, because the dogs are on the left side of the = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

//2) Functions
const add = function(...numbers) {
  let sum = 0;
  for (let i=0; i<numbers.length; i++) {
    sum += numbers[i];
  };
  console.log(sum);
};

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

////////////////////////////////////////
//The Spread Operator

const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]]; //This is the old, longer way to add values to the array
console.log(badNewArr);

const newArr = [1,2, ...arr]; //This is the new, faster way to add values to the array
console.log(newArr);

console.log(...newArr); //Logs the element of the array individually

const newMenu = [...restaurant.mainMenu, "Gnocci"]; //This creates a new array
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu]; //creates a shallow copy of the array

//Join arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables are arrays, strings, maps, sets, but NOT objects
const str = 'whip';
const letters = [...str, '', 'A.'];
console.log(letters);
console.log(...str);
//console.log(`${...str} Alleman`); //this doesn't work as it can't put in multiple values

//Real world example
// const ingredients = //[prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);

// //restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); This is the old way
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe',};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// })

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr; //This is called destructuring - the const looks like an array but it's not
// console.log(x,y,z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive two return values from a function
// //console.log(restaurant.order(2,0)); //log shows Garlic Bread and Pizza
// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// //Nested values
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default Values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p,q,r);

// ///////////////////////////////////////////
// //Destructuring Objects

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj); //Have to put this in parentheses or else JS won't let it work because it thinks the curly braces are a code block and you can't set a code block equal to a variable
// console.log(a,b);

// //Nested objects
// const {fri: {open, close}} = openingHours;
// console.log(open, close);

////////////////////////////////////////
//Coding Challenge 1

const game = {
  team1: 'Brayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function(...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');

/////////////////////////////////////////////
//Coding Challenge 2

const game = {
  team1: 'Brayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
};

for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
};

let average = 0;
for(const odd of Object.values(game.odds)) {
  average += odd;
};
average /= Object.values(game.odds).length;
console.log(average);

for(const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
};
*/
