# GitHub Pages deployment — Sắc Việt HP12

The website is deployed from `main` using `.github/workflows/deploy-pages.yml`.

**Expected project URL:** https://quanpl86.github.io/SNLT-HP12-PROJECT/

## One-time GitHub Pages activation
1. Open repository **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions** (not `Deploy from a branch`).
3. Save. A push changing website files or manual **Actions → Publish Sac Viet to GitHub Pages → Run workflow** triggers the workflow.
4. Check the result, then open the URL GitHub Pages reports. Do not claim publishing is successful until GitHub confirms deployment and the URL serves the website.

## What gets published
The workflow packages only the five HTML pages plus `styles/`, `scripts/`, `assets/`. Curriculum documents, LMS files, lesson projects and tests remain in the repository but are not included in the Pages website artifact.

## Validation
The project is plain HTML/CSS/JS and uses relative paths, so it runs under the repository subpath `/SNLT-HP12-PROJECT/`. Search, category filter, detail pages and Editor LocalStorage run client-side; drafts are not shared between visitors.

The separate workflows `validate.yml` and `browser-smoke.yml` handle static/functional regression tests. Pages deployment is a separate outcome requiring a successful `deploy-pages` step.
