const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll reveal
document.querySelectorAll('section').forEach(s => s.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Form submit
// NOTE: static front-end only — connect to Formspree, Netlify Forms, or your
// own backend to actually receive submissions.
const leadForm = document.getElementById('leadForm');
const formStatus = document.getElementById('formStatus');
leadForm.addEventListener('submit', function (e) {
  e.preventDefault();
  formStatus.textContent = "Got it — replace this with real form handling before launch.";
  leadForm.reset();
});
