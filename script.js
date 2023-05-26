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
*/
