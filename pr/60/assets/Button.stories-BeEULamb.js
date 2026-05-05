import{j as e}from"./iframe-CMWYdtbn.js";import{B as t}from"./Button-wCTq8FK-.js";import"./preload-helper-BR35kgIy.js";import"./index-Bf0_MfZO.js";import"./index-DniTOfxQ.js";import"./index-D9I-5i3O.js";import"./chevron-up-CU-ZPv4W.js";import"./index-DHk-Frat.js";import"./Spinner-C27zq45c.js";const q={title:"Components/lv1/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Visual style of the button.",control:"select",options:["primary","secondary","tertiary","inverted","destructive","link"],table:{type:{summary:'"primary" | "secondary" | "tertiary" | "inverted" | "destructive" | "link"'},defaultValue:{summary:"primary"}}},size:{description:"Size of the button.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:'Lucide icon name in PascalCase (e.g. "Search", "ArrowRight").',control:"text",table:{type:{summary:"IconName"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},asChild:{description:"Delegates props to the child element via Radix Slot.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{description:"Shows a loading spinner and disables the button.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the button and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"Label text or content inside the button.",control:"text",table:{type:{summary:"ReactNode"}}}}},a={name:"Playground",args:{variant:"primary",size:"md",children:"Button"}},n={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"}),e.jsx(t,{variant:"destructive",children:"Destructive"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 rounded-lg bg-solid p-4",children:[e.jsx(t,{variant:"inverted",children:"Inverted"}),e.jsx(t,{variant:"inverted",icon:"X","aria-label":"Close"})]})]})},r={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{icon:"Plus","aria-label":"Add"})]})},i={name:"Icons",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{icon:"Search",children:"Search"}),e.jsx(t,{icon:"ArrowRight",iconPosition:"end",children:"Next"}),e.jsx(t,{icon:"Plus","aria-label":"Add"}),e.jsx(t,{variant:"destructive",icon:"Trash2",children:"Delete"})]})},s={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{icon:"ChevronLeft",children:"Back"}),e.jsx(t,{icon:"ChevronRight",iconPosition:"end",children:"Next"}),e.jsx(t,{icon:"Download",size:"sm",children:"Download"}),e.jsx(t,{icon:"Send",size:"lg",iconPosition:"end",children:"Send"})]})},o={name:"Loading",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{isLoading:!0,children:"Primary"}),e.jsx(t,{variant:"secondary",isLoading:!0,children:"Secondary"}),e.jsx(t,{variant:"tertiary",isLoading:!0,children:"Tertiary"}),e.jsx(t,{variant:"destructive",isLoading:!0,children:"Destructive"})]})},d={name:"Link",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 text-base text-foreground leading-relaxed",children:[e.jsxs("p",{children:["This is a paragraph with a ",e.jsx(t,{variant:"link",children:"link button"})," embedded inline. It behaves like a text link but retains button semantics for accessibility."]}),e.jsxs("p",{children:["You can also add an icon:"," ",e.jsx(t,{variant:"link",icon:"ExternalLink",iconPosition:"end",children:"external link"})," ","to indicate navigation."]})]})},l={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{disabled:!0,children:"Primary"}),e.jsx(t,{variant:"secondary",disabled:!0,children:"Secondary"}),e.jsx(t,{variant:"tertiary",disabled:!0,children:"Tertiary"}),e.jsx(t,{variant:"destructive",disabled:!0,icon:"Trash2",children:"Delete"}),e.jsxs("p",{className:"text-base text-foreground",children:["Disabled"," ",e.jsx(t,{variant:"link",disabled:!0,children:"link button"})," ","in text."]})]})};var c,u,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,x,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      {/* \`inverted\` is intended for placement on a saturated surface; preview
          it on a solid background so the contrast pattern is visible. */}
      <div className="flex flex-wrap gap-4 rounded-lg bg-solid p-4">
        <Button variant="inverted">Inverted</Button>
        <Button variant="inverted" icon="X" aria-label="Close" />
      </div>
    </div>
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,h,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button icon="Plus" aria-label="Add" />
    </div>
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,B,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex items-center gap-4">
      <Button icon="Search">Search</Button>
      <Button icon="ArrowRight" iconPosition="end">
        Next
      </Button>
      <Button icon="Plus" aria-label="Add" />
      <Button variant="destructive" icon="Trash2">
        Delete
      </Button>
    </div>
}`,...(f=(B=i.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var j,S,P;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Button icon="ChevronLeft">Back</Button>
      <Button icon="ChevronRight" iconPosition="end">
        Next
      </Button>
      <Button icon="Download" size="sm">
        Download
      </Button>
      <Button icon="Send" size="lg" iconPosition="end">
        Send
      </Button>
    </div>
}`,...(P=(S=s.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var k,N,L;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => <div className="flex flex-wrap gap-4">
      <Button isLoading>Primary</Button>
      <Button variant="secondary" isLoading>
        Secondary
      </Button>
      <Button variant="tertiary" isLoading>
        Tertiary
      </Button>
      <Button variant="destructive" isLoading>
        Destructive
      </Button>
    </div>
}`,...(L=(N=o.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var D,w,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Link',
  render: () => <div className="flex flex-col gap-4 text-base text-foreground leading-relaxed">
      <p>
        This is a paragraph with a <Button variant="link">link button</Button> embedded inline. It
        behaves like a text link but retains button semantics for accessibility.
      </p>
      <p>
        You can also add an icon:{' '}
        <Button variant="link" icon="ExternalLink" iconPosition="end">
          external link
        </Button>{' '}
        to indicate navigation.
      </p>
    </div>
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var V,I,T;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-wrap gap-4">
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="tertiary" disabled>
        Tertiary
      </Button>
      <Button variant="destructive" disabled icon="Trash2">
        Delete
      </Button>
      <p className="text-base text-foreground">
        Disabled{' '}
        <Button variant="link" disabled>
          link button
        </Button>{' '}
        in text.
      </p>
    </div>
}`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const F=["Playground","AllVariants","Sizes","Icons","IconPositions","Loading","LinkVariant","Disabled"];export{n as AllVariants,l as Disabled,s as IconPositions,i as Icons,d as LinkVariant,o as Loading,a as Playground,r as Sizes,F as __namedExportsOrder,q as default};
