---
'@yasmro/schatten': minor
---

Add `Avatar` — a user's profile image that falls back to initials when the
image is absent or fails to load (profile headers, comment authors, member
lists). A flat wrapper over `@radix-ui/react-avatar` (Root / Image / Fallback),
driven by `src` / `alt` / `fallback` (a `string`) / `size` (`sm` 32px / `md`
40px / `lg` 48px) / `delayMs` — the sanctioned flat-over-multi-part-Radix
exception (component-architecture §2). Fixed-circle shape in v1; no
`variant`/`appearance` axis (out-of-pattern display primitive). Carries no role
of its own — the `<img alt>` supplies the accessible name; pass `aria-label`
for a fallback-only avatar.

CSS API: new `.st-avatar` / `.st-avatar--sm` / `.st-avatar--md` /
`.st-avatar--lg` / `.st-avatar__image` / `.st-avatar__fallback` classes, also
published per-component at `@yasmro/schatten/css/avatar`.
