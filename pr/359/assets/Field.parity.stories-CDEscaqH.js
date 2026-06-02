import{i as e}from"./preload-helper-ChaSUgV0.js";import{t}from"./iframe-DK9TY03R.js";import{n,t as r}from"./Input-CMbuWl7o.js";import{n as i,t as a}from"./Field-CWQn-d7J.js";var o,s,c,l;e((()=>{n(),i(),o=t(),s={title:`Components/lv1/Field`,component:a,parameters:{layout:`padded`,docs:{description:{component:'Parity stories — React `<Field>` and a hand-written vanilla `<div>`\nwith the matching `.st-field` class chain must render pixel-identical.\nBacks the VRT in `Field.parity.vrt.spec.ts`.\n\nField is in #297 区分 A (layout / context wrapper, fully renderable\nin vanilla HTML). The form input children\'s class API (`.st-input-\nwrapper` / `.st-input`) is itself covered by sweep-4 Input parity;\nwe reuse the chain here so the demo shows the realistic combined\nsurface (Field chrome wrapping a real input) rather than bare\n`<input>` elements that would render without any visual frame.\n\nThe error case (Name field) demonstrates the visual-less\nobservability hook variant from css-api.md §state: `data-error` lands\non the Field root, but the red border / tinted background on the\ninput come from the inner `.st-input-wrapper:has(.st-input[aria-invalid="true"])`\nselector (sweep-4) — Field root itself is not styled by `[data-error]`.\n\nVanilla consumers MUST wire `htmlFor` / `id` / `aria-describedby` /\n`aria-invalid` themselves — the framework-agnostic CSS does not\nauto-wire ARIA. Per-attribute requirements are documented in\nCSSApi.stories.tsx → Field section.'}}}},c={name:`React vs Vanilla HTML`,render:()=>(0,o.jsxs)(`div`,{className:`grid grid-cols-2 gap-12 max-w-5xl`,children:[(0,o.jsxs)(`div`,{className:`space-y-6`,children:[(0,o.jsx)(`p`,{className:`text-xs text-foreground-muted`,children:`React`}),(0,o.jsx)(a,{label:`Email`,description:`We never share your email`,children:(0,o.jsx)(r,{id:`r1-input`,type:`email`,defaultValue:`user@example.com`})}),(0,o.jsx)(a,{label:`Name`,required:!0,error:`Name is required`,children:(0,o.jsx)(r,{id:`r2-input`,defaultValue:``})})]}),(0,o.jsxs)(`div`,{className:`space-y-6`,children:[(0,o.jsx)(`p`,{className:`text-xs text-foreground-muted`,children:`Vanilla HTML`}),(0,o.jsxs)(`div`,{className:`st-field`,children:[(0,o.jsx)(`div`,{className:`st-field__label-row`,children:(0,o.jsx)(`label`,{htmlFor:`v1-input`,className:`st-field__label`,children:`Email`})}),(0,o.jsx)(`label`,{htmlFor:`v1-input`,id:`v1-description`,className:`st-field__description`,children:`We never share your email`}),(0,o.jsx)(`div`,{className:`st-input-wrapper st-input-wrapper--md`,children:(0,o.jsx)(`input`,{id:`v1-input`,type:`email`,className:`st-input`,defaultValue:`user@example.com`,"aria-describedby":`v1-description`})})]}),(0,o.jsxs)(`div`,{className:`st-field`,"data-error":`true`,children:[(0,o.jsx)(`div`,{className:`st-field__label-row`,children:(0,o.jsxs)(`label`,{htmlFor:`v2-input`,className:`st-field__label`,children:[`Name`,(0,o.jsx)(`span`,{className:`st-field__required-marker`,children:`*`})]})}),(0,o.jsx)(`div`,{className:`st-input-wrapper st-input-wrapper--md`,children:(0,o.jsx)(`input`,{id:`v2-input`,className:`st-input`,defaultValue:``,required:!0,"aria-invalid":`true`,"aria-describedby":`v2-error`})}),(0,o.jsx)(`p`,{id:`v2-error`,className:`st-field__error`,children:`Name is required`})]})]})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Parity`]}))();export{c as Parity,l as __namedExportsOrder,s as default};