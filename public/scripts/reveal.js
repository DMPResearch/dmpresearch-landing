export function useVisibilityClass({
  selector,
  className = 'is-visible',
  observingClassName = 'is-observing',
  threshold = 0.28,
  rootMargin = '0px 0px -8% 0px',
  once = true,
} = {}) {
  const elements = Array.from(document.querySelectorAll(selector))
  if (!elements.length) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    elements.forEach((el) => {
      el.classList.add(observingClassName, className)
    })
    return
  }

  elements.forEach((el) => el.classList.add(observingClassName))

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className)
          if (once) observer.unobserve(entry.target)
        }
      })
    },
    { threshold, rootMargin },
  )

  elements.forEach((el) => observer.observe(el))
}

useVisibilityClass({ selector: '[data-reveal]' })
useVisibilityClass({ selector: '.word-title', threshold: 0.4 })
