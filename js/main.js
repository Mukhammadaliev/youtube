var elModalToggler = document.querySelector('.menu-burger');
var elModal = document.querySelector('.main-body');
var elModalClose = document.querySelector('.main-body--open');
var elModalOpen = document.querySelector('.menu-burger--close');

var elForm = document.querySelector('.header-form');
var elFormOpen = document.querySelector('.header-form--open');
var elFormOpenToggler = document.querySelector('.header-form__search-btn');


elFormOpenToggler.addEventListener('click', function () {
  elForm.classList.toggle('header-form--open');
});

elModalToggler.addEventListener('click', function () {
  elModal.classList.toggle('main-body--open');
});
elModalOpen.addEventListener('click', function () {
  elModal.classList.remove('main-body--open');
});
