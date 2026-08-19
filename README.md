# Ritika Prakash \u2014 Portfolio

A premium, dark-first personal portfolio for **Ritika Prakash** \u2014 PGDM Data & Business Analytics student at JAGSoM \u2014 built to communicate a Business Analytics / Data Analytics profile to recruiters and hiring managers.

**Live focus:** data + business + technology, told through a real career journey, five projects, a skills matrix and a resume download \u2014 no invented metrics, no invented companies.

## Features

- **Hero** with an animated data-node graph background (pure SVG/CSS, no heavy libs)
- **What I Work With** \u2014 interactive category cards (Analytics, Data, Business, Technology)
- **About** \u2014 split layout, career-transition narrative
- **Career Journey** \u2014 timeline across Finfolab, Unified Mentor, Cognifyz, Bluestock (Bluestock marked as the latest/featured role)
- **Featured Projects** \u2014 5 project cards (Financial Analytics Platform, Pizza Sales Analytics, Coffee Shop Sales Analyzer, Cricket Dream Team Analyzer, Netflix Content Analysis), each opening a detail modal with Problem / Approach / Analysis / Technology
- **Skills Matrix** \u2014 grouped, interactive skill chips
- **My Analytics Toolkit** \u2014 animated pipeline: Raw Data \u2192 \u2026 \u2192 Decision Making
- **Education** and **Certifications** \u2014 clean card layouts
- **Resume** \u2014 download/view CTA (serves the actual uploaded PDF)
- **GitHub section** \u2014 static project cards linking to the GitHub profile (no API dependency, so nothing breaks if GitHub is rate-limiting)
- **Contact** \u2014 a form that opens a pre-filled `mailto:` link (no backend, no paid service required)
- **Dark / light mode** with `localStorage` persistence, both themes designed (not inverted)
- Scroll-reveal animations, active nav-link highlighting, sticky nav with mobile hamburger menu, `prefers-reduced-motion` respected

## Tech stack

- **React 19 + Vite** (rolldown-vite)
- **Tailwind CSS 3** (custom design tokens \u2014 see `tailwind.config.js`)
- **lucide-react** for utility icons; GitHub/LinkedIn marks are small inline SVGs in `src/components/BrandIcons.jsx` (lucide-react's current release doesn't ship brand icons)
- No backend, no database, no paid API

## Project structure

```
portfolio/
├── .github/workflows/deploy.yml   # GitHub Actions -> GitHub Pages
├── public/
│   ├── favicon.svg
│   └── Ritika_Prakash_Resume.pdf   # your actual CV, served for download
├── src/
│   ├── components/                 # Navbar, Footer, ProjectCard, ProjectModal, Reveal, BrandIcons
│   ├── sections/                   # Hero, About, Experience, Projects, Skills, Pipeline,
│   │                                #   Education, Certifications, Resume, GithubSection, Contact
│   ├── data/                       # profile.js, experience.js, projects.js, skills.js
│   ├── hooks/                      # useTheme.js, useReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

Content lives in `src/data/*.js` \u2014 update your info there without touching any component.

## Local development

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploying to GitHub Pages (free)

1. **Create a GitHub repository** (e.g. `portfolio`) and note its exact name.

2. **Set the base path** in `vite.config.js` to match your repo name:

   ```js
   base: '/portfolio/', // change 'portfolio' to your repo name
   ```

   If you deploy to a root user/organization site (`<username>.github.io`), set `base: '/'` instead.

3. **Push the project:**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ritika296/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. **Enable GitHub Pages via Actions:**
   - In your repo, go to **Settings -> Pages**
   - Under **Build and deployment -> Source**, choose **GitHub Actions**
   - Push to `main` (or re-run the workflow from the **Actions** tab) \u2014 `.github/workflows/deploy.yml` builds and publishes `dist/` automatically

5. Your site will be live at `https://ritika296.github.io/YOUR_REPO_NAME/` within a couple of minutes.

No paid hosting, no paid database, no paid API, no credit card.

## Updating content later

| To change... | Edit... |
|---|---|
| Projects | `src/data/projects.js` |
| Skills | `src/data/skills.js` (`skillGroups`) |
| Experience / career journey | `src/data/experience.js` |
| Education & certifications | `src/data/skills.js` (`education`, `certifications`) |
| Hero text, bio, contact links | `src/data/profile.js` |
| Resume file | Replace `public/Ritika_Prakash_Resume.pdf` (keep the same filename, or update `resumeFile` in `src/data/profile.js`) |

Each project/experience/certification is a plain JS object in an array \u2014 copy an existing entry and edit the fields to add a new one. No component code changes needed.

## Pre-launch checklist

- [ ] Confirm `vite.config.js` `base` matches your actual repo name
- [ ] Replace any project's empty `github` / `demo` field with a real URL once repos are public
- [ ] Run `npm run build` locally once before pushing, to confirm no errors
- [ ] Check dark mode and light mode
- [ ] Check on mobile width (no horizontal scroll)
- [ ] Confirm the Resume download button opens the correct PDF
- [ ] Confirm LinkedIn and GitHub links point to the right profiles
- [ ] Test the contact form opens your email client with the message pre-filled

## Content honesty note

All experience, project and certification details are sourced directly from the uploaded CV and LinkedIn export. Two project ideas mentioned in the original brief ("Mutual Fund Analytics Platform" with NAV/AUM/SIP metrics, and "Nifty100 Financial Analytics") weren't present in either source document, so they were replaced with the verified Bluestock financial-analytics work (ROE/ROCE/EPS ratios, Django app, Power BI dashboards, ML health scoring). Update `src/data/projects.js` directly if you have verified details for those two projects.
