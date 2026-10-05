'use strict';

document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});

const gallery = document.querySelector('.product-gallery');
const image = document.querySelector('#product-image');
const position = document.querySelector('#product-position');
const thumbnails = [...document.querySelectorAll('[data-view]')];
let index = 0;
function showImage(next) {
  index = (next + 3) % 3;
  image.src = `images/necklaces/necklace-01/model${index + 1}.png`;
  image.alt = `Necklace 01, view ${index + 1} of 3`;
  position.textContent = `${index + 1} / 3`;
  thumbnails.forEach((button, view) => button.setAttribute('aria-pressed', String(view === index)));
}
document.querySelector('.product-controls').hidden = false;
document.querySelector('.product-thumbnails').hidden = false;
gallery.querySelectorAll('[data-step]').forEach(button => {
  button.addEventListener('click', () => showImage(index + Number(button.dataset.step)));
});
thumbnails.forEach(button => button.addEventListener('click', () => showImage(Number(button.dataset.view))));
gallery.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showImage(index + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
