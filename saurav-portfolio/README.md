# Saurav Chander Sharma — Portfolio

A static, responsive portfolio built from the supplied PRD, resume, LinkedIn details, six inspiration screenshots, and portrait. Original dashboard images are from the owner's public project READMEs; sources are recorded in `asset-sources.json`.

## Edit and preview

- Update biography links, skills, or projects in `content.json`.
- Run `python build.py` to regenerate the HTML pages (Python standard library only).
- Run `python serve.py` and open http://127.0.0.1:4173.
- Styles and progressive enhancement are in `dist/style.css` and `dist/app.js`.
- The site works without JavaScript except for the mobile navigation toggle.

## Deployment

Deploy `dist/` as a static directory. `.openai/hosting.json` stores the Sites identity. The local preview serves unknown paths with `404.html` and HTTP 404; other hosts should use the same custom error document. If moving to a custom domain, update `ORIGIN` in `build.py`, then rebuild to update canonical URLs, social metadata, and the sitemap.

No analytics, contact-form backend, account system, or public Power BI embedding is included. Email uses a mailto link. The original resume is downloadable. Fonts load from Google Fonts with system fallbacks. Dashboard previews are WebP files; case-study images link to their full-size local copies.
