import{j as e}from"./iframe-C2DgjH1I.js";import{B as g}from"./Button-4dCnMU4m.js";import{B as c}from"./Badge-DpxMTR9-.js";import{S as C}from"./Spinner-B_vRng6k.js";import{T as j}from"./Text-Bp2ZcPhd.js";import{T as N,a as k,b as S,c as T}from"./Tooltip-BO9BzRUB.js";import{C as P}from"./triangle-alert-DEF74yqe.js";import{C as I}from"./Callout-BAhAJWRl.js";import{F as v}from"./Field-DOc7hsYK.js";import{I as p}from"./Input-Bt9xpcXF.js";import{F as M}from"./FieldSet-DlVE74dE.js";import{T as E}from"./Textarea-DpUdUjkH.js";import{S as A,a as F,b as B,c as R,d as f}from"./Select-xGYKEJ0k.js";import{C as b}from"./Checkbox-ClKySYB9.js";import{R as O,a as y}from"./Radio-BZUF8bWI.js";import{S as L}from"./Switch-j0tJqEUC.js";import"./preload-helper-vkdtEDgo.js";import"./index-5kD0dlkU.js";import"./index-CmPpilNG.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               *//* empty css              *//* empty css                *//* empty css             */import"./index-CFLd8PIS.js";import"./index-CtlPu4Ms.js";import"./index-_UFUviWD.js";import"./index-cnJK9So6.js";import"./index-D5mDawpP.js";import"./index-CZZ2PePY.js";/* empty css                */import"./createLucideIcon-w4U4Z4q5.js";/* empty css                */import"./circle-alert-4RN4kaMb.js";import"./info-Y0hugK4J.js";import"./x-Bv36-IpY.js";import"./field-CSu5bDxM.js";/* empty css              *//* empty css              *//* empty css                 *//* empty css                 */import"./index-Ckogxclu.js";import"./index-Be8gI9mU.js";import"./Combination-CCGlmH6u.js";/* empty css               */import"./chevron-up-BadVn5Fs.js";import"./check-2MCpm_7J.js";/* empty css                 *//* empty css              *//* empty css               */const He={title:"Welcome",parameters:{layout:"fullscreen"}},w=(t,o,r="docs",a="docs")=>{t.preventDefault();const n=`/${a}/${o}--${r}`,u=window.parent!==window?window.parent:window,x=new URL(u.location.href);x.searchParams.set("path",n),u.location.href=x.toString()},i=[{slug:"css-api-overview",suffix:"reference",viewMode:"story",section:"engineering",title:"Framework-agnostic CSS API",description:"Components ship a .st-* BEM class API and a prebuilt stylesheet, so they render with plain HTML — no React, no Tailwind, no build step required on the consumer side."},{slug:"theming-theme-audit",suffix:"overview",viewMode:"story",section:"engineering",title:"Mode × Special theming",description:"Two independent theme axes — light/dark Mode × an exclusive seasonal Special — compose at runtime through CSS variables. See all 16 combinations verified side by side."},{slug:"theming-seasonal-showcase",suffix:"eight-seasons",viewMode:"story",section:"engineering",title:"Seasonal showcase",description:"Eight palettes based on the 24 solar terms re-tint every solid surface at runtime — see all eight seasons worn by buttons, badges, and a full dashboard mockup."},{slug:"patterns-accessibility",suffix:"overview",viewMode:"story",section:"engineering",title:"Accessibility contract",description:"Every primitive guarantees a role, an accessible name, keyboard support, and aria-* wiring — asserted with axe-core in CI alongside the visual regression suite."},{slug:"tokens-color",suffix:"colors",viewMode:"story",section:"tokens",title:"Color",description:"Color tokens and scales."},{slug:"tokens-typography",suffix:"typography",viewMode:"story",section:"tokens",title:"Typography",description:"Font scales and text styles."},{slug:"patterns-accessibility",suffix:"overview",viewMode:"story",section:"patterns",title:"Accessibility",description:"Focus visibility, ARIA conventions, contrast, and keyboard support — the contract every primitive satisfies."},{slug:"patterns-composition-with-aschild",suffix:"button-as-link",viewMode:"story",section:"patterns",title:"Composition with asChild",description:"Rendering Button as a link, buttonVariants() on your own element, and Text polymorphism."},{slug:"patterns-form-composition",suffix:"basic-field",viewMode:"story",section:"patterns",title:"Form Composition",description:"Wiring Field and FieldSet: labels, descriptions, and error messages."},{slug:"patterns-form-states",suffix:"audit",viewMode:"story",section:"patterns",title:"Form States",description:"disabled / readOnly / error across every form control, audited side by side."},{slug:"patterns-layout",suffix:"flex-recipes",viewMode:"story",section:"patterns",title:"Layout",description:"Flex and grid recipes for arranging primitives on the page."},{slug:"patterns-testing",suffix:"overview",viewMode:"story",section:"patterns",title:"Testing",description:"data-testid pass-through and role-first queries for consumer test suites."}],l=["components-lv1-button","components-lv1-badge","components-lv1-spinner","components-lv1-text","components-lv1-tooltip","components-lv1-toast","components-lv1-callout","components-lv1-field","components-lv1-fieldset","components-lv1-input","components-lv1-textarea","components-lv1-select","components-lv1-checkbox","components-lv1-radio","components-lv1-switch"],h=t=>({href:`/${t.viewMode}/${t.slug}--${t.suffix}`,onClick:o=>w(o,t.slug,t.suffix,t.viewMode)}),s=({name:t,description:o,children:r,storyPath:a})=>e.jsxs("a",{href:`/docs/${a}--docs`,onClick:n=>w(n,a),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",onClick:n=>{n.preventDefault(),n.stopPropagation()},children:r}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-vermillion group-hover:underline",children:t}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:o})]})]}),m=({title:t,description:o,href:r,onClick:a,external:n=!1})=>e.jsxs("a",{href:r,onClick:a,...n?{target:"_blank",rel:"noopener noreferrer"}:{},className:"group block h-full border border-border rounded-xl p-5 no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsxs("p",{className:"text-sm font-semibold text-vermillion group-hover:underline",children:[t,n&&e.jsxs(e.Fragment,{children:[e.jsx("span",{"aria-hidden":!0,className:"ml-1 text-foreground-muted",children:"↗"}),e.jsx("span",{className:"sr-only",children:" (opens in a new tab)"})]})]}),e.jsx("p",{className:"text-xs text-foreground-muted mt-1.5 leading-relaxed",children:o})]}),W={"tokens-color":e.jsx("div",{className:"flex gap-1",children:["bg-solid","bg-foreground-muted","bg-vermillion","bg-destructive"].map(t=>e.jsx("div",{className:`w-8 h-8 rounded-lg ${t}`},t))}),"tokens-typography":e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("span",{className:"text-2xl font-bold text-foreground",children:"Aa"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"Hanken Grotesk"})]})},_=({link:t})=>e.jsxs("a",{...h(t),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",children:W[t.slug]}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-vermillion group-hover:underline",children:t.title}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:t.description})]})]}),H=i.filter(t=>t.section==="engineering"),U=i.filter(t=>t.section==="tokens"),D=i.filter(t=>t.section==="patterns"),d={name:"Overview",render:()=>e.jsxs("div",{className:"max-w-4xl mx-auto px-8 py-16",children:[e.jsxs("div",{className:"mb-16",children:[e.jsx("h1",{className:"text-5xl font-bold text-foreground mb-3 tracking-tight",children:"Schatten"}),e.jsxs("p",{className:"text-lg text-foreground-muted leading-relaxed",children:["A design system inspired by Japanese calligraphy — ink on paper.",e.jsx("br",{}),"Built with React, Tailwind CSS, Radix UI, and class-variance-authority."]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"What is Schatten?"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:["Schatten is a React component library built on the conventions of"," ",e.jsx("a",{href:"https://ui.shadcn.com/",target:"_blank",rel:"noopener noreferrer",className:"text-info underline",children:"shadcn/ui"})," ","(Radix UI primitives + class-variance-authority + a ",e.jsx("code",{children:"cn"})," utility), restyled around a Japanese visual language — ",e.jsx("em",{children:"sumi"})," ink, ",e.jsx("em",{children:"washi"})," paper, and a vermillion seal — with a runtime seasonal theme system based on the twenty-four solar terms (",e.jsx("span",{className:"font-serif",children:"二十四節気"}),")."]}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed mt-3",children:["It is a portfolio and learning project. As much as a set of components, it is an exhibit of ",e.jsx("em",{children:"how"})," a design system is operated — the rules, the contracts, and the tests that keep it honest."]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-6",children:"Concept"}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Schatten — the beauty in shadows"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:[`"Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's`," ",e.jsx("em",{children:"In Praise of Shadows"})," (",e.jsx("span",{className:"font-serif",children:"陰翳礼讃"}),"), the system finds beauty in restraint rather than bold decoration — letting content stand forward through whitespace and muted tones."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Ink & Paper — the foundation"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:["The color system is built on the metaphor of ",e.jsx("em",{children:"sumi"})," (ink) on ",e.jsx("em",{children:"washi"})," ","(paper): the warmth of handmade paper, the depth of layered ink, and the vermillion seal of a calligrapher's signature. Light and dark modes are two sides of the same sheet."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Restraint as expression"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed",children:"A restrained UI is a deliberate choice to let the work speak. Minimal color, subtle transitions, and typographic precision create a quiet confidence."})]})]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-2",children:"Engineering discipline"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed mb-6",children:"The parts worth inspecting are less the components themselves than how they are governed. Four places to look:"}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx(m,{title:"Rule-driven operation",description:"Every architectural decision lives in a versioned contract under .claude/rules/ that both human and AI contributors follow — component API shapes, the token hierarchy, the a11y contract.",href:"https://github.com/yasmro/schatten/tree/main/.claude/rules",external:!0}),H.map(t=>e.jsx(m,{title:t.title,description:t.description,...h(t)},t.title))]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"UI Components"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsx(s,{name:"Button",description:"Triggers actions and events.",storyPath:"components-lv1-button",children:e.jsx(g,{children:"Button"})}),e.jsx(s,{name:"Badge",description:"Displays a status or label.",storyPath:"components-lv1-badge",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(c,{children:"Default"}),e.jsx(c,{variant:"success",appearance:"subtle",children:"Active"}),e.jsx(c,{appearance:"outline",children:"Outline"})]})}),e.jsx(s,{name:"Spinner",description:"Indicates a loading state.",storyPath:"components-lv1-spinner",children:e.jsx(C,{})}),e.jsx(s,{name:"Text",description:"Renders styled text content.",storyPath:"components-lv1-text",children:e.jsx(j,{variant:"heading",size:"lg",children:"Heading"})}),e.jsx(s,{name:"Tooltip",description:"Displays additional info on hover.",storyPath:"components-lv1-tooltip",children:e.jsx(N,{children:e.jsxs(k,{defaultOpen:!0,children:[e.jsx(S,{children:e.jsx(g,{variant:"secondary",children:"Hover me"})}),e.jsx(T,{children:"Helpful info"})]})})}),e.jsx(s,{name:"Toast",description:"Transient notifications with variants.",storyPath:"components-lv1-toast",children:e.jsxs("div",{className:"relative flex w-44 items-start gap-2 border border-success bg-success-subtle p-3 pr-8 text-xs text-success shadow-sm",children:[e.jsx(P,{className:"mt-0.5 size-4 shrink-0","aria-hidden":!0}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("div",{className:"font-semibold leading-tight",children:"Saved"}),e.jsx("div",{className:"leading-snug opacity-90",children:"Your changes have been saved."})]}),e.jsx("span",{"aria-hidden":!0,className:"absolute top-1 right-1 inline-flex size-5 items-center justify-center",children:"×"})]})}),e.jsx(s,{name:"Callout",description:"Inline contextual notices.",storyPath:"components-lv1-callout",children:e.jsx("div",{className:"w-48 scale-90",children:e.jsx(I,{variant:"info",title:"Heads up",children:"A beta feature."})})})]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"Form Components"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsx(s,{name:"Field",description:"Wraps inputs with label and error.",storyPath:"components-lv1-field",children:e.jsx(v,{label:"Email",description:"Your email address.",children:e.jsx(p,{placeholder:"you@example.com",className:"w-40"})})}),e.jsx(s,{name:"FieldSet",description:"Groups related form fields.",storyPath:"components-lv1-fieldset",children:e.jsx(M,{legend:"Contact",children:e.jsx(v,{label:"Email",children:e.jsx(p,{placeholder:"you@example.com",className:"w-40"})})})}),e.jsx(s,{name:"Input",description:"Accepts user text input.",storyPath:"components-lv1-input",children:e.jsx(p,{placeholder:"Enter text...",className:"w-40"})}),e.jsx(s,{name:"Textarea",description:"Multi-line text input.",storyPath:"components-lv1-textarea",children:e.jsx(E,{placeholder:"Write something...",className:"w-40",rows:2})}),e.jsx(s,{name:"Select",description:"Picks one option from a list.",storyPath:"components-lv1-select",children:e.jsxs(A,{defaultValue:"apple",children:[e.jsx(F,{className:"w-40",children:e.jsx(B,{})}),e.jsxs(R,{children:[e.jsx(f,{value:"apple",children:"Apple"}),e.jsx(f,{value:"banana",children:"Banana"})]})]})}),e.jsx(s,{name:"Checkbox",description:"Toggles a boolean value.",storyPath:"components-lv1-checkbox",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(b,{label:"Option A",defaultChecked:!0}),e.jsx(b,{label:"Option B"})]})}),e.jsx(s,{name:"Radio",description:"Selects one option from a group.",storyPath:"components-lv1-radio",children:e.jsxs(O,{defaultValue:"a",children:[e.jsx(y,{value:"a",label:"Option A"}),e.jsx(y,{value:"b",label:"Option B"})]})}),e.jsx(s,{name:"Switch",description:"Toggles between on and off.",storyPath:"components-lv1-switch",children:e.jsx(L,{label:"Enable",defaultChecked:!0})})]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"Tokens"}),e.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:U.map(t=>e.jsx(_,{link:t},t.slug))})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-2",children:"Patterns"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed mb-6",children:"Cross-component recipes and principles — how the primitives compose in practice."}),e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:D.map(t=>e.jsx(m,{title:t.title,description:t.description,...h(t)},t.title))})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`[{
  slug: 'css-api-overview',
  suffix: 'reference',
  viewMode: 'story',
  section: 'engineering',
  title: 'Framework-agnostic CSS API',
  description: 'Components ship a .st-* BEM class API and a prebuilt stylesheet, so they render with plain HTML — no React, no Tailwind, no build step required on the consumer side.'
}, {
  slug: 'theming-theme-audit',
  suffix: 'overview',
  viewMode: 'story',
  section: 'engineering',
  title: 'Mode × Special theming',
  description: 'Two independent theme axes — light/dark Mode × an exclusive seasonal Special — compose at runtime through CSS variables. See all 16 combinations verified side by side.'
}, {
  slug: 'theming-seasonal-showcase',
  suffix: 'eight-seasons',
  viewMode: 'story',
  section: 'engineering',
  title: 'Seasonal showcase',
  description: 'Eight palettes based on the 24 solar terms re-tint every solid surface at runtime — see all eight seasons worn by buttons, badges, and a full dashboard mockup.'
}, {
  slug: 'patterns-accessibility',
  suffix: 'overview',
  viewMode: 'story',
  section: 'engineering',
  title: 'Accessibility contract',
  description: 'Every primitive guarantees a role, an accessible name, keyboard support, and aria-* wiring — asserted with axe-core in CI alongside the visual regression suite.'
}, {
  slug: 'tokens-color',
  suffix: 'colors',
  viewMode: 'story',
  section: 'tokens',
  title: 'Color',
  description: 'Color tokens and scales.'
}, {
  slug: 'tokens-typography',
  suffix: 'typography',
  viewMode: 'story',
  section: 'tokens',
  title: 'Typography',
  description: 'Font scales and text styles.'
}, {
  slug: 'patterns-accessibility',
  suffix: 'overview',
  viewMode: 'story',
  section: 'patterns',
  title: 'Accessibility',
  description: 'Focus visibility, ARIA conventions, contrast, and keyboard support — the contract every primitive satisfies.'
}, {
  slug: 'patterns-composition-with-aschild',
  suffix: 'button-as-link',
  viewMode: 'story',
  section: 'patterns',
  title: 'Composition with asChild',
  description: 'Rendering Button as a link, buttonVariants() on your own element, and Text polymorphism.'
}, {
  slug: 'patterns-form-composition',
  suffix: 'basic-field',
  viewMode: 'story',
  section: 'patterns',
  title: 'Form Composition',
  description: 'Wiring Field and FieldSet: labels, descriptions, and error messages.'
}, {
  slug: 'patterns-form-states',
  suffix: 'audit',
  viewMode: 'story',
  section: 'patterns',
  title: 'Form States',
  description: 'disabled / readOnly / error across every form control, audited side by side.'
}, {
  slug: 'patterns-layout',
  suffix: 'flex-recipes',
  viewMode: 'story',
  section: 'patterns',
  title: 'Layout',
  description: 'Flex and grid recipes for arranging primitives on the page.'
}, {
  slug: 'patterns-testing',
  suffix: 'overview',
  viewMode: 'story',
  section: 'patterns',
  title: 'Testing',
  description: 'data-testid pass-through and role-first queries for consumer test suites.'
}]`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"['components-lv1-button', 'components-lv1-badge', 'components-lv1-spinner', 'components-lv1-text', 'components-lv1-tooltip', 'components-lv1-toast', 'components-lv1-callout', 'components-lv1-field', 'components-lv1-fieldset', 'components-lv1-input', 'components-lv1-textarea', 'components-lv1-select', 'components-lv1-checkbox', 'components-lv1-radio', 'components-lv1-switch'] as const",...l.parameters?.docs?.source},description:{story:"The `storyPath` slugs the `ComponentCard`s link to (viewMode `'docs'`,\nsuffix `'docs'`). Kept here as the SSOT so `Welcome.drift.test.ts` can\nassert each resolves to an lv1 module that actually carries autodocs — the\n`--docs` entry only exists when the component is autodocs-tagged. The card\nJSX (live previews) stays inline; the test pins the const against the\nstoryPaths actually wired into the cards.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <div className="max-w-4xl mx-auto px-8 py-16">
      {/* 1. Hero */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Schatten</h1>
        <p className="text-lg text-foreground-muted leading-relaxed">
          A design system inspired by Japanese calligraphy — ink on paper.
          <br />
          Built with React, Tailwind CSS, Radix UI, and class-variance-authority.
        </p>
      </div>

      {/* 2. What & Why — the evaluator's "what is this / why does it exist" */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-foreground mb-4">What is Schatten?</h2>
        <p className="text-sm text-foreground-muted leading-relaxed">
          Schatten is a React component library built on the conventions of{' '}
          <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="text-info underline">
            shadcn/ui
          </a>{' '}
          (Radix UI primitives + class-variance-authority + a <code>cn</code> utility), restyled
          around a Japanese visual language — <em>sumi</em> ink, <em>washi</em> paper, and a
          vermillion seal — with a runtime seasonal theme system based on the twenty-four solar
          terms (<span className="font-serif">二十四節気</span>).
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mt-3">
          It is a portfolio and learning project. As much as a set of components, it is an exhibit
          of <em>how</em> a design system is operated — the rules, the contracts, and the tests that
          keep it honest.
        </p>
      </div>

      {/* 3. Concept — the aesthetic "why", condensed */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-foreground mb-6">Concept</h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Schatten — the beauty in shadows
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              "Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's{' '}
              <em>In Praise of Shadows</em> (<span className="font-serif">陰翳礼讃</span>), the
              system finds beauty in restraint rather than bold decoration — letting content stand
              forward through whitespace and muted tones.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Ink &amp; Paper — the foundation
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              The color system is built on the metaphor of <em>sumi</em> (ink) on <em>washi</em>{' '}
              (paper): the warmth of handmade paper, the depth of layered ink, and the vermillion
              seal of a calligrapher's signature. Light and dark modes are two sides of the same
              sheet.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Restraint as expression
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              A restrained UI is a deliberate choice to let the work speak. Minimal color, subtle
              transitions, and typographic precision create a quiet confidence.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Engineering discipline — the differentiators an evaluator can inspect */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-foreground mb-2">Engineering discipline</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-6">
          The parts worth inspecting are less the components themselves than how they are governed.
          Four places to look:
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextLinkCard title="Rule-driven operation" description="Every architectural decision lives in a versioned contract under .claude/rules/ that both human and AI contributors follow — component API shapes, the token hierarchy, the a11y contract." href="https://github.com/yasmro/schatten/tree/main/.claude/rules" external />
          {engineeringLinks.map(link => <TextLinkCard key={link.title} title={link.title} description={link.description} {...deepLinkProps(link)} />)}
        </div>
      </div>

      {/* 5. Component catalog */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">UI Components</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <ComponentCard name="Button" description="Triggers actions and events." storyPath="components-lv1-button">
            <Button>Button</Button>
          </ComponentCard>

          <ComponentCard name="Badge" description="Displays a status or label." storyPath="components-lv1-badge">
            <div className="flex gap-2">
              <Badge>Default</Badge>
              <Badge variant="success" appearance="subtle">
                Active
              </Badge>
              <Badge appearance="outline">Outline</Badge>
            </div>
          </ComponentCard>

          <ComponentCard name="Spinner" description="Indicates a loading state." storyPath="components-lv1-spinner">
            <Spinner />
          </ComponentCard>

          <ComponentCard name="Text" description="Renders styled text content." storyPath="components-lv1-text">
            <Text variant="heading" size="lg">
              Heading
            </Text>
          </ComponentCard>

          <ComponentCard name="Tooltip" description="Displays additional info on hover." storyPath="components-lv1-tooltip">
            <TooltipProvider>
              <Tooltip defaultOpen>
                <TooltipTrigger>
                  <Button variant="secondary">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>Helpful info</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ComponentCard>

          <ComponentCard name="Toast" description="Transient notifications with variants." storyPath="components-lv1-toast">
            <div className="relative flex w-44 items-start gap-2 border border-success bg-success-subtle p-3 pr-8 text-xs text-success shadow-sm">
              <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden />
              <div className="flex flex-col gap-0.5">
                <div className="font-semibold leading-tight">Saved</div>
                <div className="leading-snug opacity-90">Your changes have been saved.</div>
              </div>
              <span aria-hidden className="absolute top-1 right-1 inline-flex size-5 items-center justify-center">
                ×
              </span>
            </div>
          </ComponentCard>

          <ComponentCard name="Callout" description="Inline contextual notices." storyPath="components-lv1-callout">
            <div className="w-48 scale-90">
              <Callout variant="info" title="Heads up">
                A beta feature.
              </Callout>
            </div>
          </ComponentCard>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Form Components</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <ComponentCard name="Field" description="Wraps inputs with label and error." storyPath="components-lv1-field">
            <Field label="Email" description="Your email address.">
              <Input placeholder="you@example.com" className="w-40" />
            </Field>
          </ComponentCard>

          <ComponentCard name="FieldSet" description="Groups related form fields." storyPath="components-lv1-fieldset">
            <FieldSet legend="Contact">
              <Field label="Email">
                <Input placeholder="you@example.com" className="w-40" />
              </Field>
            </FieldSet>
          </ComponentCard>

          <ComponentCard name="Input" description="Accepts user text input." storyPath="components-lv1-input">
            <Input placeholder="Enter text..." className="w-40" />
          </ComponentCard>

          <ComponentCard name="Textarea" description="Multi-line text input." storyPath="components-lv1-textarea">
            <Textarea placeholder="Write something..." className="w-40" rows={2} />
          </ComponentCard>

          <ComponentCard name="Select" description="Picks one option from a list." storyPath="components-lv1-select">
            <Select defaultValue="apple">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectContent>
            </Select>
          </ComponentCard>

          <ComponentCard name="Checkbox" description="Toggles a boolean value." storyPath="components-lv1-checkbox">
            <div className="flex flex-col gap-2">
              <Checkbox label="Option A" defaultChecked />
              <Checkbox label="Option B" />
            </div>
          </ComponentCard>

          <ComponentCard name="Radio" description="Selects one option from a group." storyPath="components-lv1-radio">
            <RadioGroup defaultValue="a">
              <Radio value="a" label="Option A" />
              <Radio value="b" label="Option B" />
            </RadioGroup>
          </ComponentCard>

          <ComponentCard name="Switch" description="Toggles between on and off." storyPath="components-lv1-switch">
            <Switch label="Enable" defaultChecked />
          </ComponentCard>
        </div>
      </div>

      {/* 6. Tokens (was "Foundation" — renamed to the new IA vocabulary, #336 deferred) */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Tokens</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tokenLinks.map(link => <TokenCard key={link.slug} link={link} />)}
        </div>
      </div>

      {/* 7. Patterns */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-2">Patterns</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-6">
          Cross-component recipes and principles — how the primitives compose in practice.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {patternsLinks.map(link => <TextLinkCard key={link.title} title={link.title} description={link.description} {...deepLinkProps(link)} />)}
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const Ue=["WELCOME_DEEP_LINKS","WELCOME_COMPONENT_SLUGS","Overview"];export{d as Overview,l as WELCOME_COMPONENT_SLUGS,i as WELCOME_DEEP_LINKS,Ue as __namedExportsOrder,He as default};
