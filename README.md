# Portifolio pessoal

Personal portfolio, live at **https://nadoutti.github.io/**.

React + TypeScript + Tailwind CSS, built with Vite and deployed to GitHub Pages by
GitHub Actions on every push to `main`.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build -> dist/
npm run preview  # serve the production build locally
npm run lint
```

## Editing content

All content lives in typed data files under `src/data/` — no JSX editing required:

| File            | Holds                                            |
| --------------- | ------------------------------------------------ |
| `profile.ts`    | Name, title, tagline, bio, location, social links |
| `skills.ts`     | Skill groups                                      |
| `experience.ts` | Professional roles                                |
| `academic.ts`   | Research, teaching assistantships, labs           |
| `projects.ts`   | Projects (`highlight: true` pins to the top)      |
| `education.ts`  | Degrees                                           |
| `languages.ts`  | Spoken languages and levels                       |
| `sections.ts`   | Section order and nav labels                      |

Shapes are defined in `src/types.ts`. Entries still marked `TODO` are placeholders.

To add a photo: drop the file in `public/` and set `photo: '/photo.jpg'` in
`profile.ts`. To add a CV: drop `cv.pdf` in `public/` and uncomment the `CV` entry
in `profile.ts`.

To remove a section entirely, delete its entry from `src/data/sections.ts` and its
line from `bodies` in `src/App.tsx`.

## Deployment

`.github/workflows/deploy.yml` builds and publishes on push to `main`.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment**
and set **Source** to **GitHub Actions**. Without this the workflow fails.
