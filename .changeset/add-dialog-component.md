---
'@yasmro/schatten': minor
---

Add `Dialog` component — modal overlay for confirmations, form input, and
detail views. The API is **flat**: state, header, and footer are passed as
props; only the body is `children`.

```tsx
<Dialog
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  title="Delete account"
  description="This action cannot be undone."
  actionButton={{
    label: 'Delete',
    variant: 'destructive',
    onClick: handleDelete,
    isLoading: isDeleting,
  }}
  cancelButton={{ label: 'Cancel' }}
  subActionButton={{ label: 'Save as draft', onClick: handleDraft }}
>
  <p>All data will be permanently removed.</p>
</Dialog>
```

**Highlights:**

- **Controlled-only** open state — parent owns `isOpen` / `onOpenChange`.
  No `<DialogTrigger>`; any button can open the dialog.
- **Per-slot `isLoading`** — set `isLoading: true` on `actionButton` or
  `subActionButton` to show a spinner on that button. Dialog disables
  the other footer buttons (and close ✕) and blocks ESC / overlay click
  / close ✕ dismissal while *any* footer button is loading. Parent owns
  the state; symmetric with `Button.isLoading`.
- **Three footer slots** with constrained variants:
  - `actionButton` (required): `primary | destructive`
  - `cancelButton` (optional): `secondary` (fixed)
  - `subActionButton` (optional): `tertiary` (fixed)
- **Responsive footer layout**:
  - Desktop: `[SubAction] ────── [Cancel] [Action]`
  - Mobile: `[Action] / [Cancel] / ── separator ── / [SubAction]`
    (separator only when `subActionButton` is present)
- **Long body content** scrolls inside the dialog automatically — Content
  caps at `calc(100vh - 2rem)` and the body region is the only scrolling
  surface (header / footer stay pinned).
- **Built on** `@radix-ui/react-dialog` for focus trap, scroll lock, and
  a11y wiring (`aria-modal`, `aria-labelledby`, `aria-describedby`).
