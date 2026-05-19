import{j as e}from"./iframe-YD6exK4_.js";import{T as r}from"./Text-CwDDTitq.js";import"./preload-helper-MPxaVwuT.js";import"./index-Bil2Dn_x.js";import"./index-B0vi3Q97.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";const _={title:"Components/lv1/Text",component:r,parameters:{layout:"centered",docs:{description:{component:"Text renders semantic typography (`body` / `label` / `heading`) at\npredefined sizes, with color, alignment, and truncation as\northogonal axes.\n\n## `color` is grouped into three parallel hierarchies\n\n- **Foreground** (most → least prominent): `default` / `muted` /\n  `subtle` — primary, secondary/helper, and tertiary text. Reach for\n  these for ordinary on-page typography.\n- **State**: `error` / `success` / `warning` / `info` — inline\n  status text such as form errors, success notes, or beta callouts.\n  References the same state semantic tokens as Toast / Callout /\n  Badge.\n- **Inverted** (most → least prominent): `inverted` / `inverted-muted`\n  / `inverted-subtle` — for text placed on saturated surfaces (a\n  solid Toast or Callout, a primary-colored fill, …). Mirrors the\n  foreground hierarchy.\n\n- **Brand**: `vermillion` (朱) / `indigo` (藍) — the two Schatten\n  brand colors, for deliberate brand emphasis where neither a state\n  color nor a foreground tier is the right fit.\n\nPlus `inherit` (delegates to the parent's color).\n\n## Element selection\n\n`as` controls the rendered tag. By default `body` and `heading`\nrender `<p>`, and `label` renders `<label>`. Pass `asChild` (Radix\nSlot) to merge Text's classes onto an existing child element."}}},tags:["autodocs"],argTypes:{variant:{description:"Semantic role of the text.",control:"select",options:["body","label","heading"],table:{type:{summary:'"body" | "label" | "heading"'},defaultValue:{summary:"body"}}},size:{description:"Size of the text. Available sizes depend on the variant.",control:"select",options:["xs","sm","md","lg","xl","2xl"],table:{type:{summary:'"xs" | "sm" | "md" | "lg" | "xl" | "2xl"'},defaultValue:{summary:"md"}}},color:{description:"Color of the text.\n\n- `default` / `muted` / `subtle` form the primary → tertiary foreground hierarchy (most → least prominent).\n- State colors (`error` / `success` / `warning` / `info`) reference the corresponding state semantic tokens — use them for inline status text such as form errors or success notes.\n- `inverted` / `inverted-muted` / `inverted-subtle` mirror the foreground hierarchy on saturated surfaces (e.g. text inside a solid Toast or Callout, or on a primary-colored fill).\n- `vermillion` (朱) / `indigo` (藍) are the Schatten brand colors — use them for deliberate brand emphasis.",control:"select",options:["default","muted","subtle","vermillion","indigo","error","success","warning","info","inverted","inverted-muted","inverted-subtle","inherit"],table:{type:{summary:'"default" | "muted" | "subtle" | "vermillion" | "indigo" | "error" | "success" | "warning" | "info" | "inverted" | "inverted-muted" | "inverted-subtle" | "inherit"'},defaultValue:{summary:"default"}}},align:{description:"Text alignment.",control:"select",options:["left","center","right"],table:{type:{summary:'"left" | "center" | "right"'},defaultValue:{summary:"-"}}},truncate:{description:"Truncate text with ellipsis on overflow.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},as:{description:"HTML element to render.",control:"select",options:["p","span","h1","h2","h3","h4","h5","h6"],table:{type:{summary:'"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"'},defaultValue:{summary:'"p" (body/heading) or "label" (label)'}}},asChild:{description:"Delegates props to the child element via Radix Slot.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"Text content.",control:"text",table:{type:{summary:"ReactNode"}}}}},t={name:"Playground",args:{variant:"body",size:"md",children:"The quick brown fox jumps over the lazy dog."}},a={name:"Body Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{variant:"body",size:"xs",children:"Body XS — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"sm",children:"Body SM — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"md",children:"Body MD — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"lg",children:"Body LG — The quick brown fox jumps over the lazy dog."})]})},o={name:"Label Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{variant:"label",size:"xs",children:"Label XS"}),e.jsx(r,{variant:"label",size:"sm",children:"Label SM"}),e.jsx(r,{variant:"label",size:"md",children:"Label MD"}),e.jsx(r,{variant:"label",size:"lg",children:"Label LG"})]})},n={name:"Heading Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{variant:"heading",size:"sm",children:"Heading SM"}),e.jsx(r,{variant:"heading",size:"md",children:"Heading MD"}),e.jsx(r,{variant:"heading",size:"lg",children:"Heading LG"}),e.jsx(r,{variant:"heading",size:"xl",children:"Heading XL"}),e.jsx(r,{variant:"heading",size:"2xl",children:"Heading 2XL"})]})},s={name:"Colors",parameters:{docs:{description:{story:"`default`, `muted`, and `subtle` form the foreground hierarchy from most prominent (primary text) to least prominent (tertiary helper / placeholder-like text)."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{color:"default",children:"Default — primary text"}),e.jsx(r,{color:"muted",children:"Muted — secondary / helper text"}),e.jsx(r,{color:"subtle",children:"Subtle — tertiary text, faintest of the three"}),e.jsx("div",{className:"text-blue-500",children:e.jsx(r,{color:"inherit",children:"Inherit color (from parent)"})})]})},i={name:"State Colors",parameters:{docs:{description:{story:'State colors reference the same `error` / `success` / `warning` / `info` semantic tokens used by Toast and Callout. Use these for inline status text — for example a "Saved" confirmation note or a "3 items failed" summary.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{color:"error",children:"Error — Could not save your changes."}),e.jsx(r,{color:"success",children:"Success — Your changes were saved."}),e.jsx(r,{color:"warning",children:"Warning — 3 items were skipped."}),e.jsx(r,{color:"info",children:"Info — Beta features may change."})]})},l={name:"Brand Colors",parameters:{docs:{description:{story:"`vermillion` (朱) and `indigo` (藍) are the two Schatten brand colors, exposed as the `--color-vermillion` / `--color-indigo` semantic tokens. Reach for them when a designer explicitly wants brand emphasis — neither a state color nor a foreground tier."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{color:"vermillion",children:"Vermillion — 朱, the primary brand color"}),e.jsx(r,{color:"indigo",children:"Indigo — 藍, the second brand color"})]})},d={name:"Inverted Color",parameters:{docs:{description:{story:"`inverted` / `inverted-muted` / `inverted-subtle` mirror the `default` / `muted` / `subtle` hierarchy but for text placed on saturated surfaces (a solid Toast / Callout, a primary-colored fill, …). Each step is progressively less prominent against the saturated background."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-1 rounded-md bg-solid p-4",children:[e.jsx(r,{color:"inverted",children:"Inverted — primary text on a primary surface"}),e.jsx(r,{color:"inverted-muted",size:"sm",children:"Inverted muted — secondary / helper text"}),e.jsx(r,{color:"inverted-subtle",size:"sm",children:"Inverted subtle — tertiary text, faintest of the three"})]}),e.jsxs("div",{className:"flex flex-col gap-1 rounded-md bg-success p-4",children:[e.jsx(r,{color:"inverted",children:"Inverted on a success surface"}),e.jsx(r,{color:"inverted-muted",size:"sm",children:"Secondary on the same surface"})]}),e.jsxs("div",{className:"flex flex-col gap-1 rounded-md bg-error p-4",children:[e.jsx(r,{color:"inverted",children:"Inverted on an error surface"}),e.jsx(r,{color:"inverted-subtle",size:"sm",children:"Tertiary on the same surface"})]})]})},c={name:"Truncated",render:()=>e.jsx("div",{className:"w-64",children:e.jsx(r,{truncate:!0,children:"This is a very long text that should be truncated with an ellipsis when it overflows the container."})})};var m,u,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'body',
    size: 'md',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,p,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,v,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,T,z;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(z=(T=n.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var j,S,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      <div className="text-blue-500">
        <Text color="inherit">Inherit color (from parent)</Text>
      </div>
    </div>
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,N,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(N=i.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var k,B,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Brand Colors',
  parameters: {
    docs: {
      description: {
        story: '\`vermillion\` (朱) and \`indigo\` (藍) are the two Schatten brand colors, exposed as the \`--color-vermillion\` / \`--color-indigo\` semantic tokens. Reach for them when a designer explicitly wants brand emphasis — neither a state color nor a foreground tier.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      <Text color="vermillion">Vermillion — 朱, the primary brand color</Text>
      <Text color="indigo">Indigo — 藍, the second brand color</Text>
    </div>
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var M,H,q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(H=d.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var D,V,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Truncated',
  render: () => <div className="w-64">
      <Text truncate>
        This is a very long text that should be truncated with an ellipsis when it overflows the
        container.
      </Text>
    </div>
}`,...(R=(V=c.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};const A=["Playground","BodySizes","LabelSizes","HeadingSizes","Colors","StateColors","BrandColors","InvertedColor","Truncated"];export{a as BodySizes,l as BrandColors,s as Colors,n as HeadingSizes,d as InvertedColor,o as LabelSizes,t as Playground,i as StateColors,c as Truncated,A as __namedExportsOrder,_ as default};
