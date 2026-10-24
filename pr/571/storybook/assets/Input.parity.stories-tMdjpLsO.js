import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-rRECkZ7U.js";import{n,t as r}from"./mail-DId4CjHq.js";import{n as i,t as a}from"./search--CaU5GN2.js";import{n as o,t as s}from"./x-jNyY_t2P.js";import{n as c,t as l}from"./Input-BmFzJq62.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),o(),c(),u=t(),d={title:`Components/lv1/Input`,component:l,parameters:{layout:`padded`,docs:{description:{component:`Parity stories — React \`<Input>\` and a hand-written
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
screenshot reflects what a CSS-only consumer would see.`}}}},f=()=>(0,u.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,className:`st-input__icon-left`,children:[(0,u.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,u.jsx)(`path`,{d:`m21 21-4.3-4.3`})]}),p=()=>(0,u.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,className:`st-input__icon-right`,children:[(0,u.jsx)(`path`,{d:`M18 6 6 18`}),(0,u.jsx)(`path`,{d:`m6 6 12 12`})]}),m=({size:e,isError:t,disabled:n,readOnly:r,defaultValue:i,placeholder:a,type:o,textLeft:s,textRight:c,withIcons:l,id:d})=>{let m=o===`date`||o===`datetime-local`||o===`month`||o===`week`||o===`time`;return(0,u.jsxs)(`div`,{className:`st-input-wrapper st-input-wrapper--${e}`,children:[s&&(0,u.jsx)(`span`,{className:`st-input__text-left`,children:s}),l&&(0,u.jsx)(f,{}),(0,u.jsx)(`input`,{id:d,type:o,placeholder:a,defaultValue:i,disabled:n,readOnly:r,"aria-invalid":t?`true`:void 0,className:`st-input${m?` st-input--date`:``}`}),c&&(0,u.jsx)(`span`,{className:`st-input__text-right`,children:c}),l&&(0,u.jsx)(p,{})]})},h={name:`React vs Vanilla HTML`,render:()=>(0,u.jsxs)(`div`,{className:`grid grid-cols-2 gap-12 max-w-5xl`,children:[(0,u.jsxs)(`div`,{className:`space-y-3`,children:[(0,u.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),(0,u.jsx)(l,{"aria-label":`in-sm`,size:`sm`,placeholder:`Small`}),(0,u.jsx)(l,{"aria-label":`in-md`,size:`md`,placeholder:`Medium`}),(0,u.jsx)(l,{"aria-label":`in-lg`,size:`lg`,placeholder:`Large`}),(0,u.jsx)(l,{"aria-label":`in-text`,textLeft:`$`,textRight:`USD`,placeholder:`0.00`}),(0,u.jsx)(l,{"aria-label":`in-icons`,iconLeft:a,iconRight:s,placeholder:`With icons`}),(0,u.jsx)(l,{"aria-label":`in-error`,isError:!0,placeholder:`Error`}),(0,u.jsx)(l,{"aria-label":`in-disabled`,disabled:!0,defaultValue:`Disabled`}),(0,u.jsx)(l,{"aria-label":`in-readonly`,readOnly:!0,defaultValue:`Read-only`}),(0,u.jsx)(l,{"aria-label":`in-disabled-error`,disabled:!0,isError:!0,defaultValue:`Disabled + error`}),(0,u.jsx)(l,{"aria-label":`in-readonly-error`,readOnly:!0,isError:!0,defaultValue:`Read-only + error`}),(0,u.jsx)(l,{"aria-label":`in-date`,type:`date`}),(0,u.jsx)(l,{"aria-label":`in-mail`,iconLeft:r,placeholder:`Email`})]}),(0,u.jsxs)(`div`,{className:`space-y-3`,children:[(0,u.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),(0,u.jsx)(m,{size:`sm`,placeholder:`Small`}),(0,u.jsx)(m,{size:`md`,placeholder:`Medium`}),(0,u.jsx)(m,{size:`lg`,placeholder:`Large`}),(0,u.jsx)(m,{size:`md`,textLeft:`$`,textRight:`USD`,placeholder:`0.00`}),(0,u.jsx)(m,{size:`md`,withIcons:!0,placeholder:`With icons`}),(0,u.jsx)(m,{size:`md`,isError:!0,placeholder:`Error`}),(0,u.jsx)(m,{size:`md`,disabled:!0,defaultValue:`Disabled`}),(0,u.jsx)(m,{size:`md`,readOnly:!0,defaultValue:`Read-only`}),(0,u.jsx)(m,{size:`md`,disabled:!0,isError:!0,defaultValue:`Disabled + error`}),(0,u.jsx)(m,{size:`md`,readOnly:!0,isError:!0,defaultValue:`Read-only + error`}),(0,u.jsx)(m,{size:`md`,type:`date`}),(0,u.jsx)(m,{size:`md`,withIcons:!0,placeholder:`Email`})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Parity`]})))()}_();export{h as Parity,g as __namedExportsOrder,d as default};