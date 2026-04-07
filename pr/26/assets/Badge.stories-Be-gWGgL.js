import{j as e}from"./iframe-ClqdSlYt.js";import{B as a}from"./Badge-C0x_4n6J.js";import"./preload-helper-DLx2GQLC.js";import"./index-acJuIO2y.js";import"./chevron-up-6Q_tlWNU.js";import"./index-DiZijfAW.js";const w={title:"Components/lv1/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Visual style of the badge.",control:"select",options:["primary","secondary","destructive","outline"],table:{type:{summary:'"primary" | "secondary" | "destructive" | "outline"'},defaultValue:{summary:"primary"}}},size:{description:"Size of the badge.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:'Lucide icon name in PascalCase (e.g. "Check", "AlertCircle").',control:"text",table:{type:{summary:"IconName"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},children:{description:"Content displayed inside the badge.",control:"text",table:{type:{summary:"ReactNode"}}}}},r={name:"Playground",args:{variant:"primary",size:"md",children:"Badge"}},s={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"destructive",children:"Destructive"}),e.jsx(a,{variant:"outline",children:"Outline"})]})},i={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},n={name:"Icons",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{icon:"Check",children:"Success"}),e.jsx(a,{variant:"destructive",icon:"AlertCircle",children:"Error"}),e.jsx(a,{variant:"secondary",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"outline",icon:"Tag",children:"Label"})]})},t={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"ArrowLeft",children:"Start"}),e.jsx(a,{icon:"ArrowRight",iconPosition:"end",children:"End"})]})},c={name:"Icon Only",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"Check",size:"sm","aria-label":"Success"}),e.jsx(a,{icon:"Check","aria-label":"Success"}),e.jsx(a,{icon:"Check",size:"lg","aria-label":"Success"}),e.jsx(a,{variant:"destructive",icon:"X","aria-label":"Error"}),e.jsx(a,{variant:"outline",icon:"Star","aria-label":"Starred"})]})};var o,d,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Badge'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-wrap gap-4">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,v,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,h,B;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex flex-wrap gap-4">
      <Badge icon="Check">Success</Badge>
      <Badge variant="destructive" icon="AlertCircle">
        Error
      </Badge>
      <Badge variant="secondary" icon="Clock">
        Pending
      </Badge>
      <Badge variant="outline" icon="Tag">
        Label
      </Badge>
    </div>
}`,...(B=(h=n.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var S,f,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="ArrowLeft">Start</Badge>
      <Badge icon="ArrowRight" iconPosition="end">
        End
      </Badge>
    </div>
}`,...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var b,z,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="Check" size="sm" aria-label="Success" />
      <Badge icon="Check" aria-label="Success" />
      <Badge icon="Check" size="lg" aria-label="Success" />
      <Badge variant="destructive" icon="X" aria-label="Error" />
      <Badge variant="outline" icon="Star" aria-label="Starred" />
    </div>
}`,...(C=(z=c.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const E=["Playground","AllVariants","Sizes","Icons","IconPositions","IconOnly"];export{s as AllVariants,c as IconOnly,t as IconPositions,n as Icons,r as Playground,i as Sizes,E as __namedExportsOrder,w as default};
