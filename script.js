// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
//Solving thermometer problem 1 - want thermometer to get the temp amplitude, but sometimes there are errors
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp altitude? Difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error, and what do we do about it?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min temp in array
// - Subtract min from max and return it

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
//At first, max will be three - then it compares it to 7, and resets the max to 7. Then it compares it to 4, and keeps 7 as the max.

//Thermometer problem 2
//function should now receive 2 arrays of temps

//1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No, just merge two arrays

//2) Breaking up into sub-problems
// - Merge 2 arrays - looked this up on MDN

//Added additional parameter in function and concatenated two arrays in function

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    //C - Fix - make the value entered into the prompt box a number once it's submitted
    value: 10,
  };

  //B - Find - In the log, we can see that 10 is a string instead of a number
  //console.log(measurement);
  console.table(measurement);
  //console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

//A - Identify - when we put 10 in the prompt, it shows 10273 instead of 283
console.log(measureKelvin());

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0]; //Changed this to 0 to introduce a bug
  let min = temps[0]; //Changed this to 0 to introduce a bug
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    //Can put in a breakpoint in the debugger by putting "debugger;" in the code
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//A- Identify
console.log(amplitudeBug);

/////////////////////////////////////////
//Coding Challenge

//Understand the problem
//How to make a string pull from an array
//How to make it show X days

//Mine - I didn't realize it was supposed to be one string, so mine come in different console logs
// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`...${arr[i]}°C in ${[i + 1]} days`);
//   }
// };

// printForecast([12, 5, -5, 0, 4]);

//His
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecastHis = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${[i + 1]} days ... `;
  }
  console.log("... " + str);
};
printForecastHis(data1);
*/
