'use strict';

// Shared by all product enquiry buttons. Country code and digits only.
const BUSINESS_WHATSAPP_NUMBER = '917660856961';

// Future product pages load this script and provide their own data-product-code
// and data-product-name on the existing enquiry link.
document.querySelectorAll('[data-product-code][data-product-name]').forEach(enquiry => {
  const { productCode, productName } = enquiry.dataset;
  if (!/^[1-9]\d{6,14}$/.test(BUSINESS_WHATSAPP_NUMBER) || !productCode || !productName) return;

  const message = `Hi Suravi, I'm interested in product ${productCode} - ${productName}. Could you please share more details?`;
  enquiry.href = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  enquiry.target = '_blank';
  enquiry.rel = 'noopener noreferrer';

  const noteId = enquiry.getAttribute('aria-describedby');
  const note = noteId && document.getElementById(noteId);
  if (note) note.hidden = true;
  enquiry.removeAttribute('aria-disabled');
  enquiry.removeAttribute('aria-describedby');
});

// The homepage uses the same central number for a general enquiry.
const generalEnquiry = document.querySelector('#whatsapp-link');
if (generalEnquiry && /^[1-9]\d{6,14}$/.test(BUSINESS_WHATSAPP_NUMBER)) {
  const message = "Hi Suravi! I'm interested in exploring your collection. Could you please help me with more information?";
  generalEnquiry.href = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  generalEnquiry.target = '_blank';
  generalEnquiry.rel = 'noopener noreferrer';
}
