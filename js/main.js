/* ============================================================
   ADETOUN OLAYEMI — PORTFOLIO JS
   ============================================================ */

/* ---------- NAVBAR ---------- */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  backToTop.classList.toggle('visible', window.scrollY > 400);
  setActiveNavLink();
});

function openMenu() {
  hamburger.classList.add('open');
  navLinks.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

const navClose = document.getElementById('navClose');
if (navClose) navClose.addEventListener('click', closeMenu);

// Close on link click
navLinks.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close on overlay background click
navLinks.addEventListener('click', (e) => {
  if (e.target === navLinks) closeMenu();
});

/* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
function setActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.scrollY + 100;

  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav-desktop .nav-link[href="#${id}"]`);
    if (!link) return;
    link.classList.toggle('active', scrollY >= top && scrollY < top + height);
  });
}

/* ---------- ROLE TEXT ANIMATION ---------- */
const roles = [
  'Lead Frontend Engineer',
  'Technical Trainer',
  '"Code meets design"',
  'React & TypeScript Expert',
  'Team Lead & Mentor',
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleEl = document.getElementById('roleText');

function typeRole() {
  const current = roles[roleIndex];

  if (!isDeleting) {
    roleEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeRole, 2200);
      return;
    }
  } else {
    roleEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const speed = isDeleting ? 45 : 80;
  setTimeout(typeRole, speed);
}

setTimeout(typeRole, 1000);

/* ---------- SCROLL ANIMATIONS (IntersectionObserver) ---------- */
const aosEls = document.querySelectorAll('[data-aos]');

const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings inside a grid
      const siblings = [...entry.target.parentElement.children];
      const idx = siblings.indexOf(entry.target);
      const delay = Math.min(idx * 80, 400);

      setTimeout(() => {
        entry.target.classList.add('aos-in');
      }, delay);

      aosObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

aosEls.forEach(el => aosObserver.observe(el));

/* ---------- PROJECT FILTER ---------- */
const filterBtns   = document.querySelectorAll('.filter-btn');
const projCards    = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projCards.forEach(card => {
      const cat = card.dataset.cat;
      const show = filter === 'all' || cat === filter;

      if (show) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = 'fadeUp 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ---------- BACK TO TOP ---------- */
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- CONTACT FORM ---------- */
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const formNote    = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        formNote.style.color = '#2b7a78';
        formNote.textContent = '✓ Message sent! I\'ll get back to you soon.';
        contactForm.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      formNote.style.color = '#c0392b';
      formNote.textContent = 'Something went wrong. Please email me directly at toun.olayemi2@gmail.com';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    }
  });
}

/* ---------- DARK MODE ---------- */
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const html        = document.documentElement;

// Restore saved preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
html.setAttribute('data-theme', savedTheme);
themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeIcon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

/* ---------- FOOTER YEAR ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- FADE-UP KEYFRAME (injected) ---------- */
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
