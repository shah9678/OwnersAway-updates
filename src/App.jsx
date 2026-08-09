import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { NAV } from "./data";

const SECTION_IDS = [...NAV.map((n) => n.to.slice(1)), "apply"];

export default function App() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Deep links / back-forward: land on the matching section (e.g. /services)
  // instead of the top. Legal pages and any unknown path start at the top.
  useEffect(() => {
    const id = pathname.replace(/^\//, "");
    const el = SECTION_IDS.includes(id) ? document.getElementById(id) : null;
    if (el) {
      const header = document.querySelector(".oa-header");
      const offset = (header ? header.offsetHeight : 0) + 16;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo(0, y);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <a href="#main" className="oa-skip">Skip to main content</a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
