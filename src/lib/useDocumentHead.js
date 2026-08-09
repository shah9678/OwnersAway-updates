import { useEffect } from "react";

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Updates document title + meta description/canonical/OG tags per route.
// index.html ships the homepage's defaults so they're present for crawlers
// that don't execute JS; this keeps them in sync as the SPA navigates.
export default function useDocumentHead({ title, description, canonical, ogTitle, ogDescription }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta("name", "description", description);
    if (canonical) {
      setLink("canonical", canonical);
      setMeta("property", "og:url", canonical);
    }
    setMeta("property", "og:title", ogTitle || title);
    setMeta("property", "og:description", ogDescription || description);
  }, [title, description, canonical, ogTitle, ogDescription]);
}
