// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    hamburger.setAttribute('aria-expanded', String(!open));
  });
}

// Lead modal
const leadModal = document.getElementById('leadModal');
const openLead = document.getElementById('openLead');
const closeLead = leadModal?.querySelector('.modal-close');
openLead?.addEventListener('click', () => {
  leadModal.classList.add('open');
  leadModal.setAttribute('aria-hidden', 'false');
});
closeLead?.addEventListener('click', () => {
  leadModal.classList.remove('open');
  leadModal.setAttribute('aria-hidden', 'true');
});
leadModal?.addEventListener('click', (e) => {
  if (e.target === leadModal) {
    leadModal.classList.remove('open');
    leadModal.setAttribute('aria-hidden', 'true');
  }
});

// Fake submit (replace with your endpoint)
document.getElementById('leadForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks! Your request has been received.');
  leadModal.classList.remove('open');
  leadModal.setAttribute('aria-hidden', 'true');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (menu && getComputedStyle(hamburger).display !== 'none') {
        menu.style.display = 'none';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
