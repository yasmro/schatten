import{j as e}from"./iframe-BavYS4eU.js";import{T as r}from"./Text-EOI3iTaH.js";import"./preload-helper-CrztxVc4.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css             */const b={title:"Components/lv1/Text",component:r,parameters:{layout:"centered",docs:{description:{component:"Text renders semantic typography (`body` / `label` / `heading`) at\npredefined sizes, with color, alignment, and truncation as\northogonal axes.\n\n## `color` is grouped into three parallel hierarchies\n\n- **Foreground** (most → least prominent): `default` / `muted` /\n  `subtle` — primary, secondary/helper, and tertiary text. Reach for\n  these for ordinary on-page typography.\n- **State**: `error` / `success` / `warning` / `info` — inline\n  status text such as form errors, success notes, or beta callouts.\n  References the same state semantic tokens as Toast / Callout /\n  Badge.\n- **Inverted** (most → least prominent): `inverted` / `inverted-muted`\n  / `inverted-subtle` — for text placed on saturated surfaces (a\n  solid Toast or Callout, a primary-colored fill, …). Mirrors the\n  foreground hierarchy.\n\n- **Brand**: `vermillion` (朱) / `indigo` (藍) — the two Schatten\n  brand colors, for deliberate brand emphasis where neither a state\n  color nor a foreground tier is the right fit.\n\nPlus `inherit` (delegates to the parent's color).\n\n## Element selection\n\n`as` controls the rendered tag. By default `body` and `heading`\nrender `<p>`, and `label` renders `<label>`. To apply Text's classes\nto an arbitrary element (e.g. a framework `<Link>`), use\n`textVariants(...)` on that element directly."}}},tags:["autodocs"],argTypes:{variant:{description:"Semantic role of the text.",control:"select",options:["body","label","heading"],table:{type:{summary:'"body" | "label" | "heading"'},defaultValue:{summary:"body"}}},family:{description:"Font family. `sans` is the UI default; `serif` swaps to the editorial serif stack (EB Garamond / Noto Serif JP). The JP/EN visual-size compensation is applied library-wide on the body reset (not per-family), so both families read at a matched JP/EN height.",control:"inline-radio",options:["sans","serif"],table:{type:{summary:'"sans" | "serif"'},defaultValue:{summary:"sans"}}},leading:{description:"Line-height override. When unset, the line-height baked into the variant × size pairing applies. Values mirror the `--leading-*` token scale.",control:"select",options:["none","tight","snug","normal","relaxed","loose"],table:{type:{summary:'"none" | "tight" | "snug" | "normal" | "relaxed" | "loose"'},defaultValue:{summary:"-"}}},size:{description:"Size of the text. Available sizes depend on the variant.",control:"select",options:["xs","sm","md","lg","xl","2xl"],table:{type:{summary:'"xs" | "sm" | "md" | "lg" | "xl" | "2xl"'},defaultValue:{summary:"md"}}},color:{description:"Color of the text.\n\n- `default` / `muted` / `subtle` form the primary → tertiary foreground hierarchy (most → least prominent).\n- State colors (`error` / `success` / `warning` / `info`) reference the corresponding state semantic tokens — use them for inline status text such as form errors or success notes.\n- `inverted` / `inverted-muted` / `inverted-subtle` mirror the foreground hierarchy on saturated surfaces (e.g. text inside a solid Toast or Callout, or on a primary-colored fill).\n- `vermillion` (朱) / `indigo` (藍) are the Schatten brand colors — use them for deliberate brand emphasis.",control:"select",options:["default","muted","subtle","vermillion","indigo","error","success","warning","info","inverted","inverted-muted","inverted-subtle","inherit"],table:{type:{summary:'"default" | "muted" | "subtle" | "vermillion" | "indigo" | "error" | "success" | "warning" | "info" | "inverted" | "inverted-muted" | "inverted-subtle" | "inherit"'},defaultValue:{summary:"default"}}},align:{description:"Text alignment.",control:"select",options:["left","center","right"],table:{type:{summary:'"left" | "center" | "right"'},defaultValue:{summary:"-"}}},truncate:{description:"Truncate text with ellipsis on overflow.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},as:{description:"HTML element to render.",control:"select",options:["p","span","h1","h2","h3","h4","h5","h6"],table:{type:{summary:'"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"'},defaultValue:{summary:'"p" (body/heading) or "label" (label)'}}},children:{description:"Text content.",control:"text",table:{type:{summary:"ReactNode"}}}}},a={name:"Playground",args:{variant:"body",size:"md",children:"The quick brown fox jumps over the lazy dog."}},t={name:"Body Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{variant:"body",size:"xs",children:"Body XS — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"sm",children:"Body SM — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"md",children:"Body MD — The quick brown fox jumps over the lazy dog."}),e.jsx(r,{variant:"body",size:"lg",children:"Body LG — The quick brown fox jumps over the lazy dog."})]})},n={name:"Label Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{variant:"label",size:"xs",children:"Label XS"}),e.jsx(r,{variant:"label",size:"sm",children:"Label SM"}),e.jsx(r,{variant:"label",size:"md",children:"Label MD"}),e.jsx(r,{variant:"label",size:"lg",children:"Label LG"})]})},s={name:"Heading Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{variant:"heading",size:"sm",children:"Heading SM"}),e.jsx(r,{variant:"heading",size:"md",children:"Heading MD"}),e.jsx(r,{variant:"heading",size:"lg",children:"Heading LG"}),e.jsx(r,{variant:"heading",size:"xl",children:"Heading XL"}),e.jsx(r,{variant:"heading",size:"2xl",children:"Heading 2XL"})]})},o={name:"Font Families",parameters:{docs:{description:{story:"The `serif` family swaps to the EB Garamond / Noto Serif JP stack. Latin faces sit at a lower cap-height than the CJK faces, so Schatten applies `font-size-adjust: cap-height` on the body reset (library-wide, all components) to lift the Latin glyphs to the CJK height — compare the Latin against the Japanese in each row."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{variant:"label",size:"sm",children:"Sans (default)"}),e.jsx(r,{family:"sans",variant:"heading",size:"lg",as:"h3",children:"Schatten の Typography — Hamburg 1234"}),e.jsx(r,{family:"sans",children:"落ち着いた UI の本文。The quick brown fox jumps over the lazy dog. 1234567890"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{variant:"label",size:"sm",children:"Serif (EB Garamond / Noto Serif JP)"}),e.jsx(r,{family:"serif",variant:"heading",size:"lg",as:"h3",children:"Schatten の Typography — Hamburg 1234"}),e.jsx(r,{family:"serif",children:"序文にふさわしい editorial な本文。The quick brown fox jumps over the lazy dog. 1234567890"})]})]})},i={name:"Leading",parameters:{docs:{description:{story:"`leading` overrides the line-height baked into the variant × size pairing. `relaxed` (1.625) suits serif long-form copy; `none` (1.0) tightens display headings."}}},render:()=>e.jsx("div",{className:"flex max-w-md flex-col gap-6",children:["none","normal","relaxed","loose"].map(u=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs(r,{variant:"label",size:"sm",children:['leading="',u,'"']}),e.jsx(r,{family:"serif",leading:u,children:"行間の違いを確認するための本文サンプル。The quick brown fox jumps over the lazy dog, then comes back around again."})]},u))})},l={name:"Colors",parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}},docs:{description:{story:"`default`, `muted`, and `subtle` form the foreground hierarchy from most prominent (primary text) to least prominent (tertiary helper / placeholder-like text)."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{color:"default",children:"Default — primary text"}),e.jsx(r,{color:"muted",children:"Muted — secondary / helper text"}),e.jsx(r,{color:"subtle",children:"Subtle — tertiary text, faintest of the three"}),e.jsx("div",{className:"text-blue-500",children:e.jsx(r,{color:"inherit",children:"Inherit color (from parent)"})})]})},d={name:"State Colors",parameters:{docs:{description:{story:'State colors reference the same `error` / `success` / `warning` / `info` semantic tokens used by Toast and Callout. Use these for inline status text — for example a "Saved" confirmation note or a "3 items failed" summary.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{color:"error",children:"Error — Could not save your changes."}),e.jsx(r,{color:"success",children:"Success — Your changes were saved."}),e.jsx(r,{color:"warning",children:"Warning — 3 items were skipped."}),e.jsx(r,{color:"info",children:"Info — Beta features may change."})]})},c={name:"Brand Colors",parameters:{docs:{description:{story:"`vermillion` (朱) and `indigo` (藍) are the two Schatten brand colors, exposed as the `--color-vermillion` / `--color-indigo` semantic tokens. Reach for them when a designer explicitly wants brand emphasis — neither a state color nor a foreground tier."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{color:"vermillion",children:"Vermillion — 朱, the primary brand color"}),e.jsx(r,{color:"indigo",children:"Indigo — 藍, the second brand color"})]})},m={name:"Inverted Color",parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}},docs:{description:{story:"`inverted` / `inverted-muted` / `inverted-subtle` mirror the `default` / `muted` / `subtle` hierarchy but for text placed on saturated surfaces (a solid Toast / Callout, a primary-colored fill, …). Each step is progressively less prominent against the saturated background."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-1 rounded-md bg-solid p-4",children:[e.jsx(r,{color:"inverted",children:"Inverted — primary text on a primary surface"}),e.jsx(r,{color:"inverted-muted",size:"sm",children:"Inverted muted — secondary / helper text"}),e.jsx(r,{color:"inverted-subtle",size:"sm",children:"Inverted subtle — tertiary text, faintest of the three"})]}),e.jsxs("div",{className:"flex flex-col gap-1 rounded-md bg-success p-4",children:[e.jsx(r,{color:"inverted",children:"Inverted on a success surface"}),e.jsx(r,{color:"inverted-muted",size:"sm",children:"Secondary on the same surface"})]}),e.jsxs("div",{className:"flex flex-col gap-1 rounded-md bg-error p-4",children:[e.jsx(r,{color:"inverted",children:"Inverted on an error surface"}),e.jsx(r,{color:"inverted-subtle",size:"sm",children:"Tertiary on the same surface"})]})]})},h={name:"Truncated",render:()=>e.jsx("div",{className:"w-64",children:e.jsx(r,{truncate:!0,children:"This is a very long text that should be truncated with an ellipsis when it overflows the container."})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'body',
    size: 'md',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Font Families',
  parameters: {
    docs: {
      description: {
        story: 'The \`serif\` family swaps to the EB Garamond / Noto Serif JP stack. Latin faces sit at a lower cap-height than the CJK faces, so Schatten applies \`font-size-adjust: cap-height\` on the body reset (library-wide, all components) to lift the Latin glyphs to the CJK height — compare the Latin against the Japanese in each row.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Text variant="label" size="sm">
          Sans (default)
        </Text>
        <Text family="sans" variant="heading" size="lg" as="h3">
          Schatten の Typography — Hamburg 1234
        </Text>
        <Text family="sans">
          落ち着いた UI の本文。The quick brown fox jumps over the lazy dog. 1234567890
        </Text>
      </div>
      <div className="flex flex-col gap-2">
        <Text variant="label" size="sm">
          Serif (EB Garamond / Noto Serif JP)
        </Text>
        <Text family="serif" variant="heading" size="lg" as="h3">
          Schatten の Typography — Hamburg 1234
        </Text>
        <Text family="serif">
          序文にふさわしい editorial な本文。The quick brown fox jumps over the lazy dog. 1234567890
        </Text>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Leading',
  parameters: {
    docs: {
      description: {
        story: '\`leading\` overrides the line-height baked into the variant × size pairing. \`relaxed\` (1.625) suits serif long-form copy; \`none\` (1.0) tightens display headings.'
      }
    }
  },
  render: () => <div className="flex max-w-md flex-col gap-6">
      {(['none', 'normal', 'relaxed', 'loose'] as const).map(leading => <div key={leading} className="flex flex-col gap-1">
          <Text variant="label" size="sm">
            leading=&quot;{leading}&quot;
          </Text>
          <Text family="serif" leading={leading}>
            行間の違いを確認するための本文サンプル。The quick brown fox jumps over the lazy dog,
            then comes back around again.
          </Text>
        </div>)}
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Colors',
  parameters: {
    // Renders the subtle foreground tier (large/incidental-only) + a raw text-blue-500 inherit demo — not state-colour text. Mirrors Text.vrt.spec.ts. #344 / #346.
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    },
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Inverted Color',
  parameters: {
    // inverted foreground tiers on saturated surfaces — incidental/large-only by design. Mirrors Text.vrt.spec.ts. #344 / #346.
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    },
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Truncated',
  render: () => <div className="w-64">
      <Text truncate>
        This is a very long text that should be truncated with an ellipsis when it overflows the
        container.
      </Text>
    </div>
}`,...h.parameters?.docs?.source}}};const T=["Playground","BodySizes","LabelSizes","HeadingSizes","FontFamilies","Leading","Colors","StateColors","BrandColors","InvertedColor","Truncated"];export{t as BodySizes,c as BrandColors,l as Colors,o as FontFamilies,s as HeadingSizes,m as InvertedColor,n as LabelSizes,i as Leading,a as Playground,d as StateColors,h as Truncated,T as __namedExportsOrder,b as default};
