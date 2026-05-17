---
'@yasmro/schatten': minor
---

docs(storybook): add `Getting Started / Vanilla HTML` story.

A new top-level Storybook category — `Getting Started` — lands with its first
entry: a Vanilla HTML guide that shows how to consume Schatten without React,
and is honest about what works today vs. what is planned. Slotted into the
sidebar between `Welcome` and `Foundation` via `storySort`.

The story covers:

- **Why** Schatten ships a framework-agnostic surface (the two-layer story
  the README opens with: tokens + class API for plain HTML, optional React
  components on top).
- **Minimum setup** — CDN (`jsdelivr` + `unpkg`) and local-import variants.
- **What works today (v0.7.0)** — design tokens (CSS custom properties)
  and the base reset are stable; the data-attribute class API
  (`<button class="btn" data-variant="solid">`) lands in v0.14.0
  ([#154](https://github.com/yasmro/schatten/issues/154)). Each row in the
  class-surface table is labelled "Available" or "Coming in v1.0" so
  readers don't paste a `.btn--primary` class today and wonder why it has
  no effect.
- **Bridge for non-React projects** — until v0.14.0, the exported CVA
  variant functions (`buttonVariants`, `badgeVariants`, …) are the
  recommended path for Astro / Vue / Svelte. Includes a worked example.
- **Theming** — light/dark via `.dark` on `<html>`, seasonal palettes via
  `data-theme="season--*"`.
- **Roadmap** — v0.7.0 (today) → v0.14.0 (class API) → v1.0.0 (API
  stability contract takes effect).
- **Related links** to [#58](https://github.com/yasmro/schatten/issues/58),
  [#154](https://github.com/yasmro/schatten/issues/154), README, and
  `api-stability.md`.

Closes [#112](https://github.com/yasmro/schatten/issues/112).

**Why minor and not patch:** the story is consumer-facing documentation
introduced as part of the v0.7.0 framework-agnostic narrative, paired with
[#111](https://github.com/yasmro/schatten/issues/111)'s README overhaul. No
runtime or API surface changes — Storybook content only.
