import{j as e}from"./iframe-BDWjk_1X.js";import{B as c}from"./Badge-Cvkw1Xff.js";import{B as f}from"./Button-BytO_oIc.js";import{C as m}from"./Checkbox-CIlhnD_B.js";import{I as b}from"./Input-DTjkRR9_.js";import{R as v,a as p}from"./Radio-DOlMiKQ9.js";import{S as y,a as N,b as j,c as w,d as h}from"./Select-D16H2azj.js";import{S as C}from"./Spinner-DOgkhTOk.js";import{T as k}from"./Text-D3_3tscF.js";import{T as S}from"./Textarea-BdlQ8fwC.js";import"./preload-helper-rrWMIbwl.js";import"./index-C6zxpza2.js";import"./chevron-up-CzSSKqra.js";import"./index-DiZijfAW.js";import"./index-CdYvrJIS.js";import"./index-CrYuq2pJ.js";import"./index-BqcUVZl7.js";import"./index-oSU5tTE5.js";import"./index-C9LpceEc.js";import"./index-BFMoT9MZ.js";const W={title:"Welcome",parameters:{layout:"fullscreen"}},d=(t,r,i="docs")=>{t.preventDefault();const s=`/docs/${r}--${i}`,o=window.parent!==window?window.parent:window,l=new URL(o.location.href);l.searchParams.set("path",s),o.location.href=l.toString()},a=({name:t,description:r,children:i,storyPath:s})=>e.jsxs("a",{href:`/docs/${s}--docs`,onClick:o=>d(o,s),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",onClick:o=>{o.preventDefault(),o.stopPropagation()},children:i}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-accent group-hover:underline",children:t}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:r})]})]}),n={name:"Overview",render:()=>e.jsxs("div",{className:"max-w-4xl mx-auto px-8 py-16",children:[e.jsxs("div",{className:"mb-16",children:[e.jsx("h1",{className:"text-5xl font-bold text-foreground mb-3 tracking-tight",children:"Schatten"}),e.jsxs("p",{className:"text-lg text-foreground-muted leading-relaxed",children:["A design system inspired by Japanese calligraphy — ink on paper.",e.jsx("br",{}),"Built with React, Tailwind CSS, Radix UI, and class-variance-authority."]})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-6",children:"Concept"}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Schatten — the beauty in shadows"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:[`"Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's`," ",e.jsx("em",{children:"In Praise of Shadows"})," (",e.jsx("span",{className:"font-serif",children:"陰翳礼讃"}),"), this design system finds beauty not in light, but in the subtle interplay of shadow and restraint. Rather than commanding attention with bold decoration and animation, we let the content itself stand forward — through whitespace, muted tones, and quiet refinement."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Ink & Paper — the foundation"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed",children:["The color system is built on the metaphor of ",e.jsx("em",{children:"sumi"})," (ink) on ",e.jsx("em",{children:"washi"})," ","(paper). The warmth of handmade paper, the depth of layered ink, and the vermillion seal of a calligrapher's signature — these are not decorations but the DNA of every token and component. Light and dark modes are simply two sides of the same sheet."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"Restraint as expression"}),e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed",children:"A restrained UI is not a lack of design — it is a deliberate choice to let the work speak. Minimal color, subtle transitions, and typographic precision create a quiet confidence. The design recedes so the content can resonate."})]})]})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"Components"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsx(a,{name:"Button",description:"Triggers actions and events.",storyPath:"components-lv1-button",children:e.jsx(f,{children:"Button"})}),e.jsx(a,{name:"Badge",description:"Displays a status or label.",storyPath:"components-lv1-badge",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(c,{children:"Default"}),e.jsx(c,{variant:"outline",children:"Outline"})]})}),e.jsx(a,{name:"Spinner",description:"Indicates a loading state.",storyPath:"components-lv1-spinner",children:e.jsx(C,{})}),e.jsx(a,{name:"Text",description:"Renders styled text content.",storyPath:"components-lv1-text",children:e.jsx(k,{variant:"heading",size:"lg",children:"Heading"})}),e.jsx(a,{name:"Input",description:"Accepts user text input.",storyPath:"components-lv1-input",children:e.jsx(b,{placeholder:"Enter text...",className:"w-40"})}),e.jsx(a,{name:"Textarea",description:"Multi-line text input.",storyPath:"components-lv1-textarea",children:e.jsx(S,{placeholder:"Write something...",className:"w-40",rows:2})}),e.jsx(a,{name:"Checkbox",description:"Toggles a boolean value.",storyPath:"components-lv1-checkbox",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(m,{label:"Option A",defaultChecked:!0}),e.jsx(m,{label:"Option B"})]})}),e.jsx(a,{name:"Select",description:"Picks one option from a list.",storyPath:"components-lv1-select",children:e.jsxs(y,{defaultValue:"apple",children:[e.jsx(N,{className:"w-40",children:e.jsx(j,{})}),e.jsxs(w,{children:[e.jsx(h,{value:"apple",children:"Apple"}),e.jsx(h,{value:"banana",children:"Banana"})]})]})}),e.jsx(a,{name:"Radio",description:"Selects one option from a group.",storyPath:"components-lv1-radio",children:e.jsxs(v,{defaultValue:"a",children:[e.jsx(p,{value:"a",label:"Option A"}),e.jsx(p,{value:"b",label:"Option B"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-foreground mb-4",children:"Foundation"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[e.jsxs("a",{href:"/docs/foundation-color--colors",onClick:t=>d(t,"foundation-color","colors"),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",children:e.jsx("div",{className:"flex gap-1",children:["bg-solid","bg-foreground-muted","bg-accent","bg-destructive"].map(t=>e.jsx("div",{className:`w-8 h-8 rounded-lg ${t}`},t))})}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-accent group-hover:underline",children:"Color"}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:"Color tokens and scales."})]})]}),e.jsxs("a",{href:"/docs/foundation-typography--typography",onClick:t=>d(t,"foundation-typography","typography"),className:"group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md",children:[e.jsx("div",{className:"flex items-center justify-center h-40 bg-surface",children:e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("span",{className:"text-2xl font-bold text-foreground",children:"Aa"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"Hanken Grotesk"})]})}),e.jsxs("div",{className:"px-4 py-3 border-t border-border",children:[e.jsx("p",{className:"text-sm font-semibold text-accent group-hover:underline",children:"Typography"}),e.jsx("p",{className:"text-xs text-foreground-muted mt-0.5",children:"Font scales and text styles."})]})]})]})]})]})};var x,u,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        <h2 className="text-xl font-bold text-foreground mb-4">Components</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <ComponentCard name="Button" description="Triggers actions and events." storyPath="components-lv1-button">
            <Button>Button</Button>
          </ComponentCard>

          <ComponentCard name="Badge" description="Displays a status or label." storyPath="components-lv1-badge">
            <div className="flex gap-2">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
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

          <ComponentCard name="Input" description="Accepts user text input." storyPath="components-lv1-input">
            <Input placeholder="Enter text..." className="w-40" />
          </ComponentCard>

          <ComponentCard name="Textarea" description="Multi-line text input." storyPath="components-lv1-textarea">
            <Textarea placeholder="Write something..." className="w-40" rows={2} />
          </ComponentCard>

          <ComponentCard name="Checkbox" description="Toggles a boolean value." storyPath="components-lv1-checkbox">
            <div className="flex flex-col gap-2">
              <Checkbox label="Option A" defaultChecked />
              <Checkbox label="Option B" />
            </div>
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

          <ComponentCard name="Radio" description="Selects one option from a group." storyPath="components-lv1-radio">
            <RadioGroup defaultValue="a">
              <Radio value="a" label="Option A" />
              <Radio value="b" label="Option B" />
            </RadioGroup>
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
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const _=["Overview"];export{n as Overview,_ as __namedExportsOrder,W as default};
