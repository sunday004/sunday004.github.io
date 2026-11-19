# Build my portfolio website with React + JSS, then deploy it to GitHub Pages

You are building a personal portfolio website for **Sunday Ochigbo**, an Electrical Engineering student (Computer Engineering concentration) at Alabama A&M University. The design is already approved. It exists as a static HTML reference file: `portfolio-reference.html`, which sits next to this prompt. Your job is to recreate it faithfully as a clean, maintainable **React + JSS** app, then get it hosted on **GitHub Pages**.

Read `portfolio-reference.html` completely before writing any code. It is the source of truth for layout, spacing, typography, colors, and copy. It is a dark-mode snapshot; the app must also support light mode (tokens below).

## 1. Goal and tone

- The site presents Sunday as someone who builds **autonomous systems that combine hardware, software, and sensors**.
- It must read as a **general** portfolio. Do not frame it around any particular employer, program, or job posting, and do not add copy that does.
- Do not invent facts, numbers, projects, or links. Every piece of copy must come from the reference HTML. If something is missing, leave a clearly marked `[placeholder]` and list it in your final summary.

## 2. Tech stack (required)

- **React 18** with **TypeScript**, built with **Vite**.
- Styling with **JSS** via **`react-jss`**: `createUseStyles`, `ThemeProvider`, and `JssProvider` if needed. No Tailwind, no CSS-in-JS libraries other than JSS, no UI component libraries.
- Plain global CSS is allowed only for a tiny reset (`body { margin: 0 }`, `html { scroll-behavior: smooth }`, `box-sizing`), `:focus-visible`, and `prefers-reduced-motion`. Put it in one small `src/styles/global.css` or in a JSS `@global` block.
- No router needed. It is a single-page site with in-page anchor navigation.
- Fonts: **Inter** (400, 500, 600) for body and **Space Grotesk** (500, 700) for headings. Load via Google Fonts `<link>` in `index.html`, with `display=swap`.
- Package manager: npm.

If you believe a different choice is clearly better for a specific piece (for example, a tiny extra dependency), ask before adding it.

## 3. Design tokens

Define a typed theme with two variants and provide it through `ThemeProvider`. All components read colors from the theme, never from hard-coded hex values.

| Token | Dark | Light |
|---|---|---|
| `bg` | `#1a1a2e` | `#f7f8fc` |
| `bg2` | `#15152a` | `#eceef7` |
| `card` | `#222244` | `#ffffff` |
| `line` | `#37375f` | `#d5d8e8` |
| `fg` | `#eceef8` | `#16162b` |
| `muted` | `#b4b6cf` | `#4b4e6b` |
| `accent` | `#5eead4` | `#0f766e` |
| `onAccent` | `#0b1f1d` | `#ffffff` |

Other tokens, copied from the reference:

- Content max width **1120px**, side padding **24px**. Section vertical rhythm as in the reference (roughly 56 to 72px top padding).
- Card: `card` background, 1px `line` border, **16px** radius, **24px** padding. Contact card uses **20px** radius.
- Chips: 4px 10px padding, 1px `line` border, pill radius, 13px text in `muted`.
- Buttons: min height **48px**, 10px radius. Primary = `accent` background with `onAccent` text. Secondary = 1px `line` border with `fg` text. All interactive targets at least **44px** tall.
- Type: body 17px / line-height 1.6. Headings use Space Grotesk. H1 uses `clamp(40px, 7vw, 68px)`. Section H2s use `clamp(28px, 4vw, 38px)`.
- Breakpoints: the layout is fluid. Use flex-wrap and CSS grid `repeat(auto-fit, minmax(...))` exactly as in the reference rather than adding many media queries. It must work cleanly from **360px** to **1440px** wide with no horizontal scroll.

## 4. Theme behavior

- Default to the user's `prefers-color-scheme`; fall back to dark.
- The header has a toggle button ("Light mode" / "Dark mode") that switches themes.
- Persist the choice in `localStorage` (wrap reads and writes in try/catch) and restore it on load.
- Avoid a flash of the wrong theme on first paint (set the initial theme before React renders, or read it synchronously in the initial state).
- Respect `prefers-reduced-motion`: no smooth scrolling or animation when set.

## 5. Component architecture

Use this structure (adjust only if you have a good reason, and say why):

```
src/
  main.tsx
  App.tsx
  theme/
    tokens.ts          // dark + light theme objects, Theme type
    ThemeContext.tsx   // theme state, toggle, persistence
  data/
    profile.ts         // name, eyebrow, headline, subline, links, email
    focusAreas.ts
    projects.ts
    loop.ts            // the sense / compute / decide / act steps
    experience.ts
    skills.ts
    recognition.ts
  components/
    Header.tsx
    Hero.tsx
    FocusStrip.tsx
    Projects.tsx       // renders ProjectCard[]
    ProjectCard.tsx
    SenseDecideAct.tsx
    Experience.tsx
    Skills.tsx
    About.tsx
    Contact.tsx
    Footer.tsx
    ui/
      Chip.tsx
      Card.tsx
      SectionHeading.tsx
      ButtonLink.tsx
```

Rules:

