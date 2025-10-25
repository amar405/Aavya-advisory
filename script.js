// Theme Toggle (works for both footer and sidebar)
const sidebarThemeToggle = document.getElementById('sidebarThemeToggle');
const themeIcon = document.querySelector('.theme-icon');
const themeText = document.querySelector('.theme-text');

// Check if user previously selected dark mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
  if (themeIcon) themeIcon.textContent = '☀️';
  if (themeText) themeText.textContent = 'Light Mode';
}

// Sidebar theme toggle
if (sidebarThemeToggle) {
  sidebarThemeToggle.addEventListener('click', function () {
    const isDark = document.body.classList.contains('dark-mode');
    
    if (isDark) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark Mode';
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light Mode';
      localStorage.setItem('theme', 'dark');
    }
  });
}

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

// Sidebar newsletter form
const newsletterForm = document.querySelector('.sidebar-newsletter');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing! We will send updates to: ' + email);
    this.reset();
  });
}
