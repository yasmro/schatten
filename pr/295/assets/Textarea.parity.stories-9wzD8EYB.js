import{j as e}from"./iframe-CRqGDSYf.js";import{T as a}from"./Textarea-BQvepgLN.js";import"./preload-helper--vB6UvDd.js";import"./field-DNh8RSFX.js";import"./utils-DCADjnpI.js";import"./index-CkIaN0ex.js";/* empty css                 */const g={title:"Components/lv1/Textarea",component:a,parameters:{layout:"padded",docs:{description:{component:'Parity stories — React `<Textarea>` and a hand-written vanilla\n`<textarea class="st-textarea st-textarea--md">` must render\npixel-identical. Backs the VRT in `Textarea.parity.vrt.spec.ts`.\n\nCovered combinations:\n- 3 sizes (sm / md / lg)\n- error / disabled / readOnly\n- readOnly + isError (precedence: readOnly visual wins, aria-invalid stays)\n\nVanilla side carries `aria-invalid`, `disabled`, `readonly` manually —\nthe CSS targets attributes only, so vanilla HTML consumers must set them.'}}}},r=({size:i,isError:o,disabled:n,readOnly:m,defaultValue:u,placeholder:x})=>e.jsx("textarea",{className:`st-textarea st-textarea--${i}`,"aria-invalid":o?"true":void 0,disabled:n,readOnly:m,defaultValue:u,placeholder:x,rows:3}),s={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-6xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsx(a,{size:"sm",placeholder:"Small",rows:3}),e.jsx(a,{size:"md",placeholder:"Medium",rows:3}),e.jsx(a,{size:"lg",placeholder:"Large",rows:3}),e.jsx(a,{isError:!0,defaultValue:"Error state",rows:3}),e.jsx(a,{disabled:!0,defaultValue:"Disabled",rows:3}),e.jsx(a,{readOnly:!0,defaultValue:"Read-only",rows:3}),e.jsx(a,{readOnly:!0,isError:!0,defaultValue:"ReadOnly + error",rows:3})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"}),e.jsx(r,{size:"md",isError:!0,defaultValue:"Error state"}),e.jsx(r,{size:"md",disabled:!0,defaultValue:"Disabled"}),e.jsx(r,{size:"md",readOnly:!0,defaultValue:"Read-only"}),e.jsx(r,{size:"md",readOnly:!0,isError:!0,defaultValue:"ReadOnly + error"})]})]})};var l,t,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-6xl">
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Textarea size="sm" placeholder="Small" rows={3} />
        <Textarea size="md" placeholder="Medium" rows={3} />
        <Textarea size="lg" placeholder="Large" rows={3} />
        <Textarea isError defaultValue="Error state" rows={3} />
        <Textarea disabled defaultValue="Disabled" rows={3} />
        <Textarea readOnly defaultValue="Read-only" rows={3} />
        <Textarea readOnly isError defaultValue="ReadOnly + error" rows={3} />
      </div>
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <VanillaTextarea size="sm" placeholder="Small" />
        <VanillaTextarea size="md" placeholder="Medium" />
        <VanillaTextarea size="lg" placeholder="Large" />
        <VanillaTextarea size="md" isError defaultValue="Error state" />
        <VanillaTextarea size="md" disabled defaultValue="Disabled" />
        <VanillaTextarea size="md" readOnly defaultValue="Read-only" />
        <VanillaTextarea size="md" readOnly isError defaultValue="ReadOnly + error" />
      </div>
    </div>
}`,...(d=(t=s.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const h=["Parity"];export{s as Parity,h as __namedExportsOrder,g as default};
