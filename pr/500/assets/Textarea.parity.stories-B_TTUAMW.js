import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./Textarea-Dw8Cx1No.js";var i,a,o,s,c;e((()=>{n(),i=t(),a={title:`Components/lv1/Textarea`,component:r,parameters:{layout:`padded`,docs:{description:{component:'Parity stories — React `<Textarea>` and a hand-written `<textarea\nclass="st-textarea st-textarea--md">` must render pixel-identical.\nBacks the VRT in `Textarea.parity.vrt.spec.ts`.\n\nCovered combinations:\n- 3 sizes (sm / md / lg)\n- error / disabled / readOnly / readOnly + error\n\nVanilla side carries `aria-invalid`, `readonly`, and `disabled`\nmanually — the CSS targets those attributes (per css-api.md §state),\nso vanilla HTML consumers must set them.'}}}},o=({size:e,isError:t,disabled:n,readOnly:r,defaultValue:a,placeholder:o,rows:s=3})=>(0,i.jsx)(`textarea`,{rows:s,placeholder:o,defaultValue:a,disabled:n,readOnly:r,"aria-invalid":t?`true`:void 0,className:`st-textarea st-textarea--${e}`}),s={name:`React vs Vanilla HTML`,render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-2 gap-12 max-w-5xl`,children:[(0,i.jsxs)(`div`,{className:`space-y-4`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),(0,i.jsxs)(`div`,{className:`flex flex-col gap-3 w-72`,children:[(0,i.jsx)(r,{"aria-label":`ta-sm`,size:`sm`,placeholder:`Small`,rows:2}),(0,i.jsx)(r,{"aria-label":`ta-md`,size:`md`,placeholder:`Medium`,rows:3}),(0,i.jsx)(r,{"aria-label":`ta-lg`,size:`lg`,placeholder:`Large`,rows:3}),(0,i.jsx)(r,{"aria-label":`ta-error`,isError:!0,placeholder:`Error`,rows:2}),(0,i.jsx)(r,{"aria-label":`ta-disabled`,disabled:!0,defaultValue:`Disabled`,rows:2}),(0,i.jsx)(r,{"aria-label":`ta-readonly`,readOnly:!0,defaultValue:`Read-only`,rows:2}),(0,i.jsx)(r,{"aria-label":`ta-readonly-error`,readOnly:!0,isError:!0,defaultValue:`Read-only + error`,rows:2})]})]}),(0,i.jsxs)(`div`,{className:`space-y-4`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),(0,i.jsxs)(`div`,{className:`flex flex-col gap-3 w-72`,children:[(0,i.jsx)(o,{size:`sm`,placeholder:`Small`,rows:2}),(0,i.jsx)(o,{size:`md`,placeholder:`Medium`,rows:3}),(0,i.jsx)(o,{size:`lg`,placeholder:`Large`,rows:3}),(0,i.jsx)(o,{size:`md`,isError:!0,placeholder:`Error`,rows:2}),(0,i.jsx)(o,{size:`md`,disabled:!0,defaultValue:`Disabled`,rows:2}),(0,i.jsx)(o,{size:`md`,readOnly:!0,defaultValue:`Read-only`,rows:2}),(0,i.jsx)(o,{size:`md`,readOnly:!0,isError:!0,defaultValue:`Read-only + error`,rows:2})]})]})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Parity`]}))();export{s as Parity,c as __namedExportsOrder,a as default};