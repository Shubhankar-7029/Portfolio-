# Shubhankar Bera — Modular Developer Portfolio

A responsive portfolio built with React, TypeScript, Vite, Lucide icons, and CSS.

## Run locally in VS Code
1. Install Node.js LTS from https://nodejs.org/.
2. Extract this ZIP and open the `shubhankar-portfolio-modular` folder in VS Code.
3. Choose **Terminal → New Terminal**.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL Vite prints (usually `http://localhost:5173`).

Build for production:
```bash
npm run build
npm run preview
```

## Project layout

- `src/components/Header.tsx` — top navigation
- `src/components/Hero.tsx` — intro, social links, and hero artwork
- `src/components/About.tsx` — about section
- `src/components/Skills.tsx` — skills cards
- `src/components/Projects.tsx` — project grid and category filters
- `src/components/Contact.tsx` — email, optional phone, LinkedIn, GitHub
- `src/components/Footer.tsx` — footer
- `src/data/profile.ts` — name, location, email, phone, profile links, intro
- `src/data/projects.ts` — project cards
- `src/data/skills.ts` — skills list
- `src/styles/global.css` — shared visual design and responsive layout

## Make common changes

### Add your phone number
Open `src/data/profile.ts` and set both:
```ts
phoneDisplay: '+91 98765 43210',
phoneLink: '+919876543210',
```
The phone row appears automatically in Contact when both fields are non-empty. Use your own number.

### Edit contact links and intro
Edit `src/data/profile.ts`.

### Add a project
Open `src/data/projects.ts`, copy one project object in the `projects` array, and edit its `number`, `title`, `category`, `description`, `stack`, `icon`, `accent`, and `status`. `link` is optional; use it only for a real repository or demo URL. Supported categories are `Web Development`, `AI / Python`, and `Data Analysis`.

### Edit skills
Change the arrays in `src/data/skills.ts`.

### Change one section's layout
Edit the matching file in `src/components/`. Global colors, spacing, and responsive breakpoints are in `src/styles/global.css`.

## Deploy
Deploy to Vercel or Netlify using build command `npm run build` and output directory `dist`.

Before publishing, confirm your profile URLs, phone number, skills, and project descriptions. Project statuses are worded conservatively and do not claim unverified deployment or outcomes.
