import{j as e}from"./iframe-BU0WqiM_.js";import{F as i}from"./Field-DUqH_uJH.js";import{I as a}from"./Input-BvxhZ33g.js";import{F as r}from"./FieldSet-DgZsEN41.js";import"./preload-helper-BtRhR8tI.js";import"./field-Cu6Qy2OP.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";import"./Tooltip-DtzAJdm3.js";import"./index-YhqEkZtX.js";import"./index-DqxVdCW-.js";import"./index-CW3_2fCJ.js";import"./index-BW29SCdh.js";import"./index-C2f7X-H_.js";import"./index-DPrqx73L.js";import"./index-FcVSvevj.js";import"./index-BLkf4ZLQ.js";import"./index-DwFzPaSQ.js";import"./index-DtujthPF.js";import"./index-BXym7fhc.js";import"./index-Wyh_hnon.js";import"./index-CQIPTbfq.js";/* empty css                *//* empty css              */import"./info-1iJd-uRV.js";import"./createLucideIcon-BJr1eNeG.js";/* empty css              *//* empty css                 */const O={title:"Components/lv1/FieldSet",component:r,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<FieldSet>` and a hand-written vanilla\n`<fieldset>` with the matching `.st-fieldset` class chain must render\npixel-identical. Backs the VRT in `FieldSet.parity.vrt.spec.ts`.\n\nFieldSet is in #297 区分 A (layout / context wrapper, fully renderable\nin vanilla HTML). The nested `<Field>` / form input class chains are\ncovered by their own sweeps; we wire them in here so the demo shows a\nrealistic combined surface (FieldSet wrapping Fields wrapping Inputs)\nrather than bare `<input>` elements that would render without a\nvisual frame.\n\nThe error case (Address) demonstrates that:\n- FieldSet root carries `[data-error]` + `[aria-invalid]` for\n  external observability, but does NOT itself drive a visual border\n  (matches the visual-less observability hook variant — css-api.md\n  §state).\n- The inner Field's form input carries `[aria-invalid]` via the\n  FieldSet → Field → input collapse chain, which IS visually\n  styled by `.st-input-wrapper:has(.st-input[aria-invalid])` (sweep-4)."}}}},s={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"React"}),e.jsxs(r,{legend:"Personal Info",description:"Optional details",children:[e.jsx(i,{label:"First name",children:e.jsx(a,{id:"rfs1"})}),e.jsx(i,{label:"Last name",children:e.jsx(a,{id:"rfs2"})})]}),e.jsx(r,{legend:"Address",error:"Address is required",isError:!0,children:e.jsx(i,{label:"Street",children:e.jsx(a,{id:"rfs3"})})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("fieldset",{className:"st-fieldset","aria-describedby":"vfs1-desc",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Personal Info"}),e.jsx("p",{id:"vfs1-desc",className:"st-fieldset__description",children:"Optional details"}),e.jsxs("div",{className:"st-fieldset__children",children:[e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs1",className:"st-field__label",children:"First name"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs1",className:"st-input"})})]}),e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs2",className:"st-field__label",children:"Last name"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs2",className:"st-input"})})]})]})]}),e.jsxs("fieldset",{className:"st-fieldset","data-error":"true","aria-invalid":"true","aria-describedby":"vfs3-error",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Address"}),e.jsx("div",{className:"st-fieldset__children",children:e.jsxs("div",{className:"st-field","data-error":"true",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs3",className:"st-field__label",children:"Street"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs3",className:"st-input","aria-invalid":"true"})})]})}),e.jsx("p",{id:"vfs3-error",className:"st-fieldset__error",children:"Address is required"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">React</p>
        <FieldSet legend="Personal Info" description="Optional details">
          <Field label="First name">
            <Input id="rfs1" />
          </Field>
          <Field label="Last name">
            <Input id="rfs2" />
          </Field>
        </FieldSet>
        <FieldSet legend="Address" error="Address is required" isError>
          <Field label="Street">
            <Input id="rfs3" />
          </Field>
        </FieldSet>
      </div>
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">Vanilla HTML</p>
        <fieldset className="st-fieldset" aria-describedby="vfs1-desc">
          <legend className="st-fieldset__legend">Personal Info</legend>
          <p id="vfs1-desc" className="st-fieldset__description">
            Optional details
          </p>
          <div className="st-fieldset__children">
            <div className="st-field">
              <div className="st-field__label-row">
                <label htmlFor="vfs1" className="st-field__label">
                  First name
                </label>
              </div>
              <div className="st-input-wrapper st-input-wrapper--md">
                <input id="vfs1" className="st-input" />
              </div>
            </div>
            <div className="st-field">
              <div className="st-field__label-row">
                <label htmlFor="vfs2" className="st-field__label">
                  Last name
                </label>
              </div>
              <div className="st-input-wrapper st-input-wrapper--md">
                <input id="vfs2" className="st-input" />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="st-fieldset" data-error="true" aria-invalid="true" aria-describedby="vfs3-error">
          <legend className="st-fieldset__legend">Address</legend>
          <div className="st-fieldset__children">
            <div className="st-field" data-error="true">
              <div className="st-field__label-row">
                <label htmlFor="vfs3" className="st-field__label">
                  Street
                </label>
              </div>
              <div className="st-input-wrapper st-input-wrapper--md">
                <input id="vfs3" className="st-input" aria-invalid="true" />
              </div>
            </div>
          </div>
          <p id="vfs3-error" className="st-fieldset__error">
            Address is required
          </p>
        </fieldset>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};const H=["Parity"];export{s as Parity,H as __namedExportsOrder,O as default};
