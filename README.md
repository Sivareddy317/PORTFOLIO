# Siva Prasad Reddy — Portfolio

A single-file, static portfolio site (`index.html`) — no build step, no framework, so it deploys straight to GitHub Pages.

## What's included

- `index.html` — the site
- `assets/certifications/` — every certificate and achievement from your certifications folder, copied in as-is (PDFs and images) and linked from the Certifications section so a recruiter can open the original document directly, not just read a title.

The repo is around **35 MB**, almost all of it `assets/certifications/`. That's fine for a normal `git push` (GitHub's limit is 100 MB per file, and the largest file here is ~31 MB), but if you ever hit push speed issues, GitHub's guidance is to move large binaries to [Git LFS](https://git-lfs.com/) — optional, not required to get this live.

## Before you publish

Open `index.html` and update:
- **Contact section** — swap `your.email@example.com`, the LinkedIn `#`, and the resume `#` for your real links.
- **Project links** — each project card is text-only right now. Add `<a href="...">` links to the actual repos once you've pushed them.
- **Certifications** — titles, issuers, and dates were read directly off each certificate file. The one exception is the NPTEL entry, which is your exam hall ticket, not a completion certificate — swap it for the real completion certificate if you have one, or remove it.

## Push it to GitHub

```bash
cd portfolio-website
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Sivareddy317/portfolio.git
git push -u origin main
```

(Create the `portfolio` repo on GitHub first, or swap in whatever name you want.)

## Turn on GitHub Pages

1. On GitHub, open the repo → **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Your site goes live at `https://sivareddy317.github.io/portfolio/` within a minute or two.

## Local preview

Just open `index.html` in a browser — no server needed. Or, for a local server:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
