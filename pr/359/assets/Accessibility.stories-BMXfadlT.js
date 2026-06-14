import{i as e,s as t}from"./preload-helper-BwGARNBo.js";import{t as n,w as r}from"./iframe-Dc0mLLnz.js";import{A as i,t as a}from"./lucide-react-VAXaEEz3.js";import{n as o,t as s}from"./Button-BGdGuDrw.js";import{n as c,t as l}from"./Callout-DdZx91JX.js";import{n as u,t as d}from"./Checkbox-BuD7xSqC.js";import{n as f,t as p}from"./Dialog-BjJVwQBT.js";import{n as m,t as h}from"./Input-QjhTX4Ha.js";import{n as g,t as _}from"./Field-C627VQCD.js";import{n as v,r as y,t as b}from"./Radio-BTFWtyuT.js";import{c as x,i as S,l as C,n as w,s as T,t as E}from"./Select-HfpzpoTY.js";import{n as D,t as O}from"./Switch-DhuMKv2A.js";import{n as k,t as A}from"./Text-DsFE5Tgy.js";import{a as j,c as M,i as N,n as P,o as F,r as I,s as L,t as R}from"./docs-ui-Da22FkRD.js";function z(){let[e,t]=(0,B.useState)(!1);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(s,{onClick:()=>t(!0),children:`Open dialog`}),(0,V.jsx)(p,{isOpen:e,onOpenChange:t,title:`Keyboard navigation`,description:`Tab cycles focus within the dialog; Esc closes it.`,actionButton:{label:`Confirm`,onClick:()=>t(!1)},cancelButton:{label:`Cancel`},children:(0,V.jsx)(A,{children:`Focus is trapped here while the dialog is open. Press Esc to close.`})})]})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{a(),B=t(r(),1),o(),c(),u(),f(),g(),m(),y(),C(),D(),k(),M(),V=n(),H={title:`Patterns/Accessibility`,parameters:{layout:`fullscreen`}},U=({children:e})=>(0,V.jsx)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:e}),W=({children:e})=>(0,V.jsx)(`code`,{className:`rounded bg-surface px-1 py-0.5 font-mono text-[0.85em] text-foreground`,children:e}),G=({label:e,children:t})=>(0,V.jsxs)(`div`,{className:`border border-border rounded-lg p-4 mb-4`,children:[(0,V.jsx)(`h3`,{className:`text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3`,children:e}),(0,V.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:t})]}),K={name:`Overview`,render:()=>(0,V.jsxs)(U,{children:[(0,V.jsx)(j,{children:`Accessibility`}),(0,V.jsxs)(I,{children:[`Schatten targets `,(0,V.jsx)(`strong`,{children:`WCAG 2.1 AA`}),`. Every lv1 component ships a stable accessibility surface — an explicit role, a queryable accessible name, keyboard operability, and `,(0,V.jsx)(W,{children:`aria-*`}),` state wiring — so that consuming apps can select components by`,` `,(0,V.jsxs)(W,{children:[`getByRole(role, `,`{ name }`,`)`]}),` instead of by class names or DOM structure. This page is the cross-cutting reference for that contract; the per-area detail lives in the sibling sections.`]}),(0,V.jsx)(F,{children:`Principles at a glance`}),(0,V.jsxs)(N,{children:[`Each principle below maps to its own section in this page (see the sidebar under`,` `,(0,V.jsx)(W,{children:`Patterns/Accessibility`}),`).`]}),(0,V.jsxs)(`ul`,{className:`list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2`,children:[(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`strong`,{className:`text-foreground`,children:`Focus visibility`}),` — every interactive element renders a visible focus ring on keyboard focus.`]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`strong`,{className:`text-foreground`,children:`ARIA conventions`}),` — error / busy / description state is expressed through standard attributes, often wired automatically by`,` `,(0,V.jsx)(W,{children:`Field`}),`.`]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`strong`,{className:`text-foreground`,children:`Color contrast`}),` — text and UI affordances meet the AA contrast lines in both Modes.`]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`strong`,{className:`text-foreground`,children:`Keyboard`}),` — all interactive elements are reachable and operable from the keyboard; compound widgets follow their ARIA pattern.`]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`strong`,{className:`text-foreground`,children:`Screen reader`}),` — decorative icons are hidden; meaning is carried by text and role, never by color alone.`]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`strong`,{className:`text-foreground`,children:`Automated testing`}),` — axe runs in every VRT spec and in the Storybook a11y panel.`]})]}),(0,V.jsx)(F,{children:`Contributor contracts`}),(0,V.jsxs)(N,{children:[`The authoritative, implementer-facing sources of truth are`,` `,(0,V.jsx)(W,{children:`.claude/rules/component-architecture.md §8`}),` (the a11y contract every lv1 must satisfy), `,(0,V.jsx)(W,{children:`.claude/rules/field-context-guideline.md`}),` (how form state and descriptions are wired), and `,(0,V.jsx)(W,{children:`.claude/rules/state-token-guideline.md`}),` (the contrast-audited state tokens).`]}),(0,V.jsx)(F,{children:`Out of scope`}),(0,V.jsxs)(N,{children:[`WCAG `,(0,V.jsx)(`strong`,{children:`AAA`}),` and a dedicated high-contrast mode are future work (Phase 5). Internationalization (i18n) of component copy is also out of scope for this page.`]})]})},q={name:`Focus visibility`,render:()=>(0,V.jsxs)(U,{children:[(0,V.jsx)(j,{children:`Focus visibility`}),(0,V.jsxs)(I,{children:[`Every interactive component renders a visible focus ring when it receives`,` `,(0,V.jsx)(`strong`,{children:`keyboard`}),` focus. The ring is keyed to `,(0,V.jsx)(W,{children:`:focus-visible`}),`, not`,` `,(0,V.jsx)(W,{children:`:focus`}),`, so a plain mouse click does not flash a ring — only keyboard navigation (or other non-pointer focus) shows it.`]}),(0,V.jsx)(F,{children:`Try it`}),(0,V.jsxs)(N,{children:[`Press `,(0,V.jsx)(W,{children:`Tab`}),` to move focus across the row below and watch the ring appear. Toggle the Storybook `,(0,V.jsx)(`strong`,{children:`Theme`}),` toolbar between light and dark — the ring stays visible in both Modes.`]}),(0,V.jsxs)(G,{label:`Tab through these`,children:[(0,V.jsx)(s,{children:`Primary`}),(0,V.jsx)(s,{variant:`secondary`,children:`Secondary`}),(0,V.jsx)(s,{variant:`link`,children:`Link`}),(0,V.jsx)(h,{"aria-label":`Sample input`,placeholder:`Input`,className:`w-40`}),(0,V.jsx)(d,{label:`Checkbox`}),(0,V.jsx)(O,{label:`Switch`}),(0,V.jsxs)(E,{children:[(0,V.jsx)(T,{className:`w-40`,children:(0,V.jsx)(x,{placeholder:`Select`})}),(0,V.jsxs)(w,{children:[(0,V.jsx)(S,{value:`a`,children:`Option A`}),(0,V.jsx)(S,{value:`b`,children:`Option B`})]})]})]}),(0,V.jsx)(F,{children:`How it is implemented`}),(0,V.jsxs)(N,{children:[`The ring is a `,(0,V.jsx)(W,{children:`box-shadow`}),` authored in each component's own`,` `,(0,V.jsx)(W,{children:`.st-{block}:focus-visible`}),` rule (not a utility baked into a CVA base class). It reads two semantic tokens: `,(0,V.jsx)(W,{children:`--color-ring`}),` (ink-black in light, inverted in dark) and `,(0,V.jsx)(W,{children:`--color-ring-offset`}),` (the surface gap), so the indicator re-colors automatically per Mode.`]}),(0,V.jsx)(R,{children:`/* Button.css */
.st-btn:focus-visible {
  box-shadow:
    0 0 0 2px var(--color-ring-offset),
    0 0 0 4px var(--color-ring);
}`}),(0,V.jsx)(N,{children:`Never strip this ring to fit a layout. If it clashes with a saturated surface, override the ring color for contrast — do not remove the indicator.`})]})},J={name:`ARIA conventions`,render:()=>(0,V.jsxs)(U,{children:[(0,V.jsx)(j,{children:`ARIA conventions`}),(0,V.jsxs)(I,{children:[`State is expressed through standard ARIA / HTML attributes, not bespoke classes. The same attribute that drives the visual also announces the state to assistive tech, so the two can never drift apart. Inside a `,(0,V.jsx)(W,{children:`Field`}),`, most of this wiring is automatic.`]}),(0,V.jsx)(F,{children:`Required attributes by component`}),(0,V.jsx)(P,{headers:[`Component`,`Attribute`,`Source`],rows:[{key:`form-invalid`,cells:[`Input / Textarea / Select / Checkbox / Switch / Radio`,(0,V.jsx)(W,{children:`aria-invalid`},`c`),`Set from isError (or inherited from Field).`]},{key:`form-describedby`,cells:[`Form inputs`,(0,V.jsx)(W,{children:`aria-describedby`},`c`),`Field links its description / error ids automatically.`]},{key:`btn-label`,cells:[`Button (icon-only)`,(0,V.jsx)(W,{children:`aria-label`},`c`),`Author-supplied — a button with no text needs a name.`]},{key:`btn-busy`,cells:[`Button (loading)`,(0,V.jsx)(W,{children:`aria-busy`},`c`),`Set automatically while isLoading is true.`]},{key:`dialog`,cells:[`Dialog`,(0,V.jsxs)(`span`,{children:[(0,V.jsx)(W,{children:`role="dialog"`}),` · `,(0,V.jsx)(W,{children:`aria-modal`}),` ·`,` `,(0,V.jsx)(W,{children:`aria-labelledby`}),` · `,(0,V.jsx)(W,{children:`aria-describedby`})]},`c`),`Provided by Radix (title → labelledby, description → describedby).`]},{key:`tooltip`,cells:[`Tooltip`,(0,V.jsx)(W,{children:`aria-describedby`},`c`),`Radix links the trigger to the tooltip content.`]}]}),(0,V.jsx)(F,{children:`The one gap: required`}),(0,V.jsxs)(l,{variant:`warning`,title:`Field does not propagate aria-required`,children:[(0,V.jsx)(W,{children:`Field`}),` renders the visual required marker (`,(0,V.jsx)(W,{children:`*`}),`) next to the label, but it does `,(0,V.jsx)(`strong`,{children:`not`}),` set `,(0,V.jsx)(W,{children:`aria-required`}),` on the input. Set`,` `,(0,V.jsx)(W,{children:`required`}),` on the input element yourself — the native attribute implies`,` `,(0,V.jsx)(W,{children:`aria-required`}),` for assistive tech. This is a known, deliberate gap (see component-architecture §8); when Field gains propagation, this note goes away.`]}),(0,V.jsx)(F,{children:`Live wiring`}),(0,V.jsxs)(N,{children:[`Inspect the rendered DOM: the invalid input carries`,` `,(0,V.jsx)(W,{children:`aria-invalid="true"`}),` and an `,(0,V.jsx)(W,{children:`aria-describedby`}),` pointing at the error text; the icon-only button exposes its name via `,(0,V.jsx)(W,{children:`aria-label`}),`; the loading button sets `,(0,V.jsx)(W,{children:`aria-busy`}),`.`]}),(0,V.jsx)(G,{label:`aria-invalid + aria-describedby (via Field)`,children:(0,V.jsx)(_,{label:`Email`,error:`Enter a valid email address.`,className:`w-72`,children:(0,V.jsx)(h,{type:`email`,defaultValue:`not-an-email`})})}),(0,V.jsxs)(G,{label:`aria-label (icon-only Button)`,children:[(0,V.jsx)(s,{icon:i,"aria-label":`Search`}),(0,V.jsx)(A,{color:`muted`,size:`sm`,children:`getByRole('button', { name: 'Search' }) resolves this.`})]}),(0,V.jsx)(G,{label:`aria-busy (loading Button)`,children:(0,V.jsx)(s,{isLoading:!0,children:`Saving`})})]})},Y={name:`Contrast`,render:()=>(0,V.jsxs)(U,{children:[(0,V.jsx)(j,{children:`Color contrast`}),(0,V.jsx)(I,{children:`Color is never the only signal, and where it carries meaning it meets the WCAG AA contrast lines in both Modes.`}),(0,V.jsx)(F,{children:`The lines`}),(0,V.jsx)(P,{headers:[`Surface`,`Minimum ratio`,`Applies to`],rows:[{key:`text`,cells:[`Body text`,`4.5 : 1`,`Normal-size foreground text on its background.`]},{key:`large`,cells:[`Large text`,`3 : 1`,`18pt+ (or 14pt bold) — headings and lead text.`]},{key:`ui`,cells:[`UI components`,`3 : 1`,`Borders, focus rings, and other non-text affordances.`]}]}),(0,V.jsx)(F,{children:`State tokens`}),(0,V.jsxs)(N,{children:[`The semantic state tokens (`,(0,V.jsx)(W,{children:`error`}),` / `,(0,V.jsx)(W,{children:`success`}),` / `,(0,V.jsx)(W,{children:`warning`}),` `,`/ `,(0,V.jsx)(W,{children:`info`}),`) are `,(0,V.jsx)(`em`,{children:`designed`}),` to clear AA against their paired surfaces in light and dark. A backlog of borderline cases is being worked off (tracked in issue #344), so treat the audit — not this prose — as ground truth. The full, mode-toggle-able swatch matrices live in `,(0,V.jsx)(W,{children:`Tokens/Color`}),` under "Filled / Subtle / Disabled vs ReadOnly Treatments (a11y audit)".`]}),(0,V.jsx)(L,{children:`Worked example — foreground tiers on a surface`}),(0,V.jsxs)(N,{children:[(0,V.jsx)(W,{children:`text-foreground`}),` clears the 4.5 : 1 body-text line comfortably in both Modes.`,` `,(0,V.jsx)(W,{children:`text-foreground-muted`}),` is intentionally lower-contrast for secondary text — at small sizes it lands in the borderline band (< 4.5 : 1) that #344 is tightening, so reach for it on larger or non-essential text and confirm exact ratios against the`,` `,(0,V.jsx)(W,{children:`Tokens/Color`}),` audit.`]}),(0,V.jsxs)(`div`,{className:`rounded-lg border border-border bg-surface p-6 flex flex-col gap-1`,children:[(0,V.jsxs)(`p`,{className:`text-foreground`,children:[(0,V.jsx)(W,{children:`text-foreground`}),` on `,(0,V.jsx)(W,{children:`bg-surface`}),` — primary body text, meets AA.`]}),(0,V.jsxs)(`p`,{className:`text-foreground-muted`,children:[(0,V.jsx)(W,{children:`text-foreground-muted`}),` on `,(0,V.jsx)(W,{children:`bg-surface`}),` — secondary text, borderline at small sizes (#344).`]})]})]})},X={name:`Keyboard interaction`,render:()=>(0,V.jsxs)(U,{children:[(0,V.jsx)(j,{children:`Keyboard interaction`}),(0,V.jsxs)(I,{children:[`Every interactive element is reachable with `,(0,V.jsx)(W,{children:`Tab`}),` / `,(0,V.jsx)(W,{children:`Shift+Tab`}),` and operable from the keyboard. Compound widgets follow their established ARIA keyboard pattern — implemented by Radix, so the contract on our side is simply`,` `,(0,V.jsx)(`strong`,{children:`not to break it`}),` (no swallowing `,(0,V.jsx)(W,{children:`onKeyDown`}),`, no stealing focus).`]}),(0,V.jsx)(F,{children:`Key map`}),(0,V.jsx)(P,{headers:[`Widget`,`Keys`],rows:[{key:`all`,cells:[`All interactive elements`,(0,V.jsx)(W,{children:`Tab`},`c`)]},{key:`dialog`,cells:[`Dialog`,(0,V.jsxs)(`span`,{children:[(0,V.jsx)(W,{children:`Esc`}),` closes · `,(0,V.jsx)(W,{children:`Tab`}),` cycles focus within (trap)`]},`c`)]},{key:`tooltip`,cells:[`Tooltip / Popover`,(0,V.jsx)(W,{children:`Esc`},`c`)]},{key:`select`,cells:[`Select / Menu`,(0,V.jsxs)(`span`,{children:[(0,V.jsx)(W,{children:`↑`}),` `,(0,V.jsx)(W,{children:`↓`}),` navigate · `,(0,V.jsx)(W,{children:`Enter`}),` confirm`]},`c`)]},{key:`radio`,cells:[`Radio group`,(0,V.jsxs)(`span`,{children:[(0,V.jsx)(W,{children:`←`}),` `,(0,V.jsx)(W,{children:`→`}),` / `,(0,V.jsx)(W,{children:`↑`}),` `,(0,V.jsx)(W,{children:`↓`}),` move selection`]},`c`)]}]}),(0,V.jsx)(F,{children:`Try it`}),(0,V.jsxs)(N,{children:[`Operate each widget below without a mouse: open the dialog and press `,(0,V.jsx)(W,{children:`Esc`}),`; arrow through the select and the radio group.`]}),(0,V.jsx)(G,{label:`Dialog — Esc to close, Tab trap`,children:(0,V.jsx)(z,{})}),(0,V.jsx)(G,{label:`Select — arrow keys + Enter`,children:(0,V.jsxs)(E,{children:[(0,V.jsx)(T,{className:`w-48`,children:(0,V.jsx)(x,{placeholder:`Pick a fruit`})}),(0,V.jsxs)(w,{children:[(0,V.jsx)(S,{value:`apple`,children:`Apple`}),(0,V.jsx)(S,{value:`banana`,children:`Banana`}),(0,V.jsx)(S,{value:`cherry`,children:`Cherry`})]})]})}),(0,V.jsx)(G,{label:`Radio group — arrow keys`,children:(0,V.jsxs)(v,{defaultValue:`a`,className:`flex-row gap-4`,children:[(0,V.jsx)(b,{value:`a`,label:`Option A`}),(0,V.jsx)(b,{value:`b`,label:`Option B`}),(0,V.jsx)(b,{value:`c`,label:`Option C`})]})})]})},Z={name:`Screen reader support`,render:()=>(0,V.jsxs)(U,{children:[(0,V.jsx)(j,{children:`Screen reader support`}),(0,V.jsx)(I,{children:`What a sighted user reads from layout and color, a screen-reader user must get from the accessibility tree. Two rules carry most of the weight: hide decorations, and never let color be the only carrier of meaning.`}),(0,V.jsx)(F,{children:`Decorative icons are hidden`}),(0,V.jsxs)(N,{children:[`Every purely-decorative icon (the icon inside a Button, Badge, Callout, the Checkbox mark, the Switch knob, the Spinner) carries `,(0,V.jsx)(W,{children:`aria-hidden="true"`}),`, so it is not announced. Do not add a meaningless `,(0,V.jsx)(W,{children:`aria-label`}),` to a decorative icon — that just adds noise. An icon is only named when it is itself the control (e.g. an icon-only Button, or Field's info trigger with`,` `,(0,V.jsx)(W,{children:`aria-label="More information"`}),`).`]}),(0,V.jsx)(F,{children:`Meaning is not color alone`}),(0,V.jsxs)(N,{children:[`State surfaces pair a color shift with a non-color signal: a labeled icon and visible text for sighted users, and a role + accessible name for assistive tech. In the callout below the variant icon is `,(0,V.jsx)(W,{children:`aria-hidden`}),` — the meaning is carried by the title and body text, so it survives even if the color shift is not perceived.`]}),(0,V.jsx)(l,{variant:`success`,title:`Saved`,className:`mb-4`,children:`Your changes were saved. The meaning is in this text, not in the green tint.`}),(0,V.jsx)(F,{children:`Loading announces politely`}),(0,V.jsxs)(N,{children:[`Asynchronous progress uses `,(0,V.jsx)(W,{children:`aria-busy`}),` on the control plus an`,` `,(0,V.jsx)(W,{children:`aria-live="polite"`}),` region so the change is announced without interrupting. The Button below sets `,(0,V.jsx)(W,{children:`aria-busy`}),` while loading and hides its spinner from the a11y tree.`]}),(0,V.jsx)(G,{label:`Loading`,children:(0,V.jsx)(s,{isLoading:!0,children:`Submitting`})})]})},Q={name:`Automated testing`,render:()=>(0,V.jsxs)(U,{children:[(0,V.jsx)(j,{children:`Automated testing`}),(0,V.jsx)(I,{children:`The a11y contract is enforced by two complementary axe surfaces — one in CI, one at dev time — pinned to the same rule set so "green in the panel" maps to "green in CI".`}),(0,V.jsx)(F,{children:`axe in every VRT spec`}),(0,V.jsxs)(N,{children:[`Each lv1 `,(0,V.jsx)(W,{children:`*.vrt.spec.ts`}),` pairs every screenshot with an`,` `,(0,V.jsx)(W,{children:`@axe-core/playwright`}),` scan (as a separate test, so a visual failure never masks an a11y failure). Always pin the WCAG tag set, or axe also runs best-practice rules that flag the Storybook iframe itself on every story.`]}),(0,V.jsx)(R,{children:`const results = await new AxeBuilder({ page })
  .include('#storybook-root')
  .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  .analyze()

expect(results.violations).toEqual([])`}),(0,V.jsx)(F,{children:`The addon-a11y panel`}),(0,V.jsxs)(N,{children:[`Storybook's `,(0,V.jsx)(W,{children:`addon-a11y`}),` runs the same axe surface against the rendered story in the `,(0,V.jsx)(`strong`,{children:`Accessibility`}),` panel — the dev-time companion to the CI assertion. Because it scans after the theme decorator applies `,(0,V.jsx)(W,{children:`.dark`}),` /`,` `,(0,V.jsx)(W,{children:`data-theme`}),`, toggling the Theme toolbar surfaces dark-mode and seasonal contrast issues for free.`]}),(0,V.jsx)(F,{children:`Run it`}),(0,V.jsx)(R,{children:`pnpm test:a11y    # playwright test --grep a11y          → a11y only
pnpm test:vrt     # playwright test --grep-invert a11y    → screenshots only`}),(0,V.jsx)(F,{children:`Status: observe-only (Phase 1)`}),(0,V.jsxs)(N,{children:[`The CI a11y job currently `,(0,V.jsx)(`strong`,{children:`observes`}),` rather than blocks (it surfaces violations in the job summary while a backlog of pre-existing issues is worked off), and the addon's `,(0,V.jsx)(W,{children:`test`}),` flag is `,(0,V.jsx)(W,{children:`todo`}),`. Promotion to a blocking gate is tracked in issue #346.`]})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:"§1 — Goal level. Schatten targets WCAG 2.1 AA and ships a stable a11y\nsurface (role + accessible name + keyboard + `aria-*`) on every lv1.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
          <SelectTrigger className="w-40">
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
}`,...q.parameters?.docs?.source},description:{story:"§2 — Focus visibility. The ring is a `box-shadow` authored per component in\n`.st-{block}:focus-visible`, driven by `--color-ring` / `--color-ring-offset`.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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

      <SectionTitle>The one gap: required</SectionTitle>
      <Callout variant="warning" title="Field does not propagate aria-required">
        <Code>Field</Code> renders the visual required marker (<Code>*</Code>) next to the label,
        but it does <strong>not</strong> set <Code>aria-required</Code> on the input. Set{' '}
        <Code>required</Code> on the input element yourself — the native attribute implies{' '}
        <Code>aria-required</Code> for assistive tech. This is a known, deliberate gap (see
        component-architecture §8); when Field gains propagation, this note goes away.
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
}`,...J.parameters?.docs?.source},description:{story:"§3 — ARIA conventions. State surfaces through standard attributes; `Field`\nwires most of them. Note the deliberate `aria-required` gap.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Contrast',
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
        / <Code>info</Code>) are <em>designed</em> to clear AA against their paired surfaces in
        light and dark. A backlog of borderline cases is being worked off (tracked in issue #344),
        so treat the audit — not this prose — as ground truth. The full, mode-toggle-able swatch
        matrices live in <Code>Tokens/Color</Code> under &quot;Filled / Subtle / Disabled vs
        ReadOnly Treatments (a11y audit)&quot;.
      </Note>

      <SubsectionTitle>Worked example — foreground tiers on a surface</SubsectionTitle>
      <Note>
        <Code>text-foreground</Code> clears the 4.5 : 1 body-text line comfortably in both Modes.{' '}
        <Code>text-foreground-muted</Code> is intentionally lower-contrast for secondary text — at
        small sizes it lands in the borderline band (&lt; 4.5 : 1) that #344 is tightening, so reach
        for it on larger or non-essential text and confirm exact ratios against the{' '}
        <Code>Tokens/Color</Code> audit.
      </Note>
      <div className="rounded-lg border border-border bg-surface p-6 flex flex-col gap-1">
        <p className="text-foreground">
          <Code>text-foreground</Code> on <Code>bg-surface</Code> — primary body text, meets AA.
        </p>
        <p className="text-foreground-muted">
          <Code>text-foreground-muted</Code> on <Code>bg-surface</Code> — secondary text, borderline
          at small sizes (#344).
        </p>
      </div>
    </Page>
}`,...Y.parameters?.docs?.source},description:{story:`§4 — Color contrast. The AA lines, with a pointer to the audited swatch
matrices in Tokens/Color and an honest note about the #344 backlog.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
          <SelectTrigger className="w-48">
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
}`,...X.parameters?.docs?.source},description:{story:`§5 — Keyboard. Reachability + per-widget key maps. Compound widgets delegate
to Radix; the contract is "don't break it".`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`§6 — Screen reader. Decorative icons are hidden; meaning rides on text + role,
never on color alone. Loading uses aria-busy + a polite live region.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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

      <SectionTitle>Status: observe-only (Phase 1)</SectionTitle>
      <Note>
        The CI a11y job currently <strong>observes</strong> rather than blocks (it surfaces
        violations in the job summary while a backlog of pre-existing issues is worked off), and the
        addon&apos;s <Code>test</Code> flag is <Code>todo</Code>. Promotion to a blocking gate is
        tracked in issue #346.
      </Note>
    </Page>
}`,...Q.parameters?.docs?.source},description:{story:`§7 — Automated testing. axe in every VRT spec (#147) + the addon-a11y panel
(#148), pinned to the WCAG 2.1 A/AA tag set. Phase 1 is observe-only (#346).`,...Q.parameters?.docs?.description}}},$=[`Overview`,`FocusVisibility`,`AriaConventions`,`Contrast`,`Keyboard`,`ScreenReader`,`AutomatedTesting`]}))();export{J as AriaConventions,Q as AutomatedTesting,Y as Contrast,q as FocusVisibility,X as Keyboard,K as Overview,Z as ScreenReader,$ as __namedExportsOrder,H as default};