'use strict';

// Selecting elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice'); // Dice image
    // Current Score
const currentPly1 = document.getElementById('current--0');
const currentPly2 = document.getElementById('current--1');
    // buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// Rolling Dice Functionality
btnRoll.addEventListener('click', function() {
    // Generate a random number between 1 and 6 (Random Dice Roll)    
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    // Display the Dice 
    dice.classList.remove('hidden');
    dice.src = `Assests/dice-${randomNum}.png`;

    if(randomNum !== 1) {
        // Add randomNum to current score
        currentScore += randomNum;
        currentPly1.textContent = currentScore;
    } else {
        // switch to the next player
    }
    // Update the score
    // Add the rolled number to the current score
    
});