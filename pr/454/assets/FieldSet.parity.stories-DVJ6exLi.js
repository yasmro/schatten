import{j as e}from"./iframe-Ch4ary1W.js";import{F as i}from"./Field-TGacNqHZ.js";import{I as a}from"./Input-CR4Mgvuq.js";import{F as r}from"./FieldSet-CeBHivOs.js";import"./preload-helper-CHQKfnDm.js";import"./field-DfhRYPSU.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";import"./Tooltip-Db9W23cR.js";import"./index-D0OQ1ueL.js";import"./index-BeNr6s1u.js";import"./index-CpB0BVkQ.js";import"./index-tJIajoMx.js";import"./index-VOZfeM_U.js";import"./index-Bc0xCXv4.js";import"./index-Co59tC8o.js";import"./index-D7qmUVJG.js";import"./index-CKi-sV-k.js";import"./floating-ui.react-dom-D1Vy9By_.js";import"./index-B0kUf01Q.js";import"./index-WoOI-GG5.js";import"./index-DunrbSkA.js";import"./index-C-x5q111.js";/* empty css                *//* empty css              */import"./info-B-qgPXxd.js";import"./createLucideIcon--wydv0SP.js";/* empty css              *//* empty css                 */const H={title:"Components/lv1/FieldSet",component:r,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<FieldSet>` and a hand-written vanilla\n`<fieldset>` with the matching `.st-fieldset` class chain must render\npixel-identical. Backs the VRT in `FieldSet.parity.vrt.spec.ts`.\n\nFieldSet is in #297 区分 A (layout / context wrapper, fully renderable\nin vanilla HTML). The nested `<Field>` / form input class chains are\ncovered by their own sweeps; we wire them in here so the demo shows a\nrealistic combined surface (FieldSet wrapping Fields wrapping Inputs)\nrather than bare `<input>` elements that would render without a\nvisual frame.\n\nThe error case (Address) demonstrates that:\n- FieldSet root carries `[data-error]` + `[aria-invalid]` for\n  external observability, but does NOT itself drive a visual border\n  (matches the visual-less observability hook variant — css-api.md\n  §state).\n- The inner Field's form input carries `[aria-invalid]` via the\n  FieldSet → Field → input collapse chain, which IS visually\n  styled by `.st-input-wrapper:has(.st-input[aria-invalid])` (sweep-4)."}}}},s={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"React"}),e.jsxs(r,{legend:"Personal Info",description:"Optional details",children:[e.jsx(i,{label:"First name",children:e.jsx(a,{id:"rfs1"})}),e.jsx(i,{label:"Last name",children:e.jsx(a,{id:"rfs2"})})]}),e.jsx(r,{legend:"Address",error:"Address is required",isError:!0,children:e.jsx(i,{label:"Street",children:e.jsx(a,{id:"rfs3"})})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("fieldset",{className:"st-fieldset","aria-describedby":"vfs1-desc",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Personal Info"}),e.jsx("p",{id:"vfs1-desc",className:"st-fieldset__description",children:"Optional details"}),e.jsxs("div",{className:"st-fieldset__children",children:[e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs1",className:"st-field__label",children:"First name"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs1",className:"st-input"})})]}),e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs2",className:"st-field__label",children:"Last name"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs2",className:"st-input"})})]})]})]}),e.jsxs("fieldset",{className:"st-fieldset","data-error":"true","aria-invalid":"true","aria-describedby":"vfs3-error",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Address"}),e.jsx("div",{className:"st-fieldset__children",children:e.jsxs("div",{className:"st-field","data-error":"true",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"vfs3",className:"st-field__label",children:"Street"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"vfs3",className:"st-input","aria-invalid":"true"})})]})}),e.jsx("p",{id:"vfs3-error",className:"st-fieldset__error",children:"Address is required"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
