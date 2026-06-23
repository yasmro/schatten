import{j as e,r as B}from"./iframe-Blf4S-CB.js";import{B as s}from"./Button-2rCLSoJ2.js";import{C as j}from"./Callout-CqBC6i1_.js";import{C as I}from"./Checkbox-DZCkKGRM.js";import{D as R}from"./Dialog-CONnLCSN.js";import{F as P}from"./Field-Dv6pvtkQ.js";import{I as w}from"./Input-CS7Th32N.js";import{R as D,a as v}from"./Radio-B3R4M6qI.js";import{S as k,a as T,b as S,c as A,d as x}from"./Select-hMFIws4l.js";import{S as E}from"./Switch-DtnFPV11.js";import{T as N}from"./Text-9NDq29HR.js";import{P as n,L as l,S as o,D as f,N as r,C,a as F}from"./docs-ui-BnZzLSdZ.js";import{S as L}from"./search-DNg_2xHh.js";import"./preload-helper-CrztxVc4.js";import"./index-K8-FergF.js";import"./index-BO3z8VAD.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               */import"./Spinner-CQP9G7Cn.js";/* empty css                *//* empty css                */import"./circle-alert-C7r8cC56.js";import"./createLucideIcon-DPjfoi-7.js";import"./triangle-alert-BW391od6.js";import"./info-BZvRP-S5.js";import"./x-ZUre-Kog.js";import"./index-B5AhNZVw.js";import"./index-ifTcBi3s.js";import"./index-dTOnjtbw.js";import"./index-D2fe_lED.js";import"./index-DX8fFpzW.js";import"./index-Cn7svlai.js";import"./index-CTJm15_v.js";import"./index-BufaCIOD.js";import"./field-CFbQZuWO.js";/* empty css                 */import"./index-DE0M0AqL.js";import"./index-C4nGwnhK.js";import"./index-CjB6w5fa.js";import"./index-BDreFFMx.js";import"./index-B0gdsfpY.js";import"./Combination-Ca9DJlB6.js";/* empty css               */import"./Separator-BqfP9gjj.js";/* empty css                  */import"./Tooltip-CdelukC3.js";import"./index-DmcLbytt.js";import"./floating-ui.react-dom-B0z-8zt2.js";import"./index-DQzbgkTb.js";/* empty css                *//* empty css              *//* empty css              */import"./index-DABu7jLM.js";import"./index-DW62UX53.js";/* empty css              */import"./index-C5tILwWE.js";/* empty css               */import"./chevron-up-B-7CL2gR.js";import"./check-CJ5Y-tsd.js";/* empty css               *//* empty css             */const Ue={title:"Patterns/Accessibility",parameters:{layout:"fullscreen"}},d=({children:i})=>e.jsx("div",{className:"max-w-3xl mx-auto px-8 py-12",children:i}),t=({children:i})=>e.jsx("code",{className:"rounded bg-surface px-1 py-0.5 font-mono text-[0.85em] text-foreground",children:i}),a=({label:i,children:c})=>e.jsxs("div",{className:"border border-border rounded-lg p-4 mb-4",children:[e.jsx("h3",{className:"text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3",children:i}),e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:c})]}),h={name:"Overview",render:()=>e.jsxs(d,{children:[e.jsx(n,{children:"Accessibility"}),e.jsxs(l,{children:["Schatten targets ",e.jsx("strong",{children:"WCAG 2.1 AA"}),". Every lv1 component ships a stable accessibility surface — an explicit role, a queryable accessible name, keyboard operability, and ",e.jsx(t,{children:"aria-*"})," state wiring — so that consuming apps can select components by"," ",e.jsxs(t,{children:["getByRole(role, ","{ name }",")"]})," instead of by class names or DOM structure. This page is the cross-cutting reference for that contract; the per-area detail lives in the sibling sections."]}),e.jsx(o,{children:"Principles at a glance"}),e.jsxs(r,{children:["Each principle below maps to its own section in this page (see the sidebar under"," ",e.jsx(t,{children:"Patterns/Accessibility"}),")."]}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Focus visibility"})," — every interactive element renders a visible focus ring on keyboard focus."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"ARIA conventions"})," — error / busy / description state is expressed through standard attributes, often wired automatically by"," ",e.jsx(t,{children:"Field"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Color contrast"})," — text and UI affordances meet the AA contrast lines in both Modes."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Keyboard"})," — all interactive elements are reachable and operable from the keyboard; compound widgets follow their ARIA pattern."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Screen reader"})," — decorative icons are hidden; meaning is carried by text and role, never by color alone."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Automated testing"})," — axe runs in every VRT spec and in the Storybook a11y panel."]})]}),e.jsx(o,{children:"Contributor contracts"}),e.jsxs(r,{children:["The authoritative, implementer-facing sources of truth are"," ",e.jsx(t,{children:".claude/rules/component-architecture.md §8"})," (the a11y contract every lv1 must satisfy), ",e.jsx(t,{children:".claude/rules/field-context-guideline.md"})," (how form state and descriptions are wired), and ",e.jsx(t,{children:".claude/rules/state-token-guideline.md"})," (the contrast-audited state tokens)."]}),e.jsx(o,{children:"Out of scope"}),e.jsxs(r,{children:["WCAG ",e.jsx("strong",{children:"AAA"})," and a dedicated high-contrast mode are future work (Phase 5). Internationalization (i18n) of component copy is also out of scope for this page."]})]})},u={name:"Focus visibility",render:()=>e.jsxs(d,{children:[e.jsx(n,{children:"Focus visibility"}),e.jsxs(l,{children:["Every interactive component renders a visible focus ring when it receives"," ",e.jsx("strong",{children:"keyboard"})," focus. The ring is keyed to ",e.jsx(t,{children:":focus-visible"}),", not"," ",e.jsx(t,{children:":focus"}),", so a plain mouse click does not flash a ring — only keyboard navigation (or other non-pointer focus) shows it."]}),e.jsx(o,{children:"Try it"}),e.jsxs(r,{children:["Press ",e.jsx(t,{children:"Tab"})," to move focus across the row below and watch the ring appear. Toggle the Storybook ",e.jsx("strong",{children:"Theme"})," toolbar between light and dark — the ring stays visible in both Modes."]}),e.jsxs(a,{label:"Tab through these",children:[e.jsx(s,{children:"Primary"}),e.jsx(s,{variant:"secondary",children:"Secondary"}),e.jsx(s,{variant:"link",children:"Link"}),e.jsx(w,{"aria-label":"Sample input",placeholder:"Input",className:"w-40"}),e.jsx(I,{label:"Checkbox"}),e.jsx(E,{label:"Switch"}),e.jsxs(k,{children:[e.jsx(T,{className:"w-40",children:e.jsx(S,{placeholder:"Select"})}),e.jsxs(A,{children:[e.jsx(x,{value:"a",children:"Option A"}),e.jsx(x,{value:"b",children:"Option B"})]})]})]}),e.jsx(o,{children:"How it is implemented"}),e.jsxs(r,{children:["The ring is a ",e.jsx(t,{children:"box-shadow"})," authored in each component's own"," ",e.jsx(t,{children:".st-{block}:focus-visible"})," rule (not a utility baked into a CVA base class). It reads two semantic tokens: ",e.jsx(t,{children:"--color-ring"})," (ink-black in light, inverted in dark) and ",e.jsx(t,{children:"--color-ring-offset"})," (the surface gap), so the indicator re-colors automatically per Mode."]}),e.jsx(C,{children:`/* Button.css */
.st-btn:focus-visible {
  box-shadow:
    0 0 0 2px var(--color-ring-offset),
    0 0 0 4px var(--color-ring);
}`}),e.jsx(r,{children:"Never strip this ring to fit a layout. If it clashes with a saturated surface, override the ring color for contrast — do not remove the indicator."})]})},p={name:"ARIA conventions",render:()=>e.jsxs(d,{children:[e.jsx(n,{children:"ARIA conventions"}),e.jsxs(l,{children:["State is expressed through standard ARIA / HTML attributes, not bespoke classes. The same attribute that drives the visual also announces the state to assistive tech, so the two can never drift apart. Inside a ",e.jsx(t,{children:"Field"}),", most of this wiring is automatic."]}),e.jsx(o,{children:"Required attributes by component"}),e.jsx(f,{headers:["Component","Attribute","Source"],rows:[{key:"form-invalid",cells:["Input / Textarea / Select / Checkbox / Switch / Radio",e.jsx(t,{children:"aria-invalid"},"c"),"Set from isError (or inherited from Field)."]},{key:"form-describedby",cells:["Form inputs",e.jsx(t,{children:"aria-describedby"},"c"),"Field links its description / error ids automatically."]},{key:"btn-label",cells:["Button (icon-only)",e.jsx(t,{children:"aria-label"},"c"),"Author-supplied — a button with no text needs a name."]},{key:"btn-busy",cells:["Button (loading)",e.jsx(t,{children:"aria-busy"},"c"),"Set automatically while isLoading is true."]},{key:"dialog",cells:["Dialog",e.jsxs("span",{children:[e.jsx(t,{children:'role="dialog"'})," · ",e.jsx(t,{children:"aria-modal"})," ·"," ",e.jsx(t,{children:"aria-labelledby"})," · ",e.jsx(t,{children:"aria-describedby"})]},"c"),"Provided by Radix (title → labelledby, description → describedby)."]},{key:"tooltip",cells:["Tooltip",e.jsx(t,{children:"aria-describedby"},"c"),"Radix links the trigger to the tooltip content."]}]}),e.jsx(o,{children:"The one gap: required"}),e.jsxs(j,{variant:"warning",title:"Field does not propagate aria-required",children:[e.jsx(t,{children:"Field"})," renders the visual required marker (",e.jsx(t,{children:"*"}),") next to the label, but it does ",e.jsx("strong",{children:"not"})," set ",e.jsx(t,{children:"aria-required"})," on the input. Set"," ",e.jsx(t,{children:"required"})," on the input element yourself — the native attribute implies"," ",e.jsx(t,{children:"aria-required"})," for assistive tech. This is a known, deliberate gap (see component-architecture §8); when Field gains propagation, this note goes away."]}),e.jsx(o,{children:"Live wiring"}),e.jsxs(r,{children:["Inspect the rendered DOM: the invalid input carries"," ",e.jsx(t,{children:'aria-invalid="true"'})," and an ",e.jsx(t,{children:"aria-describedby"})," pointing at the error text; the icon-only button exposes its name via ",e.jsx(t,{children:"aria-label"}),"; the loading button sets ",e.jsx(t,{children:"aria-busy"}),"."]}),e.jsx(a,{label:"aria-invalid + aria-describedby (via Field)",children:e.jsx(P,{label:"Email",error:"Enter a valid email address.",className:"w-72",children:e.jsx(w,{type:"email",defaultValue:"not-an-email"})})}),e.jsxs(a,{label:"aria-label (icon-only Button)",children:[e.jsx(s,{icon:L,"aria-label":"Search"}),e.jsx(N,{color:"muted",size:"sm",children:"getByRole('button', { name: 'Search' }) resolves this."})]}),e.jsx(a,{label:"aria-busy (loading Button)",children:e.jsx(s,{isLoading:!0,children:"Saving"})})]})},m={name:"Contrast",render:()=>e.jsxs(d,{children:[e.jsx(n,{children:"Color contrast"}),e.jsx(l,{children:"Color is never the only signal, and where it carries meaning it meets the WCAG AA contrast lines in both Modes."}),e.jsx(o,{children:"The lines"}),e.jsx(f,{headers:["Surface","Minimum ratio","Applies to"],rows:[{key:"text",cells:["Body text","4.5 : 1","Normal-size foreground text on its background."]},{key:"large",cells:["Large text","3 : 1","18pt+ (or 14pt bold) — headings and lead text."]},{key:"ui",cells:["UI components","3 : 1","Borders, focus rings, and other non-text affordances."]}]}),e.jsx(o,{children:"State tokens"}),e.jsxs(r,{children:["The semantic state tokens (",e.jsx(t,{children:"error"})," / ",e.jsx(t,{children:"success"})," / ",e.jsx(t,{children:"warning"})," ","/ ",e.jsx(t,{children:"info"}),") clear AA against their paired surfaces in light and dark. Non-solid coloured text routes through the ",e.jsx(t,{children:"--color-{state}-emphasis"})," rung (the 4→5-token shape from #344 Phase B) so it meets the 4.5 : 1 body-text line; the saturated"," ",e.jsx("em",{children:"solid"})," fills are the one documented exception (below). The full, mode-toggle-able swatch matrices live in ",e.jsx(t,{children:"Tokens/Color"}),' under "Filled / Subtle / Disabled vs ReadOnly Treatments (a11y audit)" — treat the audit, not this prose, as ground truth.']}),e.jsx(F,{children:"Worked example — foreground tiers on a surface"}),e.jsxs(r,{children:[e.jsx(t,{children:"text-foreground"})," (primary) and ",e.jsx(t,{children:"text-foreground-muted"})," (secondary) both clear the 4.5 : 1 body-text line in both Modes — muted was raised to AA in #344 Phase A. ",e.jsx(t,{children:"text-foreground-subtle"})," is the ",e.jsx("em",{children:"tertiary"})," tier and is intentionally below 4.5 : 1 at small sizes (it clears the 3 : 1 large-text line) — reach for it only on large or incidental text, never body copy."]}),e.jsxs("div",{className:"rounded-lg border border-border bg-surface p-6 flex flex-col gap-1",children:[e.jsxs("p",{className:"text-foreground",children:[e.jsx(t,{children:"text-foreground"})," on ",e.jsx(t,{children:"bg-surface"})," — primary body text, meets AA."]}),e.jsxs("p",{className:"text-foreground-muted",children:[e.jsx(t,{children:"text-foreground-muted"})," on ",e.jsx(t,{children:"bg-surface"})," — secondary text, meets AA."]}),e.jsxs("p",{className:"text-foreground-subtle",children:[e.jsx(t,{children:"text-foreground-subtle"})," on ",e.jsx(t,{children:"bg-surface"})," — tertiary, large / incidental only."]})]}),e.jsx(o,{children:"Intentional AA exceptions"}),e.jsxs(r,{children:["Three contrast patterns are deliberately exempt from the 4.5 : 1 body-text line. These are the ",e.jsx("em",{children:"only"})," ",e.jsx(t,{children:"color-contrast"})," findings the CI a11y gate (#346) suppresses — each via a documented, story-scoped ",e.jsx(t,{children:"disableRules(['color-contrast'])"})," ","in the component's ",e.jsx(t,{children:"*.vrt.spec.ts"})," (mirrored in the story's"," ",e.jsx(t,{children:"parameters.a11y"}),"). A blanket disable is never allowed; anything outside this table must clear AA. See ",e.jsx(t,{children:".claude/rules/state-token-guideline.md"})," for the token rationale."]}),e.jsx(f,{headers:["Exception","Where it appears","Why it is AA-exempt"],rows:[{key:"solid",cells:["Solid treatments",'Button primary / destructive; Badge / Callout / Toast appearance="solid"; Dialog action button',"Light foreground on a saturated (or neutral-solid) fill cannot reach 4.5 : 1 — the white-on-vivid trilemma. Meaning is carried by an icon + a visible label (WCAG 1.4.1), not by colour."]},{key:"inverted",cells:["Inverted-on-saturated",'Button variant="inverted"; Text color="inverted" / "inverted-muted" / "inverted-subtle"',"The inverted foreground tiers sit on saturated surfaces and are incidental / large-only by design — the inverted analogue of the foreground-subtle tier."]},{key:"subtle",cells:["foreground-subtle (tertiary)",'Text color="subtle"; faint helper / placeholder-like copy',"The third foreground tier clears the 3 : 1 large-text line but is intentionally below 4.5 : 1 at small sizes. Never use it for body copy."]}]})]})};function q(){const[i,c]=B.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>c(!0),children:"Open dialog"}),e.jsx(R,{isOpen:i,onOpenChange:c,title:"Keyboard navigation",description:"Tab cycles focus within the dialog; Esc closes it.",actionButton:{label:"Confirm",onClick:()=>c(!1)},cancelButton:{label:"Cancel"},children:e.jsx(N,{children:"Focus is trapped here while the dialog is open. Press Esc to close."})})]})}const g={name:"Keyboard interaction",render:()=>e.jsxs(d,{children:[e.jsx(n,{children:"Keyboard interaction"}),e.jsxs(l,{children:["Every interactive element is reachable with ",e.jsx(t,{children:"Tab"})," / ",e.jsx(t,{children:"Shift+Tab"})," and operable from the keyboard. Compound widgets follow their established ARIA keyboard pattern — implemented by Radix, so the contract on our side is simply"," ",e.jsx("strong",{children:"not to break it"})," (no swallowing ",e.jsx(t,{children:"onKeyDown"}),", no stealing focus)."]}),e.jsx(o,{children:"Key map"}),e.jsx(f,{headers:["Widget","Keys"],rows:[{key:"all",cells:["All interactive elements",e.jsx(t,{children:"Tab"},"c")]},{key:"dialog",cells:["Dialog",e.jsxs("span",{children:[e.jsx(t,{children:"Esc"})," closes · ",e.jsx(t,{children:"Tab"})," cycles focus within (trap)"]},"c")]},{key:"tooltip",cells:["Tooltip / Popover",e.jsx(t,{children:"Esc"},"c")]},{key:"select",cells:["Select / Menu",e.jsxs("span",{children:[e.jsx(t,{children:"↑"})," ",e.jsx(t,{children:"↓"})," navigate · ",e.jsx(t,{children:"Enter"})," confirm"]},"c")]},{key:"radio",cells:["Radio group",e.jsxs("span",{children:[e.jsx(t,{children:"←"})," ",e.jsx(t,{children:"→"})," / ",e.jsx(t,{children:"↑"})," ",e.jsx(t,{children:"↓"})," move selection"]},"c")]}]}),e.jsx(o,{children:"Try it"}),e.jsxs(r,{children:["Operate each widget below without a mouse: open the dialog and press ",e.jsx(t,{children:"Esc"}),"; arrow through the select and the radio group."]}),e.jsx(a,{label:"Dialog — Esc to close, Tab trap",children:e.jsx(q,{})}),e.jsx(a,{label:"Select — arrow keys + Enter",children:e.jsxs(k,{children:[e.jsx(T,{className:"w-48",children:e.jsx(S,{placeholder:"Pick a fruit"})}),e.jsxs(A,{children:[e.jsx(x,{value:"apple",children:"Apple"}),e.jsx(x,{value:"banana",children:"Banana"}),e.jsx(x,{value:"cherry",children:"Cherry"})]})]})}),e.jsx(a,{label:"Radio group — arrow keys",children:e.jsxs(D,{defaultValue:"a",className:"flex-row gap-4",children:[e.jsx(v,{value:"a",label:"Option A"}),e.jsx(v,{value:"b",label:"Option B"}),e.jsx(v,{value:"c",label:"Option C"})]})})]})},b={name:"Screen reader support",render:()=>e.jsxs(d,{children:[e.jsx(n,{children:"Screen reader support"}),e.jsx(l,{children:"What a sighted user reads from layout and color, a screen-reader user must get from the accessibility tree. Two rules carry most of the weight: hide decorations, and never let color be the only carrier of meaning."}),e.jsx(o,{children:"Decorative icons are hidden"}),e.jsxs(r,{children:["Every purely-decorative icon (the icon inside a Button, Badge, Callout, the Checkbox mark, the Switch knob, the Spinner) carries ",e.jsx(t,{children:'aria-hidden="true"'}),", so it is not announced. Do not add a meaningless ",e.jsx(t,{children:"aria-label"})," to a decorative icon — that just adds noise. An icon is only named when it is itself the control (e.g. an icon-only Button, or Field's info trigger with"," ",e.jsx(t,{children:'aria-label="More information"'}),")."]}),e.jsx(o,{children:"Meaning is not color alone"}),e.jsxs(r,{children:["State surfaces pair a color shift with a non-color signal: a labeled icon and visible text for sighted users, and a role + accessible name for assistive tech. In the callout below the variant icon is ",e.jsx(t,{children:"aria-hidden"})," — the meaning is carried by the title and body text, so it survives even if the color shift is not perceived."]}),e.jsx(j,{variant:"success",title:"Saved",className:"mb-4",children:"Your changes were saved. The meaning is in this text, not in the green tint."}),e.jsx(o,{children:"Loading announces politely"}),e.jsxs(r,{children:["Asynchronous progress uses ",e.jsx(t,{children:"aria-busy"})," on the control plus an"," ",e.jsx(t,{children:'aria-live="polite"'})," region so the change is announced without interrupting. The Button below sets ",e.jsx(t,{children:"aria-busy"})," while loading and hides its spinner from the a11y tree."]}),e.jsx(a,{label:"Loading",children:e.jsx(s,{isLoading:!0,children:"Submitting"})})]})},y={name:"Automated testing",render:()=>e.jsxs(d,{children:[e.jsx(n,{children:"Automated testing"}),e.jsx(l,{children:'The a11y contract is enforced by two complementary axe surfaces — one in CI, one at dev time — pinned to the same rule set so "green in the panel" maps to "green in CI".'}),e.jsx(o,{children:"axe in every VRT spec"}),e.jsxs(r,{children:["Each lv1 ",e.jsx(t,{children:"*.vrt.spec.ts"})," pairs every screenshot with an"," ",e.jsx(t,{children:"@axe-core/playwright"})," scan (as a separate test, so a visual failure never masks an a11y failure). Always pin the WCAG tag set, or axe also runs best-practice rules that flag the Storybook iframe itself on every story."]}),e.jsx(C,{children:`const results = await new AxeBuilder({ page })
  .include('#storybook-root')
  .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  .analyze()

expect(results.violations).toEqual([])`}),e.jsx(o,{children:"The addon-a11y panel"}),e.jsxs(r,{children:["Storybook's ",e.jsx(t,{children:"addon-a11y"})," runs the same axe surface against the rendered story in the ",e.jsx("strong",{children:"Accessibility"})," panel — the dev-time companion to the CI assertion. Because it scans after the theme decorator applies ",e.jsx(t,{children:".dark"})," /"," ",e.jsx(t,{children:"data-theme"}),", toggling the Theme toolbar surfaces dark-mode and seasonal contrast issues for free."]}),e.jsx(o,{children:"Run it"}),e.jsx(C,{children:`pnpm test:a11y    # playwright test --grep a11y          → a11y only
pnpm test:vrt     # playwright test --grep-invert a11y    → screenshots only`}),e.jsx(o,{children:"Status: blocking gate"}),e.jsxs(r,{children:["The CI a11y job ",e.jsx("strong",{children:"blocks"})," (#346) — it propagates the Playwright exit code, so a new WCAG 2.1 A/AA violation fails the PR (the full violation list is still tee'd into the job summary). The only ",e.jsx(t,{children:"color-contrast"})," findings that remain are intentional design exceptions — solid treatments, inverted-on-saturated foreground, and the"," ",e.jsx(t,{children:"foreground-subtle"})," tertiary tier — each suppressed with a documented, story-scoped ",e.jsx(t,{children:"disableRules(['color-contrast'])"}),". The addon panel's"," ",e.jsx(t,{children:"test"})," flag is ",e.jsx(t,{children:"off"})," so its headless preview run does not race the Playwright suite; addon-a11y stays the on-demand dev companion — click"," ",e.jsx("strong",{children:"Rerun"})," in the Accessibility panel to scan the current story."]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"§1 — Goal level. Schatten targets WCAG 2.1 AA and ships a stable a11y\nsurface (role + accessible name + keyboard + `aria-*`) on every lv1.",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"§2 — Focus visibility. The ring is a `box-shadow` authored per component in\n`.st-{block}:focus-visible`, driven by `--color-ring` / `--color-ring-offset`.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"§3 — ARIA conventions. State surfaces through standard attributes; `Field`\nwires most of them. Note the deliberate `aria-required` gap.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        Three contrast patterns are deliberately exempt from the 4.5 : 1 body-text line. These are
        the <em>only</em> <Code>color-contrast</Code> findings the CI a11y gate (#346) suppresses —
        each via a documented, story-scoped <Code>disableRules([&apos;color-contrast&apos;])</Code>{' '}
        in the component&apos;s <Code>*.vrt.spec.ts</Code> (mirrored in the story&apos;s{' '}
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
    }]} />
    </Page>
}`,...m.parameters?.docs?.source},description:{story:`§4 — Color contrast. The AA lines, with a pointer to the audited swatch
matrices in Tokens/Color and an honest note about the #344 backlog.`,...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`§5 — Keyboard. Reachability + per-widget key maps. Compound widgets delegate
to Radix; the contract is "don't break it".`,...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`§6 — Screen reader. Decorative icons are hidden; meaning rides on text + role,
never on color alone. Loading uses aria-busy + a polite live region.`,...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
        the job summary). The only <Code>color-contrast</Code> findings that remain are intentional
        design exceptions — solid treatments, inverted-on-saturated foreground, and the{' '}
        <Code>foreground-subtle</Code> tertiary tier — each suppressed with a documented,
        story-scoped <Code>disableRules([&apos;color-contrast&apos;])</Code>. The addon panel&apos;s{' '}
        <Code>test</Code> flag is <Code>off</Code> so its headless preview run does not race the
        Playwright suite; addon-a11y stays the on-demand dev companion — click{' '}
        <strong>Rerun</strong> in the Accessibility panel to scan the current story.
      </Note>
    </Page>
}`,...y.parameters?.docs?.source},description:{story:`§7 — Automated testing. axe in every VRT spec (#147) + the addon-a11y panel
(#148), pinned to the WCAG 2.1 A/AA tag set. The CI gate is blocking (#346).`,...y.parameters?.docs?.description}}};const Ye=["Overview","FocusVisibility","AriaConventions","Contrast","Keyboard","ScreenReader","AutomatedTesting"];export{p as AriaConventions,y as AutomatedTesting,m as Contrast,u as FocusVisibility,g as Keyboard,h as Overview,b as ScreenReader,Ye as __namedExportsOrder,Ue as default};
