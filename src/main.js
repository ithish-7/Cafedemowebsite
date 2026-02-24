document.addEventListener('DOMContentLoaded', () => {
  initAntigravityEffects();
  initScrollAnimations();
  initMobileMenu();
});

/**
 * Mobile Menu Logic
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const links = document.querySelectorAll('.mobile-nav-links a');

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Initialize "Antigravity" floating effects
 */
function initAntigravityEffects() {
  const floatingElements = document.querySelectorAll('.floating');

  floatingElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      // Subtle tilt and lift
      el.style.transform = `
        translateY(${-20 + y * 10}px) 
        translateX(${x * 10}px) 
        rotateX(${-y * 5}deg) 
        rotateY(${x * 5}deg)
      `;
      el.style.boxShadow = `${-x * 20}px ${20 - y * 10}px 0 var(--latte-beige)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translateY(0) translateX(0) rotateX(0) rotateY(0)';
      el.style.boxShadow = 'none';
    });
  });
}

/**
 * Initialize scroll-based reveal animations
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Navigation hide/show and transparency on scroll
 */
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  // Toggle scrolled class for background
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Hide/Show on scroll
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  lastScrollY = window.scrollY;
});
