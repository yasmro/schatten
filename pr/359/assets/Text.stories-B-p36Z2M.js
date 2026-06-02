import{i as e}from"./preload-helper-ChaSUgV0.js";import{t}from"./iframe-DK9TY03R.js";import{n,t as r}from"./Text-DJ5gcrz8.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i=t(),a={title:`Components/lv1/Text`,component:r,parameters:{layout:`centered`,docs:{description:{component:"Text renders semantic typography (`body` / `label` / `heading`) at\npredefined sizes, with color, alignment, and truncation as\northogonal axes.\n\n## `color` is grouped into three parallel hierarchies\n\n- **Foreground** (most → least prominent): `default` / `muted` /\n  `subtle` — primary, secondary/helper, and tertiary text. Reach for\n  these for ordinary on-page typography.\n- **State**: `error` / `success` / `warning` / `info` — inline\n  status text such as form errors, success notes, or beta callouts.\n  References the same state semantic tokens as Toast / Callout /\n  Badge.\n- **Inverted** (most → least prominent): `inverted` / `inverted-muted`\n  / `inverted-subtle` — for text placed on saturated surfaces (a\n  solid Toast or Callout, a primary-colored fill, …). Mirrors the\n  foreground hierarchy.\n\n- **Brand**: `vermillion` (朱) / `indigo` (藍) — the two Schatten\n  brand colors, for deliberate brand emphasis where neither a state\n  color nor a foreground tier is the right fit.\n\nPlus `inherit` (delegates to the parent's color).\n\n## Element selection\n\n`as` controls the rendered tag. By default `body` and `heading`\nrender `<p>`, and `label` renders `<label>`. To apply Text's classes\nto an arbitrary element (e.g. a framework `<Link>`), use\n`textVariants(...)` on that element directly."}}},tags:[`autodocs`],argTypes:{variant:{description:`Semantic role of the text.`,control:`select`,options:[`body`,`label`,`heading`],table:{type:{summary:`"body" | "label" | "heading"`},defaultValue:{summary:`body`}}},size:{description:`Size of the text. Available sizes depend on the variant.`,control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],table:{type:{summary:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`},defaultValue:{summary:`md`}}},color:{description:"Color of the text.\n\n- `default` / `muted` / `subtle` form the primary → tertiary foreground hierarchy (most → least prominent).\n- State colors (`error` / `success` / `warning` / `info`) reference the corresponding state semantic tokens — use them for inline status text such as form errors or success notes.\n- `inverted` / `inverted-muted` / `inverted-subtle` mirror the foreground hierarchy on saturated surfaces (e.g. text inside a solid Toast or Callout, or on a primary-colored fill).\n- `vermillion` (朱) / `indigo` (藍) are the Schatten brand colors — use them for deliberate brand emphasis.",control:`select`,options:[`default`,`muted`,`subtle`,`vermillion`,`indigo`,`error`,`success`,`warning`,`info`,`inverted`,`inverted-muted`,`inverted-subtle`,`inherit`],table:{type:{summary:`"default" | "muted" | "subtle" | "vermillion" | "indigo" | "error" | "success" | "warning" | "info" | "inverted" | "inverted-muted" | "inverted-subtle" | "inherit"`},defaultValue:{summary:`default`}}},align:{description:`Text alignment.`,control:`select`,options:[`left`,`center`,`right`],table:{type:{summary:`"left" | "center" | "right"`},defaultValue:{summary:`-`}}},truncate:{description:`Truncate text with ellipsis on overflow.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},as:{description:`HTML element to render.`,control:`select`,options:[`p`,`span`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],table:{type:{summary:`"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"`},defaultValue:{summary:`"p" (body/heading) or "label" (label)`}}},children:{description:`Text content.`,control:`text`,table:{type:{summary:`ReactNode`}}}}},o={name:`Playground`,args:{variant:`body`,size:`md`,children:`The quick brown fox jumps over the lazy dog.`}},s={name:`Body Sizes`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{variant:`body`,size:`xs`,children:`Body XS — The quick brown fox jumps over the lazy dog.`}),(0,i.jsx)(r,{variant:`body`,size:`sm`,children:`Body SM — The quick brown fox jumps over the lazy dog.`}),(0,i.jsx)(r,{variant:`body`,size:`md`,children:`Body MD — The quick brown fox jumps over the lazy dog.`}),(0,i.jsx)(r,{variant:`body`,size:`lg`,children:`Body LG — The quick brown fox jumps over the lazy dog.`})]})},c={name:`Label Sizes`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{variant:`label`,size:`xs`,children:`Label XS`}),(0,i.jsx)(r,{variant:`label`,size:`sm`,children:`Label SM`}),(0,i.jsx)(r,{variant:`label`,size:`md`,children:`Label MD`}),(0,i.jsx)(r,{variant:`label`,size:`lg`,children:`Label LG`})]})},l={name:`Heading Sizes`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,i.jsx)(r,{variant:`heading`,size:`sm`,children:`Heading SM`}),(0,i.jsx)(r,{variant:`heading`,size:`md`,children:`Heading MD`}),(0,i.jsx)(r,{variant:`heading`,size:`lg`,children:`Heading LG`}),(0,i.jsx)(r,{variant:`heading`,size:`xl`,children:`Heading XL`}),(0,i.jsx)(r,{variant:`heading`,size:`2xl`,children:`Heading 2XL`})]})},u={name:`Colors`,parameters:{docs:{description:{story:"`default`, `muted`, and `subtle` form the foreground hierarchy from most prominent (primary text) to least prominent (tertiary helper / placeholder-like text)."}}},render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{color:`default`,children:`Default — primary text`}),(0,i.jsx)(r,{color:`muted`,children:`Muted — secondary / helper text`}),(0,i.jsx)(r,{color:`subtle`,children:`Subtle — tertiary text, faintest of the three`}),(0,i.jsx)(`div`,{className:`text-blue-500`,children:(0,i.jsx)(r,{color:`inherit`,children:`Inherit color (from parent)`})})]})},d={name:`State Colors`,parameters:{docs:{description:{story:'State colors reference the same `error` / `success` / `warning` / `info` semantic tokens used by Toast and Callout. Use these for inline status text — for example a "Saved" confirmation note or a "3 items failed" summary.'}}},render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{color:`error`,children:`Error — Could not save your changes.`}),(0,i.jsx)(r,{color:`success`,children:`Success — Your changes were saved.`}),(0,i.jsx)(r,{color:`warning`,children:`Warning — 3 items were skipped.`}),(0,i.jsx)(r,{color:`info`,children:`Info — Beta features may change.`})]})},f={name:`Brand Colors`,parameters:{docs:{description:{story:"`vermillion` (朱) and `indigo` (藍) are the two Schatten brand colors, exposed as the `--color-vermillion` / `--color-indigo` semantic tokens. Reach for them when a designer explicitly wants brand emphasis — neither a state color nor a foreground tier."}}},render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{color:`vermillion`,children:`Vermillion — 朱, the primary brand color`}),(0,i.jsx)(r,{color:`indigo`,children:`Indigo — 藍, the second brand color`})]})},p={name:`Inverted Color`,parameters:{docs:{description:{story:"`inverted` / `inverted-muted` / `inverted-subtle` mirror the `default` / `muted` / `subtle` hierarchy but for text placed on saturated surfaces (a solid Toast / Callout, a primary-colored fill, …). Each step is progressively less prominent against the saturated background."}}},render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsxs)(`div`,{className:`flex flex-col gap-1 rounded-md bg-solid p-4`,children:[(0,i.jsx)(r,{color:`inverted`,children:`Inverted — primary text on a primary surface`}),(0,i.jsx)(r,{color:`inverted-muted`,size:`sm`,children:`Inverted muted — secondary / helper text`}),(0,i.jsx)(r,{color:`inverted-subtle`,size:`sm`,children:`Inverted subtle — tertiary text, faintest of the three`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col gap-1 rounded-md bg-success p-4`,children:[(0,i.jsx)(r,{color:`inverted`,children:`Inverted on a success surface`}),(0,i.jsx)(r,{color:`inverted-muted`,size:`sm`,children:`Secondary on the same surface`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col gap-1 rounded-md bg-error p-4`,children:[(0,i.jsx)(r,{color:`inverted`,children:`Inverted on an error surface`}),(0,i.jsx)(r,{color:`inverted-subtle`,size:`sm`,children:`Tertiary on the same surface`})]})]})},m={name:`Truncated`,render:()=>(0,i.jsx)(`div`,{className:`w-64`,children:(0,i.jsx)(r,{truncate:!0,children:`This is a very long text that should be truncated with an ellipsis when it overflows the container.`})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'body',
    size: 'md',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Truncated',
  render: () => <div className="w-64">
      <Text truncate>
        This is a very long text that should be truncated with an ellipsis when it overflows the
        container.
      </Text>
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`BodySizes`,`LabelSizes`,`HeadingSizes`,`Colors`,`StateColors`,`BrandColors`,`InvertedColor`,`Truncated`]}))();export{s as BodySizes,f as BrandColors,u as Colors,l as HeadingSizes,p as InvertedColor,c as LabelSizes,o as Playground,d as StateColors,m as Truncated,h as __namedExportsOrder,a as default};