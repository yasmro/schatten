import{j as e}from"./iframe-CfNIIn7F.js";import{F as i}from"./Field-DP3jfIbl.js";import{I as a}from"./Input-C4JCKCnS.js";import{F as r}from"./FieldSet-PAjyBmce.js";import"./preload-helper-m-v4Iyj8.js";import"./field-DLcs6x5w.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";import"./Tooltip-Cwa54lKl.js";import"./index-DVeoF8RQ.js";import"./index-BZwZlug_.js";import"./index-Duf3_S80.js";import"./index-DZZ7fspD.js";import"./index-Di-YfcEB.js";import"./index-BrVf2D-z.js";import"./index-CERh3s5E.js";import"./index-BTZadDJ7.js";import"./index-JP1NuOzt.js";import"./floating-ui.react-dom-DY_W7qfx.js";import"./index-DWaYGcGb.js";import"./index-DMn8twaK.js";import"./index-DGGIKPQ4.js";import"./index-RAR4nnJY.js";/* empty css                *//* empty css              */import"./info-DtRiGRLO.js";import"./createLucideIcon-qKq1gbA7.js";/* empty css              *//* empty css                 */const H={title:"Components/lv1/FieldSet",component:r,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<FieldSet>` and a hand-written vanilla\n`<fieldset>` with the matching `.st-fieldset` class chain must render\npixel-identical. Backs the VRT in `FieldSet.parity.vrt.spec.ts`.\n\nFieldSet is in #297 区分 A (layout / context wrapper, fully renderable\nin vanilla HTML). The nested `<Field>` / form input class chains are\ncovered by their own sweeps; we wire them in here so the demo shows a\nrealistic combined surface (FieldSet wrapping Fields wrapping Inputs)\nrather than bare `<input>` elements that would render without a\nvisual frame.\n\nThe error case (Address) demonstrates that:\n- FieldSet root carries `[data-error]` + `[aria-invalid]` for\n  external observability, but does NOT itself drive a visual border\n  (matches the visual-less observability hook variant — css-api.md\n  §state).\n- The inner Field's form input carries `[aria-invalid]` via the\n  FieldSet → Field → input collapse chain, which IS visually\n  styled by `.st-input-wrapper:has(.st-input[aria-invalid])` (sweep-4)."}}}},s={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"React"}),e.jsxs(r,{legend:"Personal Info",description:"Optional details",children:[e.jsx(i,{label:"First name",children:e.jsx(a,{id:"rfs1"})}),e.jsx(i,{label:"Last name",children:e.jsx(a,{id:"rfs2"})})]}),e.jsx(r,{legend:"Address",error:"Address is required",isError:!0,children:e.jsx(i,{label:"Street",children:e.jsx(a,{id:"rfs3"})})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("fieldset",{className:"st-fieldset","aria-describedby":"vfs1-desc",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Personal Info"}),e.jsx("p",{id:"vfs1-desc",className:"st-fieldset__description",children:"Optional details"}),e.jsxs("div",{className:"st-fieldset__children",children:[e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs1",className:"st-field__label",children:"First name"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs1",className:"st-input"})})]}),e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs2",className:"st-field__label",children:"Last name"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs2",className:"st-input"})})]})]})]}),e.jsxs("fieldset",{className:"st-fieldset","data-error":"true","aria-invalid":"true","aria-describedby":"vfs3-error",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Address"}),e.jsx("div",{className:"st-fieldset__children",children:e.jsxs("div",{className:"st-field","data-error":"true",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs3",className:"st-field__label",children:"Street"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs3",className:"st-input","aria-invalid":"true"})})]})}),e.jsx("p",{id:"vfs3-error",className:"st-fieldset__error",children:"Address is required"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const M=["Parity"];export{s as Parity,M as __namedExportsOrder,H as default};
