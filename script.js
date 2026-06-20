// ============================
// Respect reduced motion
// ============================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================
// Scroll reveal
// ============================
document.querySelectorAll('section').forEach(section => section.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================
// Mobile nav toggle
// ============================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============================
// Hero audit card animation
// ============================
const rankNum = document.getElementById('rankNum');
const sparkline = document.getElementById('sparkline');
const stamp = document.getElementById('stamp');
const heroVisual = document.querySelector('.hero-visual');

function animateRank() {
  if (prefersReducedMotion) {
    rankNum.textContent = '1';
    sparkline.style.strokeDashoffset = '0';
    stamp.style.opacity = '1';
    return;
  }

  const start = 47;
  const end = 1;
  const duration = 1600;
  const startTime = performance.now();

  const length = sparkline.getTotalLength();
  sparkline.style.strokeDasharray = length;
  sparkline.style.strokeDashoffset = length;
  stamp.style.opacity = '0';

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const value = Math.round(start - (start - end) * eased);
    rankNum.textContent = value;
    sparkline.style.strokeDashoffset = length * (1 - eased);

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      stamp.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      stamp.style.opacity = '1';
    }
  }
  requestAnimationFrame(tick);
}

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateRank();
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

if (heroVisual) heroObserver.observe(heroVisual);

// ============================
// Pricing plan selection
// ============================
const planButtons = document.querySelectorAll('.price-btn');
const planSelected = document.getElementById('planSelected');

planButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    planButtons.forEach(b => { b.classList.remove('selected'); b.textContent = `Choose ${b.dataset.plan}`; });
    btn.classList.add('selected');
    btn.textContent = `${btn.dataset.plan} selected ✓`;
    planSelected.value = btn.dataset.plan;
    document.getElementById('contact').scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
});

// ============================
// Form submit
// NOTE: This is a static front-end only. To actually receive submissions,
// connect this form to a service like Formspree, Netlify Forms, or your
// own backend endpoint, then replace the code below accordingly.
// ============================
const leadForm = document.getElementById('leadForm');
const formStatus = document.getElementById('formStatus');

leadForm.addEventListener('submit', function (e) {
  e.preventDefault();
  formStatus.textContent = 'Request received — replace this with real form handling before launch.';
  leadForm.reset();
});
