import{j as e}from"./iframe-DTFDdmpX.js";import{T as a}from"./Text-CKS8Tks1.js";import"./preload-helper-Cxe1yXgy.js";import"./index-DZbw0hKn.js";import"./index-Csg6t-RG.js";import"./index-DiZijfAW.js";const q={title:"Components/lv1/Text",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Semantic role of the text.",control:"select",options:["body","label","heading"],table:{type:{summary:'"body" | "label" | "heading"'},defaultValue:{summary:"body"}}},size:{description:"Size of the text. Available sizes depend on the variant.",control:"select",options:["xs","sm","md","lg","xl","2xl"],table:{type:{summary:'"xs" | "sm" | "md" | "lg" | "xl" | "2xl"'},defaultValue:{summary:"md"}}},color:{description:"Color of the text.",control:"select",options:["default","muted","accent","inherit"],table:{type:{summary:'"default" | "muted" | "accent" | "inherit"'},defaultValue:{summary:"default"}}},align:{description:"Text alignment.",control:"select",options:["left","center","right"],table:{type:{summary:'"left" | "center" | "right"'},defaultValue:{summary:"-"}}},truncate:{description:"Truncate text with ellipsis on overflow.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},as:{description:"HTML element to render.",control:"select",options:["p","span","h1","h2","h3","h4","h5","h6"],table:{type:{summary:'"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"'},defaultValue:{summary:'"p" (body/heading) or "label" (label)'}}},asChild:{description:"Delegates props to the child element via Radix Slot.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"Text content.",control:"text",table:{type:{summary:"ReactNode"}}}}},r={name:"Playground",args:{variant:"body",size:"md",children:"The quick brown fox jumps over the lazy dog."}},t={name:"Body Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{variant:"body",size:"xs",children:"Body XS — The quick brown fox jumps over the lazy dog."}),e.jsx(a,{variant:"body",size:"sm",children:"Body SM — The quick brown fox jumps over the lazy dog."}),e.jsx(a,{variant:"body",size:"md",children:"Body MD — The quick brown fox jumps over the lazy dog."}),e.jsx(a,{variant:"body",size:"lg",children:"Body LG — The quick brown fox jumps over the lazy dog."})]})},o={name:"Label Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{variant:"label",size:"xs",children:"Label XS"}),e.jsx(a,{variant:"label",size:"sm",children:"Label SM"}),e.jsx(a,{variant:"label",size:"md",children:"Label MD"}),e.jsx(a,{variant:"label",size:"lg",children:"Label LG"})]})},s={name:"Heading Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{variant:"heading",size:"sm",children:"Heading SM"}),e.jsx(a,{variant:"heading",size:"md",children:"Heading MD"}),e.jsx(a,{variant:"heading",size:"lg",children:"Heading LG"}),e.jsx(a,{variant:"heading",size:"xl",children:"Heading XL"}),e.jsx(a,{variant:"heading",size:"2xl",children:"Heading 2XL"})]})},l={name:"Colors",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{color:"default",children:"Default color"}),e.jsx(a,{color:"muted",children:"Muted color"}),e.jsx(a,{color:"accent",children:"Accent color"}),e.jsx("div",{className:"text-blue-500",children:e.jsx(a,{color:"inherit",children:"Inherit color (from parent)"})})]})},i={name:"Truncated",render:()=>e.jsx("div",{className:"w-64",children:e.jsx(a,{truncate:!0,children:"This is a very long text that should be truncated with an ellipsis when it overflows the container."})})};var n,d,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'body',
    size: 'md',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,x,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Body Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Text variant="body" size="xs">
        Body XS — The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body" size="sm">
        Body SM — The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body" size="md">
        Body MD — The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body" size="lg">
        Body LG — The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var h,p,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Label Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Text variant="label" size="xs">
        Label XS
      </Text>
      <Text variant="label" size="sm">
        Label SM
      </Text>
      <Text variant="label" size="md">
        Label MD
      </Text>
      <Text variant="label" size="lg">
        Label LG
      </Text>
    </div>
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,v,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Heading Sizes',
  render: () => <div className="flex flex-col gap-4">
      <Text variant="heading" size="sm">
        Heading SM
      </Text>
      <Text variant="heading" size="md">
        Heading MD
      </Text>
      <Text variant="heading" size="lg">
        Heading LG
      </Text>
      <Text variant="heading" size="xl">
        Heading XL
      </Text>
      <Text variant="heading" size="2xl">
        Heading 2XL
      </Text>
    </div>
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var T,f,z;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Colors',
  render: () => <div className="flex flex-col gap-3">
      <Text color="default">Default color</Text>
      <Text color="muted">Muted color</Text>
      <Text color="accent">Accent color</Text>
      <div className="text-blue-500">
        <Text color="inherit">Inherit color (from parent)</Text>
      </div>
    </div>
}`,...(z=(f=l.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var j,S,L;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Truncated',
  render: () => <div className="w-64">
      <Text truncate>
        This is a very long text that should be truncated with an ellipsis when it overflows the
        container.
      </Text>
    </div>
}`,...(L=(S=i.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const D=["Playground","BodySizes","LabelSizes","HeadingSizes","Colors","Truncated"];export{t as BodySizes,l as Colors,s as HeadingSizes,o as LabelSizes,r as Playground,i as Truncated,D as __namedExportsOrder,q as default};
