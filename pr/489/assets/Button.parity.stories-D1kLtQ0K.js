import{j as t}from"./iframe-BwCPEThx.js";import{B as s}from"./Button-kgSExR8U.js";import{P as a}from"./plus-BEvTs0Zy.js";import{A as i}from"./arrow-right-nnKR76fS.js";import"./preload-helper-CTfn98qt.js";import"./index-BUIdqOBZ.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css               */import"./Spinner-CuNnSrM9.js";/* empty css                */import"./createLucideIcon-CQ2npWYh.js";const _={title:"Components/lv1/Button",component:s,parameters:{layout:"padded",docs:{description:{component:`Parity stories — React \`<Button>\` and a hand-written vanilla \`<button>\`
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
React dependency.`}}}},r=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"m12 5 7 7-7 7"})]}),l=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[t.jsx("path",{d:"M5 12h14"}),t.jsx("path",{d:"M12 5v14"})]}),n=()=>t.jsxs("span",{className:"st-spinner st-spinner--inverted st-spinner--sm",role:"status",children:[t.jsxs("svg",{className:"st-spinner__rotor",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[t.jsx("circle",{className:"st-spinner__track",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),t.jsx("path",{className:"st-spinner__arc",d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),t.jsx("span",{className:"sr-only",children:"Loading"})]}),e={name:"React vs Vanilla HTML",render:()=>t.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),t.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[t.jsx(s,{variant:"primary",children:"Primary"}),t.jsx(s,{variant:"secondary",children:"Secondary"}),t.jsx(s,{variant:"tertiary",children:"Tertiary"}),t.jsx(s,{variant:"destructive",children:"Destructive"})]}),t.jsx("div",{className:"flex flex-wrap items-center gap-3 rounded-md bg-solid p-3",children:t.jsx(s,{variant:"inverted",children:"Inverted"})}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(s,{size:"sm",children:"Small"}),t.jsx(s,{size:"md",children:"Medium"}),t.jsx(s,{size:"lg",children:"Large"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(s,{icon:a,"aria-label":"Add"}),t.jsx(s,{icon:i,iconPosition:"end",children:"Next"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(s,{isLoading:!0,children:"Saving"}),t.jsx(s,{variant:"destructive",isLoading:!0,children:"Deleting"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(s,{variant:"link",size:"sm",children:"Small link"}),t.jsx(s,{variant:"link",size:"md",children:"Medium link"}),t.jsx(s,{variant:"link",size:"lg",children:"Large link"})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),t.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[t.jsxs("button",{type:"button",className:"st-btn st-btn--primary st-btn--md",children:[t.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:"Primary"})]}),t.jsxs("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:[t.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:"Secondary"})]}),t.jsxs("button",{type:"button",className:"st-btn st-btn--tertiary st-btn--md",children:[t.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:"Tertiary"})]}),t.jsxs("button",{type:"button",className:"st-btn st-btn--destructive st-btn--md",children:[t.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:"Destructive"})]})]}),t.jsx("div",{className:"flex flex-wrap items-center gap-3 rounded-md bg-solid p-3",children:t.jsxs("button",{type:"button",className:"st-btn st-btn--inverted st-btn--md",children:[t.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:"Inverted"})]})}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("button",{type:"button",className:"st-btn st-btn--primary st-btn--sm",children:[t.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:"Small"})]}),t.jsxs("button",{type:"button",className:"st-btn st-btn--primary st-btn--md",children:[t.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:"Medium"})]}),t.jsxs("button",{type:"button",className:"st-btn st-btn--primary st-btn--lg",children:[t.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:"Large"})]})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("button",{type:"button",className:"st-btn st-btn--primary st-btn--md st-btn--icon-only","aria-label":"Add",children:[t.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:t.jsx(l,{})})]}),t.jsxs("button",{type:"button",className:"st-btn st-btn--primary st-btn--md",children:[t.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true",children:t.jsx(n,{})}),t.jsxs("span",{className:"st-btn__content",children:["Next",t.jsx(r,{})]})]})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("button",{type:"button",className:"st-btn st-btn--primary st-btn--md","aria-busy":"true",disabled:!0,children:[t.jsx("span",{className:"st-btn__spinner-overlay",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:"Saving"})]}),t.jsxs("button",{type:"button",className:"st-btn st-btn--destructive st-btn--md","aria-busy":"true",disabled:!0,children:[t.jsx("span",{className:"st-btn__spinner-overlay",children:t.jsx(n,{})}),t.jsx("span",{className:"st-btn__content",children:"Deleting"})]})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("button",{type:"button",className:"st-btn st-btn--link st-btn--sm",children:"Small link"}),t.jsx("button",{type:"button",className:"st-btn st-btn--link st-btn--md",children:"Medium link"}),t.jsx("button",{type:"button",className:"st-btn st-btn--link st-btn--lg",children:"Large link"})]})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const j=["Parity"];export{e as Parity,j as __namedExportsOrder,_ as default};
