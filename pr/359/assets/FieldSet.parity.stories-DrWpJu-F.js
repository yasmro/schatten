import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-DRAyPivV.js";import{n,t as r}from"./Input-Ct3pN9lU.js";import{n as i,t as a}from"./Field-cLvcLGun.js";import{n as o,t as s}from"./FieldSet-BX46eHxf.js";var c,l,u,d;e((()=>{i(),n(),o(),c=t(),l={title:`Components/lv1/FieldSet`,component:s,parameters:{layout:`padded`,docs:{description:{component:"Parity stories — React `<FieldSet>` and a hand-written vanilla\n`<fieldset>` with the matching `.st-fieldset` class chain must render\npixel-identical. Backs the VRT in `FieldSet.parity.vrt.spec.ts`.\n\nFieldSet is in #297 区分 A (layout / context wrapper, fully renderable\nin vanilla HTML). The nested `<Field>` / form input class chains are\ncovered by their own sweeps; we wire them in here so the demo shows a\nrealistic combined surface (FieldSet wrapping Fields wrapping Inputs)\nrather than bare `<input>` elements that would render without a\nvisual frame.\n\nThe error case (Address) demonstrates that:\n- FieldSet root carries `[data-error]` + `[aria-invalid]` for\n  external observability, but does NOT itself drive a visual border\n  (matches the visual-less observability hook variant — css-api.md\n  §state).\n- The inner Field's form input carries `[aria-invalid]` via the\n  FieldSet → Field → input collapse chain, which IS visually\n  styled by `.st-input-wrapper:has(.st-input[aria-invalid])` (sweep-4)."}}}},u={name:`React vs Vanilla HTML`,render:()=>(0,c.jsxs)(`div`,{className:`grid grid-cols-2 gap-12 max-w-5xl`,children:[(0,c.jsxs)(`div`,{className:`space-y-6`,children:[(0,c.jsx)(`p`,{className:`text-xs text-foreground-muted`,children:`React`}),(0,c.jsxs)(s,{legend:`Personal Info`,description:`Optional details`,children:[(0,c.jsx)(a,{label:`First name`,children:(0,c.jsx)(r,{id:`rfs1`})}),(0,c.jsx)(a,{label:`Last name`,children:(0,c.jsx)(r,{id:`rfs2`})})]}),(0,c.jsx)(s,{legend:`Address`,error:`Address is required`,isError:!0,children:(0,c.jsx)(a,{label:`Street`,children:(0,c.jsx)(r,{id:`rfs3`})})})]}),(0,c.jsxs)(`div`,{className:`space-y-6`,children:[(0,c.jsx)(`p`,{className:`text-xs text-foreground-muted`,children:`Vanilla HTML`}),(0,c.jsxs)(`fieldset`,{className:`st-fieldset`,"aria-describedby":`vfs1-desc`,children:[(0,c.jsx)(`legend`,{className:`st-fieldset__legend`,children:`Personal Info`}),(0,c.jsx)(`p`,{id:`vfs1-desc`,className:`st-fieldset__description`,children:`Optional details`}),(0,c.jsxs)(`div`,{className:`st-fieldset__children`,children:[(0,c.jsxs)(`div`,{className:`st-field`,children:[(0,c.jsx)(`div`,{className:`st-field__label-row`,children:(0,c.jsx)(`label`,{htmlFor:`vfs1`,className:`st-field__label`,children:`First name`})}),(0,c.jsx)(`div`,{className:`st-input-wrapper st-input-wrapper--md`,children:(0,c.jsx)(`input`,{id:`vfs1`,className:`st-input`})})]}),(0,c.jsxs)(`div`,{className:`st-field`,children:[(0,c.jsx)(`div`,{className:`st-field__label-row`,children:(0,c.jsx)(`label`,{htmlFor:`vfs2`,className:`st-field__label`,children:`Last name`})}),(0,c.jsx)(`div`,{className:`st-input-wrapper st-input-wrapper--md`,children:(0,c.jsx)(`input`,{id:`vfs2`,className:`st-input`})})]})]})]}),(0,c.jsxs)(`fieldset`,{className:`st-fieldset`,"data-error":`true`,"aria-invalid":`true`,"aria-describedby":`vfs3-error`,children:[(0,c.jsx)(`legend`,{className:`st-fieldset__legend`,children:`Address`}),(0,c.jsx)(`div`,{className:`st-fieldset__children`,children:(0,c.jsxs)(`div`,{className:`st-field`,"data-error":`true`,children:[(0,c.jsx)(`div`,{className:`st-field__label-row`,children:(0,c.jsx)(`label`,{htmlFor:`vfs3`,className:`st-field__label`,children:`Street`})}),(0,c.jsx)(`div`,{className:`st-input-wrapper st-input-wrapper--md`,children:(0,c.jsx)(`input`,{id:`vfs3`,className:`st-input`,"aria-invalid":`true`})})]})}),(0,c.jsx)(`p`,{id:`vfs3-error`,className:`st-fieldset__error`,children:`Address is required`})]})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Parity`]}))();export{u as Parity,d as __namedExportsOrder,l as default};