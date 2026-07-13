# Vanilla HTML

The purest framework-agnostic path: one `<link>` to `schatten.css`, then
hand-written `.st-*` class chains. No Tailwind, no build step, no JS runtime.

## Run

```sh
# 1. Build the package at the repo root (writes ../../dist/schatten.css)
cd ../.. && pnpm install && pnpm build && cd examples/vanilla-html

# 2. Open the page — a static file, no server required
open index.html         # macOS  (or: xdg-open / just double-click)
```

## What it exercises

- **Theme toggles** — the toolbar toggles Mode (`.dark` class on `<html>`) and
  Special (`data-theme="season--*"` on `<html>`). Both are one attribute write;
  the browser re-resolves every `var()` at the next paint.
- **区分 A/B (17 components)** — Text, Icon, Button, Badge, Callout, Spinner,
  Input, Textarea, Checkbox, Switch, Radio, Separator, Field, FieldSet, Card,
  Skeleton, Table. Fully functional from the class API + HTML/ARIA attributes.
- **区分 C/D (8 components)** — Avatar, Tooltip, Select, Toast, Popover, Tabs,
  Dialog, DropdownMenu. Shown as **static class rendering only**; their
  interactive behaviour needs the React layer (see the on-page note).

## CDN vs local dist

The `<head>` carries both `<link>` options (local dist active, CDN commented).
The local path is the pre-1.0 verification gate; swap to the CDN `<link>` to
smoke-test the published package after the 1.0 release. Only the `<link>`
differs — the markup body is identical, so there is no drift.

## Consumer wires ARIA

For form controls the class API renders the visual, but the consumer sets the
state attributes themselves (`aria-invalid`, `aria-describedby`,
`<label for>`). The Input and Field samples show the `aria-invalid="true"`
error wiring the React layer would otherwise do for you.
