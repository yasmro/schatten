import{j as e}from"./iframe-B0-hKoC8.js";import{F as i}from"./FieldSet-EQb_XtxN.js";import"./preload-helper-DXiRGy-X.js";import"./fieldset-DEL1LBJ1.js";import"./utils-DclmTqRz.js";import"./index-DQHfBcw3.js";/* empty css                 */const f={title:"Components/lv1/FieldSet",component:i,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<FieldSet>` and a hand-written vanilla\n`<fieldset>` with the matching `.st-fieldset` class chain must render\npixel-identical. Backs the VRT in `FieldSet.parity.vrt.spec.ts`.\n\nFieldSet is in #297 区分 A (layout / context wrapper, fully renderable\nin vanilla HTML). Nested `<Field>` / form inputs are NOT part of this\nparity surface — their own classes are covered by sweep-4 / sweep-7\nField parity. Here we verify the FieldSet chrome (legend / description\n/ children layout / error) matches across paths, using a single\n`<input>` per item so the chrome is the dominant signal.\n\nThe `:has(> .st-fieldset__legend)` structural rule that pushes\n`__children` down by 1rem is exercised by the header-present case;\nthe structural contract is independently pinned in\nFieldSet.test.tsx → `class API` → `places legend / description /\nchildren / error as direct children of the root fieldset`."}}}},s={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"React"}),e.jsxs(i,{legend:"Personal Info",description:"Optional details",children:[e.jsx("input",{id:"rfs1",placeholder:"First name"}),e.jsx("input",{id:"rfs2",placeholder:"Last name"})]}),e.jsx(i,{legend:"Address",error:"Address is required",children:e.jsx("input",{id:"rfs3",placeholder:"Street"})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("fieldset",{className:"st-fieldset","aria-describedby":"vfs1-desc",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Personal Info"}),e.jsx("p",{id:"vfs1-desc",className:"st-fieldset__description",children:"Optional details"}),e.jsxs("div",{className:"st-fieldset__children",children:[e.jsx("input",{id:"vfs1",placeholder:"First name"}),e.jsx("input",{id:"vfs2",placeholder:"Last name"})]})]}),e.jsxs("fieldset",{className:"st-fieldset","data-error":"true","aria-invalid":"true","aria-describedby":"vfs3-error",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Address"}),e.jsx("div",{className:"st-fieldset__children",children:e.jsx("input",{id:"vfs3",placeholder:"Street"})}),e.jsx("p",{id:"vfs3-error",className:"st-fieldset__error",children:"Address is required"})]})]})]})};var r,d,t;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">React</p>
        <FieldSet legend="Personal Info" description="Optional details">
          <input id="rfs1" placeholder="First name" />
          <input id="rfs2" placeholder="Last name" />
        </FieldSet>
        <FieldSet legend="Address" error="Address is required">
          <input id="rfs3" placeholder="Street" />
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
            <input id="vfs1" placeholder="First name" />
            <input id="vfs2" placeholder="Last name" />
          </div>
        </fieldset>
        <fieldset className="st-fieldset" data-error="true" aria-invalid="true" aria-describedby="vfs3-error">
          <legend className="st-fieldset__legend">Address</legend>
          <div className="st-fieldset__children">
            <input id="vfs3" placeholder="Street" />
          </div>
          <p id="vfs3-error" className="st-fieldset__error">
            Address is required
          </p>
        </fieldset>
      </div>
    </div>
}`,...(t=(d=s.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};const h=["Parity"];export{s as Parity,h as __namedExportsOrder,f as default};
