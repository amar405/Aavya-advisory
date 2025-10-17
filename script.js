// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
if (hamburger && menu) {
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

// Dark/light mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function () {
  const body = document.body;
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    themeToggle.textContent = '🌙';
  } else {
    body.classList.add('light-mode');
    themeToggle.textContent = '🌞';
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.getComputedStyle(hamburger).display !== 'none') {
        menu.style.display = 'none';
        hamburger.setAttribute('aria-expanded', false);
      }
    }
  });
});
