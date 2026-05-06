import{j as e}from"./iframe-CJW_Gmgu.js";import{B as a}from"./Badge-Bq6fdsq4.js";import"./preload-helper-6VsmarHM.js";import"./index-LMedxtR9.js";import"./chevron-up-_0aqa7j9.js";import"./index-DHk-Frat.js";const T={title:"Components/lv1/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Visual style of the badge. State variants (`success` / `warning` / `info`) share the same filled treatment as `destructive` and reference the corresponding state semantic tokens.",control:"select",options:["primary","secondary","destructive","success","warning","info","outline"],table:{type:{summary:'"primary" | "secondary" | "destructive" | "success" | "warning" | "info" | "outline"'},defaultValue:{summary:"primary"}}},size:{description:"Size of the badge.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:'Lucide icon name in PascalCase (e.g. "Check", "AlertCircle").',control:"text",table:{type:{summary:"IconName"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},children:{description:"Content displayed inside the badge.",control:"text",table:{type:{summary:"ReactNode"}}}}},r={name:"Playground",args:{variant:"primary",size:"md",children:"Badge"}},s={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"destructive",children:"Destructive"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"info",children:"Info"}),e.jsx(a,{variant:"outline",children:"Outline"})]})},n={name:"States",parameters:{docs:{description:{story:'State variants are intended for status tags such as "Active", "Pending", or "Failed". They share the four-token state semantic shape (`error` / `success` / `warning` / `info`) used by Toast and Callout. `destructive` remains the action-oriented red and is also shown here for comparison.'}}},render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:"Check",children:"Active"}),e.jsx(a,{variant:"warning",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"destructive",icon:"X",children:"Failed"}),e.jsx(a,{variant:"info",icon:"Sparkles",children:"Beta"})]})},i={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},t={name:"Icons",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{icon:"Check",children:"Success"}),e.jsx(a,{variant:"destructive",icon:"AlertCircle",children:"Error"}),e.jsx(a,{variant:"secondary",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"outline",icon:"Tag",children:"Label"})]})},c={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"ArrowLeft",children:"Start"}),e.jsx(a,{icon:"ArrowRight",iconPosition:"end",children:"End"})]})},o={name:"Icon Only",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"Check",size:"sm","aria-label":"Success"}),e.jsx(a,{icon:"Check","aria-label":"Success"}),e.jsx(a,{icon:"Check",size:"lg","aria-label":"Success"}),e.jsx(a,{variant:"destructive",icon:"X","aria-label":"Error"}),e.jsx(a,{variant:"outline",icon:"Star","aria-label":"Starred"})]})};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Badge'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,u,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-wrap gap-4">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var v,h,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'States',
  parameters: {
    docs: {
      description: {
        story: 'State variants are intended for status tags such as "Active", "Pending", or "Failed". They share the four-token state semantic shape (\`error\` / \`success\` / \`warning\` / \`info\`) used by Toast and Callout. \`destructive\` remains the action-oriented red and is also shown here for comparison.'
      }
    }
  },
  render: () => <div className="flex flex-wrap gap-4">
      <Badge variant="success" icon="Check">
        Active
      </Badge>
      <Badge variant="warning" icon="Clock">
        Pending
      </Badge>
      <Badge variant="destructive" icon="X">
        Failed
      </Badge>
      <Badge variant="info" icon="Sparkles">
        Beta
      </Badge>
    </div>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var B,f,y;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,j,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var C,w,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="ArrowLeft">Start</Badge>
      <Badge icon="ArrowRight" iconPosition="end">
        End
      </Badge>
    </div>
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var k,z,A;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="Check" size="sm" aria-label="Success" />
      <Badge icon="Check" aria-label="Success" />
      <Badge icon="Check" size="lg" aria-label="Success" />
      <Badge variant="destructive" icon="X" aria-label="Error" />
      <Badge variant="outline" icon="Star" aria-label="Starred" />
    </div>
}`,...(A=(z=o.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const F=["Playground","AllVariants","States","Sizes","Icons","IconPositions","IconOnly"];export{s as AllVariants,o as IconOnly,c as IconPositions,t as Icons,r as Playground,i as Sizes,n as States,F as __namedExportsOrder,T as default};
