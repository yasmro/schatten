import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-DRAyPivV.js";import{n,t as r}from"./Separator-Dv2mwNPF.js";var i,a,o,s;e((()=>{n(),i=t(),a={title:`Components/lv1/Separator`,component:r,parameters:{layout:`centered`,docs:{description:{component:"Parity stories — verifies that the React `<Separator>` and a hand-written\nvanilla HTML element with the same `.st-separator` class produce\npixel-identical output. Backs the VRT in `Separator.parity.vrt.spec.ts`.\n\nRadix Separator renders a `<div>` (not `<hr>`), so the vanilla example\nuses `<div>` to match. `data-orientation` is what the CSS hooks the\nsizing rule off — it must be set on both sides for parity."}}}},o={name:`React vs Vanilla HTML`,render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-2 gap-12`,children:[(0,i.jsxs)(`div`,{className:`w-64`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),(0,i.jsxs)(`div`,{className:`space-y-3`,children:[(0,i.jsx)(`p`,{className:`text-sm`,children:`Above`}),(0,i.jsx)(r,{}),(0,i.jsx)(`p`,{className:`text-sm`,children:`Below`})]}),(0,i.jsxs)(`div`,{className:`mt-6 flex h-6 items-center gap-3 text-sm`,children:[(0,i.jsx)(`span`,{children:`A`}),(0,i.jsx)(r,{orientation:`vertical`}),(0,i.jsx)(`span`,{children:`B`}),(0,i.jsx)(r,{orientation:`vertical`}),(0,i.jsx)(`span`,{children:`C`})]})]}),(0,i.jsxs)(`div`,{className:`w-64`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),(0,i.jsxs)(`div`,{className:`space-y-3`,children:[(0,i.jsx)(`p`,{className:`text-sm`,children:`Above`}),(0,i.jsx)(`div`,{className:`st-separator st-separator--horizontal`,"data-orientation":`horizontal`,role:`none`}),(0,i.jsx)(`p`,{className:`text-sm`,children:`Below`})]}),(0,i.jsxs)(`div`,{className:`mt-6 flex h-6 items-center gap-3 text-sm`,children:[(0,i.jsx)(`span`,{children:`A`}),(0,i.jsx)(`div`,{className:`st-separator st-separator--vertical`,"data-orientation":`vertical`,role:`none`}),(0,i.jsx)(`span`,{children:`B`}),(0,i.jsx)(`div`,{className:`st-separator st-separator--vertical`,"data-orientation":`vertical`,role:`none`}),(0,i.jsx)(`span`,{children:`C`})]})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s=[`Parity`]}))();export{o as Parity,s as __namedExportsOrder,a as default};