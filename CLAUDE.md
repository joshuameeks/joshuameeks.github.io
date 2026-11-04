# joshuameeksphd.com — notes for Claude

Personal academic website of Joshua Meeks, PhD (Associate Professor of Strategy and Policy, US Naval War College). Audience: historians, strategic studies, and professional military education (PME). Joshua is not a web developer: explain steps plainly, and confirm before pushing.

## How the site works
- Plain static HTML, served by GitHub Pages from the `main` branch root. No build step, no framework.
- Custom domain `joshuameeksphd.com` (registered at Porkbun; DNS A records point to GitHub Pages, `www` CNAME → `joshuameeks.github.io`). The `CNAME` file must stay in the repo root.
- `index.html` holds the whole site. The six "pages" are `<section class="view">` blocks (`#home`, `#research`, `#teaching`, `#speaking`, `#cv`, `#contact`) switched by a small script based on the URL hash. Without JS all sections show.
- `images/` holds the headshot and book covers (`.webp`). The Bloomsbury book still uses a "Cover" placeholder box until a cover exists.
- `cv/Joshua-Meeks-CV.pdf` is generated from `cv/cv-source.html`. After editing the source, run `node cv/build-pdf.js` and check it stays at ~4 pages. Keep the website and CV consistent with each other.
- Pushing to `main` publishes the change live within a minute or two.

## Design
- Fonts (Google Fonts): Libre Caslon Display for name/headings, Source Serif 4 for body, IBM Plex Sans for nav/labels/dates.
- Colors are CSS tokens on `:root` with a dark-mode set; use the tokens, never literal colors.
- Bibliography-style lists use `<ul class="entries">` with a `.when` date column and `.what` text; status tags use `.status` ("Forthcoming") and `.status.oa` ("Open access").
- External links get `target="_blank" rel="noopener"`.
- Restrained, scholarly look. Don't add animations, gradients, cards everywhere, or emoji.

## Content decisions Joshua made (don't undo without asking)
- Bio and page text are in **first person**.
- Spell **Napoleon** without the accent (even though the book cover uses "Napoléon").
- **Wargaming:** describe only as "fleet-sponsored wargames" in the roles of analyst, red-cell player, and adjudicator (2025–present). Never name specific games, series, or dates, and don't add claims about how the work informs teaching. Some of that work is classified.
- The Vietnam exercise is described as "AI-driven"; do not name the AI tool.
- The generative-AI course policy was deliberately cut from both site and CV.
- Teaching & Wargaming page lists only the two course directorships and the professorship under Naval War College. Faculty Advisory Council chair, adjunct years, JPME certification, and the Civilian Service Achievement Medal are intentionally off the website (they remain on the CV).
- *International Journal of Naval History* Book Review Editor role appears on Home (bio) and Contact only, not on Research. No "Editorial service" list on Research.
- Contact lists both emails: joshuameeksphd@gmail.com and joshua.meeks@usnwc.edu. No phone or street address anywhere.
- The simulations book is *Short Games and Active Learning in Political Science: Beating the Clock* (Routledge, 2026), eds. Derek Glasgow, Mark Harvey, Ryan Gibb, and James Fielder — not "Simulations in Political Science."
- The H-France timber paper title is "Resources and Revolution: The Struggle for Corsican Timber."
- Footer carries the standard disclaimer that views are his own and not those of the Naval War College, Department of the Navy, DoD, or US Government. Keep it.

## Open items (optional)
- Bloomsbury cover for *A Global History of the Napoleonic Era* when available.
- A game Joshua designed may be added to Teaching & Wargaming later. Self-contained HTML can be hosted as its own page; a Claude-powered game cannot run standalone and should be linked as a public Claude artifact instead.
- ORCID and Google Scholar links for the Contact page and CV, once Joshua creates them.
- Links for the two published books and the book reviews.
