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
*/