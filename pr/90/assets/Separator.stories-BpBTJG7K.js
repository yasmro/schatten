import{j as e}from"./iframe-DToPD6bK.js";import{S as a}from"./Separator-CjCBbOe6.js";import"./preload-helper-0Y_7Kbow.js";import"./index-a_Jwkpzd.js";import"./index-Bnsjghr7.js";import"./index-15aRdQQC.js";import"./utils-BQHNewu7.js";const S={title:"Components/lv1/Separator",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{description:"Orientation of the separator.",control:"select",options:["horizontal","vertical"],table:{type:{summary:'"horizontal" | "vertical"'},defaultValue:{summary:"horizontal"}}},decorative:{description:'When true, the separator is purely visual and hidden from assistive technologies. When false, it is exposed as a semantic divider with role="separator".',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},s={name:"Playground",args:{orientation:"horizontal",decorative:!0},render:o=>e.jsxs("div",{className:"w-64",children:[e.jsx("p",{className:"text-sm",children:"Above"}),e.jsx(a,{...o,className:o.orientation==="vertical"?"h-6":""}),e.jsx("p",{className:"text-sm",children:"Below"})]})},r={name:"Horizontal",render:()=>e.jsxs("div",{className:"w-72 space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium",children:"Schatten UI"}),e.jsx("p",{className:"text-sm text-foreground-muted",children:"A design system for the web."})]}),e.jsx(a,{}),e.jsxs("div",{className:"flex gap-4 text-sm text-foreground-muted",children:[e.jsx("span",{children:"Docs"}),e.jsx("span",{children:"Components"}),e.jsx("span",{children:"Themes"})]})]})},t={name:"Vertical",render:()=>e.jsxs("div",{className:"flex h-6 items-center gap-3 text-sm",children:[e.jsx("span",{children:"Docs"}),e.jsx(a,{orientation:"vertical"}),e.jsx("span",{children:"Components"}),e.jsx(a,{orientation:"vertical"}),e.jsx("span",{children:"Themes"})]})};var n,i,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,x,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Vertical',
  render: () => <div className="flex h-6 items-center gap-3 text-sm">
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Components</span>
      <Separator orientation="vertical" />
      <span>Themes</span>
    </div>
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const w=["Playground","Horizontal","Vertical"];export{r as Horizontal,s as Playground,t as Vertical,w as __namedExportsOrder,S as default};
