import{j as e}from"./iframe-dIcK6U3O.js";import{T as a}from"./Textarea-DnRt_qNJ.js";import"./preload-helper-DdCrNAmi.js";import"./field-ChMtC4Cg.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css                 */const h={title:"Components/lv1/Textarea",component:a,parameters:{layout:"padded",docs:{description:{component:'Parity stories — React `<Textarea>` and a hand-written `<textarea\nclass="st-textarea st-textarea--md">` must render pixel-identical.\nBacks the VRT in `Textarea.parity.vrt.spec.ts`.\n\nCovered combinations:\n- 3 sizes (sm / md / lg)\n- error / disabled / readOnly / readOnly + error\n\nVanilla side carries `aria-invalid`, `readonly`, and `disabled`\nmanually — the CSS targets those attributes (per css-api.md §state),\nso vanilla HTML consumers must set them.'}}}},r=({size:s,isError:t,disabled:d,readOnly:i,defaultValue:o,placeholder:n,rows:m=3})=>e.jsx("textarea",{rows:m,placeholder:n,defaultValue:o,disabled:d,readOnly:i,"aria-invalid":t?"true":void 0,className:`st-textarea st-textarea--${s}`}),l={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsxs("div",{className:"flex flex-col gap-3 w-72",children:[e.jsx(a,{"aria-label":"ta-sm",size:"sm",placeholder:"Small",rows:2}),e.jsx(a,{"aria-label":"ta-md",size:"md",placeholder:"Medium",rows:3}),e.jsx(a,{"aria-label":"ta-lg",size:"lg",placeholder:"Large",rows:3}),e.jsx(a,{"aria-label":"ta-error",isError:!0,placeholder:"Error",rows:2}),e.jsx(a,{"aria-label":"ta-disabled",disabled:!0,defaultValue:"Disabled",rows:2}),e.jsx(a,{"aria-label":"ta-readonly",readOnly:!0,defaultValue:"Read-only",rows:2}),e.jsx(a,{"aria-label":"ta-readonly-error",readOnly:!0,isError:!0,defaultValue:"Read-only + error",rows:2})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"flex flex-col gap-3 w-72",children:[e.jsx(r,{size:"sm",placeholder:"Small",rows:2}),e.jsx(r,{size:"md",placeholder:"Medium",rows:3}),e.jsx(r,{size:"lg",placeholder:"Large",rows:3}),e.jsx(r,{size:"md",isError:!0,placeholder:"Error",rows:2}),e.jsx(r,{size:"md",disabled:!0,defaultValue:"Disabled",rows:2}),e.jsx(r,{size:"md",readOnly:!0,defaultValue:"Read-only",rows:2}),e.jsx(r,{size:"md",readOnly:!0,isError:!0,defaultValue:"Read-only + error",rows:2})]})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="flex flex-col gap-3 w-72">
          <Textarea aria-label="ta-sm" size="sm" placeholder="Small" rows={2} />
          <Textarea aria-label="ta-md" size="md" placeholder="Medium" rows={3} />
          <Textarea aria-label="ta-lg" size="lg" placeholder="Large" rows={3} />
          <Textarea aria-label="ta-error" isError placeholder="Error" rows={2} />
          <Textarea aria-label="ta-disabled" disabled defaultValue="Disabled" rows={2} />
          <Textarea aria-label="ta-readonly" readOnly defaultValue="Read-only" rows={2} />
          <Textarea aria-label="ta-readonly-error" readOnly isError defaultValue="Read-only + error" rows={2} />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex flex-col gap-3 w-72">
          <VanillaTextarea size="sm" placeholder="Small" rows={2} />
          <VanillaTextarea size="md" placeholder="Medium" rows={3} />
          <VanillaTextarea size="lg" placeholder="Large" rows={3} />
          <VanillaTextarea size="md" isError placeholder="Error" rows={2} />
          <VanillaTextarea size="md" disabled defaultValue="Disabled" rows={2} />
          <VanillaTextarea size="md" readOnly defaultValue="Read-only" rows={2} />
          <VanillaTextarea size="md" readOnly isError defaultValue="Read-only + error" rows={2} />
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const f=["Parity"];export{l as Parity,f as __namedExportsOrder,h as default};
