// Robust anchor scrolling for mobile Safari + sticky header.
// If the target section isn't on the current page (e.g. we're on
// /privacy), navigate there instead. On success, the URL is updated
// to the clean path (no #) via the History API.
export default function scrollToPath(path) {
  const id = path.replace(/^\//, "");
  const el = document.getElementById(id);
  if (!el) {
    window.location.href = path;
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
  history.replaceState(null, "", path);
}
