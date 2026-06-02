import{i as e}from"./preload-helper-ChaSUgV0.js";import{t}from"./iframe-DK9TY03R.js";import{E as n,t as r}from"./lucide-react-DLEtKJ8w.js";import{t as i}from"./Badge-D_Hf2TXd.js";import{r as a,t as o}from"./Button-uALweSOg.js";import{t as s}from"./Spinner-nunFNp9m.js";import{t as c}from"./Callout-DJBBr4wR.js";import{t as l}from"./Button-BRcoreTz.js";import{t as u}from"./Checkbox-DlqdDrH1.js";import{t as d}from"./Input-CMbuWl7o.js";import{t as f}from"./Field-CWQn-d7J.js";import{i as p,n as m,r as h,t as g}from"./Tooltip-BbMOyiRK.js";import{n as _,t as v}from"./Radio-CNeVsnGe.js";import{c as y,i as b,n as x,s as S,t as C}from"./Select-Bj0S47td.js";import{t as w}from"./Switch-YoqLCAmt.js";import{t as T}from"./Textarea-D5yzixXm.js";import{t as E}from"./FieldSet-z0AfgnGu.js";import{t as D}from"./Text-DJ5gcrz8.js";import{t as O}from"./Badge-CJ0irOVc.js";import{t as k}from"./Callout-CtG9oCvX.js";import{a as A,c as j,i as M,l as N,n as P,o as F,r as I,s as L,t as R}from"./Tooltip-umn5AcX8.js";import{t as z}from"./Text-ChnL2INr.js";var B,V,H,U,W,G;e((()=>{r(),O(),l(),k(),N(),j(),L(),F(),A(),M(),a(),I(),z(),P(),R(),B=t(),V={title:`Welcome`,parameters:{layout:`fullscreen`}},H=(e,t,n=`docs`)=>{e.preventDefault();let r=`/docs/${t}--${n}`,i=window.parent===window?window:window.parent,a=new URL(i.location.href);a.searchParams.set(`path`,r),i.location.href=a.toString()},U=({name:e,description:t,children:n,storyPath:r})=>(0,B.jsxs)(`a`,{href:`/docs/${r}--docs`,onClick:e=>H(e,r),className:`group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md`,children:[(0,B.jsx)(`div`,{className:`flex items-center justify-center h-40 bg-surface`,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:n}),(0,B.jsxs)(`div`,{className:`px-4 py-3 border-t border-border`,children:[(0,B.jsx)(`p`,{className:`text-sm font-semibold text-vermillion group-hover:underline`,children:e}),(0,B.jsx)(`p`,{className:`text-xs text-foreground-muted mt-0.5`,children:t})]})]}),W={name:`Overview`,render:()=>(0,B.jsxs)(`div`,{className:`max-w-4xl mx-auto px-8 py-16`,children:[(0,B.jsxs)(`div`,{className:`mb-16`,children:[(0,B.jsx)(`h1`,{className:`text-5xl font-bold text-foreground mb-3 tracking-tight`,children:`Schatten`}),(0,B.jsxs)(`p`,{className:`text-lg text-foreground-muted leading-relaxed`,children:[`A design system inspired by Japanese calligraphy — ink on paper.`,(0,B.jsx)(`br`,{}),`Built with React, Tailwind CSS, Radix UI, and class-variance-authority.`]})]}),(0,B.jsxs)(`div`,{className:`mb-16`,children:[(0,B.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-6`,children:`Concept`}),(0,B.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`h3`,{className:`text-base font-semibold text-foreground mb-2`,children:`Schatten — the beauty in shadows`}),(0,B.jsxs)(`p`,{className:`text-sm text-foreground-muted leading-relaxed`,children:[`"Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's`,` `,(0,B.jsx)(`em`,{children:`In Praise of Shadows`}),` (`,(0,B.jsx)(`span`,{className:`font-serif`,children:`陰翳礼讃`}),`), this design system finds beauty not in light, but in the subtle interplay of shadow and restraint. Rather than commanding attention with bold decoration and animation, we let the content itself stand forward — through whitespace, muted tones, and quiet refinement.`]})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`h3`,{className:`text-base font-semibold text-foreground mb-2`,children:`Ink & Paper — the foundation`}),(0,B.jsxs)(`p`,{className:`text-sm text-foreground-muted leading-relaxed`,children:[`The color system is built on the metaphor of `,(0,B.jsx)(`em`,{children:`sumi`}),` (ink) on `,(0,B.jsx)(`em`,{children:`washi`}),` `,`(paper). The warmth of handmade paper, the depth of layered ink, and the vermillion seal of a calligrapher's signature — these are not decorations but the DNA of every token and component. Light and dark modes are simply two sides of the same sheet.`]})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`h3`,{className:`text-base font-semibold text-foreground mb-2`,children:`Restraint as expression`}),(0,B.jsx)(`p`,{className:`text-sm text-foreground-muted leading-relaxed`,children:`A restrained UI is not a lack of design — it is a deliberate choice to let the work speak. Minimal color, subtle transitions, and typographic precision create a quiet confidence. The design recedes so the content can resonate.`})]})]})]}),(0,B.jsxs)(`div`,{className:`mb-12`,children:[(0,B.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-4`,children:`UI Components`}),(0,B.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4`,children:[(0,B.jsx)(U,{name:`Button`,description:`Triggers actions and events.`,storyPath:`components-lv1-button`,children:(0,B.jsx)(o,{children:`Button`})}),(0,B.jsx)(U,{name:`Badge`,description:`Displays a status or label.`,storyPath:`components-lv1-badge`,children:(0,B.jsxs)(`div`,{className:`flex gap-2`,children:[(0,B.jsx)(i,{children:`Default`}),(0,B.jsx)(i,{variant:`success`,appearance:`subtle`,children:`Active`}),(0,B.jsx)(i,{appearance:`outline`,children:`Outline`})]})}),(0,B.jsx)(U,{name:`Spinner`,description:`Indicates a loading state.`,storyPath:`components-lv1-spinner`,children:(0,B.jsx)(s,{})}),(0,B.jsx)(U,{name:`Text`,description:`Renders styled text content.`,storyPath:`components-lv1-text`,children:(0,B.jsx)(D,{variant:`heading`,size:`lg`,children:`Heading`})}),(0,B.jsx)(U,{name:`Tooltip`,description:`Displays additional info on hover.`,storyPath:`components-lv1-tooltip`,children:(0,B.jsx)(h,{children:(0,B.jsxs)(g,{defaultOpen:!0,children:[(0,B.jsx)(p,{children:(0,B.jsx)(o,{variant:`secondary`,children:`Hover me`})}),(0,B.jsx)(m,{children:`Helpful info`})]})})}),(0,B.jsx)(U,{name:`Toast`,description:`Transient notifications with variants.`,storyPath:`components-lv1-toast`,children:(0,B.jsxs)(`div`,{className:`relative flex w-44 items-start gap-2 border border-success bg-success-subtle p-3 pr-8 text-xs text-success shadow-sm`,children:[(0,B.jsx)(n,{className:`mt-0.5 size-4 shrink-0`,"aria-hidden":!0}),(0,B.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,B.jsx)(`div`,{className:`font-semibold leading-tight`,children:`Saved`}),(0,B.jsx)(`div`,{className:`leading-snug opacity-90`,children:`Your changes have been saved.`})]}),(0,B.jsx)(`span`,{"aria-hidden":!0,className:`absolute top-1 right-1 inline-flex size-5 items-center justify-center`,children:`×`})]})}),(0,B.jsx)(U,{name:`Callout`,description:`Inline contextual notices.`,storyPath:`components-lv1-callout`,children:(0,B.jsx)(`div`,{className:`w-48 scale-90`,children:(0,B.jsx)(c,{variant:`info`,title:`Heads up`,children:`A beta feature.`})})})]})]}),(0,B.jsxs)(`div`,{className:`mb-12`,children:[(0,B.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-4`,children:`Form Components`}),(0,B.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4`,children:[(0,B.jsx)(U,{name:`Field`,description:`Wraps inputs with label and error.`,storyPath:`components-lv1-field`,children:(0,B.jsx)(f,{label:`Email`,description:`Your email address.`,children:(0,B.jsx)(d,{placeholder:`you@example.com`,className:`w-40`})})}),(0,B.jsx)(U,{name:`FieldSet`,description:`Groups related form fields.`,storyPath:`components-lv1-fieldset`,children:(0,B.jsx)(E,{legend:`Contact`,children:(0,B.jsx)(f,{label:`Email`,children:(0,B.jsx)(d,{placeholder:`you@example.com`,className:`w-40`})})})}),(0,B.jsx)(U,{name:`Input`,description:`Accepts user text input.`,storyPath:`components-lv1-input`,children:(0,B.jsx)(d,{placeholder:`Enter text...`,className:`w-40`})}),(0,B.jsx)(U,{name:`Textarea`,description:`Multi-line text input.`,storyPath:`components-lv1-textarea`,children:(0,B.jsx)(T,{placeholder:`Write something...`,className:`w-40`,rows:2})}),(0,B.jsx)(U,{name:`Select`,description:`Picks one option from a list.`,storyPath:`components-lv1-select`,children:(0,B.jsxs)(C,{defaultValue:`apple`,children:[(0,B.jsx)(S,{className:`w-40`,children:(0,B.jsx)(y,{})}),(0,B.jsxs)(x,{children:[(0,B.jsx)(b,{value:`apple`,children:`Apple`}),(0,B.jsx)(b,{value:`banana`,children:`Banana`})]})]})}),(0,B.jsx)(U,{name:`Checkbox`,description:`Toggles a boolean value.`,storyPath:`components-lv1-checkbox`,children:(0,B.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,B.jsx)(u,{label:`Option A`,defaultChecked:!0}),(0,B.jsx)(u,{label:`Option B`})]})}),(0,B.jsx)(U,{name:`Radio`,description:`Selects one option from a group.`,storyPath:`components-lv1-radio`,children:(0,B.jsxs)(_,{defaultValue:`a`,children:[(0,B.jsx)(v,{value:`a`,label:`Option A`}),(0,B.jsx)(v,{value:`b`,label:`Option B`})]})}),(0,B.jsx)(U,{name:`Switch`,description:`Toggles between on and off.`,storyPath:`components-lv1-switch`,children:(0,B.jsx)(w,{label:`Enable`,defaultChecked:!0})})]})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`h2`,{className:`text-xl font-bold text-foreground mb-4`,children:`Foundation`}),(0,B.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4`,children:[(0,B.jsxs)(`a`,{href:`/docs/tokens-color--colors`,onClick:e=>H(e,`tokens-color`,`colors`),className:`group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md`,children:[(0,B.jsx)(`div`,{className:`flex items-center justify-center h-40 bg-surface`,children:(0,B.jsx)(`div`,{className:`flex gap-1`,children:[`bg-solid`,`bg-foreground-muted`,`bg-vermillion`,`bg-destructive`].map(e=>(0,B.jsx)(`div`,{className:`w-8 h-8 rounded-lg ${e}`},e))})}),(0,B.jsxs)(`div`,{className:`px-4 py-3 border-t border-border`,children:[(0,B.jsx)(`p`,{className:`text-sm font-semibold text-vermillion group-hover:underline`,children:`Color`}),(0,B.jsx)(`p`,{className:`text-xs text-foreground-muted mt-0.5`,children:`Color tokens and scales.`})]})]}),(0,B.jsxs)(`a`,{href:`/docs/tokens-typography--typography`,onClick:e=>H(e,`tokens-typography`,`typography`),className:`group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md`,children:[(0,B.jsx)(`div`,{className:`flex items-center justify-center h-40 bg-surface`,children:(0,B.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,B.jsx)(`span`,{className:`text-2xl font-bold text-foreground`,children:`Aa`}),(0,B.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:`Hanken Grotesk`})]})}),(0,B.jsxs)(`div`,{className:`px-4 py-3 border-t border-border`,children:[(0,B.jsx)(`p`,{className:`text-sm font-semibold text-vermillion group-hover:underline`,children:`Typography`}),(0,B.jsx)(`p`,{className:`text-xs text-foreground-muted mt-0.5`,children:`Font scales and text styles.`})]})]})]})]})]})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Schatten</h1>
        <p className="text-lg text-foreground-muted leading-relaxed">
          A design system inspired by Japanese calligraphy — ink on paper.
          <br />
          Built with React, Tailwind CSS, Radix UI, and class-variance-authority.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-xl font-bold text-foreground mb-6">Concept</h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Schatten — the beauty in shadows
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              "Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's{' '}
              <em>In Praise of Shadows</em> (<span className="font-serif">陰翳礼讃</span>), this
              design system finds beauty not in light, but in the subtle interplay of shadow and
              restraint. Rather than commanding attention with bold decoration and animation, we let
              the content itself stand forward — through whitespace, muted tones, and quiet
              refinement.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Ink &amp; Paper — the foundation
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              The color system is built on the metaphor of <em>sumi</em> (ink) on <em>washi</em>{' '}
              (paper). The warmth of handmade paper, the depth of layered ink, and the vermillion
              seal of a calligrapher's signature — these are not decorations but the DNA of every
              token and component. Light and dark modes are simply two sides of the same sheet.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Restraint as expression
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              A restrained UI is not a lack of design — it is a deliberate choice to let the work
              speak. Minimal color, subtle transitions, and typographic precision create a quiet
              confidence. The design recedes so the content can resonate.
            </p>
          </div>
        </div>
      </div>

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

      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Foundation</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <a href="/docs/tokens-color--colors" onClick={e => navigateToStory(e, 'tokens-color', 'colors')} className="group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md">
            <div className="flex items-center justify-center h-40 bg-surface">
              <div className="flex gap-1">
                {['bg-solid', 'bg-foreground-muted', 'bg-vermillion', 'bg-destructive'].map(c => <div key={c} className={\`w-8 h-8 rounded-lg \${c}\`} />)}
              </div>
            </div>
            <div className="px-4 py-3 border-t border-border">
              <p className="text-sm font-semibold text-vermillion group-hover:underline">Color</p>
              <p className="text-xs text-foreground-muted mt-0.5">Color tokens and scales.</p>
            </div>
          </a>

          <a href="/docs/tokens-typography--typography" onClick={e => navigateToStory(e, 'tokens-typography', 'typography')} className="group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md">
            <div className="flex items-center justify-center h-40 bg-surface">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-foreground">Aa</span>
                <span className="text-xs text-foreground-muted">Hanken Grotesk</span>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-border">
              <p className="text-sm font-semibold text-vermillion group-hover:underline">
                Typography
              </p>
              <p className="text-xs text-foreground-muted mt-0.5">Font scales and text styles.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
}`,...W.parameters?.docs?.source}}},G=[`Overview`]}))();export{W as Overview,G as __namedExportsOrder,V as default};