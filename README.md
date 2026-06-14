# OwnerAway — complete website (ready to run)

This is a COMPLETE Vite + React project — not just source files. Unzip it and
run it directly; you don't need an existing project.

7 pages (Home, How It Works, Services, Industries, Why OwnerAway, FAQ, Contact),
light/dark mode, scroll animations, animated stats, an accessible FAQ accordion,
your OwnerAway logo, and an application form that emails inquiry@ownerawayusa.com.

## Run it (3 commands)

Open Terminal, then:

```bash
cd path/to/owneraway-site     # the unzipped folder (the one with package.json)
npm install                   # installs everything, incl. react-router-dom + lucide-react
npm run dev                   # starts the dev server
```

Open the URL it prints (usually http://localhost:5173).

> Tip: to be sure you're in the right folder, run `ls` — you should see
> `package.json`. If you don't, you're in the wrong folder.

## Make the form email you (one step)

A static website can't send email by itself, so the form uses Web3Forms (free):

1. Go to https://web3forms.com, enter **inquiry@ownerawayusa.com**.
2. Copy the **Access Key** they email you.
3. Open `src/data.js` and paste it:
   `export const WEB3FORMS_ACCESS_KEY = "your-key-here";`

Submissions are then emailed to inquiry@ownerawayusa.com. Left blank, the form
opens the visitor's own email app addressed to that inbox instead.

## Dark / light mode

Sun/moon button in the header. The choice is saved and restored next visit;
new visitors get their system preference. Colors live as tokens at the top of
`src/oa.css`.

## Editing content

Text, links, FAQ, stats, testimonials, and contact details are all in
`src/data.js`. The stats, testimonials, and phone number are placeholders.

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

When deploying, configure your host to rewrite all routes to index.html
(Netlify/Vercel do this automatically) so deep links don't 404 on refresh.
