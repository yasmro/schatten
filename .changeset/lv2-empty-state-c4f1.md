---
'@yasmro/schatten': minor
---

Add `EmptyState`, the first lv2 (composite) component, and restore the `@yasmro/schatten/components/lv2` export. `EmptyState` lays out an icon, a title, a description and an action in one frozen composition, with `size` (`sm` / `md` / `lg`), `align` (`center` / `start`) and `headingLevel` (`1`–`6`) props. lv2 ships on the React path only.

CSS API: add `.st-empty-state` and the `--sm` / `--md` / `--lg` / `--center` / `--start` modifiers, plus the `@yasmro/schatten/css/emptystate` subpath. `st-icon` also joins the manifest: the class is not new, but `EmptyState`'s selectors are the first to reference it. The size budgets gain `components/lv2 (all)` and `css/emptystate`.
