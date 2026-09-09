/**
 * Adds `observingClassName` to every element matching `selector`, then adds
 * `className` when the element scrolls into view.
 *
 * Progressive enhancement rules:
 * - Nothing is marked as observing until this runs, so if the script never
 *   loads the content is rendered in its final, readable state.
 * - If IntersectionObserver is missing, or the user prefers reduced motion,
 *   everything is revealed immediately.
 * - Elements taller than the viewport get a lower effective threshold so they
 *   still reveal on small screens.
 */
export function useVisibilityClass({
  selector,
  className = 'is-visible',
  observingClassName = 'is-observing',
  threshold = 0.2,
  rootMargin = '0px',
  once = true,
  respectReducedMotion = true,
  revealIfAlreadyVisible = true,
}) {
  const elements = Array.from(document.querySelectorAll(selector));

  if (!elements.length) {
    return () => {};
  }

  const revealAll = () => {
    elements.forEach((element) => {
      element.classList.add(observingClassName, className);
    });
  };

  const reduceMotion =
    respectReducedMotion &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealAll();
    return () => {};
  }

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  };

  const revealOnNextFrame = (element) => {
    if (element.dataset.revealQueued === 'true') {
      return;
    }

    element.dataset.revealQueued = 'true';

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        element.classList.add(className);
        delete element.dataset.revealQueued;
      });
    });
  };

  elements.forEach((element) => {
    element.classList.add(observingClassName);

    if (revealIfAlreadyVisible && isInViewport(element)) {
      revealOnNextFrame(element);
    }
  });

  const thresholds = Array.from(new Set([0, threshold].filter((value) => value >= 0 && value <= 1)));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const elementHeight = entry.boundingClientRect.height || 1;
        // A tall element can never reach the requested ratio on a short screen,
        // so scale the requirement down to what the viewport can show.
        const reachable = Math.min(threshold, (viewportHeight * 0.5) / elementHeight);
        const visible = entry.isIntersecting && entry.intersectionRatio >= reachable;

        if (visible) {
          element.classList.add(className);

          if (once) {
            observer.unobserve(element);
          }

          return;
        }

        if (!once && !entry.isIntersecting) {
          element.classList.remove(className);
        }
      });
    },
    {
      threshold: thresholds,
      rootMargin,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}
