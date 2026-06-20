import{j as e}from"./iframe-5UfUINJs.js";import{B as u}from"./Button-OLVhppCn.js";import{B as l}from"./Badge-CcnfmpTp.js";import{S as j}from"./Spinner-B-_sf2Ph.js";import{T as w}from"./Text-BKPbgItn.js";import{T as C,a as N,b as k,c as S}from"./Tooltip-CTCif81u.js";import{C as T}from"./triangle-alert-CRVqakYR.js";import{C as P}from"./Callout-C07gtj-k.js";import{F as g}from"./Field-ggLUSKX0.js";import{I as d}from"./Input-Deku9XhL.js";import{F as I}from"./FieldSet-kapRqgHE.js";import{T as A}from"./Textarea-CGE3Iogg.js";import{S as B,a as R,b as F,c as E,d as f}from"./Select-CXYomxUV.js";import{C as v}from"./Checkbox-Da7HonyE.js";import{R as M,a as b}from"./Radio-DFrNptwg.js";import{S as L}from"./Switch-DSZylddo.js";import"./preload-helper-CrztxVc4.js";import"./index-Dx9L6FpR.js";import"./index-Cfeid_p1.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               *//* empty css              *//* empty css                *//* empty css             */import"./index-CJQrQYm0.js";import"./index-4Jo8jqYA.js";import"./index-XZvyrjEy.js";import"./index-DZVqX7M-.js";import"./index-DX-9fckc.js";import"./index-DT6BOSiH.js";import"./floating-ui.react-dom-BDJmsIS-.js";import"./index-D3qoo2ws.js";import"./index-BUhdlUKB.js";/* empty css                */import"./createLucideIcon-BhdRJ2fC.js";/* empty css                */import"./circle-alert-CHYKyJIN.js";import"./info-Fw4_p3kT.js";import"./x-Dtsoijox.js";import"./field-ChuHT_NZ.js";/* empty css              *//* empty css              *//* empty css                 *//* empty css                 */import"./index-DLwT1pQP.js";import"./index-CXg9TuX8.js";import"./index-Blp1MNdu.js";import"./Combination-Bs81KEYa.js";/* empty css               */import"./chevron-up-qWwy6ygl.js";import"./check-DoHcTULO.js";/* empty css                 *//* empty css              *//* empty css               */const p=[{slug:"css-api-overview",suffix:"reference",viewMode:"story",section:"engineering",title:"Framework-agnostic CSS API",description:"Components ship a .st-* BEM class API and a prebuilt stylesheet, so they render with plain HTML — no React, no Tailwind, no build step required on the consumer side."},{slug:"theming-theme-audit",suffix:"overview",viewMode:"story",section:"engineering",title:"Mode × Special theming",description:"Two independent theme axes — light/dark Mode × an exclusive seasonal Special — compose at runtime through CSS variables. See all 16 combinations verified side by side."},{slug:"theming-seasonal-showcase",suffix:"eight-seasons",viewMode:"story",section:"engineering",title:"Seasonal showcase",description:"Eight palettes based on the 24 solar terms re-tint every solid surface at runtime — see all eight seasons worn by buttons, badges, and a full dashboard mockup."},{slug:"patterns-accessibility",suffix:"overview",viewMode:"story",section:"engineering",title:"Accessibility contract",description:"Every primitive guarantees a role, an accessible name, keyboard support, and aria-* wiring — asserted with axe-core in CI alongside the visual regression suite."},{slug:"tokens-color",suffix:"colors",viewMode:"story",section:"tokens",title:"Color",description:"Color tokens and scales."},{slug:"tokens-typography",suffix:"typography",viewMode:"story",section:"tokens",title:"Typography",description:"Font scales and text styles."},{slug:"patterns-accessibility",suffix:"overview",viewMode:"story",section:"patterns",title:"Accessibility",description:"Focus visibility, ARIA conventions, contrast, and keyboard support — the contract every primitive satisfies."},{slug:"patterns-composition-with-aschild",suffix:"button-as-link",viewMode:"story",section:"patterns",title:"Composition with asChild",description:"Rendering Button as a link, buttonVariants() on your own element, and Text polymorphism."},{slug:"patterns-form-composition",suffix:"basic-field",viewMode:"story",section:"patterns",title:"Form Composition",description:"Wiring Field and FieldSet: labels, descriptions, and error messages."},{slug:"patterns-form-states",suffix:"audit",viewMode:"story",section:"patterns",title:"Form States",description:"disabled / readOnly / error across every form control, audited side by side."},{slug:"patterns-layout",suffix:"flex-recipes",viewMode:"story",section:"patterns",title:"Layout",description:"Flex and grid recipes for arranging primitives on the page."},{slug:"patterns-testing",suffix:"overview",viewMode:"story",section:"patterns",title:"Testing",description:"data-testid pass-through and role-first queries for consumer test suites."}],Ge={title:"Welcome",parameters:{layout:"fullscreen"}},y=(t,o,n="docs",i="docs")=>{t.preventDefault();const a=`/${i}/${o}--${n}`,h=window.parent!==window?window.parent:window,x=new URL(h.location.href);x.searchParams.set("path",a),h.location.href=x.toString()},m=t=>({href:`/${t.viewMode}/${t.slug}--${t.suffix}`,onClick:o=>y(o,t.slug,t.suffix,t.viewMode)}),s=({name:t,description:o,children:n,storyPath:i})=>e.jsxs("a",{href:`/docs/${i}--docs`,onClick:a=>y(a,i),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",onClick:a=>{a.preventDefault(),a.stopPropagation()},children:n}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-vermillion group-hover:underline",children:t}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:o})]})]}),c=({title:t,description:o,href:n,onClick:i,external:a=!1})=>e.jsxs("a",{href:n,onClick:i,...a?{target:"_blank",rel:"noopener noreferrer"}:{},className:"group block h-full border border-border rounded-xl p-5 no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsxs("p",{className:"text-sm font-semibold text-vermillion group-hover:underline",children:[t,a&&e.jsxs(e.Fragment,{children:[e.jsx("span",{"aria-hidden":!0,className:"ml-1 text-foreground-muted",children:"↗"}),e.jsx("span",{className:"sr-only",children:" (opens in a new tab)"})]})]}),e.jsx("p",{className:"text-xs text-foreground-muted mt-1.5 leading-relaxed",children:o})]}),O={"tokens-color":e.jsx("div",{className:"flex gap-1",children:["bg-solid","bg-foreground-muted","bg-vermillion","bg-destructive"].map(t=>e.jsx("div",{className:`w-8 h-8 rounded-lg ${t}`},t))}),"tokens-typography":e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("span",{className:"text-2xl font-bold text-foreground",children:"Aa"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"Hanken Grotesk"})]})},W=({link:t})=>e.jsxs("a",{...m(t),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",children:O[t.slug]}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-vermillion group-hover:underline",children:t.title}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:t.description})]})]}),H=p.filter(t=>t.section==="engineering"),D=p.filter(t=>t.section==="tokens"),U=p.filter(t=>t.section==="patterns"),r={name:"Overview",render:()=>e.jsxs("div",{className:"max-w-4xl mx-auto px-8 py-16",children:[e.jsxs("div",{className:"mb-16",children:[e.jsx("h1",{className:"text-5xl font-bold text-foreground mb-3 tracking-tight",children:"Schatten"}),e.jsxs("p",{className:"text-lg text-foreground-muted leading-relaxed",children:["A design system inspired by Japanese calligraphy — ink on paper.",e.jsx("br",{}),"Built with React, Tailwind CSS, Radix UI, and class-variance-authority."]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"What is Schatten?"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:["Schatten is a React component library built on the conventions of"," ",e.jsx("a",{href:"https://ui.shadcn.com/",target:"_blank",rel:"noopener noreferrer",className:"text-info underline",children:"shadcn/ui"})," ","(Radix UI primitives + class-variance-authority + a ",e.jsx("code",{children:"cn"})," utility), restyled around a Japanese visual language — ",e.jsx("em",{children:"sumi"})," ink, ",e.jsx("em",{children:"washi"})," paper, and a vermillion seal — with a runtime seasonal theme system based on the twenty-four solar terms (",e.jsx("span",{className:"font-serif",children:"二十四節気"}),")."]}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed mt-3",children:["It is a portfolio and learning project. As much as a set of components, it is an exhibit of ",e.jsx("em",{children:"how"})," a design system is operated — the rules, the contracts, and the tests that keep it honest."]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-6",children:"Concept"}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Schatten — the beauty in shadows"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:[`"Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's`," ",e.jsx("em",{children:"In Praise of Shadows"})," (",e.jsx("span",{className:"font-serif",children:"陰翳礼讃"}),"), the system finds beauty in restraint rather than bold decoration — letting content stand forward through whitespace and muted tones."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Ink & Paper — the foundation"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:["The color system is built on the metaphor of ",e.jsx("em",{children:"sumi"})," (ink) on ",e.jsx("em",{children:"washi"})," ","(paper): the warmth of handmade paper, the depth of layered ink, and the vermillion seal of a calligrapher's signature. Light and dark modes are two sides of the same sheet."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Restraint as expression"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed",children:"A restrained UI is a deliberate choice to let the work speak. Minimal color, subtle transitions, and typographic precision create a quiet confidence."})]})]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-2",children:"Engineering discipline"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed mb-6",children:"The parts worth inspecting are less the components themselves than how they are governed. Four places to look:"}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx(c,{title:"Rule-driven operation",description:"Every architectural decision lives in a versioned contract under .claude/rules/ that both human and AI contributors follow — component API shapes, the token hierarchy, the a11y contract.",href:"https://github.com/yasmro/schatten/tree/main/.claude/rules",external:!0}),H.map(t=>e.jsx(c,{title:t.title,description:t.description,...m(t)},t.title))]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"UI Components"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsx(s,{name:"Button",description:"Triggers actions and events.",storyPath:"components-lv1-button",children:e.jsx(u,{children:"Button"})}),e.jsx(s,{name:"Badge",description:"Displays a status or label.",storyPath:"components-lv1-badge",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(l,{children:"Default"}),e.jsx(l,{variant:"success",appearance:"subtle",children:"Active"}),e.jsx(l,{appearance:"outline",children:"Outline"})]})}),e.jsx(s,{name:"Spinner",description:"Indicates a loading state.",storyPath:"components-lv1-spinner",children:e.jsx(j,{})}),e.jsx(s,{name:"Text",description:"Renders styled text content.",storyPath:"components-lv1-text",children:e.jsx(w,{variant:"heading",size:"lg",children:"Heading"})}),e.jsx(s,{name:"Tooltip",description:"Displays additional info on hover.",storyPath:"components-lv1-tooltip",children:e.jsx(C,{children:e.jsxs(N,{defaultOpen:!0,children:[e.jsx(k,{children:e.jsx(u,{variant:"secondary",children:"Hover me"})}),e.jsx(S,{children:"Helpful info"})]})})}),e.jsx(s,{name:"Toast",description:"Transient notifications with variants.",storyPath:"components-lv1-toast",children:e.jsxs("div",{className:"relative flex w-44 items-start gap-2 border border-success bg-success-subtle p-3 pr-8 text-xs text-success shadow-sm",children:[e.jsx(T,{className:"mt-0.5 size-4 shrink-0","aria-hidden":!0}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("div",{className:"font-semibold leading-tight",children:"Saved"}),e.jsx("div",{className:"leading-snug opacity-90",children:"Your changes have been saved."})]}),e.jsx("span",{"aria-hidden":!0,className:"absolute top-1 right-1 inline-flex size-5 items-center justify-center",children:"×"})]})}),e.jsx(s,{name:"Callout",description:"Inline contextual notices.",storyPath:"components-lv1-callout",children:e.jsx("div",{className:"w-48 scale-90",children:e.jsx(P,{variant:"info",title:"Heads up",children:"A beta feature."})})})]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"Form Components"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsx(s,{name:"Field",description:"Wraps inputs with label and error.",storyPath:"components-lv1-field",children:e.jsx(g,{label:"Email",description:"Your email address.",children:e.jsx(d,{placeholder:"you@example.com",className:"w-40"})})}),e.jsx(s,{name:"FieldSet",description:"Groups related form fields.",storyPath:"components-lv1-fieldset",children:e.jsx(I,{legend:"Contact",children:e.jsx(g,{label:"Email",children:e.jsx(d,{placeholder:"you@example.com",className:"w-40"})})})}),e.jsx(s,{name:"Input",description:"Accepts user text input.",storyPath:"components-lv1-input",children:e.jsx(d,{placeholder:"Enter text...",className:"w-40"})}),e.jsx(s,{name:"Textarea",description:"Multi-line text input.",storyPath:"components-lv1-textarea",children:e.jsx(A,{placeholder:"Write something...",className:"w-40",rows:2})}),e.jsx(s,{name:"Select",description:"Picks one option from a list.",storyPath:"components-lv1-select",children:e.jsxs(B,{defaultValue:"apple",children:[e.jsx(R,{className:"w-40",children:e.jsx(F,{})}),e.jsxs(E,{children:[e.jsx(f,{value:"apple",children:"Apple"}),e.jsx(f,{value:"banana",children:"Banana"})]})]})}),e.jsx(s,{name:"Checkbox",description:"Toggles a boolean value.",storyPath:"components-lv1-checkbox",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(v,{label:"Option A",defaultChecked:!0}),e.jsx(v,{label:"Option B"})]})}),e.jsx(s,{name:"Radio",description:"Selects one option from a group.",storyPath:"components-lv1-radio",children:e.jsxs(M,{defaultValue:"a",children:[e.jsx(b,{value:"a",label:"Option A"}),e.jsx(b,{value:"b",label:"Option B"})]})}),e.jsx(s,{name:"Switch",description:"Toggles between on and off.",storyPath:"components-lv1-switch",children:e.jsx(L,{label:"Enable",defaultChecked:!0})})]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"Tokens"}),e.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:D.map(t=>e.jsx(W,{link:t},t.slug))})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-2",children:"Patterns"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed mb-6",children:"Cross-component recipes and principles — how the primitives compose in practice."}),e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:U.map(t=>e.jsx(c,{title:t.title,description:t.description,...m(t)},t.title))})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Ve=["Overview"];export{r as Overview,Ve as __namedExportsOrder,Ge as default};
