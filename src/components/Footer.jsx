import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { NAV, SOCIALS } from "../data";
import scrollToPath from "../lib/scrollTo";

export default function Footer() {
  const go = (e, path) => {
    e.preventDefault();
    scrollToPath(path);
  };

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
              {NAV.map((n) => (
                <li key={n.to}>
                  <a href={n.to} onClick={(e) => go(e, n.to)}>{n.label}</a>
                </li>
              ))}
              <li><a href="/apply" onClick={(e) => go(e, "/apply")}>Request Coverage</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="https://ownerawayusa.com">ownerawayusa.com</a></li>
              <li>
                <div className="oa-social">
                  <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="OwnerAway on LinkedIn"><LinkedinIcon /></a>
                  <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="OwnerAway on Instagram"><InstagramIcon /></a>
                  <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="OwnerAway on Facebook"><FacebookIcon /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="oa-footer-bottom">
          <p className="oa-copy">© {new Date().getFullYear()} OwnerAway. All rights reserved.</p>
          <nav className="oa-legal-links" aria-label="Legal">
            <a href="/privacy">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="/terms">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
