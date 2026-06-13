import{j as e,r as P}from"./iframe-Cv1OVq5I.js";import{B as n}from"./Button-43TN9Vu4.js";import{C as w}from"./Callout-mzFMzA9Q.js";import{C as D}from"./Checkbox-jXUgFyxr.js";import{D as F}from"./Dialog-DKXH4_0o.js";import{F as E}from"./Field-Tsgm5OFi.js";import{I as k}from"./Input-DVkDrirz.js";import{R as q,a as v}from"./Radio-CuyeBLaf.js";import{S,a as T,b as A,c as N,d as f}from"./Select-DUDxugXZ.js";import{S as L}from"./Switch-DlLYw_1l.js";import{T as B}from"./Text-BU4zXyhM.js";import{P as l,L as d,S as o,N as r,C,a as O}from"./docs-ui-D72zdHie.js";import{S as M}from"./search-fLhnsa6i.js";import"./preload-helper-GzgV2xKs.js";import"./index-CGxTU4C-.js";import"./index-CSq57VVS.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               */import"./Spinner-CLqKGrcz.js";/* empty css                *//* empty css                */import"./circle-alert-B5oxKBcP.js";import"./createLucideIcon-BQQgsdM6.js";import"./triangle-alert-BIpdGPZJ.js";import"./info-C5HMRp7x.js";import"./x-D9Zdhwkn.js";import"./index-C1n33YD6.js";import"./index-CwH9Dm-j.js";import"./index-rrQAzeKF.js";import"./index-CgOJ6ynq.js";import"./index-CwCT-Inl.js";import"./index-CMY0ctuj.js";import"./field-gQ_Pcrrl.js";/* empty css                 */import"./index-B1NvbOLb.js";import"./index-tNN9SEyr.js";import"./index-ChBLPQQW.js";import"./Combination-CmqkjSIV.js";/* empty css               */import"./Separator-BwNMTNVK.js";/* empty css                  */import"./Tooltip-COwwxpzz.js";import"./index-CA51GdCL.js";import"./index-BExiQqu-.js";/* empty css                *//* empty css              *//* empty css              */import"./index-CUyUVJO2.js";import"./index-Cvtf5nZC.js";/* empty css              *//* empty css               */import"./chevron-up-Bpl2rH0b.js";import"./check-CG83UtGP.js";/* empty css               *//* empty css             */const Ge={title:"Patterns/Accessibility",parameters:{layout:"fullscreen"}},c=({children:a})=>e.jsx("div",{className:"max-w-3xl mx-auto px-8 py-12",children:a}),t=({children:a})=>e.jsx("code",{className:"rounded bg-surface px-1 py-0.5 font-mono text-[0.85em] text-foreground",children:a}),i=({label:a,children:s})=>e.jsxs("div",{className:"border border-border rounded-lg p-4 mb-4",children:[e.jsx("h3",{className:"text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3",children:a}),e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:s})]}),j=({headers:a,rows:s})=>e.jsx("div",{className:"overflow-x-auto mb-4",children:e.jsxs("table",{className:"w-full text-sm border-collapse",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-b border-border",children:a.map(h=>e.jsx("th",{className:"text-left font-semibold text-foreground py-2 pr-4 align-top",children:h},h))})}),e.jsx("tbody",{children:s.map(h=>e.jsx("tr",{className:"border-b border-border last:border-b-0 align-top",children:h.cells.map((R,I)=>e.jsx("td",{className:"py-2 pr-4 text-foreground-muted",children:R},a[I]))},h.key))})]})}),u={name:"Overview",render:()=>e.jsxs(c,{children:[e.jsx(l,{children:"Accessibility"}),e.jsxs(d,{children:["Schatten targets ",e.jsx("strong",{children:"WCAG 2.1 AA"}),". Every lv1 component ships a stable accessibility surface — an explicit role, a queryable accessible name, keyboard operability, and ",e.jsx(t,{children:"aria-*"})," state wiring — so that consuming apps can select components by"," ",e.jsxs(t,{children:["getByRole(role, ","{ name }",")"]})," instead of by class names or DOM structure. This page is the cross-cutting reference for that contract; the per-area detail lives in the sibling sections."]}),e.jsx(o,{children:"Principles at a glance"}),e.jsxs(r,{children:["Each principle below maps to its own section in this page (see the sidebar under"," ",e.jsx(t,{children:"Patterns/Accessibility"}),")."]}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Focus visibility"})," — every interactive element renders a visible focus ring on keyboard focus."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"ARIA conventions"})," — error / busy / description state is expressed through standard attributes, often wired automatically by"," ",e.jsx(t,{children:"Field"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Color contrast"})," — text and UI affordances meet the AA contrast lines in both Modes."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Keyboard"})," — all interactive elements are reachable and operable from the keyboard; compound widgets follow their ARIA pattern."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Screen reader"})," — decorative icons are hidden; meaning is carried by text and role, never by color alone."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Automated testing"})," — axe runs in every VRT spec and in the Storybook a11y panel."]})]}),e.jsx(o,{children:"Contributor contracts"}),e.jsxs(r,{children:["The authoritative, implementer-facing sources of truth are"," ",e.jsx(t,{children:".claude/rules/component-architecture.md §8"})," (the a11y contract every lv1 must satisfy), ",e.jsx(t,{children:".claude/rules/field-context-guideline.md"})," (how form state and descriptions are wired), and ",e.jsx(t,{children:".claude/rules/state-token-guideline.md"})," (the contrast-audited state tokens)."]}),e.jsx(o,{children:"Out of scope"}),e.jsxs(r,{children:["WCAG ",e.jsx("strong",{children:"AAA"})," and a dedicated high-contrast mode are future work (Phase 5). Internationalization (i18n) of component copy is also out of scope for this page."]})]})},p={name:"Focus visibility",render:()=>e.jsxs(c,{children:[e.jsx(l,{children:"Focus visibility"}),e.jsxs(d,{children:["Every interactive component renders a visible focus ring when it receives"," ",e.jsx("strong",{children:"keyboard"})," focus. The ring is keyed to ",e.jsx(t,{children:":focus-visible"}),", not"," ",e.jsx(t,{children:":focus"}),", so a plain mouse click does not flash a ring — only keyboard navigation (or other non-pointer focus) shows it."]}),e.jsx(o,{children:"Try it"}),e.jsxs(r,{children:["Press ",e.jsx(t,{children:"Tab"})," to move focus across the row below and watch the ring appear. Toggle the Storybook ",e.jsx("strong",{children:"Theme"})," toolbar between light and dark — the ring stays visible in both Modes."]}),e.jsxs(i,{label:"Tab through these",children:[e.jsx(n,{children:"Primary"}),e.jsx(n,{variant:"secondary",children:"Secondary"}),e.jsx(n,{variant:"link",children:"Link"}),e.jsx(k,{"aria-label":"Sample input",placeholder:"Input",className:"w-40"}),e.jsx(D,{label:"Checkbox"}),e.jsx(L,{label:"Switch"}),e.jsxs(S,{children:[e.jsx(T,{className:"w-40",children:e.jsx(A,{placeholder:"Select"})}),e.jsxs(N,{children:[e.jsx(f,{value:"a",children:"Option A"}),e.jsx(f,{value:"b",children:"Option B"})]})]})]}),e.jsx(o,{children:"How it is implemented"}),e.jsxs(r,{children:["The ring is a ",e.jsx(t,{children:"box-shadow"})," authored in each component's own"," ",e.jsx(t,{children:".st-{block}:focus-visible"})," rule (not a utility baked into a CVA base class). It reads two semantic tokens: ",e.jsx(t,{children:"--color-ring"})," (ink-black in light, inverted in dark) and ",e.jsx(t,{children:"--color-ring-offset"})," (the surface gap), so the indicator re-colors automatically per Mode."]}),e.jsx(C,{children:`/* Button.css */
.st-btn:focus-visible {
  box-shadow:
    0 0 0 2px var(--color-ring-offset),
    0 0 0 4px var(--color-ring);
}`}),e.jsx(r,{children:"Never strip this ring to fit a layout. If it clashes with a saturated surface, override the ring color for contrast — do not remove the indicator."})]})},m={name:"ARIA conventions",render:()=>e.jsxs(c,{children:[e.jsx(l,{children:"ARIA conventions"}),e.jsxs(d,{children:["State is expressed through standard ARIA / HTML attributes, not bespoke classes. The same attribute that drives the visual also announces the state to assistive tech, so the two can never drift apart. Inside a ",e.jsx(t,{children:"Field"}),", most of this wiring is automatic."]}),e.jsx(o,{children:"Required attributes by component"}),e.jsx(j,{headers:["Component","Attribute","Source"],rows:[{key:"form-invalid",cells:["Input / Textarea / Select / Checkbox / Switch / Radio",e.jsx(t,{children:"aria-invalid"},"c"),"Set from isError (or inherited from Field)."]},{key:"form-describedby",cells:["Form inputs",e.jsx(t,{children:"aria-describedby"},"c"),"Field links its description / error ids automatically."]},{key:"btn-label",cells:["Button (icon-only)",e.jsx(t,{children:"aria-label"},"c"),"Author-supplied — a button with no text needs a name."]},{key:"btn-busy",cells:["Button (loading)",e.jsx(t,{children:"aria-busy"},"c"),"Set automatically while isLoading is true."]},{key:"dialog",cells:["Dialog",e.jsxs("span",{children:[e.jsx(t,{children:'role="dialog"'})," · ",e.jsx(t,{children:"aria-modal"})," ·"," ",e.jsx(t,{children:"aria-labelledby"})," · ",e.jsx(t,{children:"aria-describedby"})]},"c"),"Provided by Radix (title → labelledby, description → describedby)."]},{key:"tooltip",cells:["Tooltip",e.jsx(t,{children:"aria-describedby"},"c"),"Radix links the trigger to the tooltip content."]}]}),e.jsx(o,{children:"The one gap: required"}),e.jsxs(w,{variant:"warning",title:"Field does not propagate aria-required",children:[e.jsx(t,{children:"Field"})," renders the visual required marker (",e.jsx(t,{children:"*"}),") next to the label, but it does ",e.jsx("strong",{children:"not"})," set ",e.jsx(t,{children:"aria-required"})," on the input. Set"," ",e.jsx(t,{children:"required"})," on the input element yourself — the native attribute implies"," ",e.jsx(t,{children:"aria-required"})," for assistive tech. This is a known, deliberate gap (see component-architecture §8); when Field gains propagation, this note goes away."]}),e.jsx(o,{children:"Live wiring"}),e.jsxs(r,{children:["Inspect the rendered DOM: the invalid input carries"," ",e.jsx(t,{children:'aria-invalid="true"'})," and an ",e.jsx(t,{children:"aria-describedby"})," pointing at the error text; the icon-only button exposes its name via ",e.jsx(t,{children:"aria-label"}),"; the loading button sets ",e.jsx(t,{children:"aria-busy"}),"."]}),e.jsx(i,{label:"aria-invalid + aria-describedby (via Field)",children:e.jsx(E,{label:"Email",error:"Enter a valid email address.",className:"w-72",children:e.jsx(k,{type:"email",defaultValue:"not-an-email"})})}),e.jsxs(i,{label:"aria-label (icon-only Button)",children:[e.jsx(n,{icon:M,"aria-label":"Search"}),e.jsx(B,{color:"muted",size:"sm",children:"getByRole('button', { name: 'Search' }) resolves this."})]}),e.jsx(i,{label:"aria-busy (loading Button)",children:e.jsx(n,{isLoading:!0,children:"Saving"})})]})},g={name:"Contrast",render:()=>e.jsxs(c,{children:[e.jsx(l,{children:"Color contrast"}),e.jsx(d,{children:"Color is never the only signal, and where it carries meaning it meets the WCAG AA contrast lines in both Modes."}),e.jsx(o,{children:"The lines"}),e.jsx(j,{headers:["Surface","Minimum ratio","Applies to"],rows:[{key:"text",cells:["Body text","4.5 : 1","Normal-size foreground text on its background."]},{key:"large",cells:["Large text","3 : 1","18pt+ (or 14pt bold) — headings and lead text."]},{key:"ui",cells:["UI components","3 : 1","Borders, focus rings, and other non-text affordances."]}]}),e.jsx(o,{children:"State tokens"}),e.jsxs(r,{children:["The semantic state tokens (",e.jsx(t,{children:"error"})," / ",e.jsx(t,{children:"success"})," / ",e.jsx(t,{children:"warning"})," ","/ ",e.jsx(t,{children:"info"}),") are ",e.jsx("em",{children:"designed"})," to clear AA against their paired surfaces in light and dark. A backlog of borderline cases is being worked off (tracked in issue #344), so treat the audit — not this prose — as ground truth. The full, mode-toggle-able swatch matrices live in ",e.jsx(t,{children:"Tokens/Color"}),' under "Filled / Subtle / Disabled vs ReadOnly Treatments (a11y audit)".']}),e.jsx(O,{children:"Worked example — foreground tiers on a surface"}),e.jsxs(r,{children:[e.jsx(t,{children:"text-foreground"})," clears the 4.5 : 1 body-text line comfortably in both Modes."," ",e.jsx(t,{children:"text-foreground-muted"})," is intentionally lower-contrast for secondary text — at small sizes it lands in the borderline band (< 4.5 : 1) that #344 is tightening, so reach for it on larger or non-essential text and confirm exact ratios against the"," ",e.jsx(t,{children:"Tokens/Color"})," audit."]}),e.jsxs("div",{className:"rounded-lg border border-border bg-surface p-6 flex flex-col gap-1",children:[e.jsxs("p",{className:"text-foreground",children:[e.jsx(t,{children:"text-foreground"})," on ",e.jsx(t,{children:"bg-surface"})," — primary body text, meets AA."]}),e.jsxs("p",{className:"text-foreground-muted",children:[e.jsx(t,{children:"text-foreground-muted"})," on ",e.jsx(t,{children:"bg-surface"})," — secondary text, borderline at small sizes (#344)."]})]})]})};function K(){const[a,s]=P.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open dialog"}),e.jsx(F,{isOpen:a,onOpenChange:s,title:"Keyboard navigation",description:"Tab cycles focus within the dialog; Esc closes it.",actionButton:{label:"Confirm",onClick:()=>s(!1)},cancelButton:{label:"Cancel"},children:e.jsx(B,{children:"Focus is trapped here while the dialog is open. Press Esc to close."})})]})}const b={name:"Keyboard interaction",render:()=>e.jsxs(c,{children:[e.jsx(l,{children:"Keyboard interaction"}),e.jsxs(d,{children:["Every interactive element is reachable with ",e.jsx(t,{children:"Tab"})," / ",e.jsx(t,{children:"Shift+Tab"})," and operable from the keyboard. Compound widgets follow their established ARIA keyboard pattern — implemented by Radix, so the contract on our side is simply"," ",e.jsx("strong",{children:"not to break it"})," (no swallowing ",e.jsx(t,{children:"onKeyDown"}),", no stealing focus)."]}),e.jsx(o,{children:"Key map"}),e.jsx(j,{headers:["Widget","Keys"],rows:[{key:"all",cells:["All interactive elements",e.jsx(t,{children:"Tab"},"c")]},{key:"dialog",cells:["Dialog",e.jsxs("span",{children:[e.jsx(t,{children:"Esc"})," closes · ",e.jsx(t,{children:"Tab"})," cycles focus within (trap)"]},"c")]},{key:"tooltip",cells:["Tooltip / Popover",e.jsx(t,{children:"Esc"},"c")]},{key:"select",cells:["Select / Menu",e.jsxs("span",{children:[e.jsx(t,{children:"↑"})," ",e.jsx(t,{children:"↓"})," navigate · ",e.jsx(t,{children:"Enter"})," confirm"]},"c")]},{key:"radio",cells:["Radio group",e.jsxs("span",{children:[e.jsx(t,{children:"←"})," ",e.jsx(t,{children:"→"})," / ",e.jsx(t,{children:"↑"})," ",e.jsx(t,{children:"↓"})," move selection"]},"c")]}]}),e.jsx(o,{children:"Try it"}),e.jsxs(r,{children:["Operate each widget below without a mouse: open the dialog and press ",e.jsx(t,{children:"Esc"}),"; arrow through the select and the radio group."]}),e.jsx(i,{label:"Dialog — Esc to close, Tab trap",children:e.jsx(K,{})}),e.jsx(i,{label:"Select — arrow keys + Enter",children:e.jsxs(S,{children:[e.jsx(T,{className:"w-48",children:e.jsx(A,{placeholder:"Pick a fruit"})}),e.jsxs(N,{children:[e.jsx(f,{value:"apple",children:"Apple"}),e.jsx(f,{value:"banana",children:"Banana"}),e.jsx(f,{value:"cherry",children:"Cherry"})]})]})}),e.jsx(i,{label:"Radio group — arrow keys",children:e.jsxs(q,{defaultValue:"a",className:"flex-row gap-4",children:[e.jsx(v,{value:"a",label:"Option A"}),e.jsx(v,{value:"b",label:"Option B"}),e.jsx(v,{value:"c",label:"Option C"})]})})]})},x={name:"Screen reader support",render:()=>e.jsxs(c,{children:[e.jsx(l,{children:"Screen reader support"}),e.jsx(d,{children:"What a sighted user reads from layout and color, a screen-reader user must get from the accessibility tree. Two rules carry most of the weight: hide decorations, and never let color be the only carrier of meaning."}),e.jsx(o,{children:"Decorative icons are hidden"}),e.jsxs(r,{children:["Every purely-decorative icon (the icon inside a Button, Badge, Callout, the Checkbox mark, the Switch knob, the Spinner) carries ",e.jsx(t,{children:'aria-hidden="true"'}),", so it is not announced. Do not add a meaningless ",e.jsx(t,{children:"aria-label"})," to a decorative icon — that just adds noise. An icon is only named when it is itself the control (e.g. an icon-only Button, or Field's info trigger with"," ",e.jsx(t,{children:'aria-label="More information"'}),")."]}),e.jsx(o,{children:"Meaning is not color alone"}),e.jsxs(r,{children:["State surfaces pair a color shift with a non-color signal: a labeled icon and visible text for sighted users, and a role + accessible name for assistive tech. In the callout below the variant icon is ",e.jsx(t,{children:"aria-hidden"})," — the meaning is carried by the title and body text, so it survives even if the color shift is not perceived."]}),e.jsx(w,{variant:"success",title:"Saved",className:"mb-4",children:"Your changes were saved. The meaning is in this text, not in the green tint."}),e.jsx(o,{children:"Loading announces politely"}),e.jsxs(r,{children:["Asynchronous progress uses ",e.jsx(t,{children:"aria-busy"})," on the control plus an"," ",e.jsx(t,{children:'aria-live="polite"'})," region so the change is announced without interrupting. The Button below sets ",e.jsx(t,{children:"aria-busy"})," while loading and hides its spinner from the a11y tree."]}),e.jsx(i,{label:"Loading",children:e.jsx(n,{isLoading:!0,children:"Submitting"})})]})},y={name:"Automated testing",render:()=>e.jsxs(c,{children:[e.jsx(l,{children:"Automated testing"}),e.jsx(d,{children:'The a11y contract is enforced by two complementary axe surfaces — one in CI, one at dev time — pinned to the same rule set so "green in the panel" maps to "green in CI".'}),e.jsx(o,{children:"axe in every VRT spec"}),e.jsxs(r,{children:["Each lv1 ",e.jsx(t,{children:"*.vrt.spec.ts"})," pairs every screenshot with an"," ",e.jsx(t,{children:"@axe-core/playwright"})," scan (as a separate test, so a visual failure never masks an a11y failure). Always pin the WCAG tag set, or axe also runs best-practice rules that flag the Storybook iframe itself on every story."]}),e.jsx(C,{children:`const results = await new AxeBuilder({ page })
  .include('#storybook-root')
  .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  .analyze()

expect(results.violations).toEqual([])`}),e.jsx(o,{children:"The addon-a11y panel"}),e.jsxs(r,{children:["Storybook's ",e.jsx(t,{children:"addon-a11y"})," runs the same axe surface against the rendered story in the ",e.jsx("strong",{children:"Accessibility"})," panel — the dev-time companion to the CI assertion. Because it scans after the theme decorator applies ",e.jsx(t,{children:".dark"})," /"," ",e.jsx(t,{children:"data-theme"}),", toggling the Theme toolbar surfaces dark-mode and seasonal contrast issues for free."]}),e.jsx(o,{children:"Run it"}),e.jsx(C,{children:`pnpm test:a11y    # playwright test --grep a11y          → a11y only
pnpm test:vrt     # playwright test --grep-invert a11y    → screenshots only`}),e.jsx(o,{children:"Status: observe-only (Phase 1)"}),e.jsxs(r,{children:["The CI a11y job currently ",e.jsx("strong",{children:"observes"})," rather than blocks (it surfaces violations in the job summary while a backlog of pre-existing issues is worked off), and the addon's ",e.jsx(t,{children:"test"})," flag is ",e.jsx(t,{children:"todo"}),". Promotion to a blocking gate is tracked in issue #346."]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"§1 — Goal level. Schatten targets WCAG 2.1 AA and ships a stable a11y\nsurface (role + accessible name + keyboard + `aria-*`) on every lv1.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"§2 — Focus visibility. The ring is a `box-shadow` authored per component in\n`.st-{block}:focus-visible`, driven by `--color-ring` / `--color-ring-offset`.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      <RefTable headers={['Component', 'Attribute', 'Source']} rows={[{
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
}`,...m.parameters?.docs?.source},description:{story:"§3 — ARIA conventions. State surfaces through standard attributes; `Field`\nwires most of them. Note the deliberate `aria-required` gap.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Contrast',
  render: () => <Page>
      <PageTitle>Color contrast</PageTitle>
      <Lead>
        Color is never the only signal, and where it carries meaning it meets the WCAG AA contrast
        lines in both Modes.
      </Lead>

      <SectionTitle>The lines</SectionTitle>
      <RefTable headers={['Surface', 'Minimum ratio', 'Applies to']} rows={[{
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
}`,...g.parameters?.docs?.source},description:{story:`§4 — Color contrast. The AA lines, with a pointer to the audited swatch
matrices in Tokens/Color and an honest note about the #344 backlog.`,...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      <RefTable headers={['Widget', 'Keys']} rows={[{
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
}`,...b.parameters?.docs?.source},description:{story:`§5 — Keyboard. Reachability + per-widget key maps. Compound widgets delegate
to Radix; the contract is "don't break it".`,...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`§6 — Screen reader. Decorative icons are hidden; meaning rides on text + role,
never on color alone. Loading uses aria-busy + a polite live region.`,...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`§7 — Automated testing. axe in every VRT spec (#147) + the addon-a11y panel
(#148), pinned to the WCAG 2.1 A/AA tag set. Phase 1 is observe-only (#346).`,...y.parameters?.docs?.description}}};const ze=["Overview","FocusVisibility","AriaConventions","Contrast","Keyboard","ScreenReader","AutomatedTesting"];export{m as AriaConventions,y as AutomatedTesting,g as Contrast,p as FocusVisibility,b as Keyboard,u as Overview,x as ScreenReader,ze as __namedExportsOrder,Ge as default};
