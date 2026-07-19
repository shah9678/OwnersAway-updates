import logoColor from "../assets/owneraway-logo.png";
import logoWhite from "../assets/owneraway-logo-white.png";

/**
 * Image logo (SM mark and tagline are part of the image).
 * CSS decides which variant shows: color on light surfaces,
 * white version in dark mode and in the footer.
 */
export default function Logo() {
  const goTop = (e) => {
    e.preventDefault();
    try { window.scrollTo({ top: 0, behavior: "smooth" }); }
    catch { window.scrollTo(0, 0); }
    history.replaceState(null, "", " ");
  };

  return (
    <a href="/" className="oa-logo" aria-label="OwnerAway — you take off, we take over" onClick={goTop}>
      <img className="oa-logo-img oa-logo-img-color" src={logoColor} alt="OwnerAway" />
      <img className="oa-logo-img oa-logo-img-white" src={logoWhite} alt="OwnerAway" aria-hidden="true" />
    </a>
  );
}
