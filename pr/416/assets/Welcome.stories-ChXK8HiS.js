import{i as e}from"./preload-helper-ylcYtS7T.js";import{t}from"./iframe-1y-Fr_Ay.js";import{t as n,ut as r}from"./lucide-react-DaSy76xh.js";import{t as i}from"./Badge-DrvOxNnh.js";import{r as a,t as o}from"./Button-DClcHBqh.js";import{t as s}from"./Spinner-CKLcmGCs.js";import{t as c}from"./Callout-DegeQPhV.js";import{t as l}from"./Button-BNqPI4cq.js";import{t as u}from"./Checkbox-SUFGrkPK.js";import{t as d}from"./Input-Bhn_L8_8.js";import{t as f}from"./Field-r1vls86J.js";import{i as p,n as m,r as h,t as g}from"./Tooltip-CFXuOtD7.js";import{n as _,t as v}from"./Radio-fLjNTKK9.js";import{c as y,i as b,n as x,s as S,t as C}from"./Select-BZkR-y7a.js";import{t as w}from"./Switch-3h7TqPsa.js";import{t as T}from"./Textarea-jUCN9eWG.js";import{t as E}from"./FieldSet-H975kLQ-.js";import{t as ee}from"./Text-5j5EpNtu.js";import{t as D}from"./Badge-CbOaMbYN.js";import{t as O}from"./Callout-CKh5ZPSA.js";import{a as k,i as A,n as j,o as M,r as N,t as P}from"./Tooltip-5C8SkmfF.js";import{n as F,r as I,t as L}from"./Select-DJmCefjQ.js";import{t as R}from"./Text-B4706a3o.js";var z,B=e((()=>{z=[{slug:`css-api-overview`,suffix:`reference`,viewMode:`story`,section:`engineering`,title:`Framework-agnostic CSS API`,description:`Components ship a .st-* BEM class API and a prebuilt stylesheet, so they render with plain HTML — no React, no Tailwind, no build step required on the consumer side.`},{slug:`theming-theme-audit`,suffix:`overview`,viewMode:`story`,section:`engineering`,title:`Mode × Special theming`,description:`Two independent theme axes — light/dark Mode × an exclusive seasonal Special — compose at runtime through CSS variables. See all 16 combinations verified side by side.`},{slug:`theming-seasonal-showcase`,suffix:`eight-seasons`,viewMode:`story`,section:`engineering`,title:`Seasonal showcase`,description:`Eight palettes based on the 24 solar terms re-tint every solid surface at runtime — see all eight seasons worn by buttons, badges, and a full dashboard mockup.`},{slug:`patterns-accessibility`,suffix:`overview`,viewMode:`story`,section:`engineering`,title:`Accessibility contract`,description:`Every primitive guarantees a role, an accessible name, keyboard support, and aria-* wiring — asserted with axe-core in CI alongside the visual regression suite.`},{slug:`tokens-color`,suffix:`colors`,viewMode:`story`,section:`tokens`,title:`Color`,description:`Color tokens and scales.`},{slug:`tokens-typography`,suffix:`typography`,viewMode:`story`,section:`tokens`,title:`Typography`,description:`Font scales and text styles.`},{slug:`patterns-accessibility`,suffix:`overview`,viewMode:`story`,section:`patterns`,title:`Accessibility`,description:`Focus visibility, ARIA conventions, contrast, and keyboard support — the contract every primitive satisfies.`},{slug:`patterns-composition-with-aschild`,suffix:`button-as-link`,viewMode:`story`,section:`patterns`,title:`Composition with asChild`,description:`Rendering Button as a link, buttonVariants() on your own element, and Text polymorphism.`},{slug:`patterns-form-composition`,suffix:`basic-field`,viewMode:`story`,section:`patterns`,title:`Form Composition`,description:`Wiring Field and FieldSet: labels, descriptions, and error messages.`},{slug:`patterns-form-states`,suffix:`audit`,viewMode:`story`,section:`patterns`,title:`Form States`,description:`disabled / readOnly / error across every form control, audited side by side.`},{slug:`patterns-layout`,suffix:`flex-recipes`,viewMode:`story`,section:`patterns`,title:`Layout`,description:`Flex and grid recipes for arranging primitives on the page.`},{slug:`patterns-testing`,suffix:`overview`,viewMode:`story`,section:`patterns`,title:`Testing`,description:`data-testid pass-through and role-first queries for consumer test suites.`}]})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{n(),D(),l(),O(),M(),I(),k(),F(),A(),L(),a(),N(),R(),j(),P(),B(),V=t(),H={title:`Welcome`,parameters:{layout:`fullscreen`}},U=(e,t,n=`docs`,r=`docs`)=>{e.preventDefault();let i=`/${r}/${t}--${n}`,a=window.parent===window?window:window.parent,o=new URL(a.location.href);o.searchParams.set(`path`,i),a.location.href=o.toString()},W=e=>({href:`/${e.viewMode}/${e.slug}--${e.suffix}`,onClick:t=>U(t,e.slug,e.suffix,e.viewMode)}),G=({name:e,description:t,children:n,storyPath:r})=>(0,V.jsxs)(`a`,{href:`/docs/${r}--docs`,onClick:e=>U(e,r),className:`group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md`,children:[(0,V.jsx)(`div`,{className:`flex items-center justify-center h-40 bg-surface`,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:n}),(0,V.jsxs)(`div`,{className:`px-4 py-3 border-t border-border`,children:[(0,V.jsx)(`p`,{className:`text-sm font-semibold text-vermillion group-hover:underline`,children:e}),(0,V.jsx)(`p`,{className:`text-xs text-foreground-muted mt-0.5`,children:t})]})]}),K=({title:e,description:t,href:n,onClick:r,external:i=!1})=>(0,V.jsxs)(`a`,{href:n,onClick:r,...i?{target:`_blank`,rel:`noopener noreferrer`}:{},className:`group block h-full border border-border rounded-xl p-5 no-underline transition-shadow duration-200 hover:shadow-md`,children:[(0,V.jsxs)(`p`,{className:`text-sm font-semibold text-vermillion group-hover:underline`,children:[e,i&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`span`,{"aria-hidden":!0,className:`ml-1 text-foreground-muted`,children:`↗`}),(0,V.jsx)(`span`,{className:`sr-only`,children:` (opens in a new tab)`})]})]}),(0,V.jsx)(`p`,{className:`text-xs text-foreground-muted mt-1.5 leading-relaxed`,children:t})]}),q={"tokens-color":(0,V.jsx)(`div`,{className:`flex gap-1`,children:[`bg-solid`,`bg-foreground-muted`,`bg-vermillion`,`bg-destructive`].map(e=>(0,V.jsx)(`div`,{className:`w-8 h-8 rounded-lg ${e}`},e))}),"tokens-typography":(0,V.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,V.jsx)(`span`,{className:`text-2xl font-bold text-foreground`,children:`Aa`}),(0,V.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:`Hanken Grotesk`})]})},J=({link:e})=>(0,V.jsxs)(`a`,{...W(e),className:`group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md`,children:[(0,V.jsx)(`div`,{className:`flex items-center justify-center h-40 bg-surface`,children:q[e.slug]}),(0,V.jsxs)(`div`,{className:`px-4 py-3 border-t border-border`,children:[(0,V.jsx)(`p`,{className:`text-sm font-semibold text-vermillion group-hover:underline`,children:e.title}),(0,V.jsx)(`p`,{className:`text-xs text-foreground-muted mt-0.5`,children:e.description})]})]}),Y=z.filter(e=>e.section===`engineering`),X=z.filter(e=>e.section===`tokens`),Z=z.filter(e=>e.section===`patterns`),Q={name:`Overview`,render:()=>(0,V.jsxs)(`div`,{className:`max-w-4xl mx-auto px-8 py-16`,children:[(0,V.jsxs)(`div`,{className:`mb-16`,children:[(0,V.jsx)(`h1`,{className:`text-5xl font-bold text-foreground mb-3 tracking-tight`,children:`Schatten`}),(0,V.jsxs)(`p`,{className:`text-lg text-foreground-muted leading-relaxed`,children:[`A design system inspired by Japanese calligraphy — ink on paper.`,(0,V.jsx)(`br`,{}),`Built with React, Tailwind CSS, Radix UI, and class-variance-authority.`]})]}),(0,V.jsxs)(`div`,{className:`mb-16`,children:[(0,V.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-4`,children:`What is Schatten?`}),(0,V.jsxs)(`p`,{className:`text-sm text-foreground-muted leading-relaxed`,children:[`Schatten is a React component library built on the conventions of`,` `,(0,V.jsx)(`a`,{href:`https://ui.shadcn.com/`,target:`_blank`,rel:`noopener noreferrer`,className:`text-info underline`,children:`shadcn/ui`}),` `,`(Radix UI primitives + class-variance-authority + a `,(0,V.jsx)(`code`,{children:`cn`}),` utility), restyled around a Japanese visual language — `,(0,V.jsx)(`em`,{children:`sumi`}),` ink, `,(0,V.jsx)(`em`,{children:`washi`}),` paper, and a vermillion seal — with a runtime seasonal theme system based on the twenty-four solar terms (`,(0,V.jsx)(`span`,{className:`font-serif`,children:`二十四節気`}),`).`]}),(0,V.jsxs)(`p`,{className:`text-sm text-foreground-muted leading-relaxed mt-3`,children:[`It is a portfolio and learning project. As much as a set of components, it is an exhibit of `,(0,V.jsx)(`em`,{children:`how`}),` a design system is operated — the rules, the contracts, and the tests that keep it honest.`]})]}),(0,V.jsxs)(`div`,{className:`mb-16`,children:[(0,V.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-6`,children:`Concept`}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`text-base font-semibold text-foreground mb-2`,children:`Schatten — the beauty in shadows`}),(0,V.jsxs)(`p`,{className:`text-sm text-foreground-muted leading-relaxed`,children:[`"Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's`,` `,(0,V.jsx)(`em`,{children:`In Praise of Shadows`}),` (`,(0,V.jsx)(`span`,{className:`font-serif`,children:`陰翳礼讃`}),`), the system finds beauty in restraint rather than bold decoration — letting content stand forward through whitespace and muted tones.`]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`text-base font-semibold text-foreground mb-2`,children:`Ink & Paper — the foundation`}),(0,V.jsxs)(`p`,{className:`text-sm text-foreground-muted leading-relaxed`,children:[`The color system is built on the metaphor of `,(0,V.jsx)(`em`,{children:`sumi`}),` (ink) on `,(0,V.jsx)(`em`,{children:`washi`}),` `,`(paper): the warmth of handmade paper, the depth of layered ink, and the vermillion seal of a calligrapher's signature. Light and dark modes are two sides of the same sheet.`]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`text-base font-semibold text-foreground mb-2`,children:`Restraint as expression`}),(0,V.jsx)(`p`,{className:`text-sm text-foreground-muted leading-relaxed`,children:`A restrained UI is a deliberate choice to let the work speak. Minimal color, subtle transitions, and typographic precision create a quiet confidence.`})]})]})]}),(0,V.jsxs)(`div`,{className:`mb-16`,children:[(0,V.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-2`,children:`Engineering discipline`}),(0,V.jsx)(`p`,{className:`text-sm text-foreground-muted leading-relaxed mb-6`,children:`The parts worth inspecting are less the components themselves than how they are governed. Four places to look:`}),(0,V.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-2`,children:[(0,V.jsx)(K,{title:`Rule-driven operation`,description:`Every architectural decision lives in a versioned contract under .claude/rules/ that both human and AI contributors follow — component API shapes, the token hierarchy, the a11y contract.`,href:`https://github.com/yasmro/schatten/tree/main/.claude/rules`,external:!0}),Y.map(e=>(0,V.jsx)(K,{title:e.title,description:e.description,...W(e)},e.title))]})]}),(0,V.jsxs)(`div`,{className:`mb-12`,children:[(0,V.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-4`,children:`UI Components`}),(0,V.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4`,children:[(0,V.jsx)(G,{name:`Button`,description:`Triggers actions and events.`,storyPath:`components-lv1-button`,children:(0,V.jsx)(o,{children:`Button`})}),(0,V.jsx)(G,{name:`Badge`,description:`Displays a status or label.`,storyPath:`components-lv1-badge`,children:(0,V.jsxs)(`div`,{className:`flex gap-2`,children:[(0,V.jsx)(i,{children:`Default`}),(0,V.jsx)(i,{variant:`success`,appearance:`subtle`,children:`Active`}),(0,V.jsx)(i,{appearance:`outline`,children:`Outline`})]})}),(0,V.jsx)(G,{name:`Spinner`,description:`Indicates a loading state.`,storyPath:`components-lv1-spinner`,children:(0,V.jsx)(s,{})}),(0,V.jsx)(G,{name:`Text`,description:`Renders styled text content.`,storyPath:`components-lv1-text`,children:(0,V.jsx)(ee,{variant:`heading`,size:`lg`,children:`Heading`})}),(0,V.jsx)(G,{name:`Tooltip`,description:`Displays additional info on hover.`,storyPath:`components-lv1-tooltip`,children:(0,V.jsx)(h,{children:(0,V.jsxs)(g,{defaultOpen:!0,children:[(0,V.jsx)(p,{children:(0,V.jsx)(o,{variant:`secondary`,children:`Hover me`})}),(0,V.jsx)(m,{children:`Helpful info`})]})})}),(0,V.jsx)(G,{name:`Toast`,description:`Transient notifications with variants.`,storyPath:`components-lv1-toast`,children:(0,V.jsxs)(`div`,{className:`relative flex w-44 items-start gap-2 border border-success bg-success-subtle p-3 pr-8 text-xs text-success shadow-sm`,children:[(0,V.jsx)(r,{className:`mt-0.5 size-4 shrink-0`,"aria-hidden":!0}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,V.jsx)(`div`,{className:`font-semibold leading-tight`,children:`Saved`}),(0,V.jsx)(`div`,{className:`leading-snug opacity-90`,children:`Your changes have been saved.`})]}),(0,V.jsx)(`span`,{"aria-hidden":!0,className:`absolute top-1 right-1 inline-flex size-5 items-center justify-center`,children:`×`})]})}),(0,V.jsx)(G,{name:`Callout`,description:`Inline contextual notices.`,storyPath:`components-lv1-callout`,children:(0,V.jsx)(`div`,{className:`w-48 scale-90`,children:(0,V.jsx)(c,{variant:`info`,title:`Heads up`,children:`A beta feature.`})})})]})]}),(0,V.jsxs)(`div`,{className:`mb-12`,children:[(0,V.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-4`,children:`Form Components`}),(0,V.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4`,children:[(0,V.jsx)(G,{name:`Field`,description:`Wraps inputs with label and error.`,storyPath:`components-lv1-field`,children:(0,V.jsx)(f,{label:`Email`,description:`Your email address.`,children:(0,V.jsx)(d,{placeholder:`you@example.com`,className:`w-40`})})}),(0,V.jsx)(G,{name:`FieldSet`,description:`Groups related form fields.`,storyPath:`components-lv1-fieldset`,children:(0,V.jsx)(E,{legend:`Contact`,children:(0,V.jsx)(f,{label:`Email`,children:(0,V.jsx)(d,{placeholder:`you@example.com`,className:`w-40`})})})}),(0,V.jsx)(G,{name:`Input`,description:`Accepts user text input.`,storyPath:`components-lv1-input`,children:(0,V.jsx)(d,{placeholder:`Enter text...`,className:`w-40`})}),(0,V.jsx)(G,{name:`Textarea`,description:`Multi-line text input.`,storyPath:`components-lv1-textarea`,children:(0,V.jsx)(T,{placeholder:`Write something...`,className:`w-40`,rows:2})}),(0,V.jsx)(G,{name:`Select`,description:`Picks one option from a list.`,storyPath:`components-lv1-select`,children:(0,V.jsxs)(C,{defaultValue:`apple`,children:[(0,V.jsx)(S,{className:`w-40`,children:(0,V.jsx)(y,{})}),(0,V.jsxs)(x,{children:[(0,V.jsx)(b,{value:`apple`,children:`Apple`}),(0,V.jsx)(b,{value:`banana`,children:`Banana`})]})]})}),(0,V.jsx)(G,{name:`Checkbox`,description:`Toggles a boolean value.`,storyPath:`components-lv1-checkbox`,children:(0,V.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,V.jsx)(u,{label:`Option A`,defaultChecked:!0}),(0,V.jsx)(u,{label:`Option B`})]})}),(0,V.jsx)(G,{name:`Radio`,description:`Selects one option from a group.`,storyPath:`components-lv1-radio`,children:(0,V.jsxs)(_,{defaultValue:`a`,children:[(0,V.jsx)(v,{value:`a`,label:`Option A`}),(0,V.jsx)(v,{value:`b`,label:`Option B`})]})}),(0,V.jsx)(G,{name:`Switch`,description:`Toggles between on and off.`,storyPath:`components-lv1-switch`,children:(0,V.jsx)(w,{label:`Enable`,defaultChecked:!0})})]})]}),(0,V.jsxs)(`div`,{className:`mb-12`,children:[(0,V.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-4`,children:`Tokens`}),(0,V.jsx)(`div`,{className:`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4`,children:X.map(e=>(0,V.jsx)(J,{link:e},e.slug))})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-2`,children:`Patterns`}),(0,V.jsx)(`p`,{className:`text-sm text-foreground-muted leading-relaxed mb-6`,children:`Cross-component recipes and principles — how the primitives compose in practice.`}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-2`,children:Z.map(e=>(0,V.jsx)(K,{title:e.title,description:e.description,...W(e)},e.title))})]})]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Overview`]}))();export{Q as Overview,$ as __namedExportsOrder,H as default};