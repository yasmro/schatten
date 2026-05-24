import{j as e}from"./iframe-DS5am_0O.js";import{F as r}from"./Field-DPb7DmUj.js";import"./preload-helper-DXiRGy-X.js";import"./field-ieQj5p8H.js";import"./fieldset-ieQj5p8H.js";import"./utils-DclmTqRz.js";import"./index-DQHfBcw3.js";import"./Tooltip-BwVIEK1o.js";import"./index-CZMsQVuH.js";import"./index-DDOgg9yb.js";import"./index-qw3AQoiw.js";import"./index-Yi3a-rPK.js";import"./index-BNYFXY4F.js";import"./index-DmDzQwlo.js";import"./index-q7L8GXO2.js";import"./index-CYCL8E5c.js";import"./index-CQCmCkr2.js";import"./index-CVWT3SLx.js";/* empty css              */import"./info-tn2gl-jV.js";import"./createLucideIcon-B29KNudT.js";const q={title:"Components/lv1/Field",component:r,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<Field>` and a hand-written vanilla `<div>`\nwith the matching `.st-field` class chain must render pixel-identical.\nBacks the VRT in `Field.parity.vrt.spec.ts`.\n\nField is in #297 区分 A (layout / context wrapper, fully renderable\nin vanilla HTML). The form input children themselves (`<input>` /\n`<Input>`) are NOT part of this parity surface — their own classes\nare covered by sweep-4's Input.parity.stories. Here we only verify\nthat the Field chrome (label / required marker / description / error)\nmatches across paths.\n\nVanilla consumers MUST wire `htmlFor` / `id` / `aria-describedby` /\n`aria-invalid` / `data-error` themselves — the framework-agnostic CSS\ndoes not auto-wire ARIA. Per-attribute requirements are documented\nin CSSApi.stories.tsx → Field section."}}}},i={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"React"}),e.jsx(r,{label:"Email",description:"We never share your email",children:e.jsx("input",{id:"r1-input",type:"email",defaultValue:"user@example.com"})}),e.jsx(r,{label:"Name",required:!0,error:"Name is required",children:e.jsx("input",{id:"r2-input",defaultValue:""})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"v1-input",className:"st-field__label",children:"Email"})}),e.jsx("label",{htmlFor:"v1-input",id:"v1-description",className:"st-field__description",children:"We never share your email"}),e.jsx("input",{id:"v1-input",type:"email",defaultValue:"user@example.com","aria-describedby":"v1-description"})]}),e.jsxs("div",{className:"st-field","data-error":"true",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsxs("label",{htmlFor:"v2-input",className:"st-field__label",children:["Name",e.jsx("span",{className:"st-field__required-marker",children:"*"})]})}),e.jsx("input",{id:"v2-input",defaultValue:"",required:!0,"aria-invalid":"true","aria-describedby":"v2-error"}),e.jsx("p",{id:"v2-error",className:"st-field__error",children:"Name is required"})]})]})]})};var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">React</p>
        <Field label="Email" description="We never share your email">
          <input id="r1-input" type="email" defaultValue="user@example.com" />
        </Field>
        <Field label="Name" required error="Name is required">
          <input id="r2-input" defaultValue="" />
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
          <input id="v1-input" type="email" defaultValue="user@example.com" aria-describedby="v1-description" />
        </div>
        <div className="st-field" data-error="true">
          <div className="st-field__label-row">
            <label htmlFor="v2-input" className="st-field__label">
              Name
              <span className="st-field__required-marker">*</span>
            </label>
          </div>
          <input id="v2-input" defaultValue="" required aria-invalid="true" aria-describedby="v2-error" />
          <p id="v2-error" className="st-field__error">
            Name is required
          </p>
        </div>
      </div>
    </div>
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const T=["Parity"];export{i as Parity,T as __namedExportsOrder,q as default};
