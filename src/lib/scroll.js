import Lenis from 'lenis';

let lenis = null;
let rafId = null;

export function initSmoothScroll() {
  if (lenis) return lenis;
  if (typeof window === 'undefined') return null;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return null;

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.4,
  });

  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return lenis;
}

export function destroySmoothScroll() {
  if (rafId) cancelAnimationFrame(rafId);
  if (lenis) lenis.destroy();
  lenis = null;
  rafId = null;
}

export function scrollToId(id, offset = 88) {
  const cleanId = id.startsWith('#') ? id.slice(1) : id;
  const el = document.getElementById(cleanId);
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { offset: -offset, duration: 1.25 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }
}

export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.25 });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function stopScroll() {
  if (lenis) lenis.stop();
}

export function startScroll() {
  if (lenis) lenis.start();
}
