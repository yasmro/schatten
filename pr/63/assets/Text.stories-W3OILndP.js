import{j as e}from"./iframe-C-6Cjyy5.js";import{T as r}from"./Text-CV3bqDq8.js";import"./preload-helper-6VsmarHM.js";import"./index-Cr3JAjjy.js";import"./index-B1rHvjUu.js";import"./index-DHk-Frat.js";const R={title:"Components/lv1/Text",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Semantic role of the text.",control:"select",options:["body","label","heading"],table:{type:{summary:'"body" | "label" | "heading"'},defaultValue:{summary:"body"}}},size:{description:"Size of the text. Available sizes depend on the variant.",control:"select",options:["xs","sm","md","lg","xl","2xl"],table:{type:{summary:'"xs" | "sm" | "md" | "lg" | "xl" | "2xl"'},defaultValue:{summary:"md"}}},color:{description:"Color of the text. State colors (`error` / `success` / `warning` / `info`) reference the corresponding state semantic tokens and are intended for inline status text such as form errors or success notes. `inverted` resolves to `text-inverse-foreground` and is intended for use on saturated surfaces (e.g. text inside a solid Toast or Callout, or a primary Button-like fill).",control:"select",options:["default","muted","accent","error","success","warning","info","inverted","inherit"],table:{type:{summary:'"default" | "muted" | "accent" | "error" | "success" | "warning" | "info" | "inverted" | "inherit"'},defaultValue:{summary:"default"}}},align:{description:"Text alignment.",control:"select",options:["left","center","right"],table:{type:{summary:'"left" | "center" | "right"'},defaultValue:{summary:"-"}}},truncate:{description:"Truncate text with ellipsis on overflow.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},as:{description:"HTML element to render.",control:"select",options:["p","span","h1","h2","h3","h4","h5","h6"],table:{type:{summary:'"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"'},defaultValue:{summary:'"p" (body/heading) or "label" (label)'}}},asChild:{description:"Delegates props to the child element via Radix Slot.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"Text content.",control:"text",table:{type:{summary:"ReactNode"}}}}},a={name:"Playground",args:{variant:"body",size:"md",children:"The quick brown fox jumps over the lazy dog."}},s={name:"Body Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{variant:"body",size:"xs",children:"Body XS — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"sm",children:"Body SM — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"md",children:"Body MD — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"lg",children:"Body LG — The quick brown fox jumps over the lazy dog."})]})},o={name:"Label Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{variant:"label",size:"xs",children:"Label XS"}),e.jsx(r,{variant:"label",size:"sm",children:"Label SM"}),e.jsx(r,{variant:"label",size:"md",children:"Label MD"}),e.jsx(r,{variant:"label",size:"lg",children:"Label LG"})]})},t={name:"Heading Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{variant:"heading",size:"sm",children:"Heading SM"}),e.jsx(r,{variant:"heading",size:"md",children:"Heading MD"}),e.jsx(r,{variant:"heading",size:"lg",children:"Heading LG"}),e.jsx(r,{variant:"heading",size:"xl",children:"Heading XL"}),e.jsx(r,{variant:"heading",size:"2xl",children:"Heading 2XL"})]})},n={name:"Colors",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{color:"default",children:"Default color"}),e.jsx(r,{color:"muted",children:"Muted color"}),e.jsx(r,{color:"accent",children:"Accent color"}),e.jsx("div",{className:"text-blue-500",children:e.jsx(r,{color:"inherit",children:"Inherit color (from parent)"})})]})},i={name:"State Colors",parameters:{docs:{description:{story:'State colors reference the same `error` / `success` / `warning` / `info` semantic tokens used by Toast and Callout. Use these for inline status text — for example a "Saved" confirmation note or a "3 items failed" summary.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{color:"error",children:"Error — Could not save your changes."}),e.jsx(r,{color:"success",children:"Success — Your changes were saved."}),e.jsx(r,{color:"warning",children:"Warning — 3 items were skipped."}),e.jsx(r,{color:"info",children:"Info — Beta features may change."})]})},l={name:"Inverted Color",parameters:{docs:{description:{story:'`color="inverted"` resolves to `text-inverse-foreground` so the text remains legible on saturated surfaces. Reach for it when placing Text inside a solid Toast / Callout, on a primary-colored fill, or on any other state `solid` background.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"rounded-md bg-solid p-4",children:e.jsx(r,{color:"inverted",children:"On a primary surface — readable inverse foreground."})}),e.jsx("div",{className:"rounded-md bg-success p-4",children:e.jsx(r,{color:"inverted",children:"On a success surface."})}),e.jsx("div",{className:"rounded-md bg-error p-4",children:e.jsx(r,{color:"inverted",children:"On an error surface."})})]})},d={name:"Truncated",render:()=>e.jsx("div",{className:"w-64",children:e.jsx(r,{truncate:!0,children:"This is a very long text that should be truncated with an ellipsis when it overflows the container."})})};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'body',
    size: 'md',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,p;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(p=(h=s.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,v,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,T,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(T=t.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var z,j,S;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Colors',
  render: () => <div className="flex flex-col gap-3">
      <Text color="default">Default color</Text>
      <Text color="muted">Muted color</Text>
      <Text color="accent">Accent color</Text>
      <div className="text-blue-500">
        <Text color="inherit">Inherit color (from parent)</Text>
      </div>
    </div>
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,L,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'State Colors',
  parameters: {
    docs: {
      description: {
        story: 'State colors reference the same \`error\` / \`success\` / \`warning\` / \`info\` semantic tokens used by Toast and Callout. Use these for inline status text — for example a "Saved" confirmation note or a "3 items failed" summary.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      <Text color="error">Error — Could not save your changes.</Text>
      <Text color="success">Success — Your changes were saved.</Text>
      <Text color="warning">Warning — 3 items were skipped.</Text>
      <Text color="info">Info — Beta features may change.</Text>
    </div>
}`,...(N=(L=i.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var C,k,B;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Inverted Color',
  parameters: {
    docs: {
      description: {
        story: '\`color="inverted"\` resolves to \`text-inverse-foreground\` so the text remains legible on saturated surfaces. Reach for it when placing Text inside a solid Toast / Callout, on a primary-colored fill, or on any other state \`solid\` background.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      <div className="rounded-md bg-solid p-4">
        <Text color="inverted">On a primary surface — readable inverse foreground.</Text>
      </div>
      <div className="rounded-md bg-success p-4">
        <Text color="inverted">On a success surface.</Text>
      </div>
      <div className="rounded-md bg-error p-4">
        <Text color="inverted">On an error surface.</Text>
      </div>
    </div>
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var H,M,q;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Truncated',
  render: () => <div className="w-64">
      <Text truncate>
        This is a very long text that should be truncated with an ellipsis when it overflows the
        container.
      </Text>
    </div>
}`,...(q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const E=["Playground","BodySizes","LabelSizes","HeadingSizes","Colors","StateColors","InvertedColor","Truncated"];export{s as BodySizes,n as Colors,t as HeadingSizes,l as InvertedColor,o as LabelSizes,a as Playground,i as StateColors,d as Truncated,E as __namedExportsOrder,R as default};
