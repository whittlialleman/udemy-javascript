/*
////////////////////////////////////////
//Strict Mode
'use strict'; //Activates strict mode which helps to reduce bugs

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //if you forget the s on hasDriversLicense, the code will not run
if (hasDriversLicense) console.log("I can drive!");

//const interface = "Audio"; console logs an error because the word interface is a reserved word
//const private = 534; private is also a reserved word

/////////////////////////////////////
//Functions

function logger() { //This defines the function
    console.log("My name is Whip");
}

logger(); //This is called calling, running, or invoking the function -the code in the function will be executed

function fruitProcessor(apples, oranges) { //The parameters listed will be defined once the function is called
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0); //The values in the parentheses (arguments) become the values of the parameters; we are storing the value of the string juice outputs in the function to the variable and then logging the variable
console.log(appleJuice);
//console.log(fruitProcessor(5,0)); //We can log the string without setting a new variable by logging the function with the arguments

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

////////////////////////////////////////////
//Function Declarations vs. Expressions

function calcAge1(birthYear) { //This is a function declaration - you're declaring the name of the function
    return 2037 - birthYear;
}
const age1 = calcAge1(1997);

const calcAge2 = function (birthYear) { //This is a function expression - it creates an anonymous function, i.e. it doesn't have a name - expressions return values, so these return values
    return 2037 - birthYear;
}
const age2 = calcAge2(1997);

console.log(age1, age2);

//Function declarations can be called before they are defined, but function expressions cannot be called before they are defined.
//The choice between function declarations and expressions kind of comes down to personal preference

////////////////////////////////////////
//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear; //This is a function expression using arrow function format
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1997, "Whip"));
console.log(yearsUntilRetirement(1991, "Jonas"));

////////////////////////////////////////
//Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2,3));

//////////////////////////////////////////
//Functions Review

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement; //return will immediately exit the function, so return has to go after the console.log or else it will not show
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1997, "Whip"));
console.log(yearsUntilRetirement(1950, "Bob"));

////////////////////////////////
//Code Challenge One

const calcAverage = (a, b, c) => (a + b + c) /3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);


function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins are the winner! (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas are the winner! (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No team wins.`);
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

////////////////////////////////
//Introduction to Arrays

const friends = ["Whip", "Gavin", "Nigel"]; //This is called literal syntax and is most popular
console.log(friends);

//const years = new Array(1997, 1985, 1995); //This is another, less common form to write arrays

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length); //This tells us the number of elements in the array
console.log(friends[friends.length - 1]); //This gives you the last element in the array because they are 0 indexed

friends[2] = "Ashlyn"; //We can change the value of an element even though the array was set with const
console.log(friends);

const whip = ["Whip", "Alleman", 2037 - 1997, "web developer", friends];
console.log(whip);
console.log(whip.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1997, 1985, 1995, 1998];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

//////////////////////////////////////////////
//Array Operations

const friends = ["Whip", "Gavin", "Nigel"];

//Add elements
const newLength = friends.push("Ashlyn"); //This adds an element to the end of the array
console.log(friends); //This gets the length of the new array
console.log(newLength);

friends.unshift("Ashlyn"); //This adds an elements to the beginning of the array
console.log(friends);

//Remove elements
friends.pop(); //Removes the last element from the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //Removes the first element from the array
console.log(friends);

console.log(friends.indexOf("Gavin")); //Shows the index of the element
console.log(friends.indexOf("John")); //This will show -1 in the console log because we do not have an element "John"

console.log(friends.includes("Gavin")); //States true or false if the array includes that element - this uses strict equality
console.log(friends.includes("John"));

if (friends.includes("Gavin")) {
    console.log("You have a friend called Gavin.");
}

//////////////////////////////////////////////
//Coding Challenge Two

const calcTip = function(bill) {
    if(bill >= 50 && bill <=300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(tips);
console.log(totals);

///////////////////////////////////////
//Intro to Objects

const whip = { //whip is an object
    firstName: "Whip",
    lastName: "Alleman",
    age: 2037 - 1997,
    job: "Web Developer",
    friends: ["Ashlyn", "Gavin", "Nigel"]
}; //This has 5 properties/keys and 5 values

/////////////////////////////////////
//Dot vs. Bracket Notation

const whip = { //whip is an object
    firstName: "Whip",
    lastName: "Alleman",
    age: 2037 - 1997,
    job: "Web Developer",
    friends: ["Ashlyn", "Gavin", "Nigel"]
};
console.log(whip);

console.log(whip.lastName); //This shows the last name property in the log - dot notation
console.log(whip["lastName"]); //This shows the last name property in the log - bracket notation - you can put any expression in the brackets

const nameKey = "Name";
console.log(whip['first' + nameKey]);
console.log(whip['last' + nameKey]); //Cannot do this with dot notation

const interestedIn = prompt("What do you want to know about Whip? Choose between firstName, lastName, age, job, and friends.");

if(whip[interestedIn]) {
    console.log(whip[interestedIn]); //This replaces 'interestedIn' with the requested value from the object in the prompt window
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends.");
}

whip.location = "The United States";
whip["instagram"] = "@whittlialleman";
console.log(whip);

//Challenge: "Whip has 3 friends, and her best friend is named Ashlyn."
console.log(`${whip.firstName} has ${whip.friends.length} friends, and her best friend is ${whip.friends[0]}.`);

///////////////////////////////////////
//Object Methods

const whip = { //whip is an object
    firstName: "Whip",
    lastName: "Alleman",
    birthYear: 1997,
    job: "Web Developer",
    friends: ["Ashlyn", "Gavin", "Nigel"],
    hasDriversLicense: true,
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     return 2037 - this.birthYear; //'this' refers to the whip object
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(whip.calcAge()); //Dot notation
//console.log(whip['calcAge'](1997)); //Bracket notation
console.log(whip.age);

//Challenge: "Whip is a 40 year old teacher, and he has a driver's license."
console.log(whip.getSummary());

/////////////////////////////////////////
//Challenge Three

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = (this.mass / (this.height ** 2));
        return this.BMI;
    }
};

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = (this.mass / (this.height ** 2));
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

if(mark.BMI > john.BMI) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s (${john.BMI}).`);
} else {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.BMI}).`);
};

/////////////////////////////
//The for loop

//for loop keeps running while condition is true - can potentially run forever if not coded properly
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

//////////////////////////////////
//Looping Arrays, Breaking and Continuing

const whip = [
    "Whip",
    "Alleman",
    2037 - 1997,
    "Web Developer",
    ["Ashlyn", "Gavin", "Nigel"],
    true
];
const types = [];

for(let i = 0; i < whip.length; i++) { //set i equal to the array length so it stops at the end of the array
    //Reading from whip array
    console.log(whip[i], typeof whip[i]);
    //Ways to fill types array
    //types[i] = typeof whip[i];
    types.push(typeof whip[i]);
}

console.log(types);

const years = [1997, 1985, 1991, 1994];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//Continue and Break
console.log("--- ONLY STRINGS ---")
for(let i = 0; i < whip.length; i++) {
    if(typeof whip[i] !== 'string') continue;
    console.log(whip[i], typeof whip[i]);
}

console.log("--- BREAK WITH NUMBER ---")
for(let i = 0; i < whip.length; i++) {
    if(typeof whip[i] === 'number') break;
    console.log(whip[i], typeof whip[i]);
}

/////////////////////////////////////
//Looping Backwards and Loops in Loops

const whip = [
    "Whip",
    "Alleman",
    2037 - 1997,
    "Web Developer",
    ["Ashlyn", "Gavin", "Nigel"],
];

//looping backward
for (let i = whip.length - 1; i >= 0; i--) {
    console.log(i, whip[i]);
}

//loops inside loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting Exercise ${exercise}-----------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}.`);
    }
}

//////////////////////////////////////////
//While Loop

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) { //This while loop does not depend on a counter, as we don't know how many times we'll need to roll the dice to get a 6
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end.");
}

///////////////////////////////////////////
//Coding Challenge Four

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill) {
    if(bill >= 50 && bill <=300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

for(let bill = 0; bill < bills.length; bill++) {
    const tip = calcTip(bills[bill]);
    tips.push(tip);
    totals.push(tip + bills[bill]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
