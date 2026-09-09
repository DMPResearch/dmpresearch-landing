import { useVisibilityClass } from './hooks/useVisibilityClass.js';

/**
 * Scroll-driven blur reveal for anything carrying `data-scroll-reveal`.
 * The matching CSS lives in src/styles/global.css under "Scroll reveal".
 */
function initScrollReveal() {
  useVisibilityClass({
    selector: '[data-scroll-reveal]',
    threshold: 0.2,
    rootMargin: '0px 0px -8% 0px',
    once: true,
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal, { once: true });
} else {
  initScrollReveal();
}
