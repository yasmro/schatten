import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,n}from"./iframe-CJkvrwsC.js";import{n as r,t as i}from"./search-TkjASw_k.js";import{n as a,t as o}from"./Button-Hs6sEbwz.js";import{n as s,t as c}from"./Callout-B738rwC2.js";import{n as l,t as u}from"./Checkbox-Bftpg62d.js";import{n as d,t as f}from"./Dialog-CyhiOujZ.js";import{n as p,t as m}from"./Input-CD_OpSPP.js";import{n as h,t as g}from"./Field-JJXPzdBF.js";import{n as _,r as v,t as y}from"./Radio-K--koA-3.js";import{c as b,i as x,l as S,n as C,s as w,t as T}from"./Select-Vvje01E7.js";import{n as E,t as D}from"./Switch-bEECH38B.js";import{n as O,t as k}from"./Text-4c6yHF8T.js";import{a as A,c as j,i as M,n as N,o as P,r as F,s as I,t as L}from"./docs-ui-lSd4goXw.js";function R(){let[e,t]=(0,z.useState)(!1);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(o,{onClick:()=>t(!0),children:`Open dialog`}),(0,B.jsx)(f,{isOpen:e,onOpenChange:t,title:`Keyboard navigation`,description:`Tab cycles focus within the dialog; Esc closes it.`,actionButton:{label:`Confirm`,onClick:()=>t(!1)},cancelButton:{label:`Cancel`},children:(0,B.jsx)(k,{children:`Focus is trapped here while the dialog is open. Press Esc to close.`})})]})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{r(),z=t(),a(),s(),l(),d(),h(),p(),v(),S(),E(),O(),j(),B=n(),V={title:`Patterns/Accessibility`,parameters:{layout:`fullscreen`}},H=({children:e})=>(0,B.jsx)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:e}),U=({children:e})=>(0,B.jsx)(`code`,{className:`rounded bg-surface px-1 py-0.5 font-mono text-[0.85em] text-foreground`,children:e}),W=({label:e,children:t})=>(0,B.jsxs)(`div`,{className:`border border-border rounded-lg p-4 mb-4`,children:[(0,B.jsx)(`h3`,{className:`text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3`,children:e}),(0,B.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:t})]}),G={name:`Overview`,render:()=>(0,B.jsxs)(H,{children:[(0,B.jsx)(A,{children:`Accessibility`}),(0,B.jsxs)(F,{children:[`Schatten targets `,(0,B.jsx)(`strong`,{children:`WCAG 2.1 AA`}),`. Every lv1 component ships a stable accessibility surface — an explicit role, a queryable accessible name, keyboard operability, and `,(0,B.jsx)(U,{children:`aria-*`}),` state wiring — so that consuming apps can select components by`,` `,(0,B.jsxs)(U,{children:[`getByRole(role, `,`{ name }`,`)`]}),` instead of by class names or DOM structure. This page is the cross-cutting reference for that contract; the per-area detail lives in the sibling sections.`]}),(0,B.jsx)(P,{children:`Principles at a glance`}),(0,B.jsxs)(M,{children:[`Each principle below maps to its own section in this page (see the sidebar under`,` `,(0,B.jsx)(U,{children:`Patterns/Accessibility`}),`).`]}),(0,B.jsxs)(`ul`,{className:`list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2`,children:[(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`strong`,{className:`text-foreground`,children:`Focus visibility`}),` — every interactive element renders a visible focus ring on keyboard focus.`]}),(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`strong`,{className:`text-foreground`,children:`ARIA conventions`}),` — error / busy / description state is expressed through standard attributes, often wired automatically by`,` `,(0,B.jsx)(U,{children:`Field`}),`.`]}),(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`strong`,{className:`text-foreground`,children:`Color contrast`}),` — text and UI affordances meet the AA contrast lines in both Modes.`]}),(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`strong`,{className:`text-foreground`,children:`Keyboard`}),` — all interactive elements are reachable and operable from the keyboard; compound widgets follow their ARIA pattern.`]}),(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`strong`,{className:`text-foreground`,children:`Screen reader`}),` — decorative icons are hidden; meaning is carried by text and role, never by color alone.`]}),(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`strong`,{className:`text-foreground`,children:`Automated testing`}),` — axe runs in every VRT spec and in the Storybook a11y panel.`]})]}),(0,B.jsx)(P,{children:`Contributor contracts`}),(0,B.jsxs)(M,{children:[`The authoritative, implementer-facing sources of truth are`,` `,(0,B.jsx)(U,{children:`.claude/rules/component-architecture.md §8`}),` (the a11y contract every lv1 must satisfy), `,(0,B.jsx)(U,{children:`.claude/rules/field-context-guideline.md`}),` (how form state and descriptions are wired), and `,(0,B.jsx)(U,{children:`.claude/rules/state-token-guideline.md`}),` (the contrast-audited state tokens).`]}),(0,B.jsx)(P,{children:`Out of scope`}),(0,B.jsxs)(M,{children:[`WCAG `,(0,B.jsx)(`strong`,{children:`AAA`}),` and a dedicated high-contrast mode are future work (Phase 5). Internationalization (i18n) of component copy is also out of scope for this page.`]})]})},K={name:`Focus visibility`,render:()=>(0,B.jsxs)(H,{children:[(0,B.jsx)(A,{children:`Focus visibility`}),(0,B.jsxs)(F,{children:[`Every interactive component renders a visible focus ring when it receives`,` `,(0,B.jsx)(`strong`,{children:`keyboard`}),` focus. The ring is keyed to `,(0,B.jsx)(U,{children:`:focus-visible`}),`, not`,` `,(0,B.jsx)(U,{children:`:focus`}),`, so a plain mouse click does not flash a ring — only keyboard navigation (or other non-pointer focus) shows it.`]}),(0,B.jsx)(P,{children:`Try it`}),(0,B.jsxs)(M,{children:[`Press `,(0,B.jsx)(U,{children:`Tab`}),` to move focus across the row below and watch the ring appear. Toggle the Storybook `,(0,B.jsx)(`strong`,{children:`Theme`}),` toolbar between light and dark — the ring stays visible in both Modes.`]}),(0,B.jsxs)(W,{label:`Tab through these`,children:[(0,B.jsx)(o,{children:`Primary`}),(0,B.jsx)(o,{variant:`secondary`,children:`Secondary`}),(0,B.jsx)(o,{variant:`link`,children:`Link`}),(0,B.jsx)(m,{"aria-label":`Sample input`,placeholder:`Input`,className:`w-40`}),(0,B.jsx)(u,{label:`Checkbox`}),(0,B.jsx)(D,{label:`Switch`}),(0,B.jsxs)(T,{children:[(0,B.jsx)(w,{"aria-label":`Select demo`,className:`w-40`,children:(0,B.jsx)(b,{placeholder:`Select`})}),(0,B.jsxs)(C,{children:[(0,B.jsx)(x,{value:`a`,children:`Option A`}),(0,B.jsx)(x,{value:`b`,children:`Option B`})]})]})]}),(0,B.jsx)(P,{children:`How it is implemented`}),(0,B.jsxs)(M,{children:[`The ring is a `,(0,B.jsx)(U,{children:`box-shadow`}),` authored in each component's own`,` `,(0,B.jsx)(U,{children:`.st-{block}:focus-visible`}),` rule (not a utility baked into a CVA base class). It reads two semantic tokens: `,(0,B.jsx)(U,{children:`--color-ring`}),` (ink-black in light, inverted in dark) and `,(0,B.jsx)(U,{children:`--color-ring-offset`}),` (the surface gap), so the indicator re-colors automatically per Mode.`]}),(0,B.jsx)(L,{children:`/* Button.css */
.st-btn:focus-visible {
  box-shadow:
    0 0 0 2px var(--color-ring-offset),
    0 0 0 4px var(--color-ring);
}`}),(0,B.jsx)(M,{children:`Never strip this ring to fit a layout. If it clashes with a saturated surface, override the ring color for contrast — do not remove the indicator.`})]})},q={name:`ARIA conventions`,render:()=>(0,B.jsxs)(H,{children:[(0,B.jsx)(A,{children:`ARIA conventions`}),(0,B.jsxs)(F,{children:[`State is expressed through standard ARIA / HTML attributes, not bespoke classes. The same attribute that drives the visual also announces the state to assistive tech, so the two can never drift apart. Inside a `,(0,B.jsx)(U,{children:`Field`}),`, most of this wiring is automatic.`]}),(0,B.jsx)(P,{children:`Required attributes by component`}),(0,B.jsx)(N,{headers:[`Component`,`Attribute`,`Source`],rows:[{key:`form-invalid`,cells:[`Input / Textarea / Select / Checkbox / Switch / Radio`,(0,B.jsx)(U,{children:`aria-invalid`},`c`),`Set from isError (or inherited from Field).`]},{key:`form-describedby`,cells:[`Form inputs`,(0,B.jsx)(U,{children:`aria-describedby`},`c`),`Field links its description / error ids automatically.`]},{key:`btn-label`,cells:[`Button (icon-only)`,(0,B.jsx)(U,{children:`aria-label`},`c`),`Author-supplied — a button with no text needs a name.`]},{key:`btn-busy`,cells:[`Button (loading)`,(0,B.jsx)(U,{children:`aria-busy`},`c`),`Set automatically while isLoading is true.`]},{key:`dialog`,cells:[`Dialog`,(0,B.jsxs)(`span`,{children:[(0,B.jsx)(U,{children:`role="dialog"`}),` · `,(0,B.jsx)(U,{children:`aria-modal`}),` ·`,` `,(0,B.jsx)(U,{children:`aria-labelledby`}),` · `,(0,B.jsx)(U,{children:`aria-describedby`})]},`c`),`Provided by Radix (title → labelledby, description → describedby).`]},{key:`tooltip`,cells:[`Tooltip`,(0,B.jsx)(U,{children:`aria-describedby`},`c`),`Radix links the trigger to the tooltip content.`]}]}),(0,B.jsx)(P,{children:`Required: announced, not enforced`}),(0,B.jsxs)(c,{variant:`info`,title:`Field propagates aria-required — announce-only`,children:[(0,B.jsx)(U,{children:`Field required`}),` renders the visual marker (`,(0,B.jsx)(U,{children:`*`}),`) `,(0,B.jsx)(`strong`,{children:`and`}),` `,`sets `,(0,B.jsx)(U,{children:`aria-required`}),` on the wrapped control, so assistive tech announces "required". It does `,(0,B.jsx)(`strong`,{children:`not`}),` enable native validation — form-submission blocking still comes only from a `,(0,B.jsx)(U,{children:`required`}),` attribute set directly on the control (the same split as `,(0,B.jsx)(U,{children:`isError`}),`, which sets `,(0,B.jsx)(U,{children:`aria-invalid`}),` without forcing native `,(0,B.jsx)(U,{children:`:invalid`}),`).`]}),(0,B.jsx)(P,{children:`Live wiring`}),(0,B.jsxs)(M,{children:[`Inspect the rendered DOM: the invalid input carries`,` `,(0,B.jsx)(U,{children:`aria-invalid="true"`}),` and an `,(0,B.jsx)(U,{children:`aria-describedby`}),` pointing at the error text; the icon-only button exposes its name via `,(0,B.jsx)(U,{children:`aria-label`}),`; the loading button sets `,(0,B.jsx)(U,{children:`aria-busy`}),`.`]}),(0,B.jsx)(W,{label:`aria-invalid + aria-describedby (via Field)`,children:(0,B.jsx)(g,{label:`Email`,error:`Enter a valid email address.`,className:`w-72`,children:(0,B.jsx)(m,{type:`email`,defaultValue:`not-an-email`})})}),(0,B.jsxs)(W,{label:`aria-label (icon-only Button)`,children:[(0,B.jsx)(o,{icon:i,"aria-label":`Search`}),(0,B.jsx)(k,{color:`muted`,size:`sm`,children:`getByRole('button', { name: 'Search' }) resolves this.`})]}),(0,B.jsx)(W,{label:`aria-busy (loading Button)`,children:(0,B.jsx)(o,{isLoading:!0,children:`Saving`})})]})},J={name:`Contrast`,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},render:()=>(0,B.jsxs)(H,{children:[(0,B.jsx)(A,{children:`Color contrast`}),(0,B.jsx)(F,{children:`Color is never the only signal, and where it carries meaning it meets the WCAG AA contrast lines in both Modes.`}),(0,B.jsx)(P,{children:`The lines`}),(0,B.jsx)(N,{headers:[`Surface`,`Minimum ratio`,`Applies to`],rows:[{key:`text`,cells:[`Body text`,`4.5 : 1`,`Normal-size foreground text on its background.`]},{key:`large`,cells:[`Large text`,`3 : 1`,`18pt+ (or 14pt bold) — headings and lead text.`]},{key:`ui`,cells:[`UI components`,`3 : 1`,`Borders, focus rings, and other non-text affordances.`]}]}),(0,B.jsx)(P,{children:`State tokens`}),(0,B.jsxs)(M,{children:[`The semantic state tokens (`,(0,B.jsx)(U,{children:`error`}),` / `,(0,B.jsx)(U,{children:`success`}),` / `,(0,B.jsx)(U,{children:`warning`}),` `,`/ `,(0,B.jsx)(U,{children:`info`}),`) clear AA against their paired surfaces in light and dark. Non-solid coloured text routes through the `,(0,B.jsx)(U,{children:`--color-{state}-emphasis`}),` rung (the 4→5-token shape from #344 Phase B) so it meets the 4.5 : 1 body-text line; the saturated`,` `,(0,B.jsx)(`em`,{children:`solid`}),` fills are the one documented exception (below). The full, mode-toggle-able swatch matrices live in `,(0,B.jsx)(U,{children:`Tokens/Color`}),` under "Filled / Subtle / Disabled vs ReadOnly Treatments (a11y audit)" — treat the audit, not this prose, as ground truth.`]}),(0,B.jsx)(I,{children:`Worked example — foreground tiers on a surface`}),(0,B.jsxs)(M,{children:[(0,B.jsx)(U,{children:`text-foreground`}),` (primary) and `,(0,B.jsx)(U,{children:`text-foreground-muted`}),` (secondary) both clear the 4.5 : 1 body-text line in both Modes — muted was raised to AA in #344 Phase A. `,(0,B.jsx)(U,{children:`text-foreground-subtle`}),` is the `,(0,B.jsx)(`em`,{children:`tertiary`}),` tier and is intentionally below 4.5 : 1 at small sizes (it clears the 3 : 1 large-text line) — reach for it only on large or incidental text, never body copy.`]}),(0,B.jsxs)(`div`,{className:`rounded-lg border border-border bg-surface p-6 flex flex-col gap-1`,children:[(0,B.jsxs)(`p`,{className:`text-foreground`,children:[(0,B.jsx)(U,{children:`text-foreground`}),` on `,(0,B.jsx)(U,{children:`bg-surface`}),` — primary body text, meets AA.`]}),(0,B.jsxs)(`p`,{className:`text-foreground-muted`,children:[(0,B.jsx)(U,{children:`text-foreground-muted`}),` on `,(0,B.jsx)(U,{children:`bg-surface`}),` — secondary text, meets AA.`]}),(0,B.jsxs)(`p`,{className:`text-foreground-subtle`,children:[(0,B.jsx)(U,{children:`text-foreground-subtle`}),` on `,(0,B.jsx)(U,{children:`bg-surface`}),` — tertiary, large / incidental only.`]})]}),(0,B.jsx)(P,{children:`Intentional AA exceptions`}),(0,B.jsxs)(M,{children:[`Four patterns are deliberately exempt from the 4.5 : 1 body-text line — three design exceptions plus one portal-testing artifact. These are the `,(0,B.jsx)(`em`,{children:`only`}),` `,(0,B.jsx)(U,{children:`color-contrast`}),` findings the CI a11y gate (#346) suppresses — each via a documented, story-scoped `,(0,B.jsx)(U,{children:`disableRules(['color-contrast'])`}),` in the component's `,(0,B.jsx)(U,{children:`*.vrt.spec.ts`}),` (mirrored in the story's`,` `,(0,B.jsx)(U,{children:`parameters.a11y`}),`). A blanket disable is never allowed; anything outside this table must clear AA. See `,(0,B.jsx)(U,{children:`.claude/rules/state-token-guideline.md`}),` for the token rationale.`]}),(0,B.jsx)(N,{headers:[`Exception`,`Where it appears`,`Why it is AA-exempt`],rows:[{key:`solid`,cells:[`Solid treatments`,`Button primary / destructive; Badge / Callout / Toast appearance="solid"; Dialog action button`,`Light foreground on a saturated (or neutral-solid) fill cannot reach 4.5 : 1 — the white-on-vivid trilemma. Meaning is carried by an icon + a visible label (WCAG 1.4.1), not by colour.`]},{key:`inverted`,cells:[`Inverted-on-saturated`,`Button variant="inverted"; Text color="inverted" / "inverted-muted" / "inverted-subtle"`,`The inverted foreground tiers sit on saturated surfaces and are incidental / large-only by design — the inverted analogue of the foreground-subtle tier.`]},{key:`subtle`,cells:[`foreground-subtle (tertiary)`,`Text color="subtle"; faint helper / placeholder-like copy`,`The third foreground tier clears the 3 : 1 large-text line but is intentionally below 4.5 : 1 at small sizes. Never use it for body copy.`]},{key:`overlay`,cells:[`Dialog overlay compositing (test artifact)`,`Dialog *.vrt.spec.ts a11y tests — every story`,`The full-page portal spec has axe compositing the aria-hidden trigger sitting behind the semi-transparent modal overlay into a blended, non-readable pair. A portal-pattern testing artifact, not a real content-contrast issue — the dialog text itself clears AA.`]}]})]})},Y={name:`Keyboard interaction`,render:()=>(0,B.jsxs)(H,{children:[(0,B.jsx)(A,{children:`Keyboard interaction`}),(0,B.jsxs)(F,{children:[`Every interactive element is reachable with `,(0,B.jsx)(U,{children:`Tab`}),` / `,(0,B.jsx)(U,{children:`Shift+Tab`}),` and operable from the keyboard. Compound widgets follow their established ARIA keyboard pattern — implemented by Radix, so the contract on our side is simply`,` `,(0,B.jsx)(`strong`,{children:`not to break it`}),` (no swallowing `,(0,B.jsx)(U,{children:`onKeyDown`}),`, no stealing focus).`]}),(0,B.jsx)(P,{children:`Key map`}),(0,B.jsx)(N,{headers:[`Widget`,`Keys`],rows:[{key:`all`,cells:[`All interactive elements`,(0,B.jsx)(U,{children:`Tab`},`c`)]},{key:`dialog`,cells:[`Dialog`,(0,B.jsxs)(`span`,{children:[(0,B.jsx)(U,{children:`Esc`}),` closes · `,(0,B.jsx)(U,{children:`Tab`}),` cycles focus within (trap)`]},`c`)]},{key:`tooltip`,cells:[`Tooltip / Popover`,(0,B.jsx)(U,{children:`Esc`},`c`)]},{key:`select`,cells:[`Select / Menu`,(0,B.jsxs)(`span`,{children:[(0,B.jsx)(U,{children:`↑`}),` `,(0,B.jsx)(U,{children:`↓`}),` navigate · `,(0,B.jsx)(U,{children:`Enter`}),` confirm`]},`c`)]},{key:`radio`,cells:[`Radio group`,(0,B.jsxs)(`span`,{children:[(0,B.jsx)(U,{children:`←`}),` `,(0,B.jsx)(U,{children:`→`}),` / `,(0,B.jsx)(U,{children:`↑`}),` `,(0,B.jsx)(U,{children:`↓`}),` move selection`]},`c`)]}]}),(0,B.jsx)(P,{children:`Try it`}),(0,B.jsxs)(M,{children:[`Operate each widget below without a mouse: open the dialog and press `,(0,B.jsx)(U,{children:`Esc`}),`; arrow through the select and the radio group.`]}),(0,B.jsx)(W,{label:`Dialog — Esc to close, Tab trap`,children:(0,B.jsx)(R,{})}),(0,B.jsx)(W,{label:`Select — arrow keys + Enter`,children:(0,B.jsxs)(T,{children:[(0,B.jsx)(w,{"aria-label":`Fruit`,className:`w-48`,children:(0,B.jsx)(b,{placeholder:`Pick a fruit`})}),(0,B.jsxs)(C,{children:[(0,B.jsx)(x,{value:`apple`,children:`Apple`}),(0,B.jsx)(x,{value:`banana`,children:`Banana`}),(0,B.jsx)(x,{value:`cherry`,children:`Cherry`})]})]})}),(0,B.jsx)(W,{label:`Radio group — arrow keys`,children:(0,B.jsxs)(_,{defaultValue:`a`,className:`flex-row gap-4`,children:[(0,B.jsx)(y,{value:`a`,label:`Option A`}),(0,B.jsx)(y,{value:`b`,label:`Option B`}),(0,B.jsx)(y,{value:`c`,label:`Option C`})]})})]})},X={name:`Screen reader support`,render:()=>(0,B.jsxs)(H,{children:[(0,B.jsx)(A,{children:`Screen reader support`}),(0,B.jsx)(F,{children:`What a sighted user reads from layout and color, a screen-reader user must get from the accessibility tree. Two rules carry most of the weight: hide decorations, and never let color be the only carrier of meaning.`}),(0,B.jsx)(P,{children:`Decorative icons are hidden`}),(0,B.jsxs)(M,{children:[`Every purely-decorative icon (the icon inside a Button, Badge, Callout, the Checkbox mark, the Switch knob, the Spinner) carries `,(0,B.jsx)(U,{children:`aria-hidden="true"`}),`, so it is not announced. Do not add a meaningless `,(0,B.jsx)(U,{children:`aria-label`}),` to a decorative icon — that just adds noise. An icon is only named when it is itself the control (e.g. an icon-only Button, or Field's info trigger with`,` `,(0,B.jsx)(U,{children:`aria-label="More information"`}),`).`]}),(0,B.jsx)(P,{children:`Meaning is not color alone`}),(0,B.jsxs)(M,{children:[`State surfaces pair a color shift with a non-color signal: a labeled icon and visible text for sighted users, and a role + accessible name for assistive tech. In the callout below the variant icon is `,(0,B.jsx)(U,{children:`aria-hidden`}),` — the meaning is carried by the title and body text, so it survives even if the color shift is not perceived.`]}),(0,B.jsx)(c,{variant:`success`,title:`Saved`,className:`mb-4`,children:`Your changes were saved. The meaning is in this text, not in the green tint.`}),(0,B.jsx)(P,{children:`Loading announces politely`}),(0,B.jsxs)(M,{children:[`Asynchronous progress uses `,(0,B.jsx)(U,{children:`aria-busy`}),` on the control plus an`,` `,(0,B.jsx)(U,{children:`aria-live="polite"`}),` region so the change is announced without interrupting. The Button below sets `,(0,B.jsx)(U,{children:`aria-busy`}),` while loading and hides its spinner from the a11y tree.`]}),(0,B.jsx)(W,{label:`Loading`,children:(0,B.jsx)(o,{isLoading:!0,children:`Submitting`})})]})},Z={name:`Automated testing`,render:()=>(0,B.jsxs)(H,{children:[(0,B.jsx)(A,{children:`Automated testing`}),(0,B.jsx)(F,{children:`The a11y contract is enforced by two complementary axe surfaces — one in CI, one at dev time — pinned to the same rule set so "green in the panel" maps to "green in CI".`}),(0,B.jsx)(P,{children:`axe in every VRT spec`}),(0,B.jsxs)(M,{children:[`Each lv1 `,(0,B.jsx)(U,{children:`*.vrt.spec.ts`}),` pairs every screenshot with an`,` `,(0,B.jsx)(U,{children:`@axe-core/playwright`}),` scan (as a separate test, so a visual failure never masks an a11y failure). Always pin the WCAG tag set, or axe also runs best-practice rules that flag the Storybook iframe itself on every story.`]}),(0,B.jsx)(L,{children:`const results = await new AxeBuilder({ page })
  .include('#storybook-root')
  .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  .analyze()

expect(results.violations).toEqual([])`}),(0,B.jsx)(P,{children:`The addon-a11y panel`}),(0,B.jsxs)(M,{children:[`Storybook's `,(0,B.jsx)(U,{children:`addon-a11y`}),` runs the same axe surface against the rendered story in the `,(0,B.jsx)(`strong`,{children:`Accessibility`}),` panel — the dev-time companion to the CI assertion. Because it scans after the theme decorator applies `,(0,B.jsx)(U,{children:`.dark`}),` /`,` `,(0,B.jsx)(U,{children:`data-theme`}),`, toggling the Theme toolbar surfaces dark-mode and seasonal contrast issues for free.`]}),(0,B.jsx)(P,{children:`Run it`}),(0,B.jsx)(L,{children:`pnpm test:a11y    # playwright test --grep a11y          → a11y only
pnpm test:vrt     # playwright test --grep-invert a11y    → screenshots only`}),(0,B.jsx)(P,{children:`Status: blocking gate`}),(0,B.jsxs)(M,{children:[`The CI a11y job `,(0,B.jsx)(`strong`,{children:`blocks`}),` (#346) — it propagates the Playwright exit code, so a new WCAG 2.1 A/AA violation fails the PR (the full violation list is still tee'd into the job summary). The only `,(0,B.jsx)(U,{children:`color-contrast`}),` findings that remain are the intentional exceptions inventoried on the `,(0,B.jsx)(`strong`,{children:`Contrast`}),` page of this section, each suppressed with a documented, story-scoped`,` `,(0,B.jsx)(U,{children:`disableRules(['color-contrast'])`}),`. One other rule id carries a documented exception: `,(0,B.jsx)(U,{children:`aria-hidden-focus`}),` on open Radix poppers (Select / DropdownMenu / Popover) — while open, Radix hides the page behind the popper via`,` `,(0,B.jsx)(U,{children:`aria-hidden`}),` but leaves the trigger focusable, a known Radix behavior not fixable from Schatten; the disable is scoped to the open-state a11y tests only. These two rule ids are the `,(0,B.jsx)(`em`,{children:`entire`}),` allowed set (see`,` `,(0,B.jsx)(U,{children:`.claude/rules/vrt-spec-guideline.md`}),` §a11y assertions). The addon panel's`,` `,(0,B.jsx)(U,{children:`test`}),` flag is `,(0,B.jsx)(U,{children:`off`}),` so its headless preview run does not race the Playwright suite; addon-a11y stays the on-demand dev companion — click`,` `,(0,B.jsx)(`strong`,{children:`Rerun`}),` in the Accessibility panel to scan the current story.`]})]})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <Page>
      <PageTitle>Accessibility</PageTitle>
      <Lead>
        Schatten targets <strong>WCAG 2.1 AA</strong>. Every lv1 component ships a stable
        accessibility surface — an explicit role, a queryable accessible name, keyboard operability,
        and <Code>aria-*</Code> state wiring — so that consuming apps can select components by{' '}
        <Code>getByRole(role, {'{ name }'})</Code> instead of by class names or DOM structure. This
        page is the cross-cutting reference for that contract; the per-area detail lives in the
        sibling sections.
      </Lead>

      <SectionTitle>Principles at a glance</SectionTitle>
      <Note>
        Each principle below maps to its own section in this page (see the sidebar under{' '}
        <Code>Patterns/Accessibility</Code>).
      </Note>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2">
        <li>
          <strong className="text-foreground">Focus visibility</strong> — every interactive element
          renders a visible focus ring on keyboard focus.
        </li>
        <li>
          <strong className="text-foreground">ARIA conventions</strong> — error / busy / description
          state is expressed through standard attributes, often wired automatically by{' '}
          <Code>Field</Code>.
        </li>
        <li>
          <strong className="text-foreground">Color contrast</strong> — text and UI affordances meet
          the AA contrast lines in both Modes.
        </li>
        <li>
          <strong className="text-foreground">Keyboard</strong> — all interactive elements are
          reachable and operable from the keyboard; compound widgets follow their ARIA pattern.
        </li>
        <li>
          <strong className="text-foreground">Screen reader</strong> — decorative icons are hidden;
          meaning is carried by text and role, never by color alone.
        </li>
        <li>
          <strong className="text-foreground">Automated testing</strong> — axe runs in every VRT
          spec and in the Storybook a11y panel.
        </li>
      </ul>

      <SectionTitle>Contributor contracts</SectionTitle>
      <Note>
        The authoritative, implementer-facing sources of truth are{' '}
        <Code>.claude/rules/component-architecture.md §8</Code> (the a11y contract every lv1 must
        satisfy), <Code>.claude/rules/field-context-guideline.md</Code> (how form state and
        descriptions are wired), and <Code>.claude/rules/state-token-guideline.md</Code> (the
        contrast-audited state tokens).
      </Note>

      <SectionTitle>Out of scope</SectionTitle>
      <Note>
        WCAG <strong>AAA</strong> and a dedicated high-contrast mode are future work (Phase 5).
        Internationalization (i18n) of component copy is also out of scope for this page.
      </Note>
    </Page>
}`,...G.parameters?.docs?.source},description:{story:"§1 — Goal level. Schatten targets WCAG 2.1 AA and ships a stable a11y\nsurface (role + accessible name + keyboard + `aria-*`) on every lv1.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Focus visibility',
  render: () => <Page>
      <PageTitle>Focus visibility</PageTitle>
      <Lead>
        Every interactive component renders a visible focus ring when it receives{' '}
        <strong>keyboard</strong> focus. The ring is keyed to <Code>:focus-visible</Code>, not{' '}
        <Code>:focus</Code>, so a plain mouse click does not flash a ring — only keyboard navigation
        (or other non-pointer focus) shows it.
      </Lead>

      <SectionTitle>Try it</SectionTitle>
      <Note>
        Press <Code>Tab</Code> to move focus across the row below and watch the ring appear. Toggle
        the Storybook <strong>Theme</strong> toolbar between light and dark — the ring stays visible
        in both Modes.
      </Note>
      <Demo label="Tab through these">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="link">Link</Button>
        <Input aria-label="Sample input" placeholder="Input" className="w-40" />
        <Checkbox label="Checkbox" />
        <Switch label="Switch" />
        <Select>
          <SelectTrigger aria-label="Select demo" className="w-40">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <SectionTitle>How it is implemented</SectionTitle>
      <Note>
        The ring is a <Code>box-shadow</Code> authored in each component&apos;s own{' '}
        <Code>.st-&#123;block&#125;:focus-visible</Code> rule (not a utility baked into a CVA base
        class). It reads two semantic tokens: <Code>--color-ring</Code> (ink-black in light,
        inverted in dark) and <Code>--color-ring-offset</Code> (the surface gap), so the indicator
        re-colors automatically per Mode.
      </Note>
      <CodeBlock>{\`/* Button.css */
.st-btn:focus-visible {
  box-shadow:
    0 0 0 2px var(--color-ring-offset),
    0 0 0 4px var(--color-ring);
}\`}</CodeBlock>
      <Note>
        Never strip this ring to fit a layout. If it clashes with a saturated surface, override the
        ring color for contrast — do not remove the indicator.
      </Note>
    </Page>
}`,...K.parameters?.docs?.source},description:{story:"§2 — Focus visibility. The ring is a `box-shadow` authored per component in\n`.st-{block}:focus-visible`, driven by `--color-ring` / `--color-ring-offset`.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'ARIA conventions',
  render: () => <Page>
      <PageTitle>ARIA conventions</PageTitle>
      <Lead>
        State is expressed through standard ARIA / HTML attributes, not bespoke classes. The same
        attribute that drives the visual also announces the state to assistive tech, so the two can
        never drift apart. Inside a <Code>Field</Code>, most of this wiring is automatic.
      </Lead>

      <SectionTitle>Required attributes by component</SectionTitle>
      {/*
       * Hand-maintained mirror of the a11y contract in
       * \`.claude/rules/component-architecture.md §8\`. The implementation is the
       * source of truth — re-verify this table whenever a component's aria-*
       * wiring changes (this page's own issue body went stale exactly this way).
       */}
      <DocsTable headers={['Component', 'Attribute', 'Source']} rows={[{
      key: 'form-invalid',
      cells: ['Input / Textarea / Select / Checkbox / Switch / Radio', <Code key="c">aria-invalid</Code>, 'Set from isError (or inherited from Field).']
    }, {
      key: 'form-describedby',
      cells: ['Form inputs', <Code key="c">aria-describedby</Code>, 'Field links its description / error ids automatically.']
    }, {
      key: 'btn-label',
      cells: ['Button (icon-only)', <Code key="c">aria-label</Code>, 'Author-supplied — a button with no text needs a name.']
    }, {
      key: 'btn-busy',
      cells: ['Button (loading)', <Code key="c">aria-busy</Code>, 'Set automatically while isLoading is true.']
    }, {
      key: 'dialog',
      cells: ['Dialog', <span key="c">
                <Code>role=&quot;dialog&quot;</Code> · <Code>aria-modal</Code> ·{' '}
                <Code>aria-labelledby</Code> · <Code>aria-describedby</Code>
              </span>, 'Provided by Radix (title → labelledby, description → describedby).']
    }, {
      key: 'tooltip',
      cells: ['Tooltip', <Code key="c">aria-describedby</Code>, 'Radix links the trigger to the tooltip content.']
    }]} />

      <SectionTitle>Required: announced, not enforced</SectionTitle>
      <Callout variant="info" title="Field propagates aria-required — announce-only">
        <Code>Field required</Code> renders the visual marker (<Code>*</Code>) <strong>and</strong>{' '}
        sets <Code>aria-required</Code> on the wrapped control, so assistive tech announces
        "required". It does <strong>not</strong> enable native validation — form-submission blocking
        still comes only from a <Code>required</Code> attribute set directly on the control (the
        same split as <Code>isError</Code>, which sets <Code>aria-invalid</Code> without forcing
        native <Code>:invalid</Code>).
      </Callout>

      <SectionTitle>Live wiring</SectionTitle>
      <Note>
        Inspect the rendered DOM: the invalid input carries{' '}
        <Code>aria-invalid=&quot;true&quot;</Code> and an <Code>aria-describedby</Code> pointing at
        the error text; the icon-only button exposes its name via <Code>aria-label</Code>; the
        loading button sets <Code>aria-busy</Code>.
      </Note>
      <Demo label="aria-invalid + aria-describedby (via Field)">
        <Field label="Email" error="Enter a valid email address." className="w-72">
          <Input type="email" defaultValue="not-an-email" />
        </Field>
      </Demo>
      <Demo label="aria-label (icon-only Button)">
        <Button icon={Search} aria-label="Search" />
        <Text color="muted" size="sm">
          getByRole(&apos;button&apos;, &#123; name: &apos;Search&apos; &#125;) resolves this.
        </Text>
      </Demo>
      <Demo label="aria-busy (loading Button)">
        <Button isLoading>Saving</Button>
      </Demo>
    </Page>
}`,...q.parameters?.docs?.source},description:{story:"§3 — ARIA conventions. State surfaces through standard attributes; `Field`\nwires most of them. Note the deliberate `aria-required` gap.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Contrast',
  parameters: {
    // The foreground-tier demo deliberately renders text-foreground-subtle —
    // the tertiary tier documented as large/incidental-text-only (#344 / #346
    // intentional exception). axe flags it here by design.
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  },
  render: () => <Page>
      <PageTitle>Color contrast</PageTitle>
      <Lead>
        Color is never the only signal, and where it carries meaning it meets the WCAG AA contrast
        lines in both Modes.
      </Lead>

      <SectionTitle>The lines</SectionTitle>
      <DocsTable headers={['Surface', 'Minimum ratio', 'Applies to']} rows={[{
      key: 'text',
      cells: ['Body text', '4.5 : 1', 'Normal-size foreground text on its background.']
    }, {
      key: 'large',
      cells: ['Large text', '3 : 1', '18pt+ (or 14pt bold) — headings and lead text.']
    }, {
      key: 'ui',
      cells: ['UI components', '3 : 1', 'Borders, focus rings, and other non-text affordances.']
    }]} />

      <SectionTitle>State tokens</SectionTitle>
      <Note>
        The semantic state tokens (<Code>error</Code> / <Code>success</Code> / <Code>warning</Code>{' '}
        / <Code>info</Code>) clear AA against their paired surfaces in light and dark. Non-solid
        coloured text routes through the <Code>--color-&#123;state&#125;-emphasis</Code> rung (the
        4→5-token shape from #344 Phase B) so it meets the 4.5 : 1 body-text line; the saturated{' '}
        <em>solid</em> fills are the one documented exception (below). The full, mode-toggle-able
        swatch matrices live in <Code>Tokens/Color</Code> under &quot;Filled / Subtle / Disabled vs
        ReadOnly Treatments (a11y audit)&quot; — treat the audit, not this prose, as ground truth.
      </Note>

      <SubsectionTitle>Worked example — foreground tiers on a surface</SubsectionTitle>
      <Note>
        <Code>text-foreground</Code> (primary) and <Code>text-foreground-muted</Code> (secondary)
        both clear the 4.5 : 1 body-text line in both Modes — muted was raised to AA in #344 Phase
        A. <Code>text-foreground-subtle</Code> is the <em>tertiary</em> tier and is intentionally
        below 4.5 : 1 at small sizes (it clears the 3 : 1 large-text line) — reach for it only on
        large or incidental text, never body copy.
      </Note>
      <div className="rounded-lg border border-border bg-surface p-6 flex flex-col gap-1">
        <p className="text-foreground">
          <Code>text-foreground</Code> on <Code>bg-surface</Code> — primary body text, meets AA.
        </p>
        <p className="text-foreground-muted">
          <Code>text-foreground-muted</Code> on <Code>bg-surface</Code> — secondary text, meets AA.
        </p>
        <p className="text-foreground-subtle">
          <Code>text-foreground-subtle</Code> on <Code>bg-surface</Code> — tertiary, large /
          incidental only.
        </p>
      </div>

      <SectionTitle>Intentional AA exceptions</SectionTitle>
      <Note>
        Four patterns are deliberately exempt from the 4.5 : 1 body-text line — three design
        exceptions plus one portal-testing artifact. These are the <em>only</em>{' '}
        <Code>color-contrast</Code> findings the CI a11y gate (#346) suppresses — each via a
        documented, story-scoped <Code>disableRules([&apos;color-contrast&apos;])</Code> in the
        component&apos;s <Code>*.vrt.spec.ts</Code> (mirrored in the story&apos;s{' '}
        <Code>parameters.a11y</Code>). A blanket disable is never allowed; anything outside this
        table must clear AA. See <Code>.claude/rules/state-token-guideline.md</Code> for the token
        rationale.
      </Note>
      <DocsTable headers={['Exception', 'Where it appears', 'Why it is AA-exempt']} rows={[{
      key: 'solid',
      cells: ['Solid treatments', 'Button primary / destructive; Badge / Callout / Toast appearance="solid"; Dialog action button', 'Light foreground on a saturated (or neutral-solid) fill cannot reach 4.5 : 1 — the white-on-vivid trilemma. Meaning is carried by an icon + a visible label (WCAG 1.4.1), not by colour.']
    }, {
      key: 'inverted',
      cells: ['Inverted-on-saturated', 'Button variant="inverted"; Text color="inverted" / "inverted-muted" / "inverted-subtle"', 'The inverted foreground tiers sit on saturated surfaces and are incidental / large-only by design — the inverted analogue of the foreground-subtle tier.']
    }, {
      key: 'subtle',
      cells: ['foreground-subtle (tertiary)', 'Text color="subtle"; faint helper / placeholder-like copy', 'The third foreground tier clears the 3 : 1 large-text line but is intentionally below 4.5 : 1 at small sizes. Never use it for body copy.']
    }, {
      key: 'overlay',
      cells: ['Dialog overlay compositing (test artifact)', 'Dialog *.vrt.spec.ts a11y tests — every story', 'The full-page portal spec has axe compositing the aria-hidden trigger sitting behind the semi-transparent modal overlay into a blended, non-readable pair. A portal-pattern testing artifact, not a real content-contrast issue — the dialog text itself clears AA.']
    }]} />
    </Page>
}`,...J.parameters?.docs?.source},description:{story:`§4 — Color contrast. The AA lines, with a pointer to the audited swatch
matrices in Tokens/Color and an honest note about the #344 backlog.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard interaction',
  render: () => <Page>
      <PageTitle>Keyboard interaction</PageTitle>
      <Lead>
        Every interactive element is reachable with <Code>Tab</Code> / <Code>Shift+Tab</Code> and
        operable from the keyboard. Compound widgets follow their established ARIA keyboard pattern
        — implemented by Radix, so the contract on our side is simply{' '}
        <strong>not to break it</strong> (no swallowing <Code>onKeyDown</Code>, no stealing focus).
      </Lead>

      <SectionTitle>Key map</SectionTitle>
      <DocsTable headers={['Widget', 'Keys']} rows={[{
      key: 'all',
      cells: ['All interactive elements', <Code key="c">Tab</Code>]
    }, {
      key: 'dialog',
      cells: ['Dialog', <span key="c">
                <Code>Esc</Code> closes · <Code>Tab</Code> cycles focus within (trap)
              </span>]
    }, {
      key: 'tooltip',
      cells: ['Tooltip / Popover', <Code key="c">Esc</Code>]
    }, {
      key: 'select',
      cells: ['Select / Menu', <span key="c">
                <Code>↑</Code> <Code>↓</Code> navigate · <Code>Enter</Code> confirm
              </span>]
    }, {
      key: 'radio',
      cells: ['Radio group', <span key="c">
                <Code>←</Code> <Code>→</Code> / <Code>↑</Code> <Code>↓</Code> move selection
              </span>]
    }]} />

      <SectionTitle>Try it</SectionTitle>
      <Note>
        Operate each widget below without a mouse: open the dialog and press <Code>Esc</Code>; arrow
        through the select and the radio group.
      </Note>
      <Demo label="Dialog — Esc to close, Tab trap">
        <KeyboardDialogDemo />
      </Demo>
      <Demo label="Select — arrow keys + Enter">
        <Select>
          <SelectTrigger aria-label="Fruit" className="w-48">
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
      </Demo>
      <Demo label="Radio group — arrow keys">
        <RadioGroup defaultValue="a" className="flex-row gap-4">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
          <Radio value="c" label="Option C" />
        </RadioGroup>
      </Demo>
    </Page>
}`,...Y.parameters?.docs?.source},description:{story:`§5 — Keyboard. Reachability + per-widget key maps. Compound widgets delegate
to Radix; the contract is "don't break it".`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Screen reader support',
  render: () => <Page>
      <PageTitle>Screen reader support</PageTitle>
      <Lead>
        What a sighted user reads from layout and color, a screen-reader user must get from the
        accessibility tree. Two rules carry most of the weight: hide decorations, and never let
        color be the only carrier of meaning.
      </Lead>

      <SectionTitle>Decorative icons are hidden</SectionTitle>
      <Note>
        Every purely-decorative icon (the icon inside a Button, Badge, Callout, the Checkbox mark,
        the Switch knob, the Spinner) carries <Code>aria-hidden=&quot;true&quot;</Code>, so it is
        not announced. Do not add a meaningless <Code>aria-label</Code> to a decorative icon — that
        just adds noise. An icon is only named when it is itself the control (e.g. an icon-only
        Button, or Field&apos;s info trigger with{' '}
        <Code>aria-label=&quot;More information&quot;</Code>).
      </Note>

      <SectionTitle>Meaning is not color alone</SectionTitle>
      <Note>
        State surfaces pair a color shift with a non-color signal: a labeled icon and visible text
        for sighted users, and a role + accessible name for assistive tech. In the callout below the
        variant icon is <Code>aria-hidden</Code> — the meaning is carried by the title and body
        text, so it survives even if the color shift is not perceived.
      </Note>
      <Callout variant="success" title="Saved" className="mb-4">
        Your changes were saved. The meaning is in this text, not in the green tint.
      </Callout>

      <SectionTitle>Loading announces politely</SectionTitle>
      <Note>
        Asynchronous progress uses <Code>aria-busy</Code> on the control plus an{' '}
        <Code>aria-live=&quot;polite&quot;</Code> region so the change is announced without
        interrupting. The Button below sets <Code>aria-busy</Code> while loading and hides its
        spinner from the a11y tree.
      </Note>
      <Demo label="Loading">
        <Button isLoading>Submitting</Button>
      </Demo>
    </Page>
}`,...X.parameters?.docs?.source},description:{story:`§6 — Screen reader. Decorative icons are hidden; meaning rides on text + role,
never on color alone. Loading uses aria-busy + a polite live region.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Automated testing',
  render: () => <Page>
      <PageTitle>Automated testing</PageTitle>
      <Lead>
        The a11y contract is enforced by two complementary axe surfaces — one in CI, one at dev time
        — pinned to the same rule set so &quot;green in the panel&quot; maps to &quot;green in
        CI&quot;.
      </Lead>

      <SectionTitle>axe in every VRT spec</SectionTitle>
      <Note>
        Each lv1 <Code>*.vrt.spec.ts</Code> pairs every screenshot with an{' '}
        <Code>@axe-core/playwright</Code> scan (as a separate test, so a visual failure never masks
        an a11y failure). Always pin the WCAG tag set, or axe also runs best-practice rules that
        flag the Storybook iframe itself on every story.
      </Note>
      <CodeBlock>{\`const results = await new AxeBuilder({ page })
  .include('#storybook-root')
  .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  .analyze()

expect(results.violations).toEqual([])\`}</CodeBlock>

      <SectionTitle>The addon-a11y panel</SectionTitle>
      <Note>
        Storybook&apos;s <Code>addon-a11y</Code> runs the same axe surface against the rendered
        story in the <strong>Accessibility</strong> panel — the dev-time companion to the CI
        assertion. Because it scans after the theme decorator applies <Code>.dark</Code> /{' '}
        <Code>data-theme</Code>, toggling the Theme toolbar surfaces dark-mode and seasonal contrast
        issues for free.
      </Note>

      <SectionTitle>Run it</SectionTitle>
      <CodeBlock>{\`pnpm test:a11y    # playwright test --grep a11y          → a11y only
pnpm test:vrt     # playwright test --grep-invert a11y    → screenshots only\`}</CodeBlock>

      <SectionTitle>Status: blocking gate</SectionTitle>
      <Note>
        The CI a11y job <strong>blocks</strong> (#346) — it propagates the Playwright exit code, so
        a new WCAG 2.1 A/AA violation fails the PR (the full violation list is still tee&apos;d into
        the job summary). The only <Code>color-contrast</Code> findings that remain are the
        intentional exceptions inventoried on the <strong>Contrast</strong> page of this section,
        each suppressed with a documented, story-scoped{' '}
        <Code>disableRules([&apos;color-contrast&apos;])</Code>. One other rule id carries a
        documented exception: <Code>aria-hidden-focus</Code> on open Radix poppers (Select /
        DropdownMenu / Popover) — while open, Radix hides the page behind the popper via{' '}
        <Code>aria-hidden</Code> but leaves the trigger focusable, a known Radix behavior not
        fixable from Schatten; the disable is scoped to the open-state a11y tests only. These two
        rule ids are the <em>entire</em> allowed set (see{' '}
        <Code>.claude/rules/vrt-spec-guideline.md</Code> §a11y assertions). The addon panel&apos;s{' '}
        <Code>test</Code> flag is <Code>off</Code> so its headless preview run does not race the
        Playwright suite; addon-a11y stays the on-demand dev companion — click{' '}
        <strong>Rerun</strong> in the Accessibility panel to scan the current story.
      </Note>
    </Page>
}`,...Z.parameters?.docs?.source},description:{story:`§7 — Automated testing. axe in every VRT spec (#147) + the addon-a11y panel
(#148), pinned to the WCAG 2.1 A/AA tag set. The CI gate is blocking (#346).`,...Z.parameters?.docs?.description}}},Q=[`Overview`,`FocusVisibility`,`AriaConventions`,`Contrast`,`Keyboard`,`ScreenReader`,`AutomatedTesting`]})))()}$();export{q as AriaConventions,Z as AutomatedTesting,J as Contrast,K as FocusVisibility,Y as Keyboard,G as Overview,X as ScreenReader,Q as __namedExportsOrder,V as default};