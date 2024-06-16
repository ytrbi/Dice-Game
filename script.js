'use strict';

// Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
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
let playing = true;

const switchPlayer = function() {
    currentScore = 0; // Reset current score
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function() {
  if (playing) {
    // Generate a random number between 1 and 6 (Random Dice Roll)    
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    // Display the Dice 
    dice.classList.remove('hidden');
    dice.src = `Assests/dice-${randomNum}.png`;

    if(randomNum !== 1) {
      // Add randomNum to current score
      currentScore += randomNum;
      // Update current score of active player
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function() {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      alert(`Player ${activePlayer + 1} wins!`);
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function() {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  
  score0.textContent = 0;
  score1.textContent = 0;
  currentPly1.textContent = 0;
  currentPly2.textContent = 0;

  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  console.log('Game reset');
});
