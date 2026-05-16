import{j as e}from"./iframe-CRVqgCh5.js";import{B as l}from"./Badge-qdJeXXho.js";import{B as p}from"./Button-DMQbaL8H.js";import{C as j}from"./Callout-BcQH_2KC.js";import{C as h}from"./Checkbox-DR3XimHJ.js";import"./field-CECQjYUz.js";import{F as x}from"./Field-DW_5tgZt.js";import{F as y}from"./FieldSet-Cxb7W01F.js";import{I as d}from"./Input-CophGEt3.js";import{R as C,a as u}from"./Radio-ZcT2pU3V.js";import{S as N,a as w,b as k,c as T,d as g}from"./Select-jBDMARL-.js";import{S}from"./Spinner-BJBST7wW.js";import{S as P}from"./Switch-DA11kSYb.js";import{T as B}from"./Text-taq_7zua.js";import{T as I}from"./Textarea-Bmp3VWG8.js";import{T as R,a as A,b as F,c as O}from"./Tooltip-Dp6bunXo.js";import{C as D}from"./index-s0GHNewU.js";import"./preload-helper-BfekXrUv.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./index-F_fDr6gA.js";import"./index-DyAUIyes.js";import"./index-B7-slClJ.js";import"./index-DTK-Hbux.js";import"./index-6awsK2Gh.js";import"./index-oTMY4wFW.js";import"./index-DaKg2i99.js";import"./index-DAQBrbi4.js";import"./index-dBEe1IS5.js";import"./index-DrI9NIOw.js";import"./index-Df27j25P.js";import"./index-CVqA3UEZ.js";import"./Combination-DKaDLEra.js";import"./index-B4LaJfHS.js";import"./index-CsKBBWB_.js";import"./chevron-up-BfnFeuoV.js";const ve={title:"Welcome",parameters:{layout:"fullscreen"}},c=(o,r,i="docs")=>{o.preventDefault();const s=`/docs/${r}--${i}`,a=window.parent!==window?window.parent:window,m=new URL(a.location.href);m.searchParams.set("path",s),a.location.href=m.toString()},t=({name:o,description:r,children:i,storyPath:s})=>e.jsxs("a",{href:`/docs/${s}--docs`,onClick:a=>c(a,s),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",onClick:a=>{a.preventDefault(),a.stopPropagation()},children:i}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-accent group-hover:underline",children:o}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:r})]})]}),n={name:"Overview",render:()=>e.jsxs("div",{className:"max-w-4xl mx-auto px-8 py-16",children:[e.jsxs("div",{className:"mb-16",children:[e.jsx("h1",{className:"text-5xl font-bold text-foreground mb-3 tracking-tight",children:"Schatten"}),e.jsxs("p",{className:"text-lg text-foreground-muted leading-relaxed",children:["A design system inspired by Japanese calligraphy — ink on paper.",e.jsx("br",{}),"Built with React, Tailwind CSS, Radix UI, and class-variance-authority."]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-6",children:"Concept"}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Schatten — the beauty in shadows"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:[`"Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's`," ",e.jsx("em",{children:"In Praise of Shadows"})," (",e.jsx("span",{className:"font-serif",children:"陰翳礼讃"}),"), this design system finds beauty not in light, but in the subtle interplay of shadow and restraint. Rather than commanding attention with bold decoration and animation, we let the content itself stand forward — through whitespace, muted tones, and quiet refinement."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Ink & Paper — the foundation"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:["The color system is built on the metaphor of ",e.jsx("em",{children:"sumi"})," (ink) on ",e.jsx("em",{children:"washi"})," ","(paper). The warmth of handmade paper, the depth of layered ink, and the vermillion seal of a calligrapher's signature — these are not decorations but the DNA of every token and component. Light and dark modes are simply two sides of the same sheet."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Restraint as expression"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed",children:"A restrained UI is not a lack of design — it is a deliberate choice to let the work speak. Minimal color, subtle transitions, and typographic precision create a quiet confidence. The design recedes so the content can resonate."})]})]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"UI Components"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsx(t,{name:"Button",description:"Triggers actions and events.",storyPath:"components-lv1-button",children:e.jsx(p,{children:"Button"})}),e.jsx(t,{name:"Badge",description:"Displays a status or label.",storyPath:"components-lv1-badge",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(l,{children:"Default"}),e.jsx(l,{variant:"success",treatment:"subtle",children:"Active"}),e.jsx(l,{treatment:"outline",children:"Outline"})]})}),e.jsx(t,{name:"Spinner",description:"Indicates a loading state.",storyPath:"components-lv1-spinner",children:e.jsx(S,{})}),e.jsx(t,{name:"Text",description:"Renders styled text content.",storyPath:"components-lv1-text",children:e.jsx(B,{variant:"heading",size:"lg",children:"Heading"})}),e.jsx(t,{name:"Tooltip",description:"Displays additional info on hover.",storyPath:"components-lv1-tooltip",children:e.jsx(R,{children:e.jsxs(A,{defaultOpen:!0,children:[e.jsx(F,{children:e.jsx(p,{variant:"secondary",children:"Hover me"})}),e.jsx(O,{children:"Helpful info"})]})})}),e.jsx(t,{name:"Toast",description:"Transient notifications with variants.",storyPath:"components-lv1-toast",children:e.jsxs("div",{className:"relative flex w-44 items-start gap-2 border border-success bg-success-subtle p-3 pr-8 text-xs text-success shadow-sm",children:[e.jsx(D,{className:"mt-0.5 size-4 shrink-0","aria-hidden":!0}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("div",{className:"font-semibold leading-tight",children:"Saved"}),e.jsx("div",{className:"leading-snug opacity-90",children:"Your changes have been saved."})]}),e.jsx("span",{"aria-hidden":!0,className:"absolute top-1 right-1 inline-flex size-5 items-center justify-center",children:"×"})]})}),e.jsx(t,{name:"Callout",description:"Inline contextual notices.",storyPath:"components-lv1-callout",children:e.jsx("div",{className:"w-48 scale-90",children:e.jsx(j,{variant:"info",title:"Heads up",children:"A beta feature."})})})]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"Form Components"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsx(t,{name:"Field",description:"Wraps inputs with label and error.",storyPath:"components-lv1-field",children:e.jsx(x,{label:"Email",description:"Your email address.",children:e.jsx(d,{placeholder:"you@example.com",className:"w-40"})})}),e.jsx(t,{name:"FieldSet",description:"Groups related form fields.",storyPath:"components-lv1-fieldset",children:e.jsx(y,{legend:"Contact",children:e.jsx(x,{label:"Email",children:e.jsx(d,{placeholder:"you@example.com",className:"w-40"})})})}),e.jsx(t,{name:"Input",description:"Accepts user text input.",storyPath:"components-lv1-input",children:e.jsx(d,{placeholder:"Enter text...",className:"w-40"})}),e.jsx(t,{name:"Textarea",description:"Multi-line text input.",storyPath:"components-lv1-textarea",children:e.jsx(I,{placeholder:"Write something...",className:"w-40",rows:2})}),e.jsx(t,{name:"Select",description:"Picks one option from a list.",storyPath:"components-lv1-select",children:e.jsxs(N,{defaultValue:"apple",children:[e.jsx(w,{className:"w-40",children:e.jsx(k,{})}),e.jsxs(T,{children:[e.jsx(g,{value:"apple",children:"Apple"}),e.jsx(g,{value:"banana",children:"Banana"})]})]})}),e.jsx(t,{name:"Checkbox",description:"Toggles a boolean value.",storyPath:"components-lv1-checkbox",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(h,{label:"Option A",defaultChecked:!0}),e.jsx(h,{label:"Option B"})]})}),e.jsx(t,{name:"Radio",description:"Selects one option from a group.",storyPath:"components-lv1-radio",children:e.jsxs(C,{defaultValue:"a",children:[e.jsx(u,{value:"a",label:"Option A"}),e.jsx(u,{value:"b",label:"Option B"})]})}),e.jsx(t,{name:"Switch",description:"Toggles between on and off.",storyPath:"components-lv1-switch",children:e.jsx(P,{label:"Enable",defaultChecked:!0})})]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"Foundation"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsxs("a",{href:"/docs/foundation-color--colors",onClick:o=>c(o,"foundation-color","colors"),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",children:e.jsx("div",{className:"flex gap-1",children:["bg-solid","bg-foreground-muted","bg-accent","bg-destructive"].map(o=>e.jsx("div",{className:`w-8 h-8 rounded-lg ${o}`},o))})}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-accent group-hover:underline",children:"Color"}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:"Color tokens and scales."})]})]}),e.jsxs("a",{href:"/docs/foundation-typography--typography",onClick:o=>c(o,"foundation-typography","typography"),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",children:e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("span",{className:"text-2xl font-bold text-foreground",children:"Aa"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"Hanken Grotesk"})]})}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-accent group-hover:underline",children:"Typography"}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:"Font scales and text styles."})]})]})]})]})]})};var f,v,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
              <Badge variant="success" treatment="subtle">
                Active
              </Badge>
              <Badge treatment="outline">Outline</Badge>
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
          <a href="/docs/foundation-color--colors" onClick={e => navigateToStory(e, 'foundation-color', 'colors')} className="group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md">
            <div className="flex items-center justify-center h-40 bg-surface">
              <div className="flex gap-1">
                {['bg-solid', 'bg-foreground-muted', 'bg-accent', 'bg-destructive'].map(c => <div key={c} className={\`w-8 h-8 rounded-lg \${c}\`} />)}
              </div>
            </div>
            <div className="px-4 py-3 border-t border-border">
              <p className="text-sm font-semibold text-accent group-hover:underline">Color</p>
              <p className="text-xs text-foreground-muted mt-0.5">Color tokens and scales.</p>
            </div>
          </a>

          <a href="/docs/foundation-typography--typography" onClick={e => navigateToStory(e, 'foundation-typography', 'typography')} className="group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md">
            <div className="flex items-center justify-center h-40 bg-surface">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-foreground">Aa</span>
                <span className="text-xs text-foreground-muted">Hanken Grotesk</span>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-border">
              <p className="text-sm font-semibold text-accent group-hover:underline">Typography</p>
              <p className="text-xs text-foreground-muted mt-0.5">Font scales and text styles.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const be=["Overview"];export{n as Overview,be as __namedExportsOrder,ve as default};
