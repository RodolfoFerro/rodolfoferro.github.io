# rodolfoferro.xyz

Source for [rodolfoferro.xyz](https://rodolfoferro.xyz) — my personal site, blog and project index, built with Jekyll and styled after a monochrome, `hexdump`-style terminal aesthetic (IBM Plex Mono, bracket-style nav `[x] home`, live light/dark/auto theme toggle).

<p align="center">
    <img src="assets/images/rodo_ferro.png" width="140" />
</p>

## Stack

- [Jekyll](https://jekyllrb.com/) on Ruby 3.4 (via the `github-pages` gem, so it builds the same way GitHub Pages builds it)
- [Sass](https://sass-lang.com/) — a mix of legacy indented `.sass` (inherited component files) and `.scss` (design tokens, which need `.scss` syntax for the `:root[data-theme=...]` selectors)
- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) throughout
- No JS framework — small vanilla-JS scripts for the theme toggle, the collapsible mobile nav, and the interactive terminal on the home page
- [MathJax](https://www.mathjax.org/), [Disqus](https://disqus.com/) and related-posts/read-time are wired into the post layout, unrelated to the redesign

## Structure

```
_layouts/        default / page / post layouts
_includes/       header, nav, footer, photo-frame, terminal, roles-checklist, etc.
_sass/
  base/           _variables.scss (design tokens), general, normalize, syntax
  components/     header, nav, footer, terminal, photo-frame, others…
  pages/          layout rules per page type (sections, page, post, error, tags)
_posts/          blog posts, projects and talks/courses — disambiguated by front matter
                  (category: blog | course | talk, projects: true)
index.html        home (hero, terminal, roles checklist, latest post/project teasers)
blog.html         blog index
projects.html     projects grid
talks.html        merged talks + courses index ([TALK] / [COURSE] badges)
about.md          bio (EN/ES) + roles checklist
resume.md         résumé page
404.html          glitch-styled error page
_config.yml       drives almost all content — bio, roles, social links, footer
                   status strip, theme default, per-section toggles
```

## Theme system

Colors are CSS custom properties defined in `_sass/base/_variables.scss` in three layers, so the visitor's OS setting and an explicit in-page choice both resolve correctly:

1. Bare `:root` — light palette (default).
2. `@media (prefers-color-scheme: dark)` scoped to `:root:not([data-theme="light"])` — dark palette when the OS prefers dark, unless the visitor explicitly chose light.
3. `:root[data-theme="dark"]` — dark palette when the visitor explicitly chose dark, regardless of OS setting.

`_config.yml`'s `dark-theme` (`true` / `false` / `"auto"`) sets the *initial* server-rendered state. The `[auto]/[light]/[dark]` button in the header cycles through and persists the visitor's choice in `localStorage`, overriding the initial state on load.

## Content model

- A post's `category` (`blog`, `course`, `talk`) and `projects: true` front matter decide where it shows up — no separate collections.
- `talks.html` merges `category: talk` and `category: course` into one chronological list with a badge per entry.
- `courses.html` is kept only as a redirect to `/talks/` so old links don't 404.

## Running locally

```sh
bundle install
bundle exec jekyll serve --port 4000
```

Open [http://localhost:4000](http://localhost:4000). Add `--watch` to auto-rebuild on file changes, or `--livereload` for browser auto-refresh.

## Configuration

Nearly everything content-wise lives in `_config.yml`: bio, the home roles checklist, social handles, the footer status strip (`status` / `location` / `timezone`), Disqus, and per-section toggles (`projects`, `talks`, `about`, `blog`, `read-time`, `show-tags`, `related`, …).

## Deploy

This is a GitHub Pages user site (`RodolfoFerro/rodolfoferro.github.io`), served from `master` with a custom domain set via `CNAME` (`rodolfoferro.xyz`). GitHub Pages builds and deploys automatically on push — no CI step needed.

---

Originally based on the [Indigo](https://github.com/sergiokopplin/indigo) Jekyll theme by Sérgio Kopplin; the layout, styling and most templates have since been rewritten for this redesign.
