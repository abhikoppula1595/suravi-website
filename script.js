'use strict';

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

document.documentElement.classList.add('js');

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

document.querySelectorAll('[data-collection]').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelector('#selection-label').textContent = `${card.dataset.collection} · Coming soon`;
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
