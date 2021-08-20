'use strict';
const ranNum = Math.floor(Math.random() * 20) + 1;
const inputBox = document.querySelector('.guess');
let score = parseInt(document.querySelector('.score').innerText);
let screen = document.querySelector('.message');
const FAIL = "it's false";
const SUCCESS = "it's correct";
function checkCorrNum(event) {
  //event.preventDefault();
  console.log(ranNum);

  if (ranNum === inputBox.value) {
    screen.innerText = SUCCESS;
  } else {
    score -= 1;
    document.querySelector('.score').innerText = score;
    screen.innerText = FAIL;
  }
}

document.querySelector('.check').addEventListener('click', checkCorrNum);
