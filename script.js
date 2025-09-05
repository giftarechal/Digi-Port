// ===== Mobile Menu =====
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Close menu when clicking a link (on mobile)
menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Smooth Scroll Offset for Sticky Nav (optional enhancement) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      const el = document.querySelector(id);
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

// ===== Scroll Reveal & Skill Bars =====
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // Animate skill bars when container enters view
      if (entry.target.classList.contains('skills') || entry.target.classList.contains('skill')) {
        document.querySelectorAll('.skill__fill').forEach(bar => {
          if (!bar.dataset.filled) {
            bar.style.width = bar.dataset.percent;
            bar.dataset.filled = 'true';
          }
        });
      }
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal, .skills, .skill').forEach(el => io.observe(el));

// ===== Year in Footer =====
document.getElementById('year').textContent = new Date().getFullYear();