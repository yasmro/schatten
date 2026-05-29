import{j as e}from"./iframe-yvcvjE4B.js";import{I as r}from"./Input-DKytfdp2.js";import{F as a}from"./Field-cAJ9aZf0.js";import"./preload-helper-DWrUfoT4.js";import"./field-DQRskRmg.js";import"./utils-DclmTqRz.js";import"./index-DQHfBcw3.js";/* empty css              */import"./Tooltip-yrR60LJJ.js";import"./index-DtuM8HsM.js";import"./index-CFc0ZLg0.js";import"./index-tM8hhvKg.js";import"./index-5ceKZsKa.js";import"./index-sM26axiM.js";import"./index-CvWGCoH4.js";import"./index-Cv4InnO4.js";import"./index--NgmRtLe.js";import"./index-CXZxXDsi.js";import"./index-DGuaxgeb.js";/* empty css                *//* empty css              */import"./info-BXPlC6zc.js";import"./createLucideIcon-BeJxCnXx.js";const I={title:"Components/lv1/Field",component:a,parameters:{layout:"padded",docs:{description:{component:'Parity stories — React `<Field>` and a hand-written vanilla `<div>`\nwith the matching `.st-field` class chain must render pixel-identical.\nBacks the VRT in `Field.parity.vrt.spec.ts`.\n\nField is in #297 区分 A (layout / context wrapper, fully renderable\nin vanilla HTML). The form input children\'s class API (`.st-input-\nwrapper` / `.st-input`) is itself covered by sweep-4 Input parity;\nwe reuse the chain here so the demo shows the realistic combined\nsurface (Field chrome wrapping a real input) rather than bare\n`<input>` elements that would render without any visual frame.\n\nThe error case (Name field) demonstrates the visual-less\nobservability hook variant from css-api.md §state: `data-error` lands\non the Field root, but the red border / tinted background on the\ninput come from the inner `.st-input-wrapper:has(.st-input[aria-invalid="true"])`\nselector (sweep-4) — Field root itself is not styled by `[data-error]`.\n\nVanilla consumers MUST wire `htmlFor` / `id` / `aria-describedby` /\n`aria-invalid` themselves — the framework-agnostic CSS does not\nauto-wire ARIA. Per-attribute requirements are documented in\nCSSApi.stories.tsx → Field section.'}}}},i={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"React"}),e.jsx(a,{label:"Email",description:"We never share your email",children:e.jsx(r,{id:"r1-input",type:"email",defaultValue:"user@example.com"})}),e.jsx(a,{label:"Name",required:!0,error:"Name is required",children:e.jsx(r,{id:"r2-input",defaultValue:""})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"v1-input",className:"st-field__label",children:"Email"})}),e.jsx("label",{htmlFor:"v1-input",id:"v1-description",className:"st-field__description",children:"We never share your email"}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"v1-input",type:"email",className:"st-input",defaultValue:"user@example.com","aria-describedby":"v1-description"})})]}),e.jsxs("div",{className:"st-field","data-error":"true",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsxs("label",{htmlFor:"v2-input",className:"st-field__label",children:["Name",e.jsx("span",{className:"st-field__required-marker",children:"*"})]})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"v2-input",className:"st-input",defaultValue:"",required:!0,"aria-invalid":"true","aria-describedby":"v2-error"})}),e.jsx("p",{id:"v2-error",className:"st-field__error",children:"Name is required"})]})]})]})};var s,t,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(t=i.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const k=["Parity"];export{i as Parity,k as __namedExportsOrder,I as default};
