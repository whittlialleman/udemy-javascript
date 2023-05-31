'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //This cuts off the decimal points, sets the range between 1 and 20, and includes 20 in the range
let score = 20;

document.querySelector('.check').addEventListener('click', function() { //We don't call this function anywhere - the click event is what calls it
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        //If guess box is empty
        document.querySelector('.message').textContent = 'No number!';

        //When player wins
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'; //Changes to the DOM have to be in a string
        document.querySelector('.number').style.width = '30rem';

        //When guess is too high
    } else if(guess > secretNumber) {
        if(score > 1) {document.querySelector('.message').textContent = 'Too High!';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
        }

        //when guess is too low  
    } else if(guess < secretNumber) {
        if(score > 1) {document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
        }
    }
});

/////////////////////////////////
//Coding Challenge 1

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});