import { useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import WhyOwnerAway from "./pages/WhyOwnerAway";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

export default function App() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  // Take over scroll handling from the browser entirely.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Jump (not animate) to the top on every route change, bypassing
  // any CSS `scroll-behavior: smooth` that could be interrupted.
  useLayoutEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";   // disable smooth for this jump
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;

    // Focus for accessibility WITHOUT letting focus scroll the page.
    if (mainRef.current) mainRef.current.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <>
      <a href="#main" className="oa-skip">Skip to main content</a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="page-fade" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/why" element={<WhyOwnerAway />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}