/* 
//Values and Variables Assignment
const country = "The United States"
const continent = "North America"
let population = 332

console.log(country, continent, population);

// Data Types Assignment
const isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

//let, const, and var Assignment - changed some variables to const instead of let in previous sections
language = "English";

//Basic Operators Assignment 
console.log(population / 2);
population++;
population--;
console.log(population);
const finland = 6
console.log(population > finland);
const averagePop = 33
console.log(population < finland);
let description = country + " is in " + continent + ", and its " + population + " million people speak " + language + ".";
console.log(description);

//Strings and Template Literals Assignment
let descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(descriptionNew);

//Taking Decisions Assignment
if(population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${averagePop - population} million below average.`);
}

//Type Conversaion and Coercion Assignment
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //'617'
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

//Equality Operators
// numNeighbors = Number(prompt("How many neighbor countries does your country have?"));
// if(numNeighbors === 1) {
//     console.log("Only 1 border!");
// } else if(numNeighbors > 1) {
//     console.log("More than 1 border!");
// } else {
//     console.log("No borders");
// }

//Logical Operators
if(language === "English" && population < 50 && isIsland === false) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet your criteria.`)
}

//Switch Statement Assignment
switch(language) {
    case "Chinese":
    case "Mandarin":
        console.log("Most number of native speakers!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers!");
        break;
    case "English":
        console.log("3rd place in number of native speakers!");
        break;
    case "Hindi":
        console.log("4th place in number of native speakers!");
        break;
    case "Arabic":
        console.log("3rd place in number of native speakers!");
        break;
    default:
        console.log("Great language too!")
}

//Conditional/Ternary Operator
population > 33 ? console.log("The United States population is above average.") : console.log("The United States population is below average.");
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`);
*/