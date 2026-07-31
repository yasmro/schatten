import{j as e}from"./iframe-CVSLp8NO.js";import{F as i}from"./Field-Ybmf67Kc.js";import{I as a}from"./Input-k_sjDW-d.js";import{F as r}from"./FieldSet-D8VVIseG.js";import"./preload-helper-LCxwLRn0.js";import"./field-L5jG3_VX.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";import"./Tooltip-sBU_iE-D.js";import"./index-CeC4UZj_.js";import"./index-DbuLN8IZ.js";import"./index-AxKgPDSP.js";import"./index-co8fsKiS.js";import"./index-Cons8Hz8.js";import"./index-RXJM67Jp.js";import"./index-BVnXJzd5.js";import"./index-4keJUisi.js";import"./index-DNGTnkGW.js";import"./index-BO303A8R.js";import"./index-B4Dme-Ob.js";import"./index-C-nd-Vf4.js";import"./index-Dc8-dZ68.js";/* empty css                *//* empty css              */import"./info-21C9QJ3k.js";import"./createLucideIcon-NF3iifwe.js";/* empty css              *//* empty css                 */const O={title:"Components/lv1/FieldSet",component:r,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<FieldSet>` and a hand-written vanilla\n`<fieldset>` with the matching `.st-fieldset` class chain must render\npixel-identical. Backs the VRT in `FieldSet.parity.vrt.spec.ts`.\n\nFieldSet is in #297 区分 A (layout / context wrapper, fully renderable\nin vanilla HTML). The nested `<Field>` / form input class chains are\ncovered by their own sweeps; we wire them in here so the demo shows a\nrealistic combined surface (FieldSet wrapping Fields wrapping Inputs)\nrather than bare `<input>` elements that would render without a\nvisual frame.\n\nThe error case (Address) demonstrates that:\n- FieldSet root carries `[data-error]` + `[aria-invalid]` for\n  external observability, but does NOT itself drive a visual border\n  (matches the visual-less observability hook variant — css-api.md\n  §state).\n- The inner Field's form input carries `[aria-invalid]` via the\n  FieldSet → Field → input collapse chain, which IS visually\n  styled by `.st-input-wrapper:has(.st-input[aria-invalid])` (sweep-4)."}}}},s={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"React"}),e.jsxs(r,{legend:"Personal Info",description:"Optional details",children:[e.jsx(i,{label:"First name",children:e.jsx(a,{id:"rfs1"})}),e.jsx(i,{label:"Last name",children:e.jsx(a,{id:"rfs2"})})]}),e.jsx(r,{legend:"Address",error:"Address is required",isError:!0,children:e.jsx(i,{label:"Street",children:e.jsx(a,{id:"rfs3"})})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("fieldset",{className:"st-fieldset","aria-describedby":"vfs1-desc",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Personal Info"}),e.jsx("p",{id:"vfs1-desc",className:"st-fieldset__description",children:"Optional details"}),e.jsxs("div",{className:"st-fieldset__children",children:[e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs1",className:"st-field__label",children:"First name"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs1",className:"st-input"})})]}),e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs2",className:"st-field__label",children:"Last name"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs2",className:"st-input"})})]})]})]}),e.jsxs("fieldset",{className:"st-fieldset","data-error":"true","aria-invalid":"true","aria-describedby":"vfs3-error",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Address"}),e.jsx("div",{className:"st-fieldset__children",children:e.jsxs("div",{className:"st-field","data-error":"true",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs3",className:"st-field__label",children:"Street"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs3",className:"st-input","aria-invalid":"true"})})]})}),e.jsx("p",{id:"vfs3-error",className:"st-fieldset__error",children:"Address is required"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
