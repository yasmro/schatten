import{j as e}from"./iframe-71dHWPKp.js";import{S as a}from"./Separator-UnnAS2-J.js";import"./preload-helper-LCxwLRn0.js";import"./index-CU-iw7PG.js";import"./index-CBE7_fKK.js";import"./index-DBPiowu7.js";import"./index-EANs__HW.js";import"./utils-HnQPFlDo.js";/* empty css                  */const u={title:"Components/lv1/Separator",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{description:"Orientation of the separator.",control:"select",options:["horizontal","vertical"],table:{type:{summary:'"horizontal" | "vertical"'},defaultValue:{summary:"horizontal"}}},decorative:{description:'When true, the separator is purely visual and hidden from assistive technologies. When false, it is exposed as a semantic divider with role="separator".',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},s={name:"Playground",args:{orientation:"horizontal",decorative:!0},render:o=>e.jsxs("div",{className:"w-64",children:[e.jsx("p",{className:"text-sm",children:"Above"}),e.jsx(a,{...o,className:o.orientation==="vertical"?"h-6":""}),e.jsx("p",{className:"text-sm",children:"Below"})]})},r={name:"Horizontal",render:()=>e.jsxs("div",{className:"w-72 space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium",children:"Schatten UI"}),e.jsx("p",{className:"text-sm text-foreground-muted",children:"A design system for the web."})]}),e.jsx(a,{}),e.jsxs("div",{className:"flex gap-4 text-sm text-foreground-muted",children:[e.jsx("span",{children:"Docs"}),e.jsx("span",{children:"Components"}),e.jsx("span",{children:"Themes"})]})]})},t={name:"Vertical",render:()=>e.jsxs("div",{className:"flex h-6 items-center gap-3 text-sm",children:[e.jsx("span",{children:"Docs"}),e.jsx(a,{orientation:"vertical"}),e.jsx("span",{children:"Components"}),e.jsx(a,{orientation:"vertical"}),e.jsx("span",{children:"Themes"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    orientation: 'horizontal',
    decorative: true
  },
  render: args => <div className="w-64">
      <p className="text-sm">Above</p>
      <Separator {...args} className={args.orientation === 'vertical' ? 'h-6' : ''} />
      <p className="text-sm">Below</p>
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  render: () => <div className="w-72 space-y-3">
      <div>
        <h4 className="text-sm font-medium">Schatten UI</h4>
        <p className="text-sm text-foreground-muted">A design system for the web.</p>
      </div>
      <Separator />
      <div className="flex gap-4 text-sm text-foreground-muted">
        <span>Docs</span>
        <span>Components</span>
        <span>Themes</span>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Vertical',
  render: () => <div className="flex h-6 items-center gap-3 text-sm">
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Components</span>
      <Separator orientation="vertical" />
      <span>Themes</span>
    </div>
}`,...t.parameters?.docs?.source}}};const v=["Playground","Horizontal","Vertical"];export{r as Horizontal,s as Playground,t as Vertical,v as __namedExportsOrder,u as default};
