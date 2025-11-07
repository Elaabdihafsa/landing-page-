// ====== Navbar Hamburger Toggle ======
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Close nav on link click (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
}

// ====== Smooth Scroll for .scroll-link ======
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ====== Signup Form Validation ======
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = signupForm.elements['name'].value.trim();
    const email = signupForm.elements['email'].value.trim();
    const msg = document.getElementById('signupMessage');
    if (!name || !email) {
      msg.textContent = 'Please fill in all fields.';
      msg.style.color = '#e74c3c';
      return;
    }
    // Simple email validation
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      msg.textContent = 'Please enter a valid email address.';
      msg.style.color = '#e74c3c';
      return;
    }
    msg.textContent = 'Thank you for signing up!';
    msg.style.color = 'var(--accent)';
    signupForm.reset();
  });
}

// ====== Contact Form Validation ======
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = contactForm.elements['name'].value.trim();
    const email = contactForm.elements['email'].value.trim();
    const message = contactForm.elements['message'].value.trim();
    const msg = document.getElementById('contactMessage');
    if (!name || !email || !message) {
      msg.textContent = 'Please fill in all fields.';
      msg.style.color = '#e74c3c';
      return;
    }
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      msg.textContent = 'Please enter a valid email address.';
      msg.style.color = '#e74c3c';
      return;
    }
    msg.textContent = 'Your message has been sent!';
    msg.style.color = 'var(--accent)';
    contactForm.reset();
  });
}