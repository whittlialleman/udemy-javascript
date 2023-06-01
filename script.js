'use strict';
/*
///////////////////////////////////////////////
//Scoping in Practice
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}.`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Whittli' //If the same variable is described in the current scope and the parent/global scopes, it will use the one defined in the current scope

            output = 'NEW OUTPUT!' //Redefining a variable defined in the parent scope, so the log shows the new string - if we declared a new variable, the log would show the original string as the new string wouldn't be available outside of the scope

            const str = `Oh, and you're a millenial, ${firstName}.`;
            console.log(str);

            function add(a, b) {
            return a + b;
            }
        }
        //console.log(str); The string is not available here as const and let scopes do not go down, only up
        console.log(millenial); //This is available because var variables are function scoped
        //add(2, 3); This is not available because strict mode makes functions block scoped
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Whip';
calcAge(1996);
//console.log(age); This doesn't work here because age is defined in the function, so it is not available here
//printAge(); This is also not available here as it is only available in the first function


////////////////////////////////////
//Hoisting and TDZ in practice

//Variables
console.log(me); //var is available, but it logs as undefined
//console.log(job); //log shows "cannot access 'job' before initialization" as it's still in the TDZ
//console.log(year);//log shows "cannot access 'job' before initialization" as it's still in the TDZ

var me = "Whip";
let job = "Developer";
const year = 1997;

//Functions
//console.log(addDecl(2,3)); //We are able to call a function declaration before it's defined, so the console log shows 5
//console.log(addExpr(2,3)); //Because this function is stored in a const, it is in the TDZ and the log shows the init error
//console.log(addArrow(2,3)); //Anything set with var will be hoisted and set to undefined, so log will show "..is not a function"

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

//Example

if(!numProducts) {
    deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!'); //when using var, the console log will show all products deleted even though numProducts is 10 - hoisting var variables makes them undefined, so the if statement would think that the cart was empty - we avoid using var and use let and const instead
}

var x = 1; //this creates a property on the window object in the browser console, and therefore is visible. let and const do not
let y = 2;
const z = 3;

console.log(x === window.x); //Because it crated a window property, this shows true
console.log(y === window.y); //Because it did not create a window property, this shows false
console.log(z === window.z); //Because it did not create a window property, this shows false
*/

//////////////////////////////////////
//This keyword in practice

console.log(this); //This will show the window object as it's referring to the global element

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1997); //This shows undefined because simple function calls show undefined in strict mode, which we are using

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAgeArrow(1985); //This shows the window object because the arrow function does not get it's own this keyword, so it uses the this   keyword of it's parent function, which is the global scope in this case

const whip = {
    year: 1997,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
}
whip.calcAge(); //This shows the whip object because the this keyword in a method call shows the object that is calling the method

const matilda = {
    year: 2017,
};

matilda.calcAge = whip.calcAge; //Called method borrowing - the window will show calcAge in the matilda object now
matilda.calcAge(); //The this keyword in the jonas object will point to matilda because matilda is the object who called the method

const f = whip.calcAge;
f(); //this is a regular function call, so there is no owner - the this becomes undefined as it is determined based on the owner/caller