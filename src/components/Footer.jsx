import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { NAV } from "../data";

export default function Footer() {
  const half = Math.ceil(NAV.length / 2);
  // Match the header: land at the top of the destination page on every click
  // (covers clicking the link for the page you're already on, too).
  const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  return (
    <footer className="oa-footer">
      <div className="oa-container">
        <div className="oa-footer-top">
          <div>
            <Logo />
            <p>Temporary operational coverage so business owners can step away with confidence.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {NAV.slice(0, half).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} onClick={toTop}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              {NAV.slice(half).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} onClick={toTop}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="oa-footer-bottom">
          <p className="oa-copy">© {new Date().getFullYear()} OwnerAway. All rights reserved.</p>
          <div className="oa-social">
            <a href="#" aria-label="OwnerAway on Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="OwnerAway on Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="OwnerAway on LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}