# Caroline's Links

A Linktree-style page with my profile and my links, built with React and Vite for the BizzNEST Associate technical assessment.

**Live site:** https://carolinehanaa.github.io/caroline-links/

The page has two themes: a pink, white and red one inspired by Hello Kitty for light mode, and a black, purple and hot-pink one inspired by Kuromi for dark mode.

## Run it locally

You need Node 20 or newer.

```bash
npm install
npm run dev      # start the dev server
npm run lint     # check the code with oxlint
npm run build    # build the production site into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
index.html               page shell, meta tags, and the script that sets the theme before first paint
src/
  main.jsx               mounts the React app
  App.jsx                page layout
  index.css              colour tokens for both themes, base styles
  App.css                component styles
  data/profile.js        my name, bio and links (the only file to edit to change content)
  hooks/useTheme.js      the theme feature
  components/
    Profile.jsx          avatar, greeting, name, bio
    LinkList.jsx         the list of link cards
    ThemeToggle.jsx      the light/dark switch
    Icons.jsx            inline SVG icons
public/                  avatar, favicon, résumé PDF
.github/workflows/       builds and deploys to GitHub Pages on every push to main
```

## My JavaScript feature: light / dark theme toggle

**What it does.** The switch in the top corner flips the whole page between the light and dark themes. The first time you visit, the page matches your device's light or dark setting. Once you click the switch, your choice is saved in `localStorage` and the page opens in that theme on every later visit.

**Why I picked it.** I wanted the feature to be part of the page's personality rather than something added on top. Two characters with opposite looks made a theme toggle the natural choice, and it let me design two full colour palettes instead of one.

**How it works.** Every colour in the CSS is a custom property (`--bg`, `--accent`, and so on). The light values are set on `:root` and the dark values on `:root[data-theme='dark']`. The `useTheme` hook keeps the current theme in React state and copies it to the `data-theme` attribute on `<html>`, so switching themes changes one attribute and the CSS does the rest.

**What was tricky.**

- **A flash of the wrong theme.** React only runs after its JavaScript has downloaded, so a visitor who saved dark mode would see the light theme for a moment first. I fixed this with a small inline script in `index.html` that reads the saved theme and sets `data-theme` before the page paints. The hook then reads its starting value from that attribute, so the decision is made in one place.
- **A system setting is not a choice.** I only write to `localStorage` when the switch is clicked. If I saved the theme on every render, a visitor's system preference would get stored as if they had picked it, and the page would stop following their device. Until they click, the page keeps listening for system theme changes.
- **`localStorage` can fail.** It throws in some private-browsing modes, so reads and writes are wrapped in `try/catch`. The switch still works there; it just isn't remembered.

**What I'd improve with more time.**

- Add a third "match my device" option so a visitor can go back to following their system after choosing a theme.
- Add automated tests for `useTheme`.
- Add a social preview image so the link looks good when shared.

## Other details

- **Second JS touch:** the line above my name greets you with good morning, afternoon or evening based on your local time.
- **Accessibility:** the toggle is a real `<button>` with `role="switch"`, so it works with the keyboard and is announced by screen readers. Every interactive element has a visible focus ring, text colours meet WCAG AA contrast in both themes, and animations are turned off for visitors who ask for reduced motion.
- **Responsive:** one fluid column that I checked from 320px wide up to desktop.
- **No extra packages:** only React and Vite. Icons are inline SVGs I drew myself.

## Deployment

Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`, which lints, builds, and publishes `dist/` to GitHub Pages. `base` in `vite.config.js` is set to `/caroline-links/` to match the repository name.
