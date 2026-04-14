# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static personal portfolio/resume website for Shailesh Pisat, deployed via GitHub Pages. There is no build step, bundler, or server-side framework — all pages are plain HTML files with vanilla JavaScript and CSS.

## Deploying

Push to `master` branch; GitHub Pages serves the site automatically. Use `git_push.bat` from Windows terminal:
```
git_push.bat "commit message"
```
Or use standard git commands directly.

## Architecture

### Data-Driven Rendering Pattern

All site content is stored in three data files under [js/](js/) and rendered into pages dynamically by [js/custom.js](js/custom.js):

- [js/profile-data.js](js/profile-data.js) — `window.PROFILE_DATA`: personal info, bio, skills, experience, stats, social links
- [js/portfolio-data.js](js/portfolio-data.js) — `window.PORTFOLIO_DATA`: portfolio projects and tools/templates
- [js/blog-data.js](js/blog-data.js) — `window.BLOG_DATA`: blog posts

**To update site content, edit only the data files** — do not touch the render functions in `custom.js` unless changing layout.

### Pages

- [index.html](index.html) — Home/landing page
- [about.html](about.html) — Profile, stats, skills, experience (renders from `PROFILE_DATA`)
- [portfolio.html](portfolio.html) — Portfolio grid (renders from `PORTFOLIO_DATA`)
- [blog.html](blog.html) / [blog-post.html](blog-post.html) — Blog listing and post detail
- [contact.html](contact.html) — Contact form/info
- [pm_land.html](pm_land.html) — Standalone PM landing page
- [old-site/](old-site/) — Previous version of the site, kept for reference only

### Previewing Locally

Open any `.html` file directly in a browser — no server needed. For live reload during development, use VS Code Live Server extension or any static file server:
```
npx serve .
```
