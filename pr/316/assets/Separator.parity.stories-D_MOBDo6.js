import{j as a}from"./iframe-DvtvtXJj.js";import{S as s}from"./Separator-BAhNogtx.js";import"./preload-helper-DjWM62tB.js";import"./index-Cd96PlVr.js";import"./index-CCDobE-F.js";import"./index-BoUmDyLu.js";import"./utils-DclmTqRz.js";/* empty css                  */const v={title:"Components/lv1/Separator",component:s,parameters:{layout:"centered",docs:{description:{component:"Parity stories — verifies that the React `<Separator>` and a hand-written\nvanilla HTML element with the same `.st-separator` class produce\npixel-identical output. Backs the VRT in `Separator.parity.vrt.spec.ts`.\n\nRadix Separator renders a `<div>` (not `<hr>`), so the vanilla example\nuses `<div>` to match. `data-orientation` is what the CSS hooks the\nsizing rule off — it must be set on both sides for parity."}}}},e={name:"React vs Vanilla HTML",render:()=>a.jsxs("div",{className:"grid grid-cols-2 gap-12",children:[a.jsxs("div",{className:"w-64",children:[a.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("p",{className:"text-sm",children:"Above"}),a.jsx(s,{}),a.jsx("p",{className:"text-sm",children:"Below"})]}),a.jsxs("div",{className:"mt-6 flex h-6 items-center gap-3 text-sm",children:[a.jsx("span",{children:"A"}),a.jsx(s,{orientation:"vertical"}),a.jsx("span",{children:"B"}),a.jsx(s,{orientation:"vertical"}),a.jsx("span",{children:"C"})]})]}),a.jsxs("div",{className:"w-64",children:[a.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("p",{className:"text-sm",children:"Above"}),a.jsx("div",{className:"st-separator st-separator--horizontal","data-orientation":"horizontal",role:"none"}),a.jsx("p",{className:"text-sm",children:"Below"})]}),a.jsxs("div",{className:"mt-6 flex h-6 items-center gap-3 text-sm",children:[a.jsx("span",{children:"A"}),a.jsx("div",{className:"st-separator st-separator--vertical","data-orientation":"vertical",role:"none"}),a.jsx("span",{children:"B"}),a.jsx("div",{className:"st-separator st-separator--vertical","data-orientation":"vertical",role:"none"}),a.jsx("span",{children:"C"})]})]})]})};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
          {/* \`data-orientation\` is informational here — Radix sets it on the React
              side for a11y wiring, but styling is driven by the modifier class. */}
          <div className="st-separator st-separator--horizontal" data-orientation="horizontal" role="none" />
          <p className="text-sm">Below</p>
        </div>
        <div className="mt-6 flex h-6 items-center gap-3 text-sm">
          <span>A</span>
          <div className="st-separator st-separator--vertical" data-orientation="vertical" role="none" />
          <span>B</span>
          <div className="st-separator st-separator--vertical" data-orientation="vertical" role="none" />
          <span>C</span>
        </div>
      </div>
    </div>
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const h=["Parity"];export{e as Parity,h as __namedExportsOrder,v as default};
