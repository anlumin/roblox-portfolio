/* ============================================================
   PORTFOLIO — MAIN.JS
   Sections:
     1. Tab switching
     2. Scroll reveal
   ============================================================ */


// ── 1. TAB SWITCHING ──────────────────────────────────────────
// Switches the active tab and its corresponding panel
// when a tab button is clicked.

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Deactivate all tabs and panels
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    // Activate the clicked tab and its matching panel
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});


// ── 2. SCROLL REVEAL ──────────────────────────────────────────
// Adds the "visible" class to .reveal elements when they
// enter the viewport, triggering their CSS fade-in animation.

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));