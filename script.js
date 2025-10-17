// Year appearing in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggler
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
  const isOpen = menu.style.display === 'flex';
  menu.style.display = isOpen ? 'none' : 'flex';
  hamburger.setAttribute('aria-expanded', !isOpen);
});

// Lead modal toggler
const leadModal = document.getElementById('leadModal');
const openLead = document.getElementById('openLead');
const closeLead = leadModal.querySelector('.modal-close');
openLead.addEventListener('click', () => {
  leadModal.classList.add('open');
  leadModal.setAttribute('aria-hidden', 'false');
});
closeLead.addEventListener('click', () => {
  leadModal.classList.remove('open');
  leadModal.setAttribute('aria-hidden', 'true');
});
leadModal.addEventListener('click', (e) => {
  if (e.target === leadModal) {
    leadModal.classList.remove('open');
    leadModal.setAttribute('aria-hidden', 'true');
  }
});

// Theme toggle button logic
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');
  themeToggle.textContent = isLight ? '🌞' : '🌙';
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
