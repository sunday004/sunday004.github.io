# Sunday Ochigbo — Portfolio

A single-page personal portfolio for Sunday Ochigbo, an electrical engineering student
(computer engineering concentration) at Alabama A&M University. It presents projects in
autonomous systems that combine hardware, software, and sensors.

Built with **React 18 + TypeScript**, styled with **JSS** (`react-jss`), bundled by **Vite**,
and deployed to **GitHub Pages** by GitHub Actions.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check, then produce dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run format     # Prettier
```

## How it is put together

```
src/
  main.tsx              entry point
  App.tsx               page composition + global JSS (body, focus ring)
  theme/
    tokens.ts           dark + light token objects and the Theme type
    themeContext.ts     React context + useThemeMode hook
    ThemeProvider.tsx   theme state, toggle, localStorage persistence
  data/                 ALL page copy lives here, typed
  components/           one component per section
    ui/                 Container, Card, Chip, ButtonLink, SectionHeading, Eyebrow
  styles/global.css     reset, smooth scroll, prefers-reduced-motion
```

Two rules keep this maintainable:

1. **Copy lives in `src/data/`, never in components.** Components render data.
2. **Colors come from the theme**, read as `({ theme }) => theme.accent` inside
   `createUseStyles`. There are no hard-coded hex values in components.

### Theming

The theme defaults to the visitor's `prefers-color-scheme` and falls back to dark. The header
toggle switches it and the choice is saved to `localStorage` (reads and writes are wrapped in
`try`/`catch`). A tiny inline script in `index.html` applies the saved theme to
`<html data-theme>` before React mounts, so there is no flash of the wrong colors.

## Common edits

### Add a project

Add one object to the `projects` array in `src/data/projects.ts`:

```ts
{
  kicker: 'Robotics · Computer vision',
  title: 'Project name',
  highlight: 'The one-line result or status',
  description: 'A paragraph about what you built and what you did.',
  tags: ['C++', 'Arduino'],
  // optional photo, rendered above the kicker:
  // image: { src: 'images/my-project.jpg', alt: 'Description of the photo' },
}
```

Project images go in `public/images/`. The `src` is relative to the site root; the component
prefixes it with Vite's `base`, so it works on any deployment path.

### Swap in the headshot

1. Drop the file at `public/images/headshot.jpg`.
2. In `src/data/profile.ts`, set `headshotSrc: 'images/headshot.jpg'` and give `headshotAlt`
   a meaningful description.

The "SO" monogram placeholder (and the "[Add your headshot here]" note under it) disappears
automatically once `headshotSrc` is set.

### Add the resume

Put the PDF at `public/resume.pdf`. The "Download resume" and "Resume (PDF)" buttons already
point at it, via `import.meta.env.BASE_URL` so the link respects the Vite `base`. Until the
file exists those buttons render but 404.

To use a different filename, change `resumePath` in `src/data/profile.ts`.

### Other copy

| What | Where |
|---|---|
| Name, headline, email, links | `src/data/profile.ts` |
| "What I work on" strip | `src/data/focusAreas.ts` |
| Projects | `src/data/projects.ts` |
| Sense / compute / decide / act | `src/data/loop.ts` |
| Experience | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| About, education, recognition | `src/data/recognition.ts` |
| Contact card | `src/data/contact.ts` |

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main`: it installs with `npm ci`, lints,
builds with Vite, and publishes `dist/` using `actions/configure-pages`,
`actions/upload-pages-artifact`, and `actions/deploy-pages`.

**One-time manual step:** in the repo on GitHub go to
**Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
Without that, the workflow cannot deploy.

The site is a root user site (`sunday004.github.io`), so `base` in `vite.config.ts` is `'/'`.
If you ever move it to a project repo, set `base` to `'/<repo-name>/'` — every asset URL in the
app already goes through `import.meta.env.BASE_URL`, so nothing else needs to change.

### Custom domain (not set up)

To serve the site from your own domain later:

1. Create `public/CNAME` containing the bare domain, e.g. `sundayochigbo.com` — Vite copies it
   into `dist/` on every build, which keeps GitHub from dropping the domain on redeploy.
2. At your DNS provider, point the apex record at GitHub Pages' `A`/`AAAA` addresses, or point
   a `www` subdomain at `sunday004.github.io` with a `CNAME` record.
3. In the repo, set **Settings → Pages → Custom domain** to the same value and enable
   **Enforce HTTPS** once the certificate is issued.

Keep `base: '/'` in `vite.config.ts` for a custom domain.

## Still to supply

- `public/resume.pdf` — the resume the buttons link to
- `public/images/headshot.jpg` — the headshot (see above)
- `public/og-image.png` — a 1200×630 social preview image; the `og:image` and `twitter:image`
  tags in `index.html` are commented out until it exists
- Optional project photos in `public/images/`
