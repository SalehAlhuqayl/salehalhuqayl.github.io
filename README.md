# Personal Portfolio (Source Code)

This repository contains the source code for my personal portfolio website (Saleh Aluqayl). It is built with Astro and Tailwind CSS and is intended for publishing to GitHub Pages.

## Purpose

- Present my professional profile, projects, and resume in a fast, accessible website.
- Keep all content and assets versioned in one place.

## Tech Stack

- Astro 5
- Tailwind CSS 4
- Node.js (recommend LTS v20)
- pnpm

## Local Development

```bash
pnpm install
pnpm dev
# build & preview
pnpm build && pnpm preview
```

## Deploying to GitHub Pages

1) Configure `astro.config.mjs`

- User/organization page (repo named `<username>.github.io`):
  - `site: 'https://<username>.github.io'`
  - `base: '/'`
- Project page (repo named `<REPO_NAME>`):
  - `site: 'https://<username>.github.io/<REPO_NAME>/'`
  - `base: '/<REPO_NAME>/'`

2) Enable Pages in GitHub

- Repository Settings → Pages → Build and deployment: Source = GitHub Actions.

3) Add a GitHub Actions workflow (suggested)

Create `.github/workflows/gh-pages.yml` with:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Enable Corepack (pnpm)
        run: corepack enable
      - name: Install
        run: pnpm install --frozen-lockfile
      - name: Build
        run: pnpm build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

After the first successful run, Pages will serve the contents of `dist/`.

## Privacy and Content

- Everything in this repository is public when deployed to GitHub Pages.
- Do not commit secrets (API keys, tokens) or private data.
- Review files in `public/` and `src/content/site-data.json` before publishing.
- PDFs and images in `public/` are downloadable by anyone.

## License

All rights reserved. The content, design, and code in this repository are for my personal website and may not be reused without permission.

## Contact

- Email: SalehAlhuqayl@gmail.com
- GitHub: https://github.com/SalehAlhuqayl