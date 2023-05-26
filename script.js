////////////////////////////////////////////
//Values and Variables

/* let js = 'amazing';

console.log(40+8+23-10);
console.log("Whip");
console.log(25);

let firstName = "Whip";

console.log(firstName);
console.log(firstName);

let whip_alleman = "WA";

let myFirstJob = "Food Service";
let myCurrentJob = "Programmer";

console.log(myFirstJob);

//This is how you comment a single line of code in JS - mutli lines use / and *

///////////////////////////////////////
//Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Whip");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);

console.log(typeof null); //This is a bug in JS - console will show object even though it's null

///////////////////////////////////////
//let, const, and var

let age = 30;
age = 31; //called reassigning or 'mutating' variable

const birthYear = 1997;
// birthYear = 1998;

//const job; cannot set const variables to undefined, console will throw an error

var job = "Programmer";
job = "Teacher";

lastName = "Alleman";
console.log(lastName);

///////////////////////////////////////
//Basic Operators
//Math Operators
const now = 2037;
const ageWhip = now - 1997;
const ageSarah = now - 2018;
console.log(ageWhip, ageSarah);

console.log(ageWhip * 2, ageWhip / 2, 2 ** 3);
//2 ** 3 means 2 to the power of 3

const firstName = "Whip";
const lastName = "Alleman";
console.log(firstName + ' ' +lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; //x = x + 10
x *= 4; //x = x * 4
x++;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageWhip > ageSarah); // >, <, >=, <= different operators
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//Operator Precedence
const now = 2037;
const ageWhip = now - 1997;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25-10-5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageWhip + ageSarah) / 2
console.log(ageWhip, ageSarah, averageAge);

/////////////////////////////////////////////////
//Coding challenge one
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;
const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

///////////////////////////////////////////////////
//Strings and Template Literals

const firstName = "Whip";
const job = "coder";
const birthYear = 1997;
const year = 2023;

const whip = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(whip);

const whipNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; //the quotes are backticks, not normal quotes
console.log(whipNew);

console.log(`Just a regular string.`); //You can use backticks instead of quotes for normal strings

console.log('String with \n\
multiple \n\
lines');

console.log(`String with 
multiple
lines`); //template literal version is easier than using \n\

/////////////////////////////////////////////////
//Taking Decisions

const age = 15;

if(age >= 18) {
    console.log("Sarah can start driving license 🚗")
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//////////////////////////////////////////////
//Coding challenge two

const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;
const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);
if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

//////////////////////////////////////////////
//Type Conversion and Coercion

//Type Conversation
const inputYear = "1997";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Whip")); //console will show NaN, "Not a number", which is an invalid number

console.log(String(23), 23);

//Type Coercion
console.log("I am " + 23 + " years old"); //JS automatically converts the number to a string due to type coercion
console.log("23" - "10" - 3); //console shows 10 because the strings are turned to numbers
console.log("23" + "10" + 3); //console shows 23103 because the numbers are turned to strings
console.log("23" * "2"); //console shows 46 because strings were turned to numbers

let n = "1" + 1; // "11" because other operand is converted to a string
n = n - 1; // 11-1=10 because string is converted to number
console.log(n); //console shows 10

//////////////////////////////////////////////
//Truthy and Falsy Values

//5 Falsy values in JS: 0, ' ', undefined, null, NaN
console.log(Boolean(0)); //falsy
console.log(Boolean(undefined)); //falsy
console.log(Boolean('Whip')); //truthy
console.log(Boolean({})); //truthy
console.log(Boolean('')); //falsy

const money = 0;
if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
} //console shows else statement because 0 is a falsy value, so money is falsy

let height;
if(height) {
    console.log("YAY! Height is defined.");
} else {
    console.log("Height is UNDEFINED");
} //console shows else statement because undefined is a falsy value, so height is falsy

///////////////////////////////////////////
//Equality Operators

const age = '18'; //Assignment is =, loose equality is ==, and exactly equal is ===
if(age === 18) {
    console.log("You just became an adult :D (strict)");
}

if(age == 18) {
    console.log("You just became an adult :D (loose)");
}

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite); //number entered into the prompt is turned into a string

if(favorite === 13) { //'13' === 13 is false; can add Number before the prompt to make it a number
    console.log('Cool! 13 is an amazing number!');
} else if(favorite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 13 or 9');
}

if(favorite !== 13) {
    console.log("Why not 13?");
}

/////////////////////////////////////////////////////
//Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone else should drive...")
// }

const isTired = false; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!")
} else {
    console.log("Someone else should drive...")
}

////////////////////////////////////////////
//Coding challenge three

const avgDolphins = (50+108+89) / 3;
const avgKoalas = (50+108+89) / 3;
console.log(avgDolphins, avgKoalas);

if(avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("The Dolphins are the winner!");
} else if(avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log("The Koalas are the winner!");
} else if(avgDolphins < 100 && avgKoalas < 100) {
    console.log("There is no winner!");
} else {
    console.log("There was a tie!");
}

///////////////////////////////////////////
//Switch Statement

const day = "Friday";

switch(day) {
    case "Monday": //day === "Monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break; //If you don't put the breaks at the end of the cases, the console will log all cases
    case "Tuesday":
        console.log("Prepare theory videos");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Write code examples");
        break;
    case "Friday":
        console.log("Record videos");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy the weekend!");
        break;
    default:
        console.log("Not a valid day");
}

if(day === "Monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if(day === "Tuesday") {
    console.log("Prepare theory videos");
} else if(day === "Wednesday" || day === "Thursday") {
    console.log("Write code examples");
} else if(day === "Friday") {
    console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Enjoy the weekend!");
} else {
    console.log("Not a valid day");
}

//////////////////////////////////////////
//Statements and Expressions

3 + 4
1997
true && false && !false //These are all expressions, as they will produce a value in JS

if(23>10) {
    const str = "23 is bigger";
} //This is a statement, because it doesn't produce a value; the string within the statement is an expression

///////////////////////////////////
//Conditional/Ternary Operator

const age = 15;
//This lets you write an if else statment on one line; the ? is "then" and the : is "else"
//age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if(age>=18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

/////////////////////////////////////
//Third coding challenge

const bill = 430;
const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}.`);
//Could have done this without setting a total variable, could have done ${bill + tip}
*/
