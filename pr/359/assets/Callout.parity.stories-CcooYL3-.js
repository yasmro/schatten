import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-DRAyPivV.js";import{n,t as r}from"./Callout-BjGK7GIr.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Components/lv1/Callout`,component:r,parameters:{layout:`padded`,docs:{description:{component:"Parity stories — React `<Callout>` and a hand-written vanilla `<div>`\nwith the matching `.st-callout` class chain must render pixel-identical.\nBacks the VRT in `Callout.parity.vrt.spec.ts`.\n\nThe vanilla side reproduces the icon + title + body structure using the\nsub-element classes (`.st-callout__icon` / `__title` / `__body`). The\nClose button is omitted from parity coverage because it depends on\nButton's class chain (which lands in sweep-3) — parity for that button\nwill be covered by Button.parity.stories.tsx.\n\nLucide icon SVG bodies are inlined here, pinned to lucide-react@1.x\n(currently 1.14.0). When the dep is bumped, re-verify the paths match\nthe Lucide source."}}}},o=()=>(0,i.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`st-callout__icon`,"aria-hidden":`true`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,i.jsx)(`path`,{d:`M12 16v-4`}),(0,i.jsx)(`path`,{d:`M12 8h.01`})]}),s=()=>(0,i.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`st-callout__icon`,"aria-hidden":`true`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,i.jsx)(`path`,{d:`m9 12 2 2 4-4`})]}),c=()=>(0,i.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`st-callout__icon`,"aria-hidden":`true`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,i.jsx)(`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`}),(0,i.jsx)(`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`})]}),l={name:`React vs Vanilla HTML`,render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-2 gap-12 max-w-5xl`,children:[(0,i.jsxs)(`div`,{className:`space-y-3`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),(0,i.jsx)(r,{variant:`neutral`,title:`Neutral subtle`,children:`The quick brown fox jumps over the lazy dog.`}),(0,i.jsx)(r,{variant:`success`,title:`Saved`,children:`Changes have been persisted.`}),(0,i.jsx)(r,{variant:`error`,appearance:`solid`,title:`Failed`,children:`Could not connect to the upstream.`}),(0,i.jsx)(r,{variant:`info`,children:`Title-less body — runs centered alongside the icon.`})]}),(0,i.jsxs)(`div`,{className:`space-y-3`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),(0,i.jsxs)(`div`,{className:`st-callout st-callout--neutral st-callout--subtle`,children:[(0,i.jsx)(o,{}),(0,i.jsxs)(`div`,{className:`st-callout__content`,children:[(0,i.jsx)(`div`,{className:`st-callout__title`,children:`Neutral subtle`}),(0,i.jsx)(`div`,{className:`st-callout__body`,children:`The quick brown fox jumps over the lazy dog.`})]})]}),(0,i.jsxs)(`div`,{className:`st-callout st-callout--success st-callout--subtle`,children:[(0,i.jsx)(s,{}),(0,i.jsxs)(`div`,{className:`st-callout__content`,children:[(0,i.jsx)(`div`,{className:`st-callout__title`,children:`Saved`}),(0,i.jsx)(`div`,{className:`st-callout__body`,children:`Changes have been persisted.`})]})]}),(0,i.jsxs)(`div`,{className:`st-callout st-callout--error st-callout--solid`,children:[(0,i.jsx)(c,{}),(0,i.jsxs)(`div`,{className:`st-callout__content`,children:[(0,i.jsx)(`div`,{className:`st-callout__title`,children:`Failed`}),(0,i.jsx)(`div`,{className:`st-callout__body`,children:`Could not connect to the upstream.`})]})]}),(0,i.jsxs)(`div`,{className:`st-callout st-callout--info st-callout--subtle`,children:[(0,i.jsx)(o,{}),(0,i.jsx)(`div`,{className:`st-callout__content`,children:(0,i.jsx)(`div`,{className:`st-callout__body`,children:`Title-less body — runs centered alongside the icon.`})})]})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Callout variant="neutral" title="Neutral subtle">
          The quick brown fox jumps over the lazy dog.
        </Callout>
        <Callout variant="success" title="Saved">
          Changes have been persisted.
        </Callout>
        <Callout variant="error" appearance="solid" title="Failed">
          Could not connect to the upstream.
        </Callout>
        <Callout variant="info">Title-less body — runs centered alongside the icon.</Callout>
      </div>
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="st-callout st-callout--neutral st-callout--subtle">
          <InfoSvg />
          <div className="st-callout__content">
            <div className="st-callout__title">Neutral subtle</div>
            <div className="st-callout__body">The quick brown fox jumps over the lazy dog.</div>
          </div>
        </div>
        <div className="st-callout st-callout--success st-callout--subtle">
          <CheckSvg />
          <div className="st-callout__content">
            <div className="st-callout__title">Saved</div>
            <div className="st-callout__body">Changes have been persisted.</div>
          </div>
        </div>
        <div className="st-callout st-callout--error st-callout--solid">
          <AlertSvg />
          <div className="st-callout__content">
            <div className="st-callout__title">Failed</div>
            <div className="st-callout__body">Could not connect to the upstream.</div>
          </div>
        </div>
        <div className="st-callout st-callout--info st-callout--subtle">
          <InfoSvg />
          <div className="st-callout__content">
            <div className="st-callout__body">
              Title-less body — runs centered alongside the icon.
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Parity`]}))();export{l as Parity,u as __namedExportsOrder,a as default};