import{j as t}from"./iframe-C_p_Y_hv.js";import{T as e}from"./Text-BbzVhK60.js";import"./preload-helper-DOEfh94x.js";import"./index-DwJmuGt0.js";import"./index-DTUWX51L.js";import"./utils-DclmTqRz.js";import"./index-DQHfBcw3.js";/* empty css             */const p={title:"Components/lv1/Text",component:e,parameters:{layout:"centered",docs:{description:{component:"Parity stories — React `<Text>` and a hand-written vanilla HTML element\nwith the same `.st-text` class chain must render pixel-identical. Backs\nthe VRT in `Text.parity.vrt.spec.ts`."}}}},s={name:"React vs Vanilla HTML",render:()=>t.jsxs("div",{className:"grid grid-cols-2 gap-12",children:[t.jsxs("div",{className:"space-y-3 w-64",children:[t.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),t.jsx(e,{variant:"heading",size:"lg",as:"h2",children:"Heading lg"}),t.jsx(e,{children:"Default body md."}),t.jsx(e,{color:"muted",children:"Muted body md."}),t.jsx(e,{color:"error",size:"sm",children:"Error sm"}),t.jsx(e,{variant:"label",size:"sm",children:"Label sm"}),t.jsx(e,{color:"vermillion",children:"Vermillion brand"}),t.jsx(e,{align:"right",children:"Right-aligned"}),t.jsx(e,{truncate:!0,children:"A very long line that should be truncated when it overflows the container width."})]}),t.jsxs("div",{className:"space-y-3 w-64",children:[t.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),t.jsx("h2",{className:"st-text st-text--heading st-text--lg st-text--default",children:"Heading lg"}),t.jsx("p",{className:"st-text st-text--body st-text--md st-text--default",children:"Default body md."}),t.jsx("p",{className:"st-text st-text--body st-text--md st-text--muted",children:"Muted body md."}),t.jsx("p",{className:"st-text st-text--body st-text--sm st-text--error",children:"Error sm"}),t.jsx("label",{className:"st-text st-text--label st-text--sm st-text--default",children:"Label sm"}),t.jsx("p",{className:"st-text st-text--body st-text--md st-text--vermillion",children:"Vermillion brand"}),t.jsx("p",{className:"st-text st-text--body st-text--md st-text--default st-text--align-right",children:"Right-aligned"}),t.jsx("p",{className:"st-text st-text--body st-text--md st-text--default st-text--truncate",children:"A very long line that should be truncated when it overflows the container width."})]})]})};var a,l,n;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      </div>
      <div className="space-y-3 w-64">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <h2 className="st-text st-text--heading st-text--lg st-text--default">Heading lg</h2>
        <p className="st-text st-text--body st-text--md st-text--default">Default body md.</p>
        <p className="st-text st-text--body st-text--md st-text--muted">Muted body md.</p>
        <p className="st-text st-text--body st-text--sm st-text--error">Error sm</p>
        {/* biome-ignore lint/a11y/noLabelWithoutControl: parity story — visually demonstrates \`.st-text--label\` typography against the React side, not a real form label */}
        <label className="st-text st-text--label st-text--sm st-text--default">Label sm</label>
        <p className="st-text st-text--body st-text--md st-text--vermillion">Vermillion brand</p>
        <p className="st-text st-text--body st-text--md st-text--default st-text--align-right">
          Right-aligned
        </p>
        <p className="st-text st-text--body st-text--md st-text--default st-text--truncate">
          A very long line that should be truncated when it overflows the container width.
        </p>
      </div>
    </div>
}`,...(n=(l=s.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const u=["Parity"];export{s as Parity,u as __namedExportsOrder,p as default};
