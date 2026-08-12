import Reveal from "../components/Reveal";
import ApplyForm from "../components/ApplyForm";
import scrollToPath from "../lib/scrollTo";
import useDocumentHead from "../lib/useDocumentHead";
import shivamShah from "../assets/shivam-shah.jpeg";
import {
  HERO, PROBLEM, SOLUTION, STEPS, STATS, SERVICES, INDUSTRIES,
  CONCERNS, TRUST, FOUNDER, TEAM, COMPARE, FAQ, APPLY,
} from "../data";
import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";

function FaqItem({ item, index, open, onToggle }) {
  const btnId = `faq-q-${index}`;
  const panelId = `faq-a-${index}`;
  return (
    <div className="oa-faq-item">
      <h3 style={{ margin: 0 }}>
        <button id={btnId} className="oa-faq-q" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
          {item.q}
          <ChevronDown className="chev" size={20} aria-hidden="true" />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={btnId} className={`oa-faq-a ${open ? "open" : ""}`}>
        <div><p>{item.a}</p></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(-1);

  // All nav routes (/, /how, /services, ...) render this same page at a
  // different scroll position, so they all canonicalize to the homepage
  // to avoid duplicate-content signals while still being crawlable.
  const currentPath =
    window.location.pathname.replace(/\/+$/, "") || "/";

const canonicalUrl =
    currentPath === "/"
        ? "https://ownerawayusa.com/"
        : `https://ownerawayusa.com${currentPath}`;
  const pageSEO = {
  "/": {
    title: "OwnerAway USA | Temporary Operational Coverage",
    description:
      "OwnerAway provides temporary operational coverage and qualified relief managers for owner-dependent businesses during vacations, medical leave, emergencies, and extended absences.",
  },

  "/how": {
    title: "How OwnerAway Works | Temporary Business Coverage",
    description:
      "Learn how OwnerAway helps owner-dependent businesses prepare for temporary operational coverage and stay running while the owner is away.",
  },

  "/services": {
    title: "Business Coverage Services | OwnerAway USA",
    description:
      "Explore OwnerAway temporary operational coverage services designed to help owner-dependent businesses continue operating while owners step away.",
  },

  "/industries": {
    title: "Industries We Serve | OwnerAway USA",
    description:
      "Discover the types of owner-dependent businesses OwnerAway supports with temporary operational coverage and qualified relief management.",
  },

  "/team": {
    title: "Meet the OwnerAway Team | Operational Coverage",
    description:
      "Meet the people behind OwnerAway and learn about the experience and vision driving temporary operational coverage for business owners.",
  },

  "/trust": {
    title: "Why Trust OwnerAway | Relief Manager Coverage",
    description:
      "Learn how OwnerAway approaches relief manager selection, reliability, communication, and operational safeguards when business owners are away.",
  },

  "/faq": {
    title: "OwnerAway FAQ | Temporary Business Coverage",
    description:
      "Get answers about OwnerAway, temporary operational coverage, relief managers, scheduling, industries served, and how to request coverage.",
  },

  "/apply": {
    title: "Request Business Coverage | OwnerAway USA",
    description:
      "Request temporary operational coverage from OwnerAway. Tell us about your business, location, coverage dates, and operational needs to get started.",
  },
};

const seo = pageSEO[currentPath] || pageSEO["/"];
  useDocumentHead({
  title: seo.title,
  description: seo.description,
  canonical: canonicalUrl,
  ogTitle: seo.title,
  ogDescription: seo.description,
});

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="oa-hero" aria-labelledby="hero-h">
        <div className="oa-hero-photo" aria-hidden="true" />
        <div className="oa-hero-shade" aria-hidden="true" />
        <div className="oa-container oa-hero-inner">
          <p className="oa-eyebrow oa-fade">{HERO.badge}</p>
          <h1 id="hero-h" className="oa-fade" style={{ animationDelay: ".08s" }}>
            You Take Off.<br /><span className="oa-gold">We Take Over.</span>
          </h1>
          <p className="oa-hero-lede oa-fade" style={{ animationDelay: ".16s" }}>{HERO.lede}</p>
          <div className="oa-hero-cta oa-fade" style={{ animationDelay: ".24s" }}>
            <a href="/apply" className="oa-btn oa-btn-gold" onClick={(e) => { e.preventDefault(); scrollToPath("/apply"); }}>Request Pilot Coverage</a>
            <a href="/how" className="oa-btn oa-btn-ghost" onClick={(e) => { e.preventDefault(); scrollToPath("/how"); }}><Play size={16} aria-hidden="true" /> How It Works</a>
          </div>
          <ul className="oa-hero-features oa-fade" style={{ animationDelay: ".32s" }}>
            {HERO.trust.map((t) => (
              <li key={t.title}>
                <div><strong>{t.title}</strong><span>{t.sub}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Problem / Solution ---------------- */}
      <section className="oa-section oa-soft" aria-label="The problem and our solution">
        <div className="oa-container oa-split">
          <Reveal as="article" className="oa-card oa-redline">
            <h3>{PROBLEM.title}</h3>
            <p><strong>{PROBLEM.strong}</strong></p>
            <p>{PROBLEM.body}</p>
          </Reveal>
          <Reveal as="article" className="oa-card oa-greenline" delay={100}>
            <h3>{SOLUTION.title}</h3>
            <p><strong>{SOLUTION.strong}</strong></p>
            <p>{SOLUTION.body}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- How It Works ---------------- */}
      <section id="how" className="oa-section" aria-labelledby="how-h">
        <div className="oa-container">
          <Reveal className="oa-center-block">
            <h2 id="how-h" className="oa-h2">How It Works</h2>
            <p className="oa-lead">A simple process designed to reduce risk, build trust, and keep your business stable.</p>
          </Reveal>
          <ol className="oa-steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" className="oa-step" key={s.title} delay={i * 90}>
                <div className="oa-num" aria-hidden="true">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.sub}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Stat bar ---------------- */}
      <section className="oa-statbar" aria-label="What every engagement includes">
        <div className="oa-container oa-stats-grid">
          {STATS.map((s) => (
            <Reveal className="oa-stat" key={s.strong}>
              <strong>{s.strong}</strong>
              <span>{s.sub}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Services (dark) ---------------- */}
      <section id="services" className="oa-section oa-panel" aria-labelledby="svc-h">
        <div className="oa-container">
          <Reveal className="oa-center-block">
            <h2 id="svc-h" className="oa-h2">What We Handle</h2>
            <p className="oa-lead">OwnerAway is not just staffing. We focus on temporary operational coverage and business continuity.</p>
          </Reveal>
          <div className="oa-grid3">
            {SERVICES.map((s, i) => (
              <Reveal as="article" className="oa-mini" key={s.title} delay={(i % 3) * 90}>
                <div className="oa-ico" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Industries ---------------- */}
      <section id="industries" className="oa-section" aria-labelledby="ind-h">
        <div className="oa-container">
          <Reveal className="oa-center-block">
            <h2 id="ind-h" className="oa-h2">Who We Help First</h2>
            <p className="oa-lead">We are starting focused so we can deliver better, learn faster, and build trust with the right businesses.</p>
          </Reveal>
          <div className="oa-grid4">
            {INDUSTRIES.map((it, i) => (
              <Reveal as="article" className="oa-mini oa-mini-light" key={it.title} delay={(i % 4) * 90}>
                <div className="oa-ico" aria-hidden="true">{it.icon}</div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Owner concerns ---------------- */}
      <section className="oa-section oa-soft" aria-labelledby="con-h">
        <div className="oa-container">
          <Reveal className="oa-center-block">
            <h2 id="con-h" className="oa-h2">What Business Owners Worry About</h2>
            <p className="oa-lead">Before trusting anyone with operations, owners need real answers.</p>
          </Reveal>
          <div className="oa-grid3">
            {CONCERNS.map((c, i) => (
              <Reveal as="article" className="oa-card" key={i} delay={(i % 3) * 90}>
                <p className="oa-quote">{c.q}</p>
                <p>{c.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Trust (dark) ---------------- */}
      <section id="trust" className="oa-section oa-panel" aria-labelledby="trust-h">
        <div className="oa-container">
          <Reveal className="oa-center-block">
            <h2 id="trust-h" className="oa-h2">Every Engagement Begins With Trust</h2>
            <p className="oa-lead">Business owners need confidence before letting anyone step into operations.</p>
          </Reveal>
          <div className="oa-grid3">
            {TRUST.map((t, i) => (
              <Reveal as="article" className="oa-mini" key={t.title} delay={(i % 3) * 90}>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Founder ---------------- */}
      <section className="oa-section" aria-labelledby="fs-h">
        <div className="oa-container oa-founder">
          <Reveal className="oa-photo">
            <img src={shivamShah} alt="Shivam Shah, Founder and CEO of OwnerAway" />
          </Reveal>
          <Reveal delay={100}>
            <p className="oa-eyebrow">{FOUNDER.badge}</p>
            <h2 id="fs-h" className="oa-h2">{FOUNDER.title}</h2>
            <p className="oa-lead" style={{ margin: "0 0 16px" }}>{FOUNDER.body}</p>
            <ul className="oa-clean">
              {FOUNDER.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Team ---------------- */}
      <section id="team" className="oa-section oa-soft" aria-labelledby="team-h">
        <div className="oa-container">
          <Reveal className="oa-center-block">
            <h2 id="team-h" className="oa-h2">{TEAM.title}</h2>
            <p className="oa-lead">{TEAM.sub}</p>
          </Reveal>
          <div className="oa-grid4 oa-team-grid">
            {TEAM.members.map((m, i) => (
              <Reveal as="article" className="oa-team-card" key={`${m.name}-${i}`} delay={(i % 4) * 90}>
                {m.photo
                  ? <img className="oa-avatar-img" src={m.photo} alt={m.name} />
                  : <div className="oa-avatar" aria-hidden="true">{m.initials}</div>}
                <h3>{m.name}</h3>
                <p className="oa-role">{m.role}</p>
                <p className="oa-bio">{m.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Comparison ---------------- */}
      <section className="oa-section oa-soft" aria-labelledby="cmp-h">
        <div className="oa-container">
          <Reveal className="oa-center-block">
            <h2 id="cmp-h" className="oa-h2">{COMPARE.title}</h2>
            <p className="oa-lead">{COMPARE.sub}</p>
          </Reveal>
          <Reveal className="oa-compare">
            <table>
              <thead>
                <tr>{COMPARE.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
              </thead>
              <tbody>
                {COMPARE.rows.map((r) => (
                  <tr key={r[0]}>
                    <td data-label={COMPARE.head[0]}>{r[0]}</td>
                    <td data-label={COMPARE.head[1]}>{r[1]}</td>
                    <td data-label={COMPARE.head[2]}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" className="oa-section" aria-labelledby="faq-h">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            }),
          }}
        />
        <div className="oa-container">
          <Reveal className="oa-center-block">
            <h2 id="faq-h" className="oa-h2">FAQ</h2>
            <p className="oa-lead">Answers to common questions from owners considering temporary operational coverage.</p>
          </Reveal>
          <Reveal className="oa-faq">
            {FAQ.map((item, i) => (
              <FaqItem
                key={item.q} item={item} index={i}
                open={openFaq === i}
                onToggle={() => setOpenFaq((cur) => (cur === i ? -1 : i))}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- Apply ---------------- */}
      <section id="apply" className="oa-section oa-apply" aria-labelledby="apply-h">
        <div className="oa-container oa-formwrap">
          <Reveal>
            <p className="oa-eyebrow">{APPLY.badge}</p>
            <h2 id="apply-h" className="oa-h2 oa-h2-ondark">{APPLY.title}</h2>
            <p className="oa-apply-lede">{APPLY.body}</p>
            <ul className="oa-clean oa-clean-ondark">
              {APPLY.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <ApplyForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
