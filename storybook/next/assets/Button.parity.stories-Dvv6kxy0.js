import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-GN01NeBL.js";import{n,t as r}from"./arrow-right-Bc4YL9in.js";import{n as i,t as a}from"./plus-BIIamhLk.js";import{n as o,t as s}from"./Button-DHaYsHvG.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o(),c=t(),l={title:`Components/lv1/Button`,component:s,parameters:{layout:`padded`,docs:{description:{component:`Parity stories — React \`<Button>\` and a hand-written vanilla \`<button>\`
with the matching \`.st-btn\` class chain must render pixel-identical.
Backs the VRT in \`Button.parity.vrt.spec.ts\`.

Covered combinations:
- 6 variants × md size
- 3 sizes (primary)
- icon-only
- isLoading (vanilla side hand-rolls \`aria-busy="true" disabled\` + the
  spinner overlay markup; animations are paused by the VRT spec)
- link variant × 3 sizes (different DOM shape — flat, no overlay)

\`asChild\` is out of parity scope because it's a React-only API (Slot).

Inline \`<svg>\` icons match the Lucide source so the vanilla side has no
React dependency.`}}}},u=()=>(0,c.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,c.jsx)(`path`,{d:`M5 12h14`}),(0,c.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),d=()=>(0,c.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,c.jsx)(`path`,{d:`M5 12h14`}),(0,c.jsx)(`path`,{d:`M12 5v14`})]}),f=()=>(0,c.jsxs)(`span`,{className:`st-spinner st-spinner--inverted st-spinner--sm`,role:`status`,children:[(0,c.jsxs)(`svg`,{className:`st-spinner__rotor`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,c.jsx)(`circle`,{className:`st-spinner__track`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`3`}),(0,c.jsx)(`path`,{className:`st-spinner__arc`,d:`M22 12a10 10 0 0 0-10-10`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`})]}),(0,c.jsx)(`span`,{className:`sr-only`,children:`Loading`})]}),p={name:`React vs Vanilla HTML`,render:()=>(0,c.jsxs)(`div`,{className:`grid grid-cols-2 gap-12 max-w-5xl`,children:[(0,c.jsxs)(`div`,{className:`space-y-4`,children:[(0,c.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),(0,c.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,c.jsx)(s,{variant:`primary`,children:`Primary`}),(0,c.jsx)(s,{variant:`secondary`,children:`Secondary`}),(0,c.jsx)(s,{variant:`tertiary`,children:`Tertiary`}),(0,c.jsx)(s,{variant:`destructive`,children:`Destructive`})]}),(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 rounded-md bg-solid p-3`,children:(0,c.jsx)(s,{variant:`inverted`,children:`Inverted`})}),(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsx)(s,{size:`sm`,children:`Small`}),(0,c.jsx)(s,{size:`md`,children:`Medium`}),(0,c.jsx)(s,{size:`lg`,children:`Large`})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsx)(s,{icon:a,"aria-label":`Add`}),(0,c.jsx)(s,{icon:r,iconPosition:`end`,children:`Next`})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsx)(s,{isLoading:!0,children:`Saving`}),(0,c.jsx)(s,{variant:`destructive`,isLoading:!0,children:`Deleting`})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsx)(s,{variant:`link`,size:`sm`,children:`Small link`}),(0,c.jsx)(s,{variant:`link`,size:`md`,children:`Medium link`}),(0,c.jsx)(s,{variant:`link`,size:`lg`,children:`Large link`})]})]}),(0,c.jsxs)(`div`,{className:`space-y-4`,children:[(0,c.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),(0,c.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--primary st-btn--md`,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,"aria-hidden":`true`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:`Primary`})]}),(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--secondary st-btn--md`,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,"aria-hidden":`true`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:`Secondary`})]}),(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--tertiary st-btn--md`,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,"aria-hidden":`true`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:`Tertiary`})]}),(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--destructive st-btn--md`,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,"aria-hidden":`true`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:`Destructive`})]})]}),(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 rounded-md bg-solid p-3`,children:(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--inverted st-btn--md`,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,"aria-hidden":`true`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:`Inverted`})]})}),(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--primary st-btn--sm`,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,"aria-hidden":`true`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:`Small`})]}),(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--primary st-btn--md`,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,"aria-hidden":`true`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:`Medium`})]}),(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--primary st-btn--lg`,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,"aria-hidden":`true`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:`Large`})]})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--primary st-btn--md st-btn--icon-only`,"aria-label":`Add`,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,"aria-hidden":`true`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:(0,c.jsx)(d,{})})]}),(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--primary st-btn--md`,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,"aria-hidden":`true`,children:(0,c.jsx)(f,{})}),(0,c.jsxs)(`span`,{className:`st-btn__content`,children:[`Next`,(0,c.jsx)(u,{})]})]})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--primary st-btn--md`,"aria-busy":`true`,disabled:!0,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:`Saving`})]}),(0,c.jsxs)(`button`,{type:`button`,className:`st-btn st-btn--destructive st-btn--md`,"aria-busy":`true`,disabled:!0,children:[(0,c.jsx)(`span`,{className:`st-btn__spinner-overlay`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(`span`,{className:`st-btn__content`,children:`Deleting`})]})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsx)(`button`,{type:`button`,className:`st-btn st-btn--link st-btn--sm`,children:`Small link`}),(0,c.jsx)(`button`,{type:`button`,className:`st-btn st-btn--link st-btn--md`,children:`Medium link`}),(0,c.jsx)(`button`,{type:`button`,className:`st-btn st-btn--link st-btn--lg`,children:`Large link`})]})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 rounded-md bg-solid p-3">
          <Button variant="inverted">Inverted</Button>
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex items-center gap-3">
          <Button icon={Plus} aria-label="Add" />
          <Button icon={ArrowRight} iconPosition="end">
            Next
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Button isLoading>Saving</Button>
          <Button variant="destructive" isLoading>
            Deleting
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="link" size="sm">
            Small link
          </Button>
          <Button variant="link" size="md">
            Medium link
          </Button>
          <Button variant="link" size="lg">
            Large link
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="st-btn st-btn--primary st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Primary</span>
          </button>
          <button type="button" className="st-btn st-btn--secondary st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Secondary</span>
          </button>
          <button type="button" className="st-btn st-btn--tertiary st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Tertiary</span>
          </button>
          <button type="button" className="st-btn st-btn--destructive st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Destructive</span>
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-3 rounded-md bg-solid p-3">
          <button type="button" className="st-btn st-btn--inverted st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Inverted</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="st-btn st-btn--primary st-btn--sm">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Small</span>
          </button>
          <button type="button" className="st-btn st-btn--primary st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Medium</span>
          </button>
          <button type="button" className="st-btn st-btn--primary st-btn--lg">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Large</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="st-btn st-btn--primary st-btn--md st-btn--icon-only" aria-label="Add">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">
              <PlusSvg />
            </span>
          </button>
          <button type="button" className="st-btn st-btn--primary st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">
              Next
              <ArrowRightSvg />
            </span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="st-btn st-btn--primary st-btn--md" aria-busy="true" disabled>
            <span className="st-btn__spinner-overlay">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Saving</span>
          </button>
          <button type="button" className="st-btn st-btn--destructive st-btn--md" aria-busy="true" disabled>
            <span className="st-btn__spinner-overlay">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Deleting</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="st-btn st-btn--link st-btn--sm">
            Small link
          </button>
          <button type="button" className="st-btn st-btn--link st-btn--md">
            Medium link
          </button>
          <button type="button" className="st-btn st-btn--link st-btn--lg">
            Large link
          </button>
        </div>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Parity`]})))()}h();export{p as Parity,m as __namedExportsOrder,l as default};