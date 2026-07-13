// Robust anchor scrolling for mobile Safari + sticky header.
// Computes the absolute Y of the target and scrolls the window directly,
// instead of scrollIntoView (which is unreliable on iOS while layout
// is changing, e.g. right after the mobile menu collapses).
export default function scrollToHash(hash) {
    const el = document.querySelector(hash);
    if (!el) return;
  
    const header = document.querySelector(".oa-header");
    const offset = (header ? header.offsetHeight : 0) + 16;
  
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  
    try {
      window.scrollTo({ top: y, behavior: "smooth" });
    } catch {
      window.scrollTo(0, y); // very old browsers: instant jump
    }
    history.replaceState(null, "", hash);
  }