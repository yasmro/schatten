import{j as e}from"./iframe-BujO5KH-.js";import{T as r}from"./Text-DCb0mxwo.js";import"./preload-helper-D1dx0ibn.js";import"./index-CZnjbUiW.js";import"./index-4flLOZT9.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";const R={title:"Components/lv1/Text",component:r,parameters:{layout:"centered",docs:{description:{component:"Text renders semantic typography (`body` / `label` / `heading`) at\npredefined sizes, with color, alignment, and truncation as\northogonal axes.\n\n## `color` is grouped into three parallel hierarchies\n\n- **Foreground** (most → least prominent): `default` / `muted` /\n  `subtle` — primary, secondary/helper, and tertiary text. Reach for\n  these for ordinary on-page typography.\n- **State**: `error` / `success` / `warning` / `info` — inline\n  status text such as form errors, success notes, or beta callouts.\n  References the same state semantic tokens as Toast / Callout /\n  Badge.\n- **Inverted** (most → least prominent): `inverted` / `inverted-muted`\n  / `inverted-subtle` — for text placed on saturated surfaces (a\n  solid Toast or Callout, a primary-colored fill, …). Mirrors the\n  foreground hierarchy.\n\nPlus `accent` (one-off emphasis), and `inherit` (delegates to the\nparent's color).\n\n## Element selection\n\n`as` controls the rendered tag. By default `body` and `heading`\nrender `<p>`, and `label` renders `<label>`. Pass `asChild` (Radix\nSlot) to merge Text's classes onto an existing child element."}}},tags:["autodocs"],argTypes:{variant:{description:"Semantic role of the text.",control:"select",options:["body","label","heading"],table:{type:{summary:'"body" | "label" | "heading"'},defaultValue:{summary:"body"}}},size:{description:"Size of the text. Available sizes depend on the variant.",control:"select",options:["xs","sm","md","lg","xl","2xl"],table:{type:{summary:'"xs" | "sm" | "md" | "lg" | "xl" | "2xl"'},defaultValue:{summary:"md"}}},color:{description:"Color of the text.\n\n- `default` / `muted` / `subtle` form the primary → tertiary foreground hierarchy (most → least prominent).\n- State colors (`error` / `success` / `warning` / `info`) reference the corresponding state semantic tokens — use them for inline status text such as form errors or success notes.\n- `inverted` / `inverted-muted` / `inverted-subtle` mirror the foreground hierarchy on saturated surfaces (e.g. text inside a solid Toast or Callout, or on a primary-colored fill).",control:"select",options:["default","muted","subtle","accent","error","success","warning","info","inverted","inverted-muted","inverted-subtle","inherit"],table:{type:{summary:'"default" | "muted" | "subtle" | "accent" | "error" | "success" | "warning" | "info" | "inverted" | "inverted-muted" | "inverted-subtle" | "inherit"'},defaultValue:{summary:"default"}}},align:{description:"Text alignment.",control:"select",options:["left","center","right"],table:{type:{summary:'"left" | "center" | "right"'},defaultValue:{summary:"-"}}},truncate:{description:"Truncate text with ellipsis on overflow.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},as:{description:"HTML element to render.",control:"select",options:["p","span","h1","h2","h3","h4","h5","h6"],table:{type:{summary:'"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"'},defaultValue:{summary:'"p" (body/heading) or "label" (label)'}}},asChild:{description:"Delegates props to the child element via Radix Slot.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"Text content.",control:"text",table:{type:{summary:"ReactNode"}}}}},t={name:"Playground",args:{variant:"body",size:"md",children:"The quick brown fox jumps over the lazy dog."}},a={name:"Body Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{variant:"body",size:"xs",children:"Body XS — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"sm",children:"Body SM — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"md",children:"Body MD — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"lg",children:"Body LG — The quick brown fox jumps over the lazy dog."})]})},s={name:"Label Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{variant:"label",size:"xs",children:"Label XS"}),e.jsx(r,{variant:"label",size:"sm",children:"Label SM"}),e.jsx(r,{variant:"label",size:"md",children:"Label MD"}),e.jsx(r,{variant:"label",size:"lg",children:"Label LG"})]})},n={name:"Heading Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{variant:"heading",size:"sm",children:"Heading SM"}),e.jsx(r,{variant:"heading",size:"md",children:"Heading MD"}),e.jsx(r,{variant:"heading",size:"lg",children:"Heading LG"}),e.jsx(r,{variant:"heading",size:"xl",children:"Heading XL"}),e.jsx(r,{variant:"heading",size:"2xl",children:"Heading 2XL"})]})},o={name:"Colors",parameters:{docs:{description:{story:"`default`, `muted`, and `subtle` form the foreground hierarchy from most prominent (primary text) to least prominent (tertiary helper / placeholder-like text)."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{color:"default",children:"Default — primary text"}),e.jsx(r,{color:"muted",children:"Muted — secondary / helper text"}),e.jsx(r,{color:"subtle",children:"Subtle — tertiary text, faintest of the three"}),e.jsx(r,{color:"accent",children:"Accent color"}),e.jsx("div",{className:"text-blue-500",children:e.jsx(r,{color:"inherit",children:"Inherit color (from parent)"})})]})},i={name:"State Colors",parameters:{docs:{description:{story:'State colors reference the same `error` / `success` / `warning` / `info` semantic tokens used by Toast and Callout. Use these for inline status text — for example a "Saved" confirmation note or a "3 items failed" summary.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{color:"error",children:"Error — Could not save your changes."}),e.jsx(r,{color:"success",children:"Success — Your changes were saved."}),e.jsx(r,{color:"warning",children:"Warning — 3 items were skipped."}),e.jsx(r,{color:"info",children:"Info — Beta features may change."})]})},l={name:"Inverted Color",parameters:{docs:{description:{story:"`inverted` / `inverted-muted` / `inverted-subtle` mirror the `default` / `muted` / `subtle` hierarchy but for text placed on saturated surfaces (a solid Toast / Callout, a primary-colored fill, …). Each step is progressively less prominent against the saturated background."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-1 rounded-md bg-solid p-4",children:[e.jsx(r,{color:"inverted",children:"Inverted — primary text on a primary surface"}),e.jsx(r,{color:"inverted-muted",size:"sm",children:"Inverted muted — secondary / helper text"}),e.jsx(r,{color:"inverted-subtle",size:"sm",children:"Inverted subtle — tertiary text, faintest of the three"})]}),e.jsxs("div",{className:"flex flex-col gap-1 rounded-md bg-success p-4",children:[e.jsx(r,{color:"inverted",children:"Inverted on a success surface"}),e.jsx(r,{color:"inverted-muted",size:"sm",children:"Secondary on the same surface"})]}),e.jsxs("div",{className:"flex flex-col gap-1 rounded-md bg-error p-4",children:[e.jsx(r,{color:"inverted",children:"Inverted on an error surface"}),e.jsx(r,{color:"inverted-subtle",size:"sm",children:"Tertiary on the same surface"})]})]})},d={name:"Truncated",render:()=>e.jsx("div",{className:"w-64",children:e.jsx(r,{truncate:!0,children:"This is a very long text that should be truncated with an ellipsis when it overflows the container."})})};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'body',
    size: 'md',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,p;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var f,v,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,b,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var z,j,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Colors',
  parameters: {
    docs: {
      description: {
        story: '\`default\`, \`muted\`, and \`subtle\` form the foreground hierarchy from most prominent (primary text) to least prominent (tertiary helper / placeholder-like text).'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      <Text color="default">Default — primary text</Text>
      <Text color="muted">Muted — secondary / helper text</Text>
      <Text color="subtle">Subtle — tertiary text, faintest of the three</Text>
      <Text color="accent">Accent color</Text>
      <div className="text-blue-500">
        <Text color="inherit">Inherit color (from parent)</Text>
      </div>
    </div>
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,C,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var N,k,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Inverted Color',
  parameters: {
    docs: {
      description: {
        story: '\`inverted\` / \`inverted-muted\` / \`inverted-subtle\` mirror the \`default\` / \`muted\` / \`subtle\` hierarchy but for text placed on saturated surfaces (a solid Toast / Callout, a primary-colored fill, …). Each step is progressively less prominent against the saturated background.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 rounded-md bg-solid p-4">
        <Text color="inverted">Inverted — primary text on a primary surface</Text>
        <Text color="inverted-muted" size="sm">
          Inverted muted — secondary / helper text
        </Text>
        <Text color="inverted-subtle" size="sm">
          Inverted subtle — tertiary text, faintest of the three
        </Text>
      </div>
      <div className="flex flex-col gap-1 rounded-md bg-success p-4">
        <Text color="inverted">Inverted on a success surface</Text>
        <Text color="inverted-muted" size="sm">
          Secondary on the same surface
        </Text>
      </div>
      <div className="flex flex-col gap-1 rounded-md bg-error p-4">
        <Text color="inverted">Inverted on an error surface</Text>
        <Text color="inverted-subtle" size="sm">
          Tertiary on the same surface
        </Text>
      </div>
    </div>
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var B,M,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Truncated',
  render: () => <div className="w-64">
      <Text truncate>
        This is a very long text that should be truncated with an ellipsis when it overflows the
        container.
      </Text>
    </div>
}`,...(H=(M=d.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const A=["Playground","BodySizes","LabelSizes","HeadingSizes","Colors","StateColors","InvertedColor","Truncated"];export{a as BodySizes,o as Colors,n as HeadingSizes,l as InvertedColor,s as LabelSizes,t as Playground,i as StateColors,d as Truncated,A as __namedExportsOrder,R as default};