- **All copy lives in `src/data/*.ts`**, typed, and extracted verbatim from the reference HTML. Components render data; they contain no hard-coded paragraphs. Adding a project should mean adding one object to `projects.ts`.
- Each component owns its styles with `createUseStyles`, using theme-aware functions (`({ theme }) => theme.card`). Share small primitives (`Card`, `Chip`, `ButtonLink`, `SectionHeading`) rather than copying style blocks.
- Sections keep the same ids as the reference: `top`, `projects`, `experience`, `skills`, `about`, `contact`. Header nav links scroll to them.
- Use semantic HTML: one `h1`; sections with `aria-labelledby` pointing at their heading; `nav` with `aria-label`; lists as real `ul`/`li`; project cards as `article`.
- Accessibility: visible `:focus-visible` outline (3px accent), text contrast at least 4.5:1 in both themes, decorative elements `aria-hidden`, headshot placeholder has an accessible label, external links open with `rel="noopener noreferrer"`.
- Add a skip-to-content link at the top.
- Strict TypeScript (`"strict": true`), no `any`. ESLint + Prettier with sensible defaults.

## 6. Page contents (match the reference)

In order: Header (name, nav, theme toggle) → Hero (eyebrow, name, headline, subline, three CTAs, headshot placeholder) → "What I work on" focus strip (4 items) → Projects (6 cards) → "Sense, compute, decide, act" (4 steps) → Experience (4 cards) → Skills (4 groups) → About (text plus Education card plus Recognition & leadership card) → Contact card → Footer.

Details to preserve:

- The six project cards, in this order: Real-Time Methane Detector; Mining Mayhem Competition Robot; Agent-Driven Workflow Automation; 8-bit MIPS Microprocessor; 18×18 BGA Breakout Board; Camera-Based Navigation with AprilTags (marked "In progress"). Each card has a kicker, title, a bold highlight line, a description, and tag chips pinned to the bottom of the card.
- **Do not include the phone number anywhere.** Email is `agbidisunday@gmail.com`.
- Links: GitHub `https://github.com/sunday004/`, LinkedIn `https://www.linkedin.com/in/sunday-ochigbo-a9b018240/`.
- Headshot: render the "SO" circle placeholder, but structure the component so that dropping an image at `public/images/headshot.jpg` and setting one field in `profile.ts` swaps it in automatically (with a meaningful `alt`).
- Resume button: link to `/resume.pdf` served from `public/`. Do **not** create or fake a resume file. If `public/resume.pdf` is missing, the button should still render, and you must tell me in your final summary that I need to add the file. (Make sure the link respects the Vite `base` path.)
- Optional project images: the card component should accept an optional `image` field (with `alt`) and render it above the kicker when present. No image is shown by default.

## 7. Quality bar

- Visually match `portfolio-reference.html` in both desktop (1280px) and phone (390px) widths. Compare against the reference by opening both. Fix any differences in spacing, type size, wrapping, or color before moving on.
- No layout shift on font load beyond what `display=swap` causes.
- Lighthouse targets on the production build: Performance 95+, Accessibility 100, Best Practices 100, SEO 95+.
- Add SEO basics to `index.html`: title, meta description, Open Graph and Twitter tags, `theme-color` (`#1a1a2e`), a simple favicon (an "SO" monogram SVG is fine), and a `lang="en"` attribute. Leave the OG image as a TODO unless I supply one.
- Keep the production bundle small: no unused dependencies.

## 8. GitHub Pages deployment

I want the site hosted on GitHub Pages from my account `sunday004`.

1. Ask me (once, up front) which repo name to use. Suggested default: `sunday004.github.io` for a root user site. If I choose a different name (for example `portfolio`), set Vite's `base` to `/<repo-name>/` and make every asset URL (including the resume link and favicon) respect it.
2. Initialize git, make small, meaningful commits as you go, and create the GitHub repo if the GitHub CLI is available and authenticated (`gh auth status`). If it isn't, give me exact commands to create it and push.
3. Add `.github/workflows/deploy.yml` that builds with Vite and deploys using the official `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages` actions, triggered on pushes to `main`, with the correct `pages: write` and `id-token: write` permissions.
4. Tell me the one manual step if needed: enabling **Settings → Pages → Source: GitHub Actions** in the repo.
5. Include a `README.md` with: what the project is, how to run it locally (`npm install`, `npm run dev`), how to build, how to add a project (edit `src/data/projects.ts`), how to swap the headshot, how to add the resume, and how deployment works.
6. Provide a custom-domain note in the README (CNAME file in `public/`) but do not set one up.

## 9. Working method

1. Read the reference HTML fully, then reply with a short plan (stack, file structure, any questions). Wait only if you have a blocking question; otherwise proceed.
2. Scaffold with Vite (React + TS), install `react-jss`, set up theme and global styles.
3. Build `data/` files first by extracting copy from the reference, then the shared UI primitives, then each section in page order.
4. Run the dev server, check the result at 1280px and 390px in both themes, and fix discrepancies against the reference.
5. Run `npm run build`, `npm run lint`, and a type check. Fix everything before deploying.
6. Set up deployment and push.

Verify your own work rather than assuming it is right: actually run the build and look at the output.

## 10. Final summary I expect from you

When done, give me a short summary with: the live URL (or what's left to make it live), what you built, any deviations from the reference and why, every `[placeholder]` that still needs my input (headshot, resume PDF, project photos, OG image), and the exact manual steps I still need to do on GitHub.

## Out of scope

- No backend, forms, analytics, or cookie banners.
- No blog, CMS, or extra pages.
- No changes to the approved copy or design without asking me first.
