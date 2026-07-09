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

  // Scroll to the top of the new page BEFORE paint, so you never see it
  // land mid-page (e.g. on the CTA form at the bottom).
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Move focus to the main region for keyboard / screen-reader users.
  useEffect(() => {
    if (mainRef.current) mainRef.current.focus();
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