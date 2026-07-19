# OwnerAway — complete website (ready to run)

Complete Vite + React project for ownerawayusa.com. Single-page marketing site
with anchor navigation, plus /privacy and /terms pages.

## What's included
- Hero with background photo, badge, play-button CTA
- Problem/Solution, How It Works, stat bar, Services, Industries,
  Owner Concerns, Trust, Founder Story, Meet the Team, comparison table,
  FAQ accordion, pilot application form
- Light/dark theme toggle (saved per visitor, defaults to system preference)
- Logo with large tagline + SM mark (light + dark variants, auto-switching)
- Working application form -> emails via Web3Forms (key already set in src/data.js)
  with revenue range + concern fields and a Terms/Privacy consent line
- Privacy Policy (/privacy) and Terms of Service (/terms) + footer links
- Robust mobile menu navigation (iOS-safe scrolling)
- Social links: LinkedIn / Instagram / Facebook (footer)
- Netlify SPA redirect (public/_redirects) so deep links & refreshes work

## Run it
```bash
npm install
npm run dev
```

## Deploy (Netlify)
Push to the GitHub repo Netlify is connected to. public/_redirects handles
SPA routing. After deploys, test in a private tab (assets cache hard).

## Edit content
Nearly all text lives in src/data.js — nav, hero, steps, services,
industries, team, FAQ, form options, social URLs, and the Web3Forms key.

## Notes
- Legal pages are templates — have an attorney review before heavy promotion.
- Founder/team photos: currently initials placeholders; swap to <img> with
  the provided .oa-avatar-img class when you have headshots.
