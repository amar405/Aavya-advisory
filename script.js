// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');

// Check if user previously selected dark mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
  themeIcon.textContent = '☀️';
  themeLabel.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', function () {
  const isDark = document.body.classList.contains('dark-mode');
  
  if (isDark) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    themeIcon.textContent = '🌙';
    themeLabel.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
    themeLabel.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  }
});

// View More / View Less buttons for services
const viewMoreButtons = document.querySelectorAll('.view-more-btn');

viewMoreButtons.forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const targetList = document.getElementById(targetId);
    
    if (targetList.classList.contains('collapsed')) {
      targetList.classList.remove('collapsed');
      targetList.classList.add('expanded');
      this.textContent = 'View Less';
    } else {
      targetList.classList.remove('expanded');
      targetList.classList.add('collapsed');
      this.textContent = 'View More';
    }
  });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    const isOpen = menu.style.display === 'flex';
    menu.style.display = isOpen ? 'none' : 'flex';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Close mobile menu if open
      if (menu && window.getComputedStyle(hamburger).display !== 'none') {
        menu.style.display = 'none';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
