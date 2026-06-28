const NAVBAR_OFFSET = 80;

/**
 * scrollToSection — smoothly scrolls to a section by id, offsetting for
 * the fixed navbar height.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
