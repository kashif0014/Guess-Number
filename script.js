'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guessNumber = Number(document.querySelector('.guess').value);

    if (!guessNumber) {
        displayMessage('No Number');
    } else if (secretNumber === guessNumber) {
        displayMessage('Correct Guess');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guessNumber !== secretNumber) {
        if (score > 1) {
            displayMessage(guessNumber > secretNumber ? 'Too High' : 'Too LOw');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});