import{j as e}from"./iframe-DwaCekgw.js";/* empty css              *//* empty css                *//* empty css             *//* empty css                  *//* empty css                *//* empty css             */import"./preload-helper-By2mdhBQ.js";const _={title:"Foundation/CSS API",parameters:{layout:"fullscreen",docs:{description:{component:"# CSS API\n\nSchatten ships both a React component surface and a framework-agnostic\nCSS layer. This page is the **reference catalogue** for the CSS layer:\nevery `.st-*` class consumers can write directly in vanilla HTML, with\nthe matching markup and a11y requirements.\n\n- The class names follow the convention in [css-api.md](.claude/rules/css-api.md):\n  `.st-{block}` / `.st-{block}--{modifier}` / `.st-{block}__{element}`,\n  one axis per modifier, attribute-driven state (`[aria-invalid]`,\n  `[data-state]`, `[data-swipe]`, …).\n- Pixel parity between the React side and the vanilla HTML side is\n  verified per-component in each `{Component}.parity.stories.tsx` and\n  pinned by `{Component}.parity.vrt.spec.ts`.\n\n**Coverage today**: sweep-1 (Separator, Text, Icon) + sweep-2 (Spinner,\nBadge, Callout) of #154. The remaining 12 lv1 components arrive in\nsweep-3 through sweep-7 and will be added here as each sweep lands."}}}},t=({id:n,title:c,intro:u,attributes:r,children:m})=>e.jsxs("section",{id:n,className:"mb-12",children:[e.jsx("h2",{className:"st-text st-text--heading st-text--lg st-text--default mb-2",children:c}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--muted mb-4",children:u}),r&&r.length>0&&e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"st-text st-text--label st-text--sm st-text--default mb-2",children:"Required attributes for vanilla HTML usage"}),e.jsxs("table",{className:"w-full max-w-2xl text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{className:"text-left py-1 pr-4 font-medium",children:"Attribute"}),e.jsx("th",{className:"text-left py-1 pr-4 font-medium",children:"Meaning"}),e.jsx("th",{className:"text-left py-1 font-medium",children:"When"})]})}),e.jsx("tbody",{children:r.map(a=>e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("td",{className:"py-1 pr-4 font-mono text-xs",children:a.name}),e.jsx("td",{className:"py-1 pr-4",children:a.meaning}),e.jsx("td",{className:"py-1 text-foreground-muted",children:a.required})]},a.name))})]})]}),e.jsx("div",{className:"rounded-md border border-border p-4 bg-surface",children:m})]}),s=({children:n})=>e.jsx("pre",{className:"mt-3 text-xs bg-surface-hover p-3 rounded overflow-x-auto",children:e.jsx("code",{children:n})}),i={name:"Reference (sweep-1 + sweep-2)",render:()=>e.jsxs("div",{className:"p-8 max-w-4xl mx-auto",children:[e.jsx("h1",{className:"st-text st-text--heading st-text--2xl st-text--default mb-2",children:"CSS API — sweep-1 + sweep-2 reference"}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--muted mb-8",children:"The classes below are emitted by `dist/schatten.css`. Import it once and the markup samples render with no React and no consumer Tailwind setup."}),e.jsxs(t,{id:"separator",title:"Separator — .st-separator",intro:"Visual divider. Orientation is an author configuration and goes through a modifier class (--horizontal / --vertical), matching the css-api.md author-config → modifier principle.",attributes:[{name:"role",meaning:'"separator" for semantic dividers, "none" / omit for decorative',required:"recommended"},{name:"aria-orientation",meaning:"For non-decorative vertical separators (assistive tech announces orientation)",required:'role="separator" + vertical only'},{name:"data-orientation",meaning:"Informational only — Radix emits this on the React side; vanilla HTML may include it for DOM parity but it does not drive styling",required:"optional"}],children:[e.jsxs("div",{className:"w-72 space-y-3",children:[e.jsx("span",{className:"st-text st-text--body st-text--sm st-text--muted",children:"Above"}),e.jsx("div",{className:"st-separator st-separator--horizontal",role:"none"}),e.jsx("span",{className:"st-text st-text--body st-text--sm st-text--muted",children:"Below"})]}),e.jsx(s,{children:`<!-- Decorative -->
<div class="st-separator st-separator--horizontal" role="none"></div>

<!-- Semantic vertical separator (announced to screen readers) -->
<div class="st-separator st-separator--vertical"
     role="separator" aria-orientation="vertical"></div>

<!-- Modifier vocabulary -->
<!-- orientation: --horizontal | --vertical -->`})]}),e.jsxs(t,{id:"text",title:"Text — .st-text",intro:"Typography primitive. Five orthogonal axes (variant × size × color × align × truncate), all emitted as side-by-side modifiers — never collapsed.",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h2",{className:"st-text st-text--heading st-text--lg st-text--default",children:"Heading lg"}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--default",children:"Body md, default color."}),e.jsx("p",{className:"st-text st-text--body st-text--sm st-text--muted",children:"Body sm, muted color."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--error",children:"Body md, error color."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--vermillion",children:"Body md, vermillion (朱)."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--default st-text--align-right",children:"Right-aligned body."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--default st-text--truncate w-64",children:"A very long line that should be truncated on overflow."})]}),e.jsx(s,{children:`<p class="st-text st-text--body st-text--md st-text--default">Body text.</p>
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
<!-- truncate: --truncate (presence-only) -->`})]}),e.jsxs(t,{id:"icon",title:"Icon — .st-icon",intro:"SVG icon primitive. The root class itself has no CSS body — every visual property lives on a modifier. Pair with any inline SVG (e.g. a Lucide path).",attributes:[{name:'aria-hidden="true"',meaning:"Decorative icons",required:"always (decorative)"},{name:'role="img" + aria-label',meaning:"Meaningful icons that carry information",required:"when-applicable"}],children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-icon st-icon--sm st-icon--default","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-icon st-icon--md st-icon--error","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-icon st-icon--lg st-icon--vermillion","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]})]}),e.jsx(s,{children:`<svg class="st-icon st-icon--md st-icon--inherit" aria-hidden="true"
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
     comes from a modifier. -->`})]}),e.jsxs(t,{id:"spinner",title:"Spinner — .st-spinner",intro:"Loading indicator. Two modifier axes (variant × size) plus six sub-element classes spanning the two animation types (default: rotor / track / arc; ripple: dot / ripple-1 / ripple-2). SVG sizing is handled automatically via the .st-spinner > svg child selector — no Tailwind utility needed. Ripple timing is exposed via two consumer-overridable CSS variables (--schatten-spinner-duration / --schatten-spinner-ripple-delay); default-type rotation is hardcoded to 1s linear infinite.",attributes:[{name:'role="status"',meaning:"Announces the loading state to assistive tech",required:"always"},{name:'aria-hidden="true" (on inner SVG)',meaning:"The SVG is decorative; the visually-hidden label carries the meaning",required:"always"},{name:'<span class="sr-only">…</span>',meaning:"Accessible label rendered visually-hidden",required:"always"}],children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"st-spinner st-spinner--default st-spinner--sm",role:"status",children:[e.jsxs("svg",{className:"st-spinner__rotor",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{className:"st-spinner__track",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),e.jsx("path",{className:"st-spinner__arc",d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),e.jsx("span",{className:"sr-only",children:"Loading"})]}),e.jsxs("div",{className:"st-spinner st-spinner--default st-spinner--md",role:"status",children:[e.jsxs("svg",{className:"st-spinner__rotor",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{className:"st-spinner__track",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),e.jsx("path",{className:"st-spinner__arc",d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),e.jsx("span",{className:"sr-only",children:"Loading"})]}),e.jsxs("div",{className:"st-spinner st-spinner--default st-spinner--lg",role:"status",children:[e.jsxs("svg",{viewBox:"0 0 72 72",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{className:"st-spinner__dot",cx:"36",cy:"36",r:"2.6"}),e.jsx("circle",{className:"st-spinner__ripple-1",cx:"36",cy:"36",r:"10",stroke:"currentColor",strokeWidth:"1.4"}),e.jsx("circle",{className:"st-spinner__ripple-2",cx:"36",cy:"36",r:"10",stroke:"currentColor",strokeWidth:"1.2"})]}),e.jsx("span",{className:"sr-only",children:"Loading"})]})]}),e.jsx(s,{children:`<!-- Default (rotating circle) — SVG carries the rotor + opacity stack -->
<div class="st-spinner st-spinner--default st-spinner--md" role="status">
  <svg class="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle class="st-spinner__track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
    <path class="st-spinner__arc" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" stroke-width="3" />
  </svg>
  <span class="sr-only">Loading</span>
</div>

<!-- Ripple (concentric pulsing rings) -->
<div class="st-spinner st-spinner--default st-spinner--md" role="status">
  <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
    <circle class="st-spinner__dot" cx="36" cy="36" r="2.6" />
    <circle class="st-spinner__ripple-1" cx="36" cy="36" r="10" stroke="currentColor" />
    <circle class="st-spinner__ripple-2" cx="36" cy="36" r="10" stroke="currentColor" />
  </svg>
  <span class="sr-only">Loading</span>
</div>

<!-- Modifier vocabulary -->
<!-- variant: --default | --inverted (use --inverted on saturated surfaces) -->
<!-- size   : --sm (16px) | --md (24px) | --lg (32px) -->

<!-- Sub-elements (default type) -->
<!-- __rotor : the SVG itself, rotates 360deg / 1s (replaces Tailwind animate-spin) -->
<!-- __track : background ring (opacity 0.25) -->
<!-- __arc   : moving arc (opacity 0.75) -->

<!-- Sub-elements (ripple type) -->
<!-- __dot       : central pulsing dot -->
<!-- __ripple-1  : outer ripple wave (no delay) -->
<!-- __ripple-2  : outer ripple wave (delayed by --schatten-spinner-ripple-delay) -->

<!-- Consumer-overridable timing (declared on :root, ripple type only) -->
<!-- --schatten-spinner-duration        default 2.8s -->
<!-- --schatten-spinner-ripple-delay    default 1.1s -->

<!-- Default-type rotation is hardcoded 1s linear infinite. SVG sizing is
     handled by the .st-spinner > svg child selector — no Tailwind utility
     is required on the inner SVG. -->`})]}),e.jsxs(t,{id:"badge",title:"Badge — .st-badge",intro:"Status descriptor. Pattern B (tone × shape): five variants × three appearances, all written as double-class selectors so every combination shares the same specificity. Includes --icon-only modifier for square icon-only chips.",attributes:[{name:"aria-label",meaning:"Required for icon-only badges (no visible text)",required:"when --icon-only"}],children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:"subtle"}),e.jsx("div",{className:"st-badge st-badge--neutral st-badge--subtle st-badge--md",children:"neutral"}),e.jsx("div",{className:"st-badge st-badge--success st-badge--subtle st-badge--md",children:"success"}),e.jsx("div",{className:"st-badge st-badge--error st-badge--subtle st-badge--md",children:"error"}),e.jsx("div",{className:"st-badge st-badge--warning st-badge--subtle st-badge--md",children:"warning"}),e.jsx("div",{className:"st-badge st-badge--info st-badge--subtle st-badge--md",children:"info"})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:"solid"}),e.jsx("div",{className:"st-badge st-badge--neutral st-badge--solid st-badge--md",children:"neutral"}),e.jsx("div",{className:"st-badge st-badge--success st-badge--solid st-badge--md",children:"success"}),e.jsx("div",{className:"st-badge st-badge--error st-badge--solid st-badge--md",children:"error"}),e.jsx("div",{className:"st-badge st-badge--warning st-badge--solid st-badge--md",children:"warning"}),e.jsx("div",{className:"st-badge st-badge--info st-badge--solid st-badge--md",children:"info"})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:"outline"}),e.jsx("div",{className:"st-badge st-badge--neutral st-badge--outline st-badge--md",children:"neutral"}),e.jsx("div",{className:"st-badge st-badge--success st-badge--outline st-badge--md",children:"success"}),e.jsx("div",{className:"st-badge st-badge--error st-badge--outline st-badge--md",children:"error"}),e.jsx("div",{className:"st-badge st-badge--warning st-badge--outline st-badge--md",children:"warning"}),e.jsx("div",{className:"st-badge st-badge--info st-badge--outline st-badge--md",children:"info"})]})]}),e.jsx(s,{children:`<!-- variant × appearance combination resolved by double-class selectors -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md">Saved</span>
<span class="st-badge st-badge--error st-badge--solid st-badge--md">Failed</span>
<span class="st-badge st-badge--info st-badge--outline st-badge--md">Beta</span>

<!-- Icon-only — square, padded; requires aria-label -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md st-badge--icon-only"
      aria-label="Done">
  <svg aria-hidden="true">…</svg>
</span>

<!-- Modifier vocabulary -->
<!-- variant    : --neutral | --success | --error | --warning | --info -->
<!-- appearance : --subtle | --solid | --outline
                  (all three are first-class; emit alongside variant) -->
<!-- size       : --sm | --md | --lg -->
<!-- icon-only  : --icon-only (presence-only; square aspect ratio) -->`})]}),e.jsxs(t,{id:"callout",title:"Callout — .st-callout",intro:'Inline status block. Pattern B (tone × shape): five variants × two appearances. Sub-elements (__icon / __content / __title / __body / __action) sit directly under the block — layout (display: flex) is on .st-callout itself, with align-items auto-switching between center (single-content) and start (multi-line, via :has()). No default ARIA role — pass role="status" (polite) or role="alert" (assertive) for dynamic callouts.',attributes:[{name:"role",meaning:'"status" (polite) or "alert" (assertive) for dynamic callouts; omit for static',required:"when-dynamic"},{name:'aria-hidden="true" (on icon SVG)',meaning:"The icon is decorative; the title text carries the meaning",required:"always (icon)"}],children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"st-callout st-callout--info st-callout--subtle",children:[e.jsxs("svg",{className:"st-callout__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4"}),e.jsx("path",{d:"M12 8h.01"})]}),e.jsxs("div",{className:"st-callout__content",children:[e.jsx("div",{className:"st-callout__title",children:"Heads up"}),e.jsx("div",{className:"st-callout__body",children:"Subtle appearance — tinted background, tone color text."})]})]}),e.jsxs("div",{className:"st-callout st-callout--error st-callout--solid",children:[e.jsxs("svg",{className:"st-callout__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),e.jsx("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]}),e.jsxs("div",{className:"st-callout__content",children:[e.jsx("div",{className:"st-callout__title",children:"Failed"}),e.jsx("div",{className:"st-callout__body",children:"Solid appearance — saturated fill, inverted foreground."})]})]})]}),e.jsx(s,{children:`<!-- Layout is on .st-callout itself — sub-elements sit directly under it -->
<div class="st-callout st-callout--info st-callout--subtle" role="status">
  <svg class="st-callout__icon" aria-hidden="true">…</svg>
  <div class="st-callout__content">
    <div class="st-callout__title">Heads up</div>
    <div class="st-callout__body">…</div>
  </div>
</div>

<!-- With action / close button (both use the __action trailing slot) -->
<div class="st-callout st-callout--warning st-callout--subtle">
  <svg class="st-callout__icon" aria-hidden="true">…</svg>
  <div class="st-callout__content">
    <div class="st-callout__title">Unsaved changes</div>
    <div class="st-callout__body">…</div>
  </div>
  <div class="st-callout__action"><button>Save now</button></div>
  <button class="st-callout__action" aria-label="Close">…</button>
</div>

<!-- Modifier vocabulary -->
<!-- variant    : --neutral | --success | --error | --warning | --info -->
<!-- appearance : --subtle | --solid
                  (both first-class; emit alongside variant) -->

<!-- Sub-elements -->
<!-- __icon    : variant icon wrapper (sizes itself to 20px square) -->
<!-- __content : title + body column (flex-col, fills remaining space) -->
<!-- __title   : bold heading -->
<!-- __body    : description content -->
<!-- __action  : trailing slot for action / close button (shrink-0) -->

<!-- Layout alignment is automatic:
       - title-only or body-only → align-items: center
       - title AND body present  → align-items: flex-start  (via :has()) -->`})]}),e.jsx("p",{className:"st-text st-text--body st-text--sm st-text--subtle mt-8",children:"Coming in subsequent sweeps: Button / Checkbox / Switch (sweep-3), Input / Textarea / Radio (sweep-4), Select / Tooltip (sweep-5), Toast / Dialog (sweep-6), Field / FieldSet (sweep-7)."})]})};var l,o,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Reference (sweep-1 + sweep-2)',
  render: () => <div className="p-8 max-w-4xl mx-auto">
      <h1 className="st-text st-text--heading st-text--2xl st-text--default mb-2">
        CSS API — sweep-1 + sweep-2 reference
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

      <Section id="spinner" title="Spinner — .st-spinner" intro="Loading indicator. Two modifier axes (variant × size) plus six sub-element classes spanning the two animation types (default: rotor / track / arc; ripple: dot / ripple-1 / ripple-2). SVG sizing is handled automatically via the .st-spinner > svg child selector — no Tailwind utility needed. Ripple timing is exposed via two consumer-overridable CSS variables (--schatten-spinner-duration / --schatten-spinner-ripple-delay); default-type rotation is hardcoded to 1s linear infinite." attributes={[{
      name: 'role="status"',
      meaning: 'Announces the loading state to assistive tech',
      required: 'always'
    }, {
      name: 'aria-hidden="true" (on inner SVG)',
      meaning: 'The SVG is decorative; the visually-hidden label carries the meaning',
      required: 'always'
    }, {
      name: '<span class="sr-only">…</span>',
      meaning: 'Accessible label rendered visually-hidden',
      required: 'always'
    }]}>
        <div className="flex items-center gap-6">
          <div className="st-spinner st-spinner--default st-spinner--sm" role="status">
            <svg className="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="st-spinner__track" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="st-spinner__arc" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="sr-only">Loading</span>
          </div>
          <div className="st-spinner st-spinner--default st-spinner--md" role="status">
            <svg className="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="st-spinner__track" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="st-spinner__arc" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="sr-only">Loading</span>
          </div>
          <div className="st-spinner st-spinner--default st-spinner--lg" role="status">
            <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
              <circle className="st-spinner__dot" cx="36" cy="36" r="2.6" />
              <circle className="st-spinner__ripple-1" cx="36" cy="36" r="10" stroke="currentColor" strokeWidth="1.4" />
              <circle className="st-spinner__ripple-2" cx="36" cy="36" r="10" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span className="sr-only">Loading</span>
          </div>
        </div>
        <CodeBlock>{\`<!-- Default (rotating circle) — SVG carries the rotor + opacity stack -->
<div class="st-spinner st-spinner--default st-spinner--md" role="status">
  <svg class="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle class="st-spinner__track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
    <path class="st-spinner__arc" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" stroke-width="3" />
  </svg>
  <span class="sr-only">Loading</span>
</div>

<!-- Ripple (concentric pulsing rings) -->
<div class="st-spinner st-spinner--default st-spinner--md" role="status">
  <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
    <circle class="st-spinner__dot" cx="36" cy="36" r="2.6" />
    <circle class="st-spinner__ripple-1" cx="36" cy="36" r="10" stroke="currentColor" />
    <circle class="st-spinner__ripple-2" cx="36" cy="36" r="10" stroke="currentColor" />
  </svg>
  <span class="sr-only">Loading</span>
</div>

<!-- Modifier vocabulary -->
<!-- variant: --default | --inverted (use --inverted on saturated surfaces) -->
<!-- size   : --sm (16px) | --md (24px) | --lg (32px) -->

<!-- Sub-elements (default type) -->
<!-- __rotor : the SVG itself, rotates 360deg / 1s (replaces Tailwind animate-spin) -->
<!-- __track : background ring (opacity 0.25) -->
<!-- __arc   : moving arc (opacity 0.75) -->

<!-- Sub-elements (ripple type) -->
<!-- __dot       : central pulsing dot -->
<!-- __ripple-1  : outer ripple wave (no delay) -->
<!-- __ripple-2  : outer ripple wave (delayed by --schatten-spinner-ripple-delay) -->

<!-- Consumer-overridable timing (declared on :root, ripple type only) -->
<!-- --schatten-spinner-duration        default 2.8s -->
<!-- --schatten-spinner-ripple-delay    default 1.1s -->

<!-- Default-type rotation is hardcoded 1s linear infinite. SVG sizing is
     handled by the .st-spinner > svg child selector — no Tailwind utility
     is required on the inner SVG. -->\`}</CodeBlock>
      </Section>

      <Section id="badge" title="Badge — .st-badge" intro="Status descriptor. Pattern B (tone × shape): five variants × three appearances, all written as double-class selectors so every combination shares the same specificity. Includes --icon-only modifier for square icon-only chips." attributes={[{
      name: 'aria-label',
      meaning: 'Required for icon-only badges (no visible text)',
      required: 'when --icon-only'
    }]}>
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">subtle</span>
            <div className="st-badge st-badge--neutral st-badge--subtle st-badge--md">neutral</div>
            <div className="st-badge st-badge--success st-badge--subtle st-badge--md">success</div>
            <div className="st-badge st-badge--error st-badge--subtle st-badge--md">error</div>
            <div className="st-badge st-badge--warning st-badge--subtle st-badge--md">warning</div>
            <div className="st-badge st-badge--info st-badge--subtle st-badge--md">info</div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">solid</span>
            <div className="st-badge st-badge--neutral st-badge--solid st-badge--md">neutral</div>
            <div className="st-badge st-badge--success st-badge--solid st-badge--md">success</div>
            <div className="st-badge st-badge--error st-badge--solid st-badge--md">error</div>
            <div className="st-badge st-badge--warning st-badge--solid st-badge--md">warning</div>
            <div className="st-badge st-badge--info st-badge--solid st-badge--md">info</div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">outline</span>
            <div className="st-badge st-badge--neutral st-badge--outline st-badge--md">neutral</div>
            <div className="st-badge st-badge--success st-badge--outline st-badge--md">success</div>
            <div className="st-badge st-badge--error st-badge--outline st-badge--md">error</div>
            <div className="st-badge st-badge--warning st-badge--outline st-badge--md">warning</div>
            <div className="st-badge st-badge--info st-badge--outline st-badge--md">info</div>
          </div>
        </div>
        <CodeBlock>{\`<!-- variant × appearance combination resolved by double-class selectors -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md">Saved</span>
<span class="st-badge st-badge--error st-badge--solid st-badge--md">Failed</span>
<span class="st-badge st-badge--info st-badge--outline st-badge--md">Beta</span>

<!-- Icon-only — square, padded; requires aria-label -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md st-badge--icon-only"
      aria-label="Done">
  <svg aria-hidden="true">…</svg>
</span>

<!-- Modifier vocabulary -->
<!-- variant    : --neutral | --success | --error | --warning | --info -->
<!-- appearance : --subtle | --solid | --outline
                  (all three are first-class; emit alongside variant) -->
<!-- size       : --sm | --md | --lg -->
<!-- icon-only  : --icon-only (presence-only; square aspect ratio) -->\`}</CodeBlock>
      </Section>

      <Section id="callout" title="Callout — .st-callout" intro="Inline status block. Pattern B (tone × shape): five variants × two appearances. Sub-elements (__icon / __content / __title / __body / __action) sit directly under the block — layout (display: flex) is on .st-callout itself, with align-items auto-switching between center (single-content) and start (multi-line, via :has()). No default ARIA role — pass role=&quot;status&quot; (polite) or role=&quot;alert&quot; (assertive) for dynamic callouts." attributes={[{
      name: 'role',
      meaning: '"status" (polite) or "alert" (assertive) for dynamic callouts; omit for static',
      required: 'when-dynamic'
    }, {
      name: 'aria-hidden="true" (on icon SVG)',
      meaning: 'The icon is decorative; the title text carries the meaning',
      required: 'always (icon)'
    }]}>
        <div className="space-y-3">
          <div className="st-callout st-callout--info st-callout--subtle">
            <svg className="st-callout__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <div className="st-callout__content">
              <div className="st-callout__title">Heads up</div>
              <div className="st-callout__body">
                Subtle appearance — tinted background, tone color text.
              </div>
            </div>
          </div>
          <div className="st-callout st-callout--error st-callout--solid">
            <svg className="st-callout__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            <div className="st-callout__content">
              <div className="st-callout__title">Failed</div>
              <div className="st-callout__body">
                Solid appearance — saturated fill, inverted foreground.
              </div>
            </div>
          </div>
        </div>
        <CodeBlock>{\`<!-- Layout is on .st-callout itself — sub-elements sit directly under it -->
<div class="st-callout st-callout--info st-callout--subtle" role="status">
  <svg class="st-callout__icon" aria-hidden="true">…</svg>
  <div class="st-callout__content">
    <div class="st-callout__title">Heads up</div>
    <div class="st-callout__body">…</div>
  </div>
</div>

<!-- With action / close button (both use the __action trailing slot) -->
<div class="st-callout st-callout--warning st-callout--subtle">
  <svg class="st-callout__icon" aria-hidden="true">…</svg>
  <div class="st-callout__content">
    <div class="st-callout__title">Unsaved changes</div>
    <div class="st-callout__body">…</div>
  </div>
  <div class="st-callout__action"><button>Save now</button></div>
  <button class="st-callout__action" aria-label="Close">…</button>
</div>

<!-- Modifier vocabulary -->
<!-- variant    : --neutral | --success | --error | --warning | --info -->
<!-- appearance : --subtle | --solid
                  (both first-class; emit alongside variant) -->

<!-- Sub-elements -->
<!-- __icon    : variant icon wrapper (sizes itself to 20px square) -->
<!-- __content : title + body column (flex-col, fills remaining space) -->
<!-- __title   : bold heading -->
<!-- __body    : description content -->
<!-- __action  : trailing slot for action / close button (shrink-0) -->

<!-- Layout alignment is automatic:
       - title-only or body-only → align-items: center
       - title AND body present  → align-items: flex-start  (via :has()) -->\`}</CodeBlock>
      </Section>

      <p className="st-text st-text--body st-text--sm st-text--subtle mt-8">
        Coming in subsequent sweeps: Button / Checkbox / Switch (sweep-3), Input / Textarea / Radio
        (sweep-4), Select / Tooltip (sweep-5), Toast / Dialog (sweep-6), Field / FieldSet (sweep-7).
      </p>
    </div>
}`,...(d=(o=i.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const w=["Reference"];export{i as Reference,w as __namedExportsOrder,_ as default};
