'use strict';

// Set the business number including country code, digits only. No '+' or spaces.
const WHATSAPP_NUMBER = '';
const DEFAULT_ENQUIRY = 'Hello SURAVI, I would love to know more about your collection.';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const enquiry = document.querySelector('#whatsapp-link');
const note = document.querySelector('#contact-note');
const hasWhatsApp = /^[1-9]\d{6,14}$/.test(WHATSAPP_NUMBER);

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

function setEnquiry(message) {
  if (!hasWhatsApp) return;
  enquiry.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  enquiry.target = '_blank';
  enquiry.rel = 'noopener noreferrer';
  note.textContent = 'A personal conversation, at your convenience. Opens WhatsApp.';
}

setEnquiry(DEFAULT_ENQUIRY);
enquiry.addEventListener('click', () => {
  if (!hasWhatsApp) note.textContent = 'Our WhatsApp enquiry line is not open yet. Please visit again soon.';
});
document.querySelectorAll('[data-collection]').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelector('#selection-label').textContent = `${card.dataset.collection} · Coming soon`;
    setEnquiry(`Hello SURAVI, I would love to enquire about ${card.dataset.collection}.`);
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
