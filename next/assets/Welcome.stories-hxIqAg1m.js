import{j as e}from"./iframe-BavYS4eU.js";import{B as j}from"./Button-DsUDpOR4.js";import{B as d}from"./Badge-C-Nf-8w8.js";import{S as I}from"./Spinner-6RPR2yqU.js";import{T as A}from"./Text-EOI3iTaH.js";import{T as R,a as B,b as F,c as E}from"./Tooltip-luPEf-Iv.js";import{C as L}from"./triangle-alert-C4hX3LJF.js";import{C as M}from"./Callout-DcR-uzlg.js";import{A as C}from"./Avatar-DcJj8fLg.js";import{C as H,a as O,b as z,c as D}from"./Card-DRFhSQjQ.js";import{I as c}from"./Icon-CtDlrd-o.js";import{S as m}from"./search-CGcDK14i.js";import{S as W}from"./Separator-noNmArlK.js";import{S as p}from"./Skeleton-qbAn0NiE.js";import{T as U,b as G,c as h,d as y,e as V,f as r}from"./Table-Dix7yBOB.js";import{T as _,a as $,b as w,c as J}from"./Tabs-DExWmVX3.js";import{F as N}from"./Field-D0GkZs_S.js";import{I as x}from"./Input-A8toaP_Z.js";import{F as Y}from"./FieldSet-By8eoF5l.js";import{T as q}from"./Textarea-WtxAAhfb.js";import{S as K,a as Q,b as X,c as Z,d as T}from"./Select-DdHro6VA.js";import{C as k}from"./Checkbox-Bu7ZWaXK.js";import{R as ee,a as S}from"./Radio-BF_kC5RE.js";import{S as te}from"./Switch-BowzLkST.js";import"./preload-helper-CrztxVc4.js";import"./index-Cb30ZB7J.js";import"./index-9V6AaLsS.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css               *//* empty css              *//* empty css                *//* empty css             */import"./index-74g4n-6G.js";import"./index-CUtnOs6X.js";import"./index-BiO85fAo.js";import"./index-CuAj_Tll.js";import"./index-CkjIebEr.js";import"./index-D-vg7OwC.js";import"./index-9nDVh0w7.js";import"./index-Bsi36FJ6.js";import"./floating-ui.react-dom-B6UO2Jwh.js";import"./index-3Zoh3lIQ.js";import"./index-DvGxyRku.js";import"./index-4cwp8rqr.js";import"./index-BMysoy-e.js";/* empty css                */import"./createLucideIcon-B7nIJg5x.js";/* empty css                */import"./circle-alert-B-jkbkCB.js";import"./info-BjImgX-M.js";import"./x-DGLXzaP1.js";import"./index-DeGkqwIB.js";/* empty css               *//* empty css             *//* empty css             *//* empty css                  *//* empty css                 *//* empty css              */import"./index-B3jkQtYn.js";import"./index-BAnyYigT.js";/* empty css             */import"./field-CLvo9pZV.js";/* empty css              *//* empty css              *//* empty css                 *//* empty css                 */import"./Combination-NcMLuSpy.js";import"./index-DkYsD7An.js";import"./index-mxNXQPwh.js";/* empty css               */import"./chevron-up-C2kOQ3aV.js";import"./check-dSSYTN6Q.js";/* empty css                 *//* empty css              *//* empty css               */const f=[{slug:"css-api-overview",suffix:"reference",viewMode:"story",section:"engineering",title:"Framework-agnostic CSS API",description:"Components ship a .st-* BEM class API and a prebuilt stylesheet, so they render with plain HTML — no React, no Tailwind, no build step required on the consumer side."},{slug:"theming-theme-audit",suffix:"overview",viewMode:"story",section:"engineering",title:"Mode × Special theming",description:"Two independent theme axes — light/dark Mode × an exclusive seasonal Special — compose at runtime through CSS variables. See all 16 combinations verified side by side."},{slug:"theming-seasonal-showcase",suffix:"eight-seasons",viewMode:"story",section:"engineering",title:"Seasonal showcase",description:"Eight palettes based on the 24 solar terms re-tint every solid surface at runtime — see all eight seasons worn by buttons, badges, and a full dashboard mockup."},{slug:"patterns-accessibility",suffix:"overview",viewMode:"story",section:"engineering",title:"Accessibility contract",description:"Every primitive guarantees a role, an accessible name, keyboard support, and aria-* wiring — asserted with axe-core in CI alongside the visual regression suite."},{slug:"tokens-color",suffix:"colors",viewMode:"story",section:"tokens",title:"Color",description:"Color tokens and scales."},{slug:"tokens-typography",suffix:"typography",viewMode:"story",section:"tokens",title:"Typography",description:"Font scales and text styles."},{slug:"patterns-accessibility",suffix:"overview",viewMode:"story",section:"patterns",title:"Accessibility",description:"Focus visibility, ARIA conventions, contrast, and keyboard support — the contract every primitive satisfies."},{slug:"patterns-composition-with-aschild",suffix:"button-as-link",viewMode:"story",section:"patterns",title:"Composition with asChild",description:"Rendering Button as a link, buttonVariants() on your own element, and Text polymorphism."},{slug:"patterns-data-table",suffix:"overview",viewMode:"story",section:"patterns",title:"Data Table",description:"Compose lv1 Table with a headless logic layer (TanStack Table) to add sorting, filtering, and pagination — Schatten ships the chrome, you bring the logic."},{slug:"patterns-form-composition",suffix:"basic-field",viewMode:"story",section:"patterns",title:"Form Composition",description:"Wiring Field and FieldSet: labels, descriptions, and error messages."},{slug:"patterns-form-states",suffix:"audit",viewMode:"story",section:"patterns",title:"Form States",description:"disabled / readOnly / error across every form control, audited side by side."},{slug:"patterns-layout",suffix:"flex-recipes",viewMode:"story",section:"patterns",title:"Layout",description:"Flex and grid recipes for arranging primitives on the page."},{slug:"patterns-testing",suffix:"overview",viewMode:"story",section:"patterns",title:"Testing",description:"data-testid pass-through and role-first queries for consumer test suites."}],It={title:"Welcome",parameters:{layout:"fullscreen"}},P=(t,o,i="docs",n="docs")=>{t.preventDefault();const a=`/${n}/${o}--${i}`,v=window.parent!==window?window.parent:window,b=new URL(v.location.href);b.searchParams.set("path",a),v.location.href=b.toString()},g=t=>({href:`/${t.viewMode}/${t.slug}--${t.suffix}`,onClick:o=>P(o,t.slug,t.suffix,t.viewMode)}),s=({name:t,description:o,children:i,storyPath:n})=>e.jsxs("a",{href:`/docs/${n}--docs`,onClick:a=>P(a,n),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",onClick:a=>{a.preventDefault(),a.stopPropagation()},children:i}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-vermillion group-hover:underline",children:t}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:o})]})]}),u=({title:t,description:o,href:i,onClick:n,external:a=!1})=>e.jsxs("a",{href:i,onClick:n,...a?{target:"_blank",rel:"noopener noreferrer"}:{},className:"group block h-full border border-border rounded-xl p-5 no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsxs("p",{className:"text-sm font-semibold text-vermillion group-hover:underline",children:[t,a&&e.jsxs(e.Fragment,{children:[e.jsx("span",{"aria-hidden":!0,className:"ml-1 text-foreground-muted",children:"↗"}),e.jsx("span",{className:"sr-only",children:" (opens in a new tab)"})]})]}),e.jsx("p",{className:"text-xs text-foreground-muted mt-1.5 leading-relaxed",children:o})]}),se={"tokens-color":e.jsx("div",{className:"flex gap-1",children:["bg-solid","bg-foreground-muted","bg-vermillion","bg-destructive"].map(t=>e.jsx("div",{className:`w-8 h-8 rounded-lg ${t}`},t))}),"tokens-typography":e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("span",{className:"text-2xl font-bold text-foreground",children:"Aa"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"Hanken Grotesk"})]})},ae=({link:t})=>e.jsxs("a",{...g(t),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",children:se[t.slug]}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-vermillion group-hover:underline",children:t.title}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:t.description})]})]}),oe=f.filter(t=>t.section==="engineering"),ne=f.filter(t=>t.section==="tokens"),ie=f.filter(t=>t.section==="patterns"),l={name:"Overview",render:()=>e.jsxs("div",{className:"max-w-4xl mx-auto px-8 py-16",children:[e.jsxs("div",{className:"mb-16",children:[e.jsx("h1",{className:"text-5xl font-bold text-foreground mb-3 tracking-tight",children:"Schatten"}),e.jsxs("p",{className:"text-lg text-foreground-muted leading-relaxed",children:["A design system inspired by Japanese calligraphy — ink on paper.",e.jsx("br",{}),"Built with React, Tailwind CSS, Radix UI, and class-variance-authority."]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"What is Schatten?"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:["Schatten is a React component library built on the conventions of"," ",e.jsx("a",{href:"https://ui.shadcn.com/",target:"_blank",rel:"noopener noreferrer",className:"text-info underline",children:"shadcn/ui"})," ","(Radix UI primitives + class-variance-authority + a ",e.jsx("code",{children:"cn"})," utility), restyled around a Japanese visual language — ",e.jsx("em",{children:"sumi"})," ink, ",e.jsx("em",{children:"washi"})," paper, and a vermillion seal — with a runtime seasonal theme system based on the twenty-four solar terms (",e.jsx("span",{className:"font-serif",children:"二十四節気"}),")."]}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed mt-3",children:["It is a portfolio and learning project. As much as a set of components, it is an exhibit of ",e.jsx("em",{children:"how"})," a design system is operated — the rules, the contracts, and the tests that keep it honest."]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-6",children:"Concept"}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Schatten — the beauty in shadows"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:[`"Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's`," ",e.jsx("em",{children:"In Praise of Shadows"})," (",e.jsx("span",{className:"font-serif",children:"陰翳礼讃"}),"), the system finds beauty in restraint rather than bold decoration — letting content stand forward through whitespace and muted tones."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Ink & Paper — the foundation"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:["The color system is built on the metaphor of ",e.jsx("em",{children:"sumi"})," (ink) on ",e.jsx("em",{children:"washi"})," ","(paper): the warmth of handmade paper, the depth of layered ink, and the vermillion seal of a calligrapher's signature. Light and dark modes are two sides of the same sheet."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Restraint as expression"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed",children:"A restrained UI is a deliberate choice to let the work speak. Minimal color, subtle transitions, and typographic precision create a quiet confidence."})]})]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-2",children:"Engineering discipline"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed mb-6",children:"The parts worth inspecting are less the components themselves than how they are governed. Four places to look:"}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx(u,{title:"Rule-driven operation",description:"Every architectural decision lives in a versioned contract under .claude/rules/ that both human and AI contributors follow — component API shapes, the token hierarchy, the a11y contract.",href:"https://github.com/yasmro/schatten/tree/main/.claude/rules",external:!0}),oe.map(t=>e.jsx(u,{title:t.title,description:t.description,...g(t)},t.title))]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"UI Components"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsx(s,{name:"Button",description:"Triggers actions and events.",storyPath:"components-lv1-button",children:e.jsx(j,{children:"Button"})}),e.jsx(s,{name:"Badge",description:"Displays a status or label.",storyPath:"components-lv1-badge",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(d,{children:"Default"}),e.jsx(d,{variant:"success",appearance:"subtle",children:"Active"}),e.jsx(d,{appearance:"outline",children:"Outline"})]})}),e.jsx(s,{name:"Spinner",description:"Indicates a loading state.",storyPath:"components-lv1-spinner",children:e.jsx(I,{})}),e.jsx(s,{name:"Text",description:"Renders styled text content.",storyPath:"components-lv1-text",children:e.jsx(A,{variant:"heading",size:"lg",children:"Heading"})}),e.jsx(s,{name:"Tooltip",description:"Displays additional info on hover.",storyPath:"components-lv1-tooltip",children:e.jsx(R,{children:e.jsxs(B,{defaultOpen:!0,children:[e.jsx(F,{children:e.jsx(j,{variant:"secondary",children:"Hover me"})}),e.jsx(E,{children:"Helpful info"})]})})}),e.jsx(s,{name:"Toast",description:"Transient notifications with variants.",storyPath:"components-lv1-toast",children:e.jsxs("div",{className:"relative flex w-44 items-start gap-2 border border-success bg-success-subtle p-3 pr-8 text-xs text-success shadow-sm",children:[e.jsx(L,{className:"mt-0.5 size-4 shrink-0","aria-hidden":!0}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("div",{className:"font-semibold leading-tight",children:"Saved"}),e.jsx("div",{className:"leading-snug opacity-90",children:"Your changes have been saved."})]}),e.jsx("span",{"aria-hidden":!0,className:"absolute top-1 right-1 inline-flex size-5 items-center justify-center",children:"×"})]})}),e.jsx(s,{name:"Callout",description:"Inline contextual notices.",storyPath:"components-lv1-callout",children:e.jsx("div",{className:"w-48 scale-90",children:e.jsx(M,{variant:"info",title:"Heads up",children:"A beta feature."})})}),e.jsx(s,{name:"Avatar",description:"User image with initials fallback.",storyPath:"components-lv1-avatar",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(C,{fallback:"YO"}),e.jsx(C,{fallback:"AB",size:"sm"})]})}),e.jsx(s,{name:"Card",description:"Groups content on a surface.",storyPath:"components-lv1-card",children:e.jsx(H,{className:"w-44 scale-90",children:e.jsxs(O,{children:[e.jsx(z,{children:"Notifications"}),e.jsx(D,{children:"Manage your alerts."})]})})}),e.jsx(s,{name:"Icon",description:"Lucide icons at preset sizes.",storyPath:"components-lv1-icon",children:e.jsxs("div",{className:"flex items-center gap-3 text-foreground",children:[e.jsx(c,{icon:m,size:"sm"}),e.jsx(c,{icon:m,size:"md"}),e.jsx(c,{icon:m,size:"lg"})]})}),e.jsx(s,{name:"Separator",description:"Divides content visually.",storyPath:"components-lv1-separator",children:e.jsxs("div",{className:"flex w-32 flex-col gap-2 text-xs text-foreground-muted",children:[e.jsx("span",{children:"Section A"}),e.jsx(W,{}),e.jsx("span",{children:"Section B"})]})}),e.jsx(s,{name:"Skeleton",description:"Loading placeholder for content.",storyPath:"components-lv1-skeleton",children:e.jsxs("div",{className:"flex w-40 items-center gap-3",children:[e.jsx(p,{className:"size-10 rounded-full"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(p,{className:"h-3 w-24"}),e.jsx(p,{className:"h-3 w-16"})]})]})}),e.jsx(s,{name:"Table",description:"Presentational data table.",storyPath:"components-lv1-table",children:e.jsxs(U,{className:"w-44 scale-90 text-xs",children:[e.jsx(G,{children:e.jsxs(h,{children:[e.jsx(y,{children:"Name"}),e.jsx(y,{children:"Role"})]})}),e.jsxs(V,{children:[e.jsxs(h,{children:[e.jsx(r,{children:"Aoi"}),e.jsx(r,{children:"Admin"})]}),e.jsxs(h,{children:[e.jsx(r,{children:"Ren"}),e.jsx(r,{children:"Editor"})]})]})]})}),e.jsx(s,{name:"Tabs",description:"Switches between content panels.",storyPath:"components-lv1-tabs",children:e.jsxs(_,{defaultValue:"account",className:"w-44 scale-90",children:[e.jsxs($,{children:[e.jsx(w,{value:"account",children:"Account"}),e.jsx(w,{value:"password",children:"Password"})]}),e.jsx(J,{value:"account",className:"text-xs text-foreground-muted",children:"Account settings."})]})})]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"Form Components"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsx(s,{name:"Field",description:"Wraps inputs with label and error.",storyPath:"components-lv1-field",children:e.jsx(N,{label:"Email",description:"Your email address.",children:e.jsx(x,{placeholder:"you@example.com",className:"w-40"})})}),e.jsx(s,{name:"FieldSet",description:"Groups related form fields.",storyPath:"components-lv1-fieldset",children:e.jsx(Y,{legend:"Contact",children:e.jsx(N,{label:"Email",children:e.jsx(x,{placeholder:"you@example.com",className:"w-40"})})})}),e.jsx(s,{name:"Input",description:"Accepts user text input.",storyPath:"components-lv1-input",children:e.jsx(x,{placeholder:"Enter text...",className:"w-40"})}),e.jsx(s,{name:"Textarea",description:"Multi-line text input.",storyPath:"components-lv1-textarea",children:e.jsx(q,{placeholder:"Write something...",className:"w-40",rows:2})}),e.jsx(s,{name:"Select",description:"Picks one option from a list.",storyPath:"components-lv1-select",children:e.jsxs(K,{defaultValue:"apple",children:[e.jsx(Q,{className:"w-40",children:e.jsx(X,{})}),e.jsxs(Z,{children:[e.jsx(T,{value:"apple",children:"Apple"}),e.jsx(T,{value:"banana",children:"Banana"})]})]})}),e.jsx(s,{name:"Checkbox",description:"Toggles a boolean value.",storyPath:"components-lv1-checkbox",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(k,{label:"Option A",defaultChecked:!0}),e.jsx(k,{label:"Option B"})]})}),e.jsx(s,{name:"Radio",description:"Selects one option from a group.",storyPath:"components-lv1-radio",children:e.jsxs(ee,{defaultValue:"a",children:[e.jsx(S,{value:"a",label:"Option A"}),e.jsx(S,{value:"b",label:"Option B"})]})}),e.jsx(s,{name:"Switch",description:"Toggles between on and off.",storyPath:"components-lv1-switch",children:e.jsx(te,{label:"Enable",defaultChecked:!0})})]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"Tokens"}),e.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:ne.map(t=>e.jsx(ae,{link:t},t.slug))})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-2",children:"Patterns"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed mb-6",children:"Cross-component recipes and principles — how the primitives compose in practice."}),e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:ie.map(t=>e.jsx(u,{title:t.title,description:t.description,...g(t)},t.title))})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

          <ComponentCard name="Avatar" description="User image with initials fallback." storyPath="components-lv1-avatar">
            <div className="flex items-center gap-2">
              <Avatar fallback="YO" />
              <Avatar fallback="AB" size="sm" />
            </div>
          </ComponentCard>

          <ComponentCard name="Card" description="Groups content on a surface." storyPath="components-lv1-card">
            <Card className="w-44 scale-90">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage your alerts.</CardDescription>
              </CardHeader>
            </Card>
          </ComponentCard>

          <ComponentCard name="Icon" description="Lucide icons at preset sizes." storyPath="components-lv1-icon">
            <div className="flex items-center gap-3 text-foreground">
              <Icon icon={Search} size="sm" />
              <Icon icon={Search} size="md" />
              <Icon icon={Search} size="lg" />
            </div>
          </ComponentCard>

          <ComponentCard name="Separator" description="Divides content visually." storyPath="components-lv1-separator">
            <div className="flex w-32 flex-col gap-2 text-xs text-foreground-muted">
              <span>Section A</span>
              <Separator />
              <span>Section B</span>
            </div>
          </ComponentCard>

          <ComponentCard name="Skeleton" description="Loading placeholder for content." storyPath="components-lv1-skeleton">
            <div className="flex w-40 items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          </ComponentCard>

          <ComponentCard name="Table" description="Presentational data table." storyPath="components-lv1-table">
            <Table className="w-44 scale-90 text-xs">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Aoi</TableCell>
                  <TableCell>Admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ren</TableCell>
                  <TableCell>Editor</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ComponentCard>

          <ComponentCard name="Tabs" description="Switches between content panels." storyPath="components-lv1-tabs">
            <Tabs defaultValue="account" className="w-44 scale-90">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="text-xs text-foreground-muted">
                Account settings.
              </TabsContent>
            </Tabs>
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
}`,...l.parameters?.docs?.source}}};const At=["Overview"];export{l as Overview,At as __namedExportsOrder,It as default};
