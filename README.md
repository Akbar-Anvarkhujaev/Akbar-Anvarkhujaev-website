# akbar-anvarkhujaev.com

Personal website built with [Astro](https://astro.build). Static output, no server.

Pages: **Home** (`/`), **Projects** (`/projects`), one page per project write-up (`/projects/<name>`), and **Resume** (`/resume`).

## Preview while editing

```sh
npm install        # first time only
npm run dev        # opens the homepage at http://localhost:4321; updates on every save
```

Press Ctrl+C in the terminal to stop it.

## Where to edit what

| To change… | Edit |
| --- | --- |
| Intro, paper, experience, education, awards, leadership, skills | `src/data/profile.ts` |
| Projects (add, edit, reorder, hide) | `src/content/projects/*.md`, one file per project |
| Headshot | replace `src/assets/headshot.jpg` (square crop) |
| Colours and fonts | `src/styles/global.css` (tokens at the top) |
| Downloadable CV | put a PDF at `public/cv.pdf`; a "Download PDF" button appears on the Resume page |

Text in `profile.ts` and project summaries supports `$math$` (LaTeX) and `**bold**`.

## Adding a project

1. In `src/content/projects/`, copy `_TEMPLATE.md` and rename it, e.g. `volatility-forecasting.md`.
   The file name becomes the address: `/projects/volatility-forecasting`.
2. Fill in the fields at the top (title, summary, tags, repo…). The template explains each one.
3. Anything you write below the second `---` becomes the project's write-up page, with a
   "Write-up →" link on its card. Leave it empty for a card only.
4. Put images in `src/assets/<project-name>/` and reference them as
   `![caption](../../assets/<project-name>/chart.png)`.

Useful fields:
- `status: in-progress` moves it to the "In progress" group with a badge.
- `order:` lower numbers appear first.
- `draft: true` hides it from the site without deleting it.

## Launch checklist

1. **Push to GitHub.** Create a new repo (e.g. `akbar-anvarkhujaev.com`) and push this folder.
2. **Buy the domain.** Cloudflare Dashboard → Domain Registration → register `akbar-anvarkhujaev.com` (sold at cost, about $10/yr).
3. **Host it.** Cloudflare Dashboard → Workers & Pages → Create → Pages → connect the GitHub repo.
   - Framework preset: Astro · Build command: `npm run build` · Output directory: `dist`
   - Every push to `main` redeploys automatically.
4. **Attach the domain.** In the Pages project → Custom domains → add `akbar-anvarkhujaev.com` and `www.akbar-anvarkhujaev.com`.
5. **Email (optional).** The site lists the addresses in `emails` in `profile.ts`. For an address that
   outlives university, use Cloudflare Dashboard → your domain → Email → Email Routing to forward
   e.g. `hello@akbar-anvarkhujaev.com` to your inbox, then add it to `emails`.
6. **Check link previews.** Paste the URL into a LinkedIn post draft to confirm the title, description and photo show.
7. **Update your links.** Add the URL to your LinkedIn profile, GitHub profile (Website field), and CV header.
