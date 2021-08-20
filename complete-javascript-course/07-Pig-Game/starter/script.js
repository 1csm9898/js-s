'use strict';

const diceEl = document.querySelector('.dice');
const btmRoll = document.querySelector('.btn-roll');
const btmHold = document.querySelector('.btn-hold');
const btmNew = document.querySelector('.btn-new');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  current0El;
};
