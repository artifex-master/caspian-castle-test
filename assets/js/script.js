'use strict'

const toggleFunc = (elem) => { elem.classList.toggle('active'); };

const menu = document.querySelector('.mobile-header__menu');

menu.addEventListener('click', function() {
  toggleFunc(menu);
});