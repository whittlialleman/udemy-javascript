/*
//Functions Assignment
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const unitedStates = describeCountry("United States", 332, "Washington D.C.");
const finland = describeCountry("Finland", 6, "Helsinki");

console.log(unitedStates, finland);

//Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const percentUnitedStates = percentageOfWorld1(332);
const percentChina = percentageOfWorld1(1441);
const percentFinland = percentageOfWorld1(6);
console.log(percentUnitedStates, percentChina, percentFinland);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100
}

console.log(percentageOfWorld2(332));
console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(6));

//Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;
const percentUnitedStates2 = percentageOfWorld3(332);
console.log(percentUnitedStates2);

//Functions Calling Functions
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage} of the world.`
}

console.log(describePopulation("The United States", 332));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Finland", 6));

//Intro to Arrays
const populations = [332, 1441, 6, 59];
console.log(populations.length === 4);

percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

//Array Operations
const neighbors = ["Canada", "Mexico"];
console.log(neighbors);
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop("Utopia");
console.log(neighbors);

if(!neighbors.includes("Germany")) {
    console.log("Probably not a central European country");
}

neighbors[1] = "Mexican Republic";
console.log(neighbors);

//Intro to Objects
const myCountry = {
    country: "The United States",
    capital: "Washington D.C.",
    language: "English",
    population: 332,
    neighbors: ["Canada", "Mexico"],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
};

//Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}.`);
myCountry.population = myCountry.population - 2; //Could also do myCountry.population -= 2;
console.log(myCountry.population);
myCountry['population'] = myCountry['population'] +2; //Could also do myCountry.population += 2;
console.log(myCountry.population);

//Object Methods - added the describe and checkIsland methods in the Intro to Objects section
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

//The for Loop
// for(let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting.`);
// }

//Looping Arrays, Breaking and Continuing
//populations = [332, 1441, 6, 59];
percentages2 = [];
for(let i = 0; i < populations.length; i++) {
    const percent = percentageOfWorld1(populations[i]);
    percentages2.push(percent);
}
console.log(percentages2);

//Looping Backwards and Loops in Loops
const listOfNeighbors = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];

for(let country = 0; country < listOfNeighbors.length; country++) {
    for(let neighbor = 0; neighbor < listOfNeighbors[country].length; neighbor++) {
        console.log(`Neighbor: ${listOfNeighbors[country][neighbor]}`);
    }
}
*/