import { Link } from "react-router-dom";
import logoColor from "../assets/owneraway-logo.png";
import logoWhite from "../assets/owneraway-logo-white.png";

/**
 * Renders both the color and white logo; CSS (in oa.css) shows the right one
 * based on context: color on light surfaces, white on dark surfaces / dark mode.
 */
export default function Logo() {
  return (
    <Link to="/" className="oa-logo" aria-label="OwnerAway — you take off, we take over">
      <img className="oa-logo-img oa-logo-img-color" src={logoColor} alt="OwnerAway" />
      <img className="oa-logo-img oa-logo-img-white" src={logoWhite} alt="OwnerAway" aria-hidden="true" />
    </Link>
  );
}
