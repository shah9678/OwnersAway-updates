// Robust anchor scrolling for mobile Safari + sticky header.
// If the target section isn't on the current page (e.g. we're on
// /privacy), navigate to the homepage with the hash instead.
export default function scrollToHash(hash) {
  const el = document.querySelector(hash);
  if (!el) {
    window.location.href = "/" + hash;
    return;
  }
  const header = document.querySelector(".oa-header");
  const offset = (header ? header.offsetHeight : 0) + 16;
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  try {
    window.scrollTo({ top: y, behavior: "smooth" });
  } catch {
    window.scrollTo(0, y);
  }
}
