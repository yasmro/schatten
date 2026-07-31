import{j as e}from"./iframe-CixjQBXU.js";import{I as a}from"./Input-hACoIWO5.js";import{F as r}from"./Field-DxcPMFWG.js";import"./preload-helper-LCxwLRn0.js";import"./field-BYlNeOlP.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css              */import"./Tooltip-Do6SmN1F.js";import"./index-DAcRnSQs.js";import"./index-CSu1j1O4.js";import"./index-Dj_DiB-d.js";import"./index-CBoYGtz3.js";import"./index-DIUIuM24.js";import"./index-CoaeRUbb.js";import"./index--wMJjdv7.js";import"./index-D0LpgpwG.js";import"./index-2wD3XbCW.js";import"./index-BCJGPrnS.js";import"./index-2UhmcSHy.js";import"./index-tXBFB2_A.js";import"./index-Cp7jHGFb.js";/* empty css                *//* empty css              */import"./info-DGwNhwcQ.js";import"./createLucideIcon-pmpw8Cdp.js";const I={title:"Components/lv1/Field",component:r,parameters:{layout:"padded",docs:{description:{component:'Parity stories — React `<Field>` and a hand-written vanilla `<div>`\nwith the matching `.st-field` class chain must render pixel-identical.\nBacks the VRT in `Field.parity.vrt.spec.ts`.\n\nField is in #297 区分 A (layout / context wrapper, fully renderable\nin vanilla HTML). The form input children\'s class API (`.st-input-\nwrapper` / `.st-input`) is itself covered by sweep-4 Input parity;\nwe reuse the chain here so the demo shows the realistic combined\nsurface (Field chrome wrapping a real input) rather than bare\n`<input>` elements that would render without any visual frame.\n\nThe error case (Name field) demonstrates the visual-less\nobservability hook variant from css-api.md §state: `data-error` lands\non the Field root, but the red border / tinted background on the\ninput come from the inner `.st-input-wrapper:has(.st-input[aria-invalid="true"])`\nselector (sweep-4) — Field root itself is not styled by `[data-error]`.\n\nVanilla consumers MUST wire `htmlFor` / `id` / `aria-describedby` /\n`aria-invalid` themselves — the framework-agnostic CSS does not\nauto-wire ARIA. Per-attribute requirements are documented in\nCSSApi.stories.tsx → Field section.'}}}},i={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"React"}),e.jsx(r,{label:"Email",description:"We never share your email",children:e.jsx(a,{id:"r1-input",type:"email",defaultValue:"user@example.com"})}),e.jsx(r,{label:"Name",required:!0,error:"Name is required",children:e.jsx(a,{id:"r2-input",defaultValue:""})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"v1-input",className:"st-field__label",children:"Email"})}),e.jsx("label",{htmlFor:"v1-input",id:"v1-description",className:"st-field__description",children:"We never share your email"}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"v1-input",type:"email",className:"st-input",defaultValue:"user@example.com","aria-describedby":"v1-description"})})]}),e.jsxs("div",{className:"st-field","data-error":"true",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsxs("label",{htmlFor:"v2-input",className:"st-field__label",children:["Name",e.jsx("span",{className:"st-field__required-marker",children:"*"})]})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"v2-input",className:"st-input",defaultValue:"",required:!0,"aria-invalid":"true","aria-describedby":"v2-error"})}),e.jsx("p",{id:"v2-error",className:"st-field__error",children:"Name is required"})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">React</p>
        <Field label="Email" description="We never share your email">
          <Input id="r1-input" type="email" defaultValue="user@example.com" />
        </Field>
        <Field label="Name" required error="Name is required">
          <Input id="r2-input" defaultValue="" />
        </Field>
      </div>
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">Vanilla HTML</p>
        <div className="st-field">
          <div className="st-field__label-row">
            <label htmlFor="v1-input" className="st-field__label">
              Email
            </label>
          </div>
          <label htmlFor="v1-input" id="v1-description" className="st-field__description">
            We never share your email
          </label>
          <div className="st-input-wrapper st-input-wrapper--md">
            <input id="v1-input" type="email" className="st-input" defaultValue="user@example.com" aria-describedby="v1-description" />
          </div>
        </div>
        <div className="st-field" data-error="true">
          <div className="st-field__label-row">
            <label htmlFor="v2-input" className="st-field__label">
              Name
              <span className="st-field__required-marker">*</span>
            </label>
          </div>
          <div className="st-input-wrapper st-input-wrapper--md">
            <input id="v2-input" className="st-input" defaultValue="" required aria-invalid="true" aria-describedby="v2-error" />
          </div>
          <p id="v2-error" className="st-field__error">
            Name is required
          </p>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const k=["Parity"];export{i as Parity,k as __namedExportsOrder,I as default};
