import{j as e}from"./iframe-BC8HcP5E.js";/* empty css             *//* empty css                  *//* empty css             */import"./preload-helper-CsSY033u.js";const b={title:"Foundation/CSS API",parameters:{layout:"fullscreen",docs:{description:{component:"# CSS API\n\nSchatten ships both a React component surface and a framework-agnostic\nCSS layer. This page is the **reference catalogue** for the CSS layer:\nevery `.st-*` class consumers can write directly in vanilla HTML, with\nthe matching markup and a11y requirements.\n\n- The class names follow the convention in [css-api.md](.claude/rules/css-api.md):\n  `.st-{block}` / `.st-{block}--{modifier}` / `.st-{block}__{element}`,\n  one axis per modifier, attribute-driven state (`[aria-invalid]`,\n  `[data-state]`, `[data-swipe]`, …).\n- Pixel parity between the React side and the vanilla HTML side is\n  verified per-component in each `{Component}.parity.stories.tsx` and\n  pinned by `{Component}.parity.vrt.spec.ts`.\n\n**Coverage today**: sweep-1 of #154 — Separator, Text, Icon. The\nremaining 15 lv1 components arrive in sweep-2 through sweep-7 and will\nbe added here as each sweep lands."}}}},r=({id:i,title:c,intro:m,attributes:a,children:x})=>e.jsxs("section",{id:i,className:"mb-12",children:[e.jsx("h2",{className:"st-text st-text--heading st-text--lg st-text--default mb-2",children:c}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--muted mb-4",children:m}),a&&a.length>0&&e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"st-text st-text--label st-text--sm st-text--default mb-2",children:"Required attributes for vanilla HTML usage"}),e.jsxs("table",{className:"w-full max-w-2xl text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{className:"text-left py-1 pr-4 font-medium",children:"Attribute"}),e.jsx("th",{className:"text-left py-1 pr-4 font-medium",children:"Meaning"}),e.jsx("th",{className:"text-left py-1 font-medium",children:"When"})]})}),e.jsx("tbody",{children:a.map(t=>e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("td",{className:"py-1 pr-4 font-mono text-xs",children:t.name}),e.jsx("td",{className:"py-1 pr-4",children:t.meaning}),e.jsx("td",{className:"py-1 text-foreground-muted",children:t.required})]},t.name))})]})]}),e.jsx("div",{className:"rounded-md border border-border p-4 bg-surface",children:x})]}),o=({children:i})=>e.jsx("pre",{className:"mt-3 text-xs bg-surface-hover p-3 rounded overflow-x-auto",children:e.jsx("code",{children:i})}),s={name:"Reference (sweep-1)",render:()=>e.jsxs("div",{className:"p-8 max-w-4xl mx-auto",children:[e.jsx("h1",{className:"st-text st-text--heading st-text--2xl st-text--default mb-2",children:"CSS API — sweep-1 reference"}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--muted mb-8",children:"The classes below are emitted by `dist/schatten.css`. Import it once and the markup samples render with no React and no consumer Tailwind setup."}),e.jsxs(r,{id:"separator",title:"Separator — .st-separator",intro:"Visual divider. Orientation is an author configuration and goes through a modifier class (--horizontal / --vertical), matching the css-api.md author-config → modifier principle.",attributes:[{name:"role",meaning:'"separator" for semantic dividers, "none" / omit for decorative',required:"recommended"},{name:"aria-orientation",meaning:"For non-decorative vertical separators (assistive tech announces orientation)",required:'role="separator" + vertical only'},{name:"data-orientation",meaning:"Informational only — Radix emits this on the React side; vanilla HTML may include it for DOM parity but it does not drive styling",required:"optional"}],children:[e.jsxs("div",{className:"w-72 space-y-3",children:[e.jsx("span",{className:"st-text st-text--body st-text--sm st-text--muted",children:"Above"}),e.jsx("div",{className:"st-separator st-separator--horizontal",role:"none"}),e.jsx("span",{className:"st-text st-text--body st-text--sm st-text--muted",children:"Below"})]}),e.jsx(o,{children:`<!-- Decorative -->
<div class="st-separator st-separator--horizontal" role="none"></div>

<!-- Semantic vertical separator (announced to screen readers) -->
<div class="st-separator st-separator--vertical"
     role="separator" aria-orientation="vertical"></div>

<!-- Modifier vocabulary -->
<!-- orientation: --horizontal | --vertical -->`})]}),e.jsxs(r,{id:"text",title:"Text — .st-text",intro:"Typography primitive. Five orthogonal axes (variant × size × color × align × truncate), all emitted as side-by-side modifiers — never collapsed.",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h2",{className:"st-text st-text--heading st-text--lg st-text--default",children:"Heading lg"}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--default",children:"Body md, default color."}),e.jsx("p",{className:"st-text st-text--body st-text--sm st-text--muted",children:"Body sm, muted color."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--error",children:"Body md, error color."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--vermillion",children:"Body md, vermillion (朱)."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--default st-text--align-right",children:"Right-aligned body."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--default st-text--truncate w-64",children:"A very long line that should be truncated on overflow."})]}),e.jsx(o,{children:`<p class="st-text st-text--body st-text--md st-text--default">Body text.</p>
<h2 class="st-text st-text--heading st-text--lg st-text--default">Heading.</h2>
<label class="st-text st-text--label st-text--sm st-text--default" for="x">Label</label>

<!-- Modifier vocabulary -->
<!-- variant : --body | --label | --heading -->
<!-- size    : --xs | --sm | --md | --lg | --xl | --2xl
              (heading: sm–2xl, body/label: xs–lg) -->
<!-- color   : --default | --muted | --subtle | --inherit
              | --inverted | --inverted-muted | --inverted-subtle
              | --error | --success | --warning | --info
              | --vermillion | --indigo -->
<!-- align   : --align-left | --align-center | --align-right -->
<!-- truncate: --truncate (presence-only) -->`})]}),e.jsxs(r,{id:"icon",title:"Icon — .st-icon",intro:"SVG icon primitive. The root class itself has no CSS body — every visual property lives on a modifier. Pair with any inline SVG (e.g. a Lucide path).",attributes:[{name:'aria-hidden="true"',meaning:"Decorative icons",required:"always (decorative)"},{name:'role="img" + aria-label',meaning:"Meaningful icons that carry information",required:"when-applicable"}],children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-icon st-icon--sm st-icon--default","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-icon st-icon--md st-icon--error","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-icon st-icon--lg st-icon--vermillion","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]})]}),e.jsx(o,{children:`<svg class="st-icon st-icon--md st-icon--inherit" aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
     fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- … icon path … -->
</svg>

<!-- Modifier vocabulary -->
<!-- size : --sm (16px) | --md (20px) | --lg (24px) -->
<!-- color: same vocabulary as Text — default / muted / subtle / inherit
            / inverted-* / error / success / warning / info
            / vermillion / indigo -->

<!-- Note: .st-icon itself has no CSS body. Tailwind's --minify strips it
     from dist/schatten.css, so the manifest's classes[] list won't include
     "st-icon". The class still works in JSX (.st-icon st-icon--md
     st-icon--inherit) and in vanilla HTML — every visual contribution
     comes from a modifier. -->`})]}),e.jsx("p",{className:"st-text st-text--body st-text--sm st-text--subtle mt-8",children:"Coming in subsequent sweeps: Spinner / Badge / Callout (sweep-2), Button / Checkbox / Switch (sweep-3), Input / Textarea / Radio (sweep-4), Select / Tooltip (sweep-5), Toast / Dialog (sweep-6), Field / FieldSet (sweep-7)."})]})};var n,l,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Reference (sweep-1)',
  render: () => <div className="p-8 max-w-4xl mx-auto">
      <h1 className="st-text st-text--heading st-text--2xl st-text--default mb-2">
        CSS API — sweep-1 reference
      </h1>
      <p className="st-text st-text--body st-text--md st-text--muted mb-8">
        The classes below are emitted by \`dist/schatten.css\`. Import it once and the markup samples
        render with no React and no consumer Tailwind setup.
      </p>

      <Section id="separator" title="Separator — .st-separator" intro="Visual divider. Orientation is an author configuration and goes through a modifier class (--horizontal / --vertical), matching the css-api.md author-config → modifier principle." attributes={[{
      name: 'role',
      meaning: '"separator" for semantic dividers, "none" / omit for decorative',
      required: 'recommended'
    }, {
      name: 'aria-orientation',
      meaning: 'For non-decorative vertical separators (assistive tech announces orientation)',
      required: 'role="separator" + vertical only'
    }, {
      name: 'data-orientation',
      meaning: 'Informational only — Radix emits this on the React side; vanilla HTML may include it for DOM parity but it does not drive styling',
      required: 'optional'
    }]}>
        <div className="w-72 space-y-3">
          <span className="st-text st-text--body st-text--sm st-text--muted">Above</span>
          <div className="st-separator st-separator--horizontal" role="none" />
          <span className="st-text st-text--body st-text--sm st-text--muted">Below</span>
        </div>
        <CodeBlock>{\`<!-- Decorative -->
<div class="st-separator st-separator--horizontal" role="none"></div>

<!-- Semantic vertical separator (announced to screen readers) -->
<div class="st-separator st-separator--vertical"
     role="separator" aria-orientation="vertical"></div>

<!-- Modifier vocabulary -->
<!-- orientation: --horizontal | --vertical -->\`}</CodeBlock>
      </Section>

      <Section id="text" title="Text — .st-text" intro="Typography primitive. Five orthogonal axes (variant × size × color × align × truncate), all emitted as side-by-side modifiers — never collapsed.">
        <div className="space-y-2">
          <h2 className="st-text st-text--heading st-text--lg st-text--default">Heading lg</h2>
          <p className="st-text st-text--body st-text--md st-text--default">
            Body md, default color.
          </p>
          <p className="st-text st-text--body st-text--sm st-text--muted">Body sm, muted color.</p>
          <p className="st-text st-text--body st-text--md st-text--error">Body md, error color.</p>
          <p className="st-text st-text--body st-text--md st-text--vermillion">
            Body md, vermillion (朱).
          </p>
          <p className="st-text st-text--body st-text--md st-text--default st-text--align-right">
            Right-aligned body.
          </p>
          <p className="st-text st-text--body st-text--md st-text--default st-text--truncate w-64">
            A very long line that should be truncated on overflow.
          </p>
        </div>
        <CodeBlock>{\`<p class="st-text st-text--body st-text--md st-text--default">Body text.</p>
<h2 class="st-text st-text--heading st-text--lg st-text--default">Heading.</h2>
<label class="st-text st-text--label st-text--sm st-text--default" for="x">Label</label>

<!-- Modifier vocabulary -->
<!-- variant : --body | --label | --heading -->
<!-- size    : --xs | --sm | --md | --lg | --xl | --2xl
              (heading: sm–2xl, body/label: xs–lg) -->
<!-- color   : --default | --muted | --subtle | --inherit
              | --inverted | --inverted-muted | --inverted-subtle
              | --error | --success | --warning | --info
              | --vermillion | --indigo -->
<!-- align   : --align-left | --align-center | --align-right -->
<!-- truncate: --truncate (presence-only) -->\`}</CodeBlock>
      </Section>

      <Section id="icon" title="Icon — .st-icon" intro="SVG icon primitive. The root class itself has no CSS body — every visual property lives on a modifier. Pair with any inline SVG (e.g. a Lucide path)." attributes={[{
      name: 'aria-hidden="true"',
      meaning: 'Decorative icons',
      required: 'always (decorative)'
    }, {
      name: 'role="img" + aria-label',
      meaning: 'Meaningful icons that carry information',
      required: 'when-applicable'
    }]}>
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-icon st-icon--sm st-icon--default" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-icon st-icon--md st-icon--error" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="st-icon st-icon--lg st-icon--vermillion" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <CodeBlock>{\`<svg class="st-icon st-icon--md st-icon--inherit" aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
     fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- … icon path … -->
</svg>

<!-- Modifier vocabulary -->
<!-- size : --sm (16px) | --md (20px) | --lg (24px) -->
<!-- color: same vocabulary as Text — default / muted / subtle / inherit
            / inverted-* / error / success / warning / info
            / vermillion / indigo -->

<!-- Note: .st-icon itself has no CSS body. Tailwind's --minify strips it
     from dist/schatten.css, so the manifest's classes[] list won't include
     "st-icon". The class still works in JSX (.st-icon st-icon--md
     st-icon--inherit) and in vanilla HTML — every visual contribution
     comes from a modifier. -->\`}</CodeBlock>
      </Section>

      <p className="st-text st-text--body st-text--sm st-text--subtle mt-8">
        Coming in subsequent sweeps: Spinner / Badge / Callout (sweep-2), Button / Checkbox / Switch
        (sweep-3), Input / Textarea / Radio (sweep-4), Select / Tooltip (sweep-5), Toast / Dialog
        (sweep-6), Field / FieldSet (sweep-7).
      </p>
    </div>
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const f=["Reference"];export{s as Reference,f as __namedExportsOrder,b as default};
