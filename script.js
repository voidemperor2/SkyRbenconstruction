// ============================================================
// SkyRben Construction — scroll interactions
// ============================================================

document.getElementById('year').textContent = new Date().getFullYear();

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* -------- nav shrink on scroll -------- */
const nav = document.getElementById('siteNav');
const onScrollNav = () => {
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScrollNav, { passive: true });
onScrollNav();

/* -------- reveal-on-scroll for sections/cards -------- */
const revealEls = document.querySelectorAll('.reveal');

if (prefersReduced) {
  revealEls.forEach(el => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty('--d', `${i * 70}ms`);
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
}

/* -------- hero signature drawing: paths draw themselves in -------- */
const heroDrawing = document.getElementById('heroDrawing');

function primeDrawPaths() {
  heroDrawing.querySelectorAll('.draw-path').forEach(path => {
    const length = path.getTotalLength ? path.getTotalLength() : 400;
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });
}

function playDrawing() {
  const paths = heroDrawing.querySelectorAll('.draw-path');
  paths.forEach((path, i) => {
    const length = path.getTotalLength ? path.getTotalLength() : 400;
    path.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.2,.7,.2,1) ${i * 180}ms`;
    path.style.strokeDashoffset = 0;
  });
  heroDrawing.classList.add('is-drawn');
}

if (prefersReduced) {
  heroDrawing.querySelectorAll('.draw-path').forEach(p => (p.style.strokeDashoffset = 0));
  heroDrawing.classList.add('is-drawn');
} else if (heroDrawing) {
  primeDrawPaths();
  // play shortly after load so the page doesn't feel like it's waiting on it
  window.addEventListener('load', () => setTimeout(playDrawing, 250));
}

/* -------- smooth-scroll for in-page nav links -------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      }
    }
  });
});
