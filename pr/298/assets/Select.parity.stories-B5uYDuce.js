import{j as e}from"./iframe-Bro0g9RO.js";import{a as t,S as s,b as a,c as n,d as r}from"./Select-Cr49rl0I.js";import"./preload-helper-CDcSlKkp.js";import"./index-BCwYpYu-.js";import"./index-Cv_WQ7vv.js";import"./index-BHYONM0a.js";import"./index-B-8JAWOY.js";import"./index-ZrPPHcgE.js";import"./index-tf91AyWa.js";import"./index-BvXxJJ0_.js";import"./Combination-Do3CRMK0.js";import"./index-CVhWs8hz.js";import"./index-DiHEiTUS.js";import"./index-CeRuwcI_.js";import"./index-DIR-qtuf.js";import"./index-DlgsG2WB.js";import"./field-D4IFvoxB.js";import"./utils-DCADjnpI.js";import"./index-CkIaN0ex.js";import"./chevron-up-D22tGSZF.js";import"./createLucideIcon-DVHjeyEJ.js";import"./check-DI_JqCYF.js";const L={title:"Components/lv1/Select",component:t,parameters:{layout:"padded",docs:{description:{component:`Parity stories — React \`<SelectTrigger>\` and a hand-written
\`<button class="st-select__trigger st-select__trigger--{sm,md,lg}">\`
must render pixel-identical. Backs the VRT in
\`Select.parity.vrt.spec.ts\`.

**Scope: trigger only.** The dropdown content portals into
\`document.body\` and uses Radix runtime variables
(\`--radix-select-trigger-width\`, popper positioning) that a vanilla
consumer cannot replicate without their own JS. Content parity is
intentionally out of scope for sweep-5 — see [#270 "vanilla HTML
parity の範囲"] and the deferred docs effort in [#297].

Trigger covers:
- 3 sizes (sm / md / lg)
- error state (vanilla side sets \`aria-invalid="true"\` directly —
  the CSS targets the attribute, so no \`--error\` modifier exists)
- disabled state

Inline \`<svg>\` icon matches \`lucide-react\`'s ChevronDown so the
vanilla side stays React-free.`}}}},l=()=>e.jsx("svg",{className:"st-select__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"m6 9 6 6 6-6"})}),i={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-3xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsxs("div",{className:"space-y-3",style:{width:240},children:[e.jsxs(s,{children:[e.jsx(t,{size:"sm",children:e.jsx(a,{placeholder:"Small"})}),e.jsx(n,{children:e.jsx(r,{value:"apple",children:"Apple"})})]}),e.jsxs(s,{children:[e.jsx(t,{size:"md",children:e.jsx(a,{placeholder:"Medium"})}),e.jsx(n,{children:e.jsx(r,{value:"apple",children:"Apple"})})]}),e.jsxs(s,{children:[e.jsx(t,{size:"lg",children:e.jsx(a,{placeholder:"Large"})}),e.jsx(n,{children:e.jsx(r,{value:"apple",children:"Apple"})})]}),e.jsxs(s,{children:[e.jsx(t,{isError:!0,children:e.jsx(a,{placeholder:"Error"})}),e.jsx(n,{children:e.jsx(r,{value:"apple",children:"Apple"})})]}),e.jsxs(s,{disabled:!0,children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Disabled"})}),e.jsx(n,{children:e.jsx(r,{value:"apple",children:"Apple"})})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"space-y-3",style:{width:240},children:[e.jsxs("button",{type:"button",className:"st-select__trigger st-select__trigger--sm","aria-haspopup":"listbox","aria-expanded":"false",children:[e.jsx("span",{children:"Small"}),e.jsx(l,{})]}),e.jsxs("button",{type:"button",className:"st-select__trigger st-select__trigger--md","aria-haspopup":"listbox","aria-expanded":"false",children:[e.jsx("span",{children:"Medium"}),e.jsx(l,{})]}),e.jsxs("button",{type:"button",className:"st-select__trigger st-select__trigger--lg","aria-haspopup":"listbox","aria-expanded":"false",children:[e.jsx("span",{children:"Large"}),e.jsx(l,{})]}),e.jsxs("button",{type:"button",className:"st-select__trigger st-select__trigger--md","aria-haspopup":"listbox","aria-expanded":"false","aria-invalid":"true",children:[e.jsx("span",{children:"Error"}),e.jsx(l,{})]}),e.jsxs("button",{type:"button",className:"st-select__trigger st-select__trigger--md","aria-haspopup":"listbox","aria-expanded":"false",disabled:!0,children:[e.jsx("span",{children:"Disabled"}),e.jsx(l,{})]})]})]})]})};var c,o,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-3xl">
      {/* ===== React side ===== */}
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>

        <div className="space-y-3" style={{
        width: 240
      }}>
          <Select>
            <SelectTrigger size="sm">
              <SelectValue placeholder="Small" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="lg">
              <SelectValue placeholder="Large" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger isError>
              <SelectValue placeholder="Error" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Disabled" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* ===== Vanilla HTML side =====
       * Reproduces the trigger DOM Radix would render. Note:
       * - \`type="button"\` because Radix Trigger is a \`<button>\`
       * - \`aria-haspopup="listbox"\` and \`aria-expanded="false"\` mirror
       *   Radix's static attributes (vanilla consumers must set these
       *   themselves — Schatten doesn't auto-wire ARIA outside React)
       * - Placeholder \`<span>\` is the equivalent of \`<SelectValue
       *   placeholder="…">\` — Radix renders the placeholder text inside
       *   a span and applies the data-placeholder attribute; the
       *   \`.st-select__trigger > span\` rule handles truncation.
       */}
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>

        <div className="space-y-3" style={{
        width: 240
      }}>
          <button type="button" className="st-select__trigger st-select__trigger--sm" aria-haspopup="listbox" aria-expanded="false">
            <span>Small</span>
            <ChevronDownSvg />
          </button>
          <button type="button" className="st-select__trigger st-select__trigger--md" aria-haspopup="listbox" aria-expanded="false">
            <span>Medium</span>
            <ChevronDownSvg />
          </button>
          <button type="button" className="st-select__trigger st-select__trigger--lg" aria-haspopup="listbox" aria-expanded="false">
            <span>Large</span>
            <ChevronDownSvg />
          </button>
          <button type="button" className="st-select__trigger st-select__trigger--md" aria-haspopup="listbox" aria-expanded="false" aria-invalid="true">
            <span>Error</span>
            <ChevronDownSvg />
          </button>
          <button type="button" className="st-select__trigger st-select__trigger--md" aria-haspopup="listbox" aria-expanded="false" disabled>
            <span>Disabled</span>
            <ChevronDownSvg />
          </button>
        </div>
      </div>
    </div>
}`,...(p=(o=i.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const M=["Parity"];export{i as Parity,M as __namedExportsOrder,L as default};
