# Vizta Marketing — Portfolio Site

A static one-page site for Vizta Marketing, ready for GitHub Pages.

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `vizta-marketing`).
2. Push these three files (`index.html`, `style.css`, `script.js`) to the repo root.
3. Go to **Settings → Pages**, set source to the `main` branch, root folder.
4. Your site will be live at `https://<your-username>.github.io/vizta-marketing/`.

## Before you publish — replace these placeholders

- **Contact info** in `index.html` (`#contact` section and the WhatsApp button):
  - `hello@vizta-marketing.com`
  - `https://wa.me/923000000000` (appears twice)
  - Location text "Rawalpindi, Pakistan"
- **Case studies** in the "Findings" section: the three cards currently show sample/illustrative numbers, not real client results. Swap in your actual before/after data, or remove a card if you don't have three yet.
- **Pricing** in the "Pricing" section: confirm the $199 / $499 / $999+ tiers match what you actually offer.
- **Footer links**: GitHub and LinkedIn `href="#"` placeholders need your real profile URLs.
- **Form handling**: the contact form is front-end only right now — submitting it shows a confirmation message but doesn't send anywhere. Connect it to a service like Formspree or Netlify Forms (both have free tiers and work with static GitHub Pages sites), or point the form at your own backend.

## Structure

- `index.html` — page content and structure
- `style.css` — design system (CSS variables at the top of the file control color/type)
- `script.js` — scroll animations, mobile nav, pricing selection, form handling
