/* ═══════════════════════════════════════
   VEIL NOIR — main.js
   By Jocheved
═══════════════════════════════════════ */

// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .col-card, .product-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.transform   = 'translate(-50%, -50%) scale(1.8)';
    ring.style.borderColor = 'rgba(201,168,76,0.5)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.transform   = 'translate(-50%, -50%) scale(1)';
    ring.style.borderColor = 'rgba(201,168,76,0.3)';
  });
});

// ── Active nav link ──
const links = document.querySelectorAll('.nav-links a');
const current = window.location.pathname.split('/').pop();
links.forEach(link => {
  if (link.getAttribute('href') === current) link.classList.add('active');
});
