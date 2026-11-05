# Saurav Chander Sharma — Portfolio

Personal data analytics portfolio with dashboard links, case studies, a downloadable resume, and persistent light/dark modes.

**Live website:** https://saurav-sharma100.github.io/Portfolio/

## GitHub Pages deployment

The `Deploy portfolio to GitHub Pages` workflow publishes the website automatically from `main`. Repository Settings → Pages must use **GitHub Actions** as the source.

`prepare-pages.py` copies only `saurav-portfolio/dist` into the deployment artifact, adds the `/Portfolio/` prefix to local links and assets, updates site metadata, and validates local file references. The artifact has `index.html` at its root, avoiding the earlier 404 caused by publishing the repository root.

The complete GitHub Pages address includes `/Portfolio/`. The account root `https://saurav-sharma100.github.io/` is a separate user-site address.

## Local development

See [portfolio editing instructions](saurav-portfolio/README.md). Run `python prepare-pages.py` from this repository root to validate the GitHub Pages build. Generated `_site/` output and temporary deployment archives are ignored by Git.
