# SURAVI — The House of Tradition

A lightweight static showcase built with HTML, CSS and vanilla JavaScript. No dependencies, build step, checkout or backend. Compatible with GitHub Pages, including repository subpaths.

## Preview locally

Run this command from the project folder:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000. If a server is already running, refresh that address. Press Ctrl+C to stop the server. Opening `index.html` directly also works.

## Project files

- `index.html`: homepage content, collection placeholders and SEO metadata.
- `styles.css`: mobile-first layout, shared colours and typography.
- `script.js`: mobile navigation and configurable WhatsApp enquiries.
- `images/`: supplied originals, smaller JPEG derivatives and a favicon.

## Configure WhatsApp

Set `WHATSAPP_NUMBER` at the top of `script.js` to the business number with country code, digits only. Until configured, the page clearly says the enquiry line is coming soon. No phone number is invented. Selecting a collection personalizes the enquiry message. Visitors send the message themselves in WhatsApp.

## Add photography and products later

Replace the `.placeholder` block in a collection card with a photograph and descriptive alt text. Include width, height and `loading="lazy"`, and compress the file before adding it. The four cards are editorial placeholders, not actual products. Replace the New Arrivals teaser when real product information is ready. The brand story already supports future sarees, bangles and accessories.

## Assets and accessibility

The supplied logo and hero are used with smaller responsive derivatives. Original files remain unchanged. The hero text sits in the photograph's negative space on desktop; mobile gives photography and text separate space. System fonts avoid third-party font requests. Includes a skip link, semantic headings, visible keyboard focus, mobile menu state, Escape handling and reduced-motion support. Core navigation remains usable without JavaScript.

## Validation

Run `node --check script.js` to check JavaScript syntax. Review desktop, tablet and mobile layouts in a browser before publication. Add a canonical URL after choosing the final public address. Nothing has been deployed, pushed or committed.
