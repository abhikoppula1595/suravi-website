'use strict';

// This script is isolated to the collection page; homepage behavior is untouched.
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

document.querySelectorAll('[data-necklace]').forEach(card => {
  const number = card.dataset.necklace;
  const image = card.querySelector('img');
  const position = card.querySelector('.necklace-position');
  const sources = [1, 2, 3].map(view => `images/necklaces/necklace-${number}/model${view}.png`);
  let index = 0;
  card.querySelector('.necklace-controls').hidden = false;
  card.querySelectorAll('[data-step]').forEach(button => {
    button.addEventListener('click', () => {
      index = (index + Number(button.dataset.step) + sources.length) % sources.length;
      image.src = sources[index];
      image.alt = `Necklace ${number}, view ${index + 1} of ${sources.length}`;
      position.textContent = `${index + 1} / ${sources.length}`;
    });
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
