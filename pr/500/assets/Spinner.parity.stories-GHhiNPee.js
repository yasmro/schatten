import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./Spinner-CBv74fnp.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Components/lv1/Spinner`,component:r,parameters:{layout:`centered`,docs:{description:{component:"Parity stories — React `<Spinner>` and a hand-written vanilla SVG with\nthe matching `.st-spinner` / `.st-spinner__*` class chain must render\npixel-identical. Backs the VRT in `Spinner.parity.vrt.spec.ts`.\n\nThe vanilla side reproduces both spinner types (default rotating circle\nand ripple) using the same SVG geometry the React side emits. The VRT\nspec pauses CSS animations before screenshotting so the comparison is a\nstill-frame match."}}}},o=({className:e})=>(0,i.jsxs)(`div`,{className:e,role:`status`,children:[(0,i.jsxs)(`svg`,{className:`st-spinner__rotor`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,i.jsx)(`circle`,{className:`st-spinner__track`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`3`}),(0,i.jsx)(`path`,{className:`st-spinner__arc`,d:`M22 12a10 10 0 0 0-10-10`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`})]}),(0,i.jsx)(`span`,{className:`sr-only`,children:`Loading`})]}),s=({className:e})=>(0,i.jsxs)(`div`,{className:e,role:`status`,children:[(0,i.jsxs)(`svg`,{viewBox:`0 0 72 72`,fill:`none`,"aria-hidden":`true`,children:[(0,i.jsx)(`circle`,{className:`st-spinner__dot`,cx:`36`,cy:`36`,r:`2.6`}),(0,i.jsx)(`circle`,{className:`st-spinner__ripple-1`,cx:`36`,cy:`36`,r:`10`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,i.jsx)(`circle`,{className:`st-spinner__ripple-2`,cx:`36`,cy:`36`,r:`10`,stroke:`currentColor`,strokeWidth:`1.2`})]}),(0,i.jsx)(`span`,{className:`sr-only`,children:`Loading`})]}),c={name:`React vs Vanilla HTML`,render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-2 gap-12`,children:[(0,i.jsxs)(`div`,{className:`space-y-8`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{size:`sm`}),(0,i.jsx)(r,{size:`md`}),(0,i.jsx)(r,{size:`lg`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{type:`ripple`,size:`sm`}),(0,i.jsx)(r,{type:`ripple`,size:`md`}),(0,i.jsx)(r,{type:`ripple`,size:`lg`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6 rounded-md bg-solid p-4`,children:[(0,i.jsx)(r,{variant:`inverted`}),(0,i.jsx)(r,{variant:`inverted`,type:`ripple`})]})]}),(0,i.jsxs)(`div`,{className:`space-y-8`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(o,{className:`st-spinner st-spinner--default st-spinner--sm`}),(0,i.jsx)(o,{className:`st-spinner st-spinner--default st-spinner--md`}),(0,i.jsx)(o,{className:`st-spinner st-spinner--default st-spinner--lg`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(s,{className:`st-spinner st-spinner--default st-spinner--sm`}),(0,i.jsx)(s,{className:`st-spinner st-spinner--default st-spinner--md`}),(0,i.jsx)(s,{className:`st-spinner st-spinner--default st-spinner--lg`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6 rounded-md bg-solid p-4`,children:[(0,i.jsx)(o,{className:`st-spinner st-spinner--inverted st-spinner--md`}),(0,i.jsx)(s,{className:`st-spinner st-spinner--inverted st-spinner--md`})]})]})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12">
      <div className="space-y-8">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="flex items-center gap-6">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <Spinner type="ripple" size="sm" />
          <Spinner type="ripple" size="md" />
          <Spinner type="ripple" size="lg" />
        </div>
        <div className="flex items-center gap-6 rounded-md bg-solid p-4">
          <Spinner variant="inverted" />
          <Spinner variant="inverted" type="ripple" />
        </div>
      </div>
      <div className="space-y-8">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex items-center gap-6">
          <DefaultVanilla className="st-spinner st-spinner--default st-spinner--sm" />
          <DefaultVanilla className="st-spinner st-spinner--default st-spinner--md" />
          <DefaultVanilla className="st-spinner st-spinner--default st-spinner--lg" />
        </div>
        <div className="flex items-center gap-6">
          <RippleVanilla className="st-spinner st-spinner--default st-spinner--sm" />
          <RippleVanilla className="st-spinner st-spinner--default st-spinner--md" />
          <RippleVanilla className="st-spinner st-spinner--default st-spinner--lg" />
        </div>
        <div className="flex items-center gap-6 rounded-md bg-solid p-4">
          <DefaultVanilla className="st-spinner st-spinner--inverted st-spinner--md" />
          <RippleVanilla className="st-spinner st-spinner--inverted st-spinner--md" />
        </div>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}},l=[`Parity`]}))();export{c as Parity,l as __namedExportsOrder,a as default};