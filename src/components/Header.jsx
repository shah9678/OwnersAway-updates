import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { NAV, TOPBAR } from "../data";
import scrollToHash from "../lib/scrollTo";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the menu first, wait for the collapsed layout to be measured,
  // then scroll using absolute coordinates (see lib/scrollTo.js).
  const go = (e, hash) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToHash(hash), 60);
  };

  return (
    <>
      <div className="oa-topbar">{TOPBAR}</div>
      <header className="oa-header">
        <div className="oa-container oa-header-inner">
          <Logo />
          <nav className="oa-nav" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.to} href={n.to} onClick={(e) => go(e, n.to)}>{n.label}</a>
            ))}
          </nav>
          <div className="oa-header-right">
            <ThemeToggle />
            <a href="#apply" className="oa-btn oa-btn-navy oa-header-cta" onClick={(e) => go(e, "#apply")}>
              Request Coverage
            </a>
            <button
              className="oa-menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-nav" className="oa-mobile-nav" aria-label="Mobile">
            {NAV.map((n) => (
              <a key={n.to} href={n.to} onClick={(e) => go(e, n.to)}>{n.label}</a>
            ))}
            <a href="#apply" className="oa-btn oa-btn-gold" onClick={(e) => go(e, "#apply")}>
              Request Coverage
            </a>
          </nav>
        )}
      </header>
    </>
  );
}