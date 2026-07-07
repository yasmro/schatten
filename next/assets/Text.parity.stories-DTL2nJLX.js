import{j as t}from"./iframe-BavYS4eU.js";import{T as e}from"./Text-EOI3iTaH.js";import"./preload-helper-CrztxVc4.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css             */const i={title:"Components/lv1/Text",component:e,parameters:{layout:"centered",docs:{description:{component:"Parity stories — React `<Text>` and a hand-written vanilla HTML element\nwith the same `.st-text` class chain must render pixel-identical. Backs\nthe VRT in `Text.parity.vrt.spec.ts`."}}}},s={name:"React vs Vanilla HTML",render:()=>t.jsxs("div",{className:"grid grid-cols-2 gap-12",children:[t.jsxs("div",{className:"space-y-3 w-64",children:[t.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),t.jsx(e,{variant:"heading",size:"lg",as:"h2",children:"Heading lg"}),t.jsx(e,{children:"Default body md."}),t.jsx(e,{color:"muted",children:"Muted body md."}),t.jsx(e,{color:"error",size:"sm",children:"Error sm"}),t.jsx(e,{variant:"label",size:"sm",children:"Label sm"}),t.jsx(e,{color:"vermillion",children:"Vermillion brand"}),t.jsx(e,{align:"right",children:"Right-aligned"}),t.jsx(e,{truncate:!0,children:"A very long line that should be truncated when it overflows the container width."}),t.jsx(e,{family:"serif",children:"Serif 明朝 Hamburg"}),t.jsx(e,{family:"serif",leading:"relaxed",children:"Serif relaxed 行間。Hamburg."})]}),t.jsxs("div",{className:"space-y-3 w-64",children:[t.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),t.jsx("h2",{className:"st-text st-text--heading st-text--sans st-text--lg st-text--default",children:"Heading lg"}),t.jsx("p",{className:"st-text st-text--body st-text--sans st-text--md st-text--default",children:"Default body md."}),t.jsx("p",{className:"st-text st-text--body st-text--sans st-text--md st-text--muted",children:"Muted body md."}),t.jsx("p",{className:"st-text st-text--body st-text--sans st-text--sm st-text--error",children:"Error sm"}),t.jsx("label",{className:"st-text st-text--label st-text--sans st-text--sm st-text--default",children:"Label sm"}),t.jsx("p",{className:"st-text st-text--body st-text--sans st-text--md st-text--vermillion",children:"Vermillion brand"}),t.jsx("p",{className:"st-text st-text--body st-text--sans st-text--md st-text--default st-text--align-right",children:"Right-aligned"}),t.jsx("p",{className:"st-text st-text--body st-text--sans st-text--md st-text--default st-text--truncate",children:"A very long line that should be truncated when it overflows the container width."}),t.jsx("p",{className:"st-text st-text--body st-text--serif st-text--md st-text--default",children:"Serif 明朝 Hamburg"}),t.jsx("p",{className:"st-text st-text--body st-text--serif st-text--leading-relaxed st-text--md st-text--default",children:"Serif relaxed 行間。Hamburg."})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12">
      <div className="space-y-3 w-64">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Text variant="heading" size="lg" as="h2">
          Heading lg
        </Text>
        <Text>Default body md.</Text>
        <Text color="muted">Muted body md.</Text>
        <Text color="error" size="sm">
          Error sm
        </Text>
        <Text variant="label" size="sm">
          Label sm
        </Text>
        <Text color="vermillion">Vermillion brand</Text>
        <Text align="right">Right-aligned</Text>
        <Text truncate>
          A very long line that should be truncated when it overflows the container width.
        </Text>
        <Text family="serif">Serif 明朝 Hamburg</Text>
        <Text family="serif" leading="relaxed">
          Serif relaxed 行間。Hamburg.
        </Text>
      </div>
      <div className="space-y-3 w-64">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <h2 className="st-text st-text--heading st-text--sans st-text--lg st-text--default">
          Heading lg
        </h2>
        <p className="st-text st-text--body st-text--sans st-text--md st-text--default">
          Default body md.
        </p>
        <p className="st-text st-text--body st-text--sans st-text--md st-text--muted">
          Muted body md.
        </p>
        <p className="st-text st-text--body st-text--sans st-text--sm st-text--error">Error sm</p>
        {/* biome-ignore lint/a11y/noLabelWithoutControl: parity story — visually demonstrates \`.st-text--label\` typography against the React side, not a real form label */}
        <label className="st-text st-text--label st-text--sans st-text--sm st-text--default">
          Label sm
        </label>
        <p className="st-text st-text--body st-text--sans st-text--md st-text--vermillion">
          Vermillion brand
        </p>
        <p className="st-text st-text--body st-text--sans st-text--md st-text--default st-text--align-right">
          Right-aligned
        </p>
        <p className="st-text st-text--body st-text--sans st-text--md st-text--default st-text--truncate">
          A very long line that should be truncated when it overflows the container width.
        </p>
        <p className="st-text st-text--body st-text--serif st-text--md st-text--default">
          Serif 明朝 Hamburg
        </p>
        <p className="st-text st-text--body st-text--serif st-text--leading-relaxed st-text--md st-text--default">
          Serif relaxed 行間。Hamburg.
        </p>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};const m=["Parity"];export{s as Parity,m as __namedExportsOrder,i as default};
