import{j as e}from"./iframe-B6sAWOHy.js";import{S as s}from"./Separator-Dfx-7ALV.js";import"./preload-helper-CsSY033u.js";import"./index-BxRld3rn.js";import"./index-CcmJpnBo.js";import"./index-C0JfC8Oh.js";import"./utils-DCADjnpI.js";/* empty css                  */const v={title:"Components/lv1/Separator",component:s,parameters:{layout:"centered",docs:{description:{component:"Parity stories — verifies that the React `<Separator>` and a hand-written\nvanilla HTML element with the same `.st-separator` class produce\npixel-identical output. Backs the VRT in `Separator.parity.vrt.spec.ts`.\n\nRadix Separator renders a `<div>` (not `<hr>`), so the vanilla example\nuses `<div>` to match. `data-orientation` is what the CSS hooks the\nsizing rule off — it must be set on both sides for parity."}}}},a={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12",children:[e.jsxs("div",{className:"w-64",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm",children:"Above"}),e.jsx(s,{}),e.jsx("p",{className:"text-sm",children:"Below"})]}),e.jsxs("div",{className:"mt-6 flex h-6 items-center gap-3 text-sm",children:[e.jsx("span",{children:"A"}),e.jsx(s,{orientation:"vertical"}),e.jsx("span",{children:"B"}),e.jsx(s,{orientation:"vertical"}),e.jsx("span",{children:"C"})]})]}),e.jsxs("div",{className:"w-64",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm",children:"Above"}),e.jsx("div",{className:"st-separator","data-orientation":"horizontal",role:"none"}),e.jsx("p",{className:"text-sm",children:"Below"})]}),e.jsxs("div",{className:"mt-6 flex h-6 items-center gap-3 text-sm",children:[e.jsx("span",{children:"A"}),e.jsx("div",{className:"st-separator","data-orientation":"vertical",role:"none"}),e.jsx("span",{children:"B"}),e.jsx("div",{className:"st-separator","data-orientation":"vertical",role:"none"}),e.jsx("span",{children:"C"})]})]})]})};var t,r,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12">
      <div className="w-64">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="space-y-3">
          <p className="text-sm">Above</p>
          <Separator />
          <p className="text-sm">Below</p>
        </div>
        <div className="mt-6 flex h-6 items-center gap-3 text-sm">
          <span>A</span>
          <Separator orientation="vertical" />
          <span>B</span>
          <Separator orientation="vertical" />
          <span>C</span>
        </div>
      </div>
      <div className="w-64">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="space-y-3">
          <p className="text-sm">Above</p>
          <div className="st-separator" data-orientation="horizontal" role="none" />
          <p className="text-sm">Below</p>
        </div>
        <div className="mt-6 flex h-6 items-center gap-3 text-sm">
          <span>A</span>
          <div className="st-separator" data-orientation="vertical" role="none" />
          <span>B</span>
          <div className="st-separator" data-orientation="vertical" role="none" />
          <span>C</span>
        </div>
      </div>
    </div>
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const h=["Parity"];export{a as Parity,h as __namedExportsOrder,v as default};
