import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-Dc0mLLnz.js";import{A as n,R as r,n as i,t as a}from"./lucide-react-VAXaEEz3.js";import{n as o,t as s}from"./Input-QjhTX4Ha.js";var c,l,u,d,f,p,m;e((()=>{a(),o(),c=t(),l={title:`Components/lv1/Input`,component:s,parameters:{layout:`padded`,docs:{description:{component:`Parity stories — React \`<Input>\` and a hand-written
\`<div class="st-input-wrapper st-input-wrapper--md"><input class="st-input"></div>\`
must render pixel-identical. Backs the VRT in
\`Input.parity.vrt.spec.ts\`.

Covered combinations:
- 3 sizes (sm / md / lg)
- text adornments (textLeft + textRight)
- icon adornments (iconLeft + iconRight)
- error / disabled / readOnly
- disabled + error / readOnly + error
- type=date (carries the \`.st-input--date\` derived modifier)

Vanilla side carries \`aria-invalid\`, \`readonly\`, and \`disabled\`
manually — the CSS targets those attributes (per css-api.md §state),
so vanilla HTML consumers must set them.

NB: wrapper-click → input focus is **React-only**. The vanilla side
intentionally omits the focus delegation handler so the parity
screenshot reflects what a CSS-only consumer would see.`}}}},u=()=>(0,c.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,className:`st-input__icon-left`,children:[(0,c.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,c.jsx)(`path`,{d:`m21 21-4.3-4.3`})]}),d=()=>(0,c.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,className:`st-input__icon-right`,children:[(0,c.jsx)(`path`,{d:`M18 6 6 18`}),(0,c.jsx)(`path`,{d:`m6 6 12 12`})]}),f=({size:e,isError:t,disabled:n,readOnly:r,defaultValue:i,placeholder:a,type:o,textLeft:s,textRight:l,withIcons:f,id:p})=>{let m=o===`date`||o===`datetime-local`||o===`month`||o===`week`||o===`time`;return(0,c.jsxs)(`div`,{className:`st-input-wrapper st-input-wrapper--${e}`,children:[s&&(0,c.jsx)(`span`,{className:`st-input__text-left`,children:s}),f&&(0,c.jsx)(u,{}),(0,c.jsx)(`input`,{id:p,type:o,placeholder:a,defaultValue:i,disabled:n,readOnly:r,"aria-invalid":t?`true`:void 0,className:`st-input${m?` st-input--date`:``}`}),l&&(0,c.jsx)(`span`,{className:`st-input__text-right`,children:l}),f&&(0,c.jsx)(d,{})]})},p={name:`React vs Vanilla HTML`,render:()=>(0,c.jsxs)(`div`,{className:`grid grid-cols-2 gap-12 max-w-5xl`,children:[(0,c.jsxs)(`div`,{className:`space-y-3`,children:[(0,c.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),(0,c.jsx)(s,{"aria-label":`in-sm`,size:`sm`,placeholder:`Small`}),(0,c.jsx)(s,{"aria-label":`in-md`,size:`md`,placeholder:`Medium`}),(0,c.jsx)(s,{"aria-label":`in-lg`,size:`lg`,placeholder:`Large`}),(0,c.jsx)(s,{"aria-label":`in-text`,textLeft:`$`,textRight:`USD`,placeholder:`0.00`}),(0,c.jsx)(s,{"aria-label":`in-icons`,iconLeft:n,iconRight:i,placeholder:`With icons`}),(0,c.jsx)(s,{"aria-label":`in-error`,isError:!0,placeholder:`Error`}),(0,c.jsx)(s,{"aria-label":`in-disabled`,disabled:!0,defaultValue:`Disabled`}),(0,c.jsx)(s,{"aria-label":`in-readonly`,readOnly:!0,defaultValue:`Read-only`}),(0,c.jsx)(s,{"aria-label":`in-disabled-error`,disabled:!0,isError:!0,defaultValue:`Disabled + error`}),(0,c.jsx)(s,{"aria-label":`in-readonly-error`,readOnly:!0,isError:!0,defaultValue:`Read-only + error`}),(0,c.jsx)(s,{"aria-label":`in-date`,type:`date`}),(0,c.jsx)(s,{"aria-label":`in-mail`,iconLeft:r,placeholder:`Email`})]}),(0,c.jsxs)(`div`,{className:`space-y-3`,children:[(0,c.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),(0,c.jsx)(f,{size:`sm`,placeholder:`Small`}),(0,c.jsx)(f,{size:`md`,placeholder:`Medium`}),(0,c.jsx)(f,{size:`lg`,placeholder:`Large`}),(0,c.jsx)(f,{size:`md`,textLeft:`$`,textRight:`USD`,placeholder:`0.00`}),(0,c.jsx)(f,{size:`md`,withIcons:!0,placeholder:`With icons`}),(0,c.jsx)(f,{size:`md`,isError:!0,placeholder:`Error`}),(0,c.jsx)(f,{size:`md`,disabled:!0,defaultValue:`Disabled`}),(0,c.jsx)(f,{size:`md`,readOnly:!0,defaultValue:`Read-only`}),(0,c.jsx)(f,{size:`md`,disabled:!0,isError:!0,defaultValue:`Disabled + error`}),(0,c.jsx)(f,{size:`md`,readOnly:!0,isError:!0,defaultValue:`Read-only + error`}),(0,c.jsx)(f,{size:`md`,type:`date`}),(0,c.jsx)(f,{size:`md`,withIcons:!0,placeholder:`Email`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Input aria-label="in-sm" size="sm" placeholder="Small" />
        <Input aria-label="in-md" size="md" placeholder="Medium" />
        <Input aria-label="in-lg" size="lg" placeholder="Large" />
        <Input aria-label="in-text" textLeft="$" textRight="USD" placeholder="0.00" />
        <Input aria-label="in-icons" iconLeft={Search} iconRight={X} placeholder="With icons" />
        <Input aria-label="in-error" isError placeholder="Error" />
        <Input aria-label="in-disabled" disabled defaultValue="Disabled" />
        <Input aria-label="in-readonly" readOnly defaultValue="Read-only" />
        <Input aria-label="in-disabled-error" disabled isError defaultValue="Disabled + error" />
        <Input aria-label="in-readonly-error" readOnly isError defaultValue="Read-only + error" />
        <Input aria-label="in-date" type="date" />
        <Input aria-label="in-mail" iconLeft={Mail} placeholder="Email" />
      </div>
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <VanillaInput size="sm" placeholder="Small" />
        <VanillaInput size="md" placeholder="Medium" />
        <VanillaInput size="lg" placeholder="Large" />
        <VanillaInput size="md" textLeft="$" textRight="USD" placeholder="0.00" />
        <VanillaInput size="md" withIcons placeholder="With icons" />
        <VanillaInput size="md" isError placeholder="Error" />
        <VanillaInput size="md" disabled defaultValue="Disabled" />
        <VanillaInput size="md" readOnly defaultValue="Read-only" />
        <VanillaInput size="md" disabled isError defaultValue="Disabled + error" />
        <VanillaInput size="md" readOnly isError defaultValue="Read-only + error" />
        <VanillaInput size="md" type="date" />
        {/* Mail icon is rendered as a Lucide SVG on the React side; the
         * vanilla side uses the SearchIcon helper to demonstrate that any
         * inline SVG with the \`.st-input__icon-left\` class gets the
         * wrapper-derived size. */}
        <VanillaInput size="md" withIcons placeholder="Email" />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Parity`]}))();export{p as Parity,m as __namedExportsOrder,l as default};