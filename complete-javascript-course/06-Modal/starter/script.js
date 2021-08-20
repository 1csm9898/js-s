'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const BtnOpenModal = document.querySelectorAll('.show-modal');
//console.log(BtnOpenModal);

for (let i = 0; i < BtnOpenModal.length; i++)
  BtnOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape')
    !modal.classList.contains('hidden') ? closeModal() : console.log('not');
});
