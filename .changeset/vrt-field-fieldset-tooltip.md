---
'@yasmro/schatten': patch
---

test(vrt): add VRT specs for Field, FieldSet, Tooltip

Three lv1 components — Field, FieldSet, Tooltip — previously had no visual
regression coverage, leaving token changes or Tailwind upgrades free to
silently break their appearance. Each now has a `*.vrt.spec.ts` plus
baseline snapshots in light and dark themes.

- **Field** covers `WithInput`, `WithSelect`, `WithTooltip`, `Required`,
  `ErrorState`, and `Disabled` to lock down label / description / error /
  required-marker positioning across the common children (Input, Select,
  Tooltip-info-icon).
- **FieldSet** covers `Address`, `ErrorState`, `Disabled`, and
  `ErrorPropagation` to lock down legend / description / nested-field
  layout and the visual surface of context-propagated `disabled` / `isError`.
- **Tooltip** uses Portals into `document.body`, so VRT screenshots the full
  page rather than `#storybook-root`. Three new `Open / *` stories
  (`OpenAllSides`, `OpenLongContent`, `OpenRichContent`) pin `<Tooltip open>`
  so the popover is always rendered — animations are paused before snapshot.

`.claude/rules/vrt-spec-guideline.md` gains a new "Components rendered into
a Portal" section documenting the three strategies (pinned `open` + full-page
screenshot / `container` prop / click-to-open in spec) and when to reach for
each.
