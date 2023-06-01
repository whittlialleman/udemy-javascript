'use strict';

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