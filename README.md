# JobBuddy case study

Static page. No build step.

## Deploy on Vercel

1. Import this repo at vercel.com/new.
2. Framework preset: Other. Build command: none. Output directory: `.`
3. After the first deploy, open `index.html` and change `assets/01-hero.webp` in the
   `og:image` tag to the full URL, for example
   `https://your-project.vercel.app/assets/01-hero.webp`. Link previews need a full URL.

## Adding the demo video

Put the file in `assets/` as `demo.mp4`, then in `index.html` find the comment
"Demo video goes here" and remove the `<!--` and `-->` around it.

## Files

- `index.html` the page
- `styles.css` page styles, same system as the Kalcend case study (Geist, Geist Mono), light mode
- `script.js` builds the chapter list and highlights the section in view
- `fonts/` self hosted fonts, so nothing loads from Google
- `assets/` every screen, diagram and clip
- `vercel.json` clean URLs and long caching for assets and fonts
