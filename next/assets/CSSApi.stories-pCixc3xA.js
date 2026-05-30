import{j as e}from"./iframe-BLHT0AAj.js";/* empty css              *//* empty css               *//* empty css                *//* empty css                 *//* empty css               *//* empty css              *//* empty css                 *//* empty css             *//* empty css              *//* empty css              *//* empty css               *//* empty css                  *//* empty css                *//* empty css               *//* empty css             *//* empty css                 *//* empty css              *//* empty css                */import"./preload-helper-CrztxVc4.js";const T={title:"CSS API/Overview",parameters:{layout:"fullscreen",docs:{description:{component:"# CSS API\n\nSchatten ships both a React component surface and a framework-agnostic\nCSS layer. This page is the **reference catalogue** for the CSS layer:\nevery `.st-*` class consumers can write directly in vanilla HTML, with\nthe matching markup and a11y requirements.\n\n- The class names follow the convention in [css-api.md](.claude/rules/css-api.md):\n  `.st-{block}` / `.st-{block}--{modifier}` / `.st-{block}__{element}`,\n  one axis per modifier, attribute-driven state (`[aria-invalid]`,\n  `[data-state]`, `[data-swipe]`, …).\n- Pixel parity between the React side and the vanilla HTML side is\n  verified per-component in each `{Component}.parity.stories.tsx` and\n  pinned by `{Component}.parity.vrt.spec.ts`.\n\n**Coverage**: all 18 lv1 components — sweep-1 (Separator, Text, Icon)\n+ sweep-2 (Spinner, Badge, Callout) + sweep-3 (Button, Checkbox,\nSwitch) + sweep-4 (Input, Textarea, Radio) + sweep-5 (Tooltip, Select)\n+ sweep-6 (Toast, Dialog) + sweep-7 (Field, FieldSet) of #154."}}}},c=()=>e.jsx("style",{children:`
    .cssapi-doc { padding: 2rem; max-width: 64rem; margin: 0 auto; }
    .cssapi-doc__section { margin-bottom: 3rem; }
    .cssapi-doc__panel {
      padding: 1rem;
      border: 1px solid var(--color-border);
      border-radius: 0.375rem;
      background-color: var(--color-surface);
    }
    .cssapi-doc__title-spacing { margin-bottom: 0.5rem; }
    .cssapi-doc__intro-spacing { margin-bottom: 1rem; }
    .cssapi-doc__intro-spacing--lg { margin-bottom: 2rem; }
    .cssapi-doc__attr-wrapper { margin-bottom: 1rem; }
    .cssapi-doc__attr-table {
      width: 100%;
      max-width: 42rem;
      font-size: 0.875rem;
      border-collapse: collapse;
    }
    .cssapi-doc__attr-table th,
    .cssapi-doc__attr-table td {
      padding: 0.25rem 1rem 0.25rem 0;
      text-align: left;
      border-bottom: 1px solid var(--color-border);
    }
    .cssapi-doc__attr-table th { font-weight: 500; }
    .cssapi-doc__attr-table td:last-child,
    .cssapi-doc__attr-table th:last-child {
      padding-right: 0;
      color: var(--color-foreground-muted);
    }
    .cssapi-doc__attr-name {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.75rem;
    }
    .cssapi-doc__code {
      margin-top: 0.75rem;
      padding: 0.75rem;
      background-color: var(--color-surface-hover);
      border-radius: 0.25rem;
      overflow-x: auto;
      font-size: 0.75rem;
    }
    .cssapi-doc__row {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .cssapi-doc__row--tight { gap: 0.75rem; }
    .cssapi-doc__row--wide  { gap: 1.5rem; }
    .cssapi-doc__stack {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .cssapi-doc__stack--tight { gap: 0.5rem; }
    .cssapi-doc__col-narrow { width: 5rem; }
    .cssapi-doc__col-wide   { width: 18rem; }
    .cssapi-doc__col-form   { width: 20rem; }
    .cssapi-doc__label {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.75rem;
      color: var(--color-foreground-muted);
    }
    .cssapi-doc__sr-only {
      position: absolute;
      width: 1px; height: 1px;
      padding: 0; margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
      border-width: 0;
    }
  `}),t=({id:r,title:o,intro:l,attributes:n,children:d})=>e.jsxs("section",{id:r,className:"cssapi-doc__section",children:[e.jsx("h2",{className:"st-text st-text--heading st-text--lg st-text--default cssapi-doc__title-spacing",children:o}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--muted cssapi-doc__intro-spacing",children:l}),n&&n.length>0&&e.jsxs("div",{className:"cssapi-doc__attr-wrapper",children:[e.jsx("h3",{className:"st-text st-text--label st-text--sm st-text--default cssapi-doc__title-spacing",children:"Required attributes for vanilla HTML usage"}),e.jsxs("table",{className:"cssapi-doc__attr-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Attribute"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"When"})]})}),e.jsx("tbody",{children:n.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"cssapi-doc__attr-name",children:a.name}),e.jsx("td",{children:a.meaning}),e.jsx("td",{children:a.required})]},a.name))})]})]}),e.jsx("div",{className:"cssapi-doc__panel",children:d})]}),s=({children:r})=>e.jsx("pre",{className:"cssapi-doc__code",children:e.jsx("code",{children:r})}),i={name:"Reference (all 18 lv1 components)",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsxs("div",{className:"cssapi-doc",children:[e.jsx("h1",{className:"st-text st-text--heading st-text--2xl st-text--default cssapi-doc__title-spacing",children:"CSS API — every lv1 component"}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--muted cssapi-doc__intro-spacing--lg",children:"The classes below are emitted by `dist/schatten.css`. Import it once and the markup samples render with no React and no consumer Tailwind setup."}),e.jsxs(t,{id:"separator",title:"Separator — .st-separator",intro:"Visual divider. Orientation is an author configuration and goes through a modifier class (--horizontal / --vertical), matching the css-api.md author-config → modifier principle.",attributes:[{name:"role",meaning:'"separator" for semantic dividers, "none" / omit for decorative',required:"recommended"},{name:"aria-orientation",meaning:"For non-decorative vertical separators (assistive tech announces orientation)",required:'role="separator" + vertical only'},{name:"data-orientation",meaning:"Informational only — Radix emits this on the React side; vanilla HTML may include it for DOM parity but it does not drive styling",required:"optional"}],children:[e.jsxs("div",{className:"cssapi-doc__col-wide cssapi-doc__stack",children:[e.jsx("span",{className:"st-text st-text--body st-text--sm st-text--muted",children:"Above"}),e.jsx("div",{className:"st-separator st-separator--horizontal",role:"none"}),e.jsx("span",{className:"st-text st-text--body st-text--sm st-text--muted",children:"Below"})]}),e.jsx(s,{children:`<!-- Decorative -->
<div class="st-separator st-separator--horizontal" role="none"></div>

<!-- Semantic vertical separator (announced to screen readers) -->
<div class="st-separator st-separator--vertical"
     role="separator" aria-orientation="vertical"></div>

<!-- Modifier vocabulary -->
<!-- orientation: --horizontal | --vertical -->`})]}),e.jsxs(t,{id:"text",title:"Text — .st-text",intro:"Typography primitive. Five orthogonal axes (variant × size × color × align × truncate), all emitted as side-by-side modifiers — never collapsed.",children:[e.jsxs("div",{className:"cssapi-doc__stack cssapi-doc__stack--tight",children:[e.jsx("h2",{className:"st-text st-text--heading st-text--lg st-text--default",children:"Heading lg"}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--default",children:"Body md, default color."}),e.jsx("p",{className:"st-text st-text--body st-text--sm st-text--muted",children:"Body sm, muted color."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--error",children:"Body md, error color."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--vermillion",children:"Body md, vermillion (朱)."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--default st-text--align-right",children:"Right-aligned body."}),e.jsx("p",{className:"st-text st-text--body st-text--md st-text--default st-text--truncate w-64",children:"A very long line that should be truncated on overflow."})]}),e.jsx(s,{children:`<p class="st-text st-text--body st-text--md st-text--default">Body text.</p>
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
<!-- truncate: --truncate (presence-only) -->`})]}),e.jsxs(t,{id:"icon",title:"Icon — .st-icon",intro:"SVG icon primitive. The root class itself has no CSS body — every visual property lives on a modifier. Pair with any inline SVG (e.g. a Lucide path).",attributes:[{name:'aria-hidden="true"',meaning:"Decorative icons",required:"always (decorative)"},{name:'role="img" + aria-label',meaning:"Meaningful icons that carry information",required:"when-applicable"}],children:[e.jsxs("div",{className:"cssapi-doc__row",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-icon st-icon--sm st-icon--default","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-icon st-icon--md st-icon--error","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-icon st-icon--lg st-icon--vermillion","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]})]}),e.jsx(s,{children:`<svg class="st-icon st-icon--md st-icon--inherit" aria-hidden="true"
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
     comes from a modifier. -->`})]}),e.jsxs(t,{id:"spinner",title:"Spinner — .st-spinner",intro:"Loading indicator. Two modifier axes (variant × size) plus six sub-element classes spanning the two animation types (default: rotor / track / arc; ripple: dot / ripple-1 / ripple-2). SVG sizing is handled automatically via the .st-spinner > svg child selector — no Tailwind utility needed. Ripple timing is exposed via two consumer-overridable CSS variables (--st-spinner-duration / --st-spinner-ripple-delay); default-type rotation is hardcoded to 1s linear infinite.",attributes:[{name:'role="status"',meaning:"Announces the loading state to assistive tech",required:"always"},{name:'aria-hidden="true" (on inner SVG)',meaning:"The SVG is decorative; the visually-hidden label carries the meaning",required:"always"},{name:'<span class="sr-only">…</span>',meaning:"Accessible label rendered visually-hidden",required:"always"}],children:[e.jsxs("div",{className:"cssapi-doc__row cssapi-doc__row--wide",children:[e.jsxs("div",{className:"st-spinner st-spinner--default st-spinner--sm",role:"status",children:[e.jsxs("svg",{className:"st-spinner__rotor",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{className:"st-spinner__track",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),e.jsx("path",{className:"st-spinner__arc",d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),e.jsx("span",{className:"cssapi-doc__sr-only",children:"Loading"})]}),e.jsxs("div",{className:"st-spinner st-spinner--default st-spinner--md",role:"status",children:[e.jsxs("svg",{className:"st-spinner__rotor",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{className:"st-spinner__track",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),e.jsx("path",{className:"st-spinner__arc",d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),e.jsx("span",{className:"cssapi-doc__sr-only",children:"Loading"})]}),e.jsxs("div",{className:"st-spinner st-spinner--default st-spinner--lg",role:"status",children:[e.jsxs("svg",{viewBox:"0 0 72 72",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{className:"st-spinner__dot",cx:"36",cy:"36",r:"2.6"}),e.jsx("circle",{className:"st-spinner__ripple-1",cx:"36",cy:"36",r:"10",stroke:"currentColor",strokeWidth:"1.4"}),e.jsx("circle",{className:"st-spinner__ripple-2",cx:"36",cy:"36",r:"10",stroke:"currentColor",strokeWidth:"1.2"})]}),e.jsx("span",{className:"cssapi-doc__sr-only",children:"Loading"})]})]}),e.jsx(s,{children:`<!-- Default (rotating circle) — SVG carries the rotor + opacity stack -->
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
<!-- __ripple-2  : outer ripple wave (delayed by --st-spinner-ripple-delay) -->

<!-- Consumer-overridable timing (@theme-registered, ripple type only) -->
<!-- --st-spinner-duration        default 2.8s -->
<!-- --st-spinner-ripple-delay    default 1.1s -->

<!-- Default-type rotation is hardcoded 1s linear infinite. SVG sizing is
     handled by the .st-spinner > svg child selector — no Tailwind utility
     is required on the inner SVG. -->`})]}),e.jsxs(t,{id:"badge",title:"Badge — .st-badge",intro:"Status descriptor. Pattern B (tone × shape): five variants × three appearances, all written as double-class selectors so every combination shares the same specificity. Includes --icon-only modifier for square icon-only chips.",attributes:[{name:"role",meaning:'Set role="img" on icon-only badges so the aria-label is exposed (a bare div is role generic and drops the name)',required:"when --icon-only"},{name:"aria-label",meaning:"Required for icon-only badges (no visible text)",required:"when --icon-only"}],children:[e.jsxs("div",{className:"cssapi-doc__stack",children:[e.jsxs("div",{className:"cssapi-doc__row cssapi-doc__row--tight",children:[e.jsx("span",{className:"cssapi-doc__col-narrow cssapi-doc__label",children:"subtle"}),e.jsx("div",{className:"st-badge st-badge--neutral st-badge--subtle st-badge--md",children:"neutral"}),e.jsx("div",{className:"st-badge st-badge--success st-badge--subtle st-badge--md",children:"success"}),e.jsx("div",{className:"st-badge st-badge--error st-badge--subtle st-badge--md",children:"error"}),e.jsx("div",{className:"st-badge st-badge--warning st-badge--subtle st-badge--md",children:"warning"}),e.jsx("div",{className:"st-badge st-badge--info st-badge--subtle st-badge--md",children:"info"})]}),e.jsxs("div",{className:"cssapi-doc__row cssapi-doc__row--tight",children:[e.jsx("span",{className:"cssapi-doc__col-narrow cssapi-doc__label",children:"solid"}),e.jsx("div",{className:"st-badge st-badge--neutral st-badge--solid st-badge--md",children:"neutral"}),e.jsx("div",{className:"st-badge st-badge--success st-badge--solid st-badge--md",children:"success"}),e.jsx("div",{className:"st-badge st-badge--error st-badge--solid st-badge--md",children:"error"}),e.jsx("div",{className:"st-badge st-badge--warning st-badge--solid st-badge--md",children:"warning"}),e.jsx("div",{className:"st-badge st-badge--info st-badge--solid st-badge--md",children:"info"})]}),e.jsxs("div",{className:"cssapi-doc__row cssapi-doc__row--tight",children:[e.jsx("span",{className:"cssapi-doc__col-narrow cssapi-doc__label",children:"outline"}),e.jsx("div",{className:"st-badge st-badge--neutral st-badge--outline st-badge--md",children:"neutral"}),e.jsx("div",{className:"st-badge st-badge--success st-badge--outline st-badge--md",children:"success"}),e.jsx("div",{className:"st-badge st-badge--error st-badge--outline st-badge--md",children:"error"}),e.jsx("div",{className:"st-badge st-badge--warning st-badge--outline st-badge--md",children:"warning"}),e.jsx("div",{className:"st-badge st-badge--info st-badge--outline st-badge--md",children:"info"})]})]}),e.jsx(s,{children:`<!-- variant × appearance combination resolved by double-class selectors -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md">Saved</span>
<span class="st-badge st-badge--error st-badge--solid st-badge--md">Failed</span>
<span class="st-badge st-badge--info st-badge--outline st-badge--md">Beta</span>

<!-- Icon-only — square, padded; requires role="img" + aria-label -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md st-badge--icon-only"
      role="img" aria-label="Done">
  <svg aria-hidden="true">…</svg>
</span>

<!-- Modifier vocabulary -->
<!-- variant    : --neutral | --success | --error | --warning | --info -->
<!-- appearance : --subtle | --solid | --outline
                  (all three are first-class; emit alongside variant) -->
<!-- size       : --sm | --md | --lg -->
<!-- icon-only  : --icon-only (presence-only; square aspect ratio) -->`})]}),e.jsxs(t,{id:"callout",title:"Callout — .st-callout",intro:'Inline status block. Pattern B (tone × shape): five variants × two appearances. Sub-elements (__icon / __content / __title / __body / __action) sit directly under the block — layout (display: flex) is on .st-callout itself, with align-items auto-switching between center (single-content) and start (multi-line, via :has()). No default ARIA role — pass role="status" (polite) or role="alert" (assertive) for dynamic callouts.',attributes:[{name:"role",meaning:'"status" (polite) or "alert" (assertive) for dynamic callouts; omit for static',required:"when-dynamic"},{name:'aria-hidden="true" (on icon SVG)',meaning:"The icon is decorative; the title text carries the meaning",required:"always (icon)"}],children:[e.jsxs("div",{className:"cssapi-doc__stack",children:[e.jsxs("div",{className:"st-callout st-callout--info st-callout--subtle",children:[e.jsxs("svg",{className:"st-callout__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4"}),e.jsx("path",{d:"M12 8h.01"})]}),e.jsxs("div",{className:"st-callout__content",children:[e.jsx("div",{className:"st-callout__title",children:"Heads up"}),e.jsx("div",{className:"st-callout__body",children:"Subtle appearance — tinted background, tone color text."})]})]}),e.jsxs("div",{className:"st-callout st-callout--error st-callout--solid",children:[e.jsxs("svg",{className:"st-callout__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),e.jsx("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]}),e.jsxs("div",{className:"st-callout__content",children:[e.jsx("div",{className:"st-callout__title",children:"Failed"}),e.jsx("div",{className:"st-callout__body",children:"Solid appearance — saturated fill, inverted foreground."})]})]})]}),e.jsx(s,{children:`<!-- Layout is on .st-callout itself — sub-elements sit directly under it -->
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
       - title AND body present  → align-items: flex-start  (via :has()) -->`})]}),e.jsxs(t,{id:"button",title:"Button — .st-btn",intro:"Action element. Pattern A (single-axis role): six variants × three sizes plus the --icon-only modifier. Loading state is signalled by aria-busy='true' alongside disabled; CSS routes the cursor to wait and fades the content / spinner overlay sub-elements. The link variant uses a flat DOM (no overlay / content wrapper) and inherits font-size by default so a <a class='st-btn st-btn--link'> embedded in a paragraph follows the surrounding text.",attributes:[{name:'type="button"',meaning:"Avoid implicit form submission on <button>",required:"when inside <form>"},{name:"aria-label",meaning:"Required for icon-only buttons (no visible text)",required:"when --icon-only"},{name:'aria-busy="true" + disabled',meaning:"Loading state — CSS reveals the spinner overlay and switches cursor to wait",required:"while loading"},{name:"aria-hidden on spinner overlay",meaning:"Set on .st-btn__spinner-overlay when NOT loading (hide from a11y tree)",required:"always (toggle inverse of loading)"}],children:[e.jsxs("div",{className:"cssapi-doc__stack",children:[e.jsxs("div",{className:"cssapi-doc__row cssapi-doc__row--tight",children:[e.jsxs("button",{type:"button",className:"st-btn st-btn--primary st-btn--md",children:[e.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true"}),e.jsx("span",{className:"st-btn__content",children:"Primary"})]}),e.jsxs("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:[e.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true"}),e.jsx("span",{className:"st-btn__content",children:"Secondary"})]}),e.jsxs("button",{type:"button",className:"st-btn st-btn--tertiary st-btn--md",children:[e.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true"}),e.jsx("span",{className:"st-btn__content",children:"Tertiary"})]}),e.jsxs("button",{type:"button",className:"st-btn st-btn--destructive st-btn--md",children:[e.jsx("span",{className:"st-btn__spinner-overlay","aria-hidden":"true"}),e.jsx("span",{className:"st-btn__content",children:"Destructive"})]})]}),e.jsxs("div",{className:"cssapi-doc__row cssapi-doc__row--tight",children:[e.jsx("button",{type:"button",className:"st-btn st-btn--link st-btn--sm",children:"Small link"}),e.jsx("button",{type:"button",className:"st-btn st-btn--link st-btn--md",children:"Medium link"}),e.jsx("button",{type:"button",className:"st-btn st-btn--link st-btn--lg",children:"Large link"})]})]}),e.jsx(s,{children:`<!-- Non-link variants — keep the __spinner-overlay + __content structure -->
<button type="button" class="st-btn st-btn--primary st-btn--md">
  <span class="st-btn__spinner-overlay" aria-hidden="true">
    <!-- Spinner SVG, only visible when host has aria-busy="true" -->
  </span>
  <span class="st-btn__content">Save</span>
</button>

<!-- Loading — set both aria-busy and disabled; remove aria-hidden from overlay -->
<button type="button" class="st-btn st-btn--primary st-btn--md"
        aria-busy="true" disabled>
  <span class="st-btn__spinner-overlay">…spinner…</span>
  <span class="st-btn__content">Saving</span>
</button>

<!-- Icon-only — add --icon-only and aria-label -->
<button type="button" class="st-btn st-btn--primary st-btn--md st-btn--icon-only"
        aria-label="Add">
  <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
  <span class="st-btn__content"><svg aria-hidden="true">…</svg></span>
</button>

<!-- Link — flat DOM, no overlay / content wrapper. Size modifier only
     affects font-size; height + padding stay at zero / inherit. -->
<a href="/docs" class="st-btn st-btn--link st-btn--md">Docs</a>

<!-- Modifier vocabulary -->
<!-- variant   : --primary | --secondary | --tertiary | --inverted | --destructive | --link -->
<!-- size      : --sm | --md | --lg
                 (link uses these for font-size only; height/padding reset) -->
<!-- icon-only : --icon-only (presence-only; square aspect ratio) -->

<!-- Sub-elements (non-link variants only) -->
<!-- __spinner-overlay : absolute-positioned loading box (CSS shows on [aria-busy]) -->
<!-- __content         : inline-flex row holding icon + children (CSS fades on [aria-busy]) -->

<!-- State attributes -->
<!-- :disabled                       — standard disabled treatment -->
<!-- [aria-busy="true"]:disabled     — restores variant colour + cursor: wait -->`})]}),e.jsxs(t,{id:"checkbox",title:"Checkbox — .st-checkbox + .st-checkbox-wrapper",intro:"Two blocks: the wrapper carries the inline-flex layout for [checkbox] + <label>; the inner block is the Radix Root (the actual button). The label's font-size is derived from the inner checkbox's size modifier via :has(), so vanilla HTML consumers only set the size class on the checkbox itself.",attributes:[{name:'role="checkbox"',meaning:"Schatten renders Radix Root which already provides the role",required:"always (Radix-provided)"},{name:"aria-checked",meaning:'"true" / "false" / "mixed" (mixed for indeterminate)',required:"always"},{name:"data-state",meaning:'"checked" / "unchecked" / "indeterminate" — drives the indicator visibility',required:"always"},{name:'aria-invalid="true"',meaning:"Error state — CSS shifts border + bg-subtle + focus-ring",required:"when in error"},{name:"<label for={id}>",meaning:"Associates with the checkbox via id (the wrapper sees it)",required:"when label present"}],children:[e.jsx("div",{className:"cssapi-doc__stack",children:e.jsxs("div",{className:"cssapi-doc__row cssapi-doc__row--wide",children:[e.jsxs("div",{className:"st-checkbox-wrapper",children:[e.jsx("button",{type:"button",id:"doc-cb-1",role:"checkbox","aria-checked":!1,"data-state":"unchecked",className:"st-checkbox st-checkbox--md",children:e.jsx("span",{className:"st-checkbox__indicator",children:e.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z",fill:"currentColor"})})})}),e.jsx("label",{htmlFor:"doc-cb-1",className:"st-checkbox-wrapper__label",children:"Unchecked"})]}),e.jsxs("div",{className:"st-checkbox-wrapper",children:[e.jsx("button",{type:"button",id:"doc-cb-2",role:"checkbox","aria-checked":!0,"data-state":"checked",className:"st-checkbox st-checkbox--md",children:e.jsx("span",{className:"st-checkbox__indicator",children:e.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z",fill:"currentColor"})})})}),e.jsx("label",{htmlFor:"doc-cb-2",className:"st-checkbox-wrapper__label",children:"Checked"})]}),e.jsxs("div",{className:"st-checkbox-wrapper",children:[e.jsx("button",{type:"button",id:"doc-cb-3",role:"checkbox","aria-checked":"mixed","data-state":"indeterminate",className:"st-checkbox st-checkbox--md",children:e.jsx("span",{className:"st-checkbox__indicator",children:e.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M3 8H13",stroke:"currentColor",strokeWidth:"2.5"})})})}),e.jsx("label",{htmlFor:"doc-cb-3",className:"st-checkbox-wrapper__label",children:"Indeterminate"})]})]})}),e.jsx(s,{children:`<div class="st-checkbox-wrapper">
  <button type="button" id="terms"
          role="checkbox" aria-checked="false"
          data-state="unchecked"
          class="st-checkbox st-checkbox--md">
    <span class="st-checkbox__indicator">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="…" fill="currentColor" />
      </svg>
    </span>
  </button>
  <label for="terms" class="st-checkbox-wrapper__label">Accept terms</label>
</div>

<!-- Modifier vocabulary -->
<!-- size: --sm (16px) | --md (20px) | --lg (24px) -->

<!-- Sub-elements -->
<!-- .st-checkbox-wrapper          — outer flex container (label sizing derived via :has) -->
<!-- .st-checkbox-wrapper__label   — internal <label> -->
<!-- .st-checkbox__indicator       — absolute-positioned check / minus icon
                                      (hidden via CSS when [data-state="unchecked"]) -->

<!-- State attributes -->
<!-- [data-state]      — "checked" / "unchecked" / "indeterminate" -->
<!-- [aria-invalid]    — error styling -->
<!-- :disabled         — disabled tokens (wrapper :has() also picks this up) -->`})]}),e.jsxs(t,{id:"switch",title:"Switch — .st-switch + .st-switch-wrapper",intro:"On/off toggle. Same wrapper + block shape as Checkbox. The thumb's position and the check-icon's opacity are both driven by .st-switch[data-state='checked'] descendant selectors — no Tailwind 'group' utility on the JSX.",attributes:[{name:'role="switch"',meaning:"Radix Root provides the role",required:"always (Radix-provided)"},{name:"aria-checked",meaning:'"true" / "false" — switches are binary',required:"always"},{name:"data-state",meaning:'"checked" / "unchecked" — drives thumb position + check icon visibility',required:"always"},{name:'aria-invalid="true"',meaning:"Error state — CSS shifts border + bg + checked-state bg to error tokens",required:"when in error"}],children:[e.jsx("div",{className:"cssapi-doc__stack",children:e.jsxs("div",{className:"cssapi-doc__row cssapi-doc__row--wide",children:[e.jsxs("div",{className:"st-switch-wrapper",children:[e.jsxs("button",{type:"button",id:"doc-sw-1",role:"switch","aria-checked":!1,"data-state":"unchecked",className:"st-switch st-switch--md",children:[e.jsx("span",{className:"st-switch__check",children:e.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z",fill:"currentColor"})})}),e.jsx("span",{className:"st-switch__thumb","data-state":"unchecked"})]}),e.jsx("label",{htmlFor:"doc-sw-1",className:"st-switch-wrapper__label",children:"Off"})]}),e.jsxs("div",{className:"st-switch-wrapper",children:[e.jsxs("button",{type:"button",id:"doc-sw-2",role:"switch","aria-checked":!0,"data-state":"checked",className:"st-switch st-switch--md",children:[e.jsx("span",{className:"st-switch__check",children:e.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z",fill:"currentColor"})})}),e.jsx("span",{className:"st-switch__thumb","data-state":"checked"})]}),e.jsx("label",{htmlFor:"doc-sw-2",className:"st-switch-wrapper__label",children:"On"})]})]})}),e.jsx(s,{children:`<div class="st-switch-wrapper">
  <button type="button" id="notifications"
          role="switch" aria-checked="false"
          data-state="unchecked"
          class="st-switch st-switch--md">
    <span class="st-switch__check">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="…" fill="currentColor" />
      </svg>
    </span>
    <span class="st-switch__thumb" data-state="unchecked"></span>
  </button>
  <label for="notifications" class="st-switch-wrapper__label">Notifications</label>
</div>

<!-- Modifier vocabulary -->
<!-- size: --sm | --md | --lg (track width × height pairs) -->

<!-- Sub-elements -->
<!-- .st-switch-wrapper          — outer flex container (cursor: pointer) -->
<!-- .st-switch-wrapper__label   — internal <label> -->
<!-- .st-switch__thumb           — sliding circle (translate driven by parent [data-state]) -->
<!-- .st-switch__check           — checkmark icon (opacity driven by parent [data-state]) -->

<!-- State attributes -->
<!-- [data-state]      — "checked" / "unchecked" -->
<!-- [aria-invalid]    — error styling -->
<!-- :disabled         — disabled tokens -->`})]}),e.jsxs(t,{id:"input",title:"Input — .st-input-wrapper + .st-input",intro:"Single-line text input. Two blocks: the wrapper carries the flex row, border, background, focus ring, and the disabled / readOnly / error surfaces; the inner .st-input is just flex-1 with inherited font + color. State (aria-invalid / read-only / disabled) is read off the inner input via :has() — vanilla HTML consumers set the attributes on the <input> and the wrapper restyles automatically. Sub-elements .st-input__icon-left/right and .st-input__text-left/right inherit sizing from the wrapper size modifier.",attributes:[{name:"<label for={id}>",meaning:"Pairs with the inner input via id",required:"when externally labelled"},{name:'aria-invalid="true"',meaning:'Error state — wrapper recolors border + background via .st-input-wrapper:has(.st-input[aria-invalid="true"])',required:"when in error"},{name:"readonly",meaning:"Warm-tint readOnly surface; value still focusable",required:"when display-only"},{name:"disabled",meaning:"Disabled tokens; cursor flips to not-allowed",required:"when not interactable"},{name:"aria-describedby",meaning:"Links to description / error message id (Schatten <Field> auto-wires this)",required:"when description present"}],children:[e.jsxs("div",{className:"cssapi-doc__stack cssapi-doc__col-form",children:[e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{type:"text",placeholder:"Default",className:"st-input","aria-label":"doc-input-default"})}),e.jsxs("div",{className:"st-input-wrapper st-input-wrapper--md",children:[e.jsx("span",{className:"st-input__text-left",children:"$"}),e.jsx("input",{type:"number",placeholder:"0.00",className:"st-input","aria-label":"doc-input-amount"}),e.jsx("span",{className:"st-input__text-right",children:"USD"})]}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{type:"text",placeholder:"Error",className:"st-input","aria-invalid":"true","aria-label":"doc-input-error"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{type:"text",defaultValue:"Read-only",readOnly:!0,className:"st-input","aria-label":"doc-input-readonly"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{type:"text",defaultValue:"Disabled",disabled:!0,className:"st-input","aria-label":"doc-input-disabled"})})]}),e.jsx(s,{children:`<div class="st-input-wrapper st-input-wrapper--md">
  <input id="email" type="email" class="st-input" placeholder="you@example.com" />
</div>

<!-- With text adornments -->
<div class="st-input-wrapper st-input-wrapper--md">
  <span class="st-input__text-left">$</span>
  <input id="amount" type="number" class="st-input" placeholder="0.00" />
  <span class="st-input__text-right">USD</span>
</div>

<!-- With icon adornments — inline SVG carries the sub-element class -->
<div class="st-input-wrapper st-input-wrapper--md">
  <svg class="st-input__icon-left" aria-hidden="true">…</svg>
  <input id="search" type="search" class="st-input" placeholder="Search" />
</div>

<!-- Error state — wrapper restyles via :has() -->
<div class="st-input-wrapper st-input-wrapper--md">
  <input class="st-input" aria-invalid="true" />
</div>

<!-- Date input — JSX emits the .st-input--date derived modifier -->
<div class="st-input-wrapper st-input-wrapper--md">
  <input type="date" class="st-input st-input--date" />
</div>

<!-- Modifier vocabulary -->
<!-- wrapper size: --sm | --md | --lg (height + padding + gap + font) -->
<!-- input --date: presence-only; emit when type is one of
                   date / datetime-local / month / week / time -->

<!-- Sub-elements -->
<!-- .st-input-wrapper          outer flex container (focus ring via :has) -->
<!-- .st-input                  inner <input> (font/color inherit) -->
<!-- .st-input__icon-left/right leading/trailing decorative SVG -->
<!-- .st-input__text-left/right leading/trailing text span -->

<!-- State (all on the inner <input>) -->
<!-- [aria-invalid="true"] — error tokens -->
<!-- :read-only            — warm readOnly surface -->
<!-- :disabled             — disabled tokens (wins on source order) -->

<!-- NB: wrapper-click → focus-input is React-only ergonomics.
     Vanilla HTML consumers click the <input> itself. -->`})]}),e.jsxs(t,{id:"textarea",title:"Textarea — .st-textarea",intro:"Multi-line text input. Single-element primitive: all state (aria-invalid / read-only / disabled) lives on the same <textarea>, so precedence is plain CSS source order (default < error < readOnly < disabled). Same focus ring shape as Input / Checkbox / Switch.",attributes:[{name:"<label for={id}>",meaning:"Pairs with the textarea via id",required:"when externally labelled"},{name:'aria-invalid="true"',meaning:"Error state — border + bg-subtle + error focus ring",required:"when in error"},{name:"readonly",meaning:"Warm-tint readOnly surface",required:"when display-only"},{name:"disabled",meaning:"Disabled tokens; wins over readOnly + error on source order",required:"when not interactable"}],children:[e.jsxs("div",{className:"cssapi-doc__stack cssapi-doc__col-form",children:[e.jsx("textarea",{rows:3,placeholder:"Default",className:"st-textarea st-textarea--md","aria-label":"doc-textarea-default"}),e.jsx("textarea",{rows:2,placeholder:"Error",className:"st-textarea st-textarea--md","aria-invalid":"true","aria-label":"doc-textarea-error"}),e.jsx("textarea",{rows:2,defaultValue:"Read-only",readOnly:!0,className:"st-textarea st-textarea--md","aria-label":"doc-textarea-readonly"}),e.jsx("textarea",{rows:2,defaultValue:"Disabled",disabled:!0,className:"st-textarea st-textarea--md","aria-label":"doc-textarea-disabled"})]}),e.jsx(s,{children:`<textarea id="bio" rows="4" class="st-textarea st-textarea--md"
          placeholder="Tell us about yourself"></textarea>

<!-- Error -->
<textarea class="st-textarea st-textarea--md" aria-invalid="true"></textarea>

<!-- ReadOnly + error (readOnly wins visually via source order;
     aria-invalid still announces the error to AT) -->
<textarea class="st-textarea st-textarea--md" readonly aria-invalid="true">…</textarea>

<!-- Modifier vocabulary -->
<!-- size: --sm | --md | --lg (padding + font-size + line-height) -->

<!-- State (all on the <textarea> itself) -->
<!-- [aria-invalid="true"] — error tokens -->
<!-- :read-only            — warm readOnly surface -->
<!-- :disabled             — disabled tokens (wins on source order) -->`})]}),e.jsxs(t,{id:"radio",title:"Radio — .st-radio-group + .st-radio-wrapper + .st-radio",intro:"Single-select group. Three nested levels: the group root (Radix RadioGroup.Root), the per-item wrapper carrying the [radio] + <label> row, and the inner Radix RadioGroup.Item. Radix unmounts the indicator when unchecked, so vanilla HTML consumers omit the .st-radio__indicator element entirely for unchecked items (compare with Checkbox where the indicator is always in the tree).",attributes:[{name:'role="radiogroup" (on the group root)',meaning:"Radix RadioGroup.Root provides the role",required:"always (Radix-provided)"},{name:'role="radio"',meaning:"Radix RadioGroup.Item provides the role",required:"always (Radix-provided)"},{name:"aria-checked",meaning:'"true" or "false" — radios are binary within the group',required:"always"},{name:"data-state",meaning:'"checked" / "unchecked" — drives indicator presence',required:"always"},{name:'aria-invalid="true"',meaning:"Error state — border + bg-subtle + focus-ring re-colour",required:"when in error"},{name:"<label for={id}>",meaning:"Associates with the radio via id (the wrapper sees it)",required:"when label present"}],children:[e.jsx("div",{className:"cssapi-doc__stack",children:e.jsxs("div",{role:"radiogroup",className:"st-radio-group",children:[e.jsxs("div",{className:"st-radio-wrapper",children:[e.jsx("button",{type:"button",id:"doc-radio-a",role:"radio","aria-checked":!1,"data-state":"unchecked",className:"st-radio st-radio--md"}),e.jsx("label",{htmlFor:"doc-radio-a",className:"st-radio-wrapper__label",children:"Option A"})]}),e.jsxs("div",{className:"st-radio-wrapper",children:[e.jsx("button",{type:"button",id:"doc-radio-b",role:"radio","aria-checked":!0,"data-state":"checked",className:"st-radio st-radio--md",children:e.jsx("span",{className:"st-radio__indicator",children:e.jsx("span",{className:"st-radio__dot"})})}),e.jsx("label",{htmlFor:"doc-radio-b",className:"st-radio-wrapper__label",children:"Option B (selected)"})]}),e.jsxs("div",{className:"st-radio-wrapper",children:[e.jsx("button",{type:"button",id:"doc-radio-c",role:"radio","aria-checked":!1,"data-state":"unchecked",disabled:!0,className:"st-radio st-radio--md"}),e.jsx("label",{htmlFor:"doc-radio-c",className:"st-radio-wrapper__label",children:"Option C (disabled)"})]})]})}),e.jsx(s,{children:`<div role="radiogroup" class="st-radio-group">
  <div class="st-radio-wrapper">
    <button type="button" id="r-a"
            role="radio" aria-checked="false"
            data-state="unchecked"
            class="st-radio st-radio--md"></button>
    <label for="r-a" class="st-radio-wrapper__label">Option A</label>
  </div>
  <div class="st-radio-wrapper">
    <button type="button" id="r-b"
            role="radio" aria-checked="true"
            data-state="checked"
            class="st-radio st-radio--md">
      <!-- Radix unmounts this in unchecked state — omit it for unchecked items -->
      <span class="st-radio__indicator">
        <span class="st-radio__dot"></span>
      </span>
    </button>
    <label for="r-b" class="st-radio-wrapper__label">Option B</label>
  </div>
</div>

<!-- Modifier vocabulary -->
<!-- radio size: --sm (16px) | --md (20px) | --lg (24px)
                 (label sizing + dot sizing both derive via :has()) -->

<!-- Sub-elements -->
<!-- .st-radio-group           group root (flex-col gap-2; consumer
                                 className wins for horizontal layouts) -->
<!-- .st-radio-wrapper         per-item flex row -->
<!-- .st-radio-wrapper__label  internal <label> -->
<!-- .st-radio__indicator      absolute-positioned centring wrapper
                                 (omit when unchecked — Radix unmounts it) -->
<!-- .st-radio__dot            inner filled circle (background: currentColor) -->

<!-- State attributes -->
<!-- [data-state]      "checked" / "unchecked" — drives indicator presence -->
<!-- [aria-invalid]    error styling -->
<!-- :disabled         disabled tokens (wrapper :has() recolours label too) -->`})]}),e.jsxs(t,{id:"toast",title:"Toast — .st-toast + .st-toaster",intro:"Transient notification mounted into a portal viewport. The per-toast <li> uses Pattern B (tone × shape) via double-class selectors; the viewport <ol> takes a 6-value --{position} modifier. The CSS surface covers ONLY the static visual frame — enter/exit dissolve animation, swipe-to-dismiss handoff, auto-dismiss timing, and stacking order are all React + Radix concerns set via the toast() store and the [data-state] / [data-swipe] attributes Radix emits. Vanilla HTML consumers get the visual shell; they need their own JS for any dynamic behavior (or simply render static toasts as inline status messages).",attributes:[{name:"role",meaning:'"status" for polite announcements, "alert" for assertive',required:"required for vanilla — Radix sets this automatically for React"},{name:"aria-live",meaning:'"polite" (most toasts) or "assertive" (urgent — errors)',required:"required for vanilla — pair with role"},{name:"aria-label",meaning:"On the close button",required:"always"}],children:[e.jsx("p",{className:"st-text st-text--body st-text--sm st-text--muted mb-3",children:"The toaster renders fixed-positioned against the viewport, so an inline live preview here would visually overlap the rest of the reference page. See Components/lv1/Toast for the rendered behaviour; the snippet below is the markup contract."}),e.jsx(s,{children:`<ol class="st-toaster st-toaster--bottom-center">
  <li class="st-toast st-toast--success st-toast--subtle"
      role="status" aria-live="polite">
    <svg class="st-toast__icon" aria-hidden="true">…</svg>
    <div class="st-toast__content">
      <div class="st-toast__title">Saved</div>
      <div class="st-toast__description">…</div>
    </div>
    <button type="button"
            class="st-btn st-btn--tertiary st-btn--sm st-btn--icon-only"
            aria-label="Close">
      <svg aria-hidden="true">…</svg>
    </button>
  </li>
</ol>

<!-- Modifier vocabulary -->
<!-- .st-toast variant (tone, Pattern B axis 1):
       --neutral | --success | --error | --warning | --info -->
<!-- .st-toast appearance (shape, Pattern B axis 2):
       --subtle | --solid -->
<!-- .st-toaster position (one of six):
       --top-left   --top-center   --top-right
       --bottom-left --bottom-center --bottom-right -->

<!-- Sub-elements (direct children of .st-toast) -->
<!-- .st-toast__icon         variant icon (20px, shrink-0) -->
<!-- .st-toast__content      title + description column (min-w-0, flex-col) -->
<!-- .st-toast__title        bold heading -->
<!-- .st-toast__description  optional body; triggers icon-top alignment
                             via :has() when present -->

<!-- State attributes (set by Radix in the React path — vanilla
     HTML consumers do not get animation / swipe / auto-dismiss) -->
<!-- [data-state="open"|"closed"]   enter / exit dissolve animation -->
<!-- [data-swipe="move"|"cancel"|"end"]  swipe-to-dismiss handoff -->

<!-- Consumer-overridable timing (@theme-registered, shared scale) -->
<!-- swipe-cancel snap-back + swipe-end dissolve use --st-duration-slow
     (default 200ms). The dissolve enter/exit (320ms / 220ms) are
     deliberately OFF the shared scale and stay hardcoded. -->

<!-- The action / close button is rendered as a .st-btn chain directly
     inside .st-toast — no wrapper. Toast.tsx renders action OR close
     (exclusive); the content column's flex:1 pushes the button right. -->`})]}),e.jsxs(t,{id:"dialog",title:"Dialog — .st-dialog__*",intro:"Modal overlay + content panel mounted into a portal. Dialog has no .st-dialog block root: Radix's Root emits no DOM, and Overlay + Content are sibling portal children. The 8 sub-element classes below are the SSOT. Vanilla HTML consumers DO NOT get Radix's focus trap, ESC dismissal, or aria-* auto-wiring — those must be implemented separately if needed.",attributes:[{name:'role="dialog"',meaning:"Identifies the content panel as a dialog",required:"always (vanilla)"},{name:'aria-modal="true"',meaning:"Tells assistive tech the dialog blocks the rest of the page",required:"always (vanilla)"},{name:"aria-labelledby",meaning:"Points at the .st-dialog__title id",required:"always (vanilla)"},{name:"aria-describedby",meaning:"Points at the .st-dialog__description id (when present)",required:"when description is rendered"},{name:"aria-label",meaning:"On the close button",required:"always"}],children:[e.jsx("p",{className:"st-text st-text--body st-text--sm st-text--muted mb-3",children:"The dialog renders fixed-positioned at the viewport center. The static reference below shows the markup; in production the overlay covers the page and the content sits on top."}),e.jsx(s,{children:`<!-- DialogPrimitive.Root: no DOM output in React.
     For vanilla HTML, write the overlay + content as portal children. -->
<div class="st-dialog__overlay"></div>
<div class="st-dialog__content"
     role="dialog"
     aria-modal="true"
     aria-labelledby="dialog-title"
     aria-describedby="dialog-desc">
  <div class="st-dialog__header">
    <h2 id="dialog-title" class="st-dialog__title">Confirm action</h2>
    <p  id="dialog-desc"  class="st-dialog__description">
      Are you sure you want to proceed?
    </p>
  </div>
  <div class="st-dialog__body">
    <p>Optional body content. Long content scrolls inside the
       cap-height of the dialog frame.</p>
  </div>
  <div class="st-dialog__footer">
    <!-- Visual order in vanilla = DOM order. React side reverses for
         Radix focus reasons (Action gets initial focus); vanilla
         consumers just write left → right. -->
    <button type="button"
            class="st-btn st-btn--secondary st-btn--md">Cancel</button>
    <button type="button"
            class="st-btn st-btn--primary st-btn--md">Confirm</button>
  </div>
  <div class="st-dialog__close">
    <button type="button"
            class="st-btn st-btn--tertiary st-btn--sm st-btn--icon-only"
            aria-label="Close">
      <svg aria-hidden="true">…</svg>
    </button>
  </div>
</div>

<!-- Sub-elements -->
<!-- .st-dialog__overlay      fixed-inset dim layer (z-modal-backdrop) -->
<!-- .st-dialog__content      fixed center-stage panel (z-modal) -->
<!-- .st-dialog__header       title + description block; reserves
                              padding-right for the close button -->
<!-- .st-dialog__title        Radix Title (h2 by default) -->
<!-- .st-dialog__description  Radix Description (optional, but
                              required by aria-describedby) -->
<!-- .st-dialog__body         children scroll region — capped height,
                              overflow-y-auto inside the frame -->
<!-- .st-dialog__footer       flex container; column on mobile, row on
                              sm+; per-button order is consumer's call -->
<!-- .st-dialog__close        absolute-positioned wrapper for the
                              close ✕ button (top-right) -->

<!-- State attributes (set by Radix in the React path; vanilla HTML
     consumers do NOT get the enter / exit animation) -->
<!-- [data-state="open"|"closed"]  on overlay AND content — drives the
                                    fade-in / zoom-in / fade-out / zoom-out
                                    keyframes -->

<!-- Consumer-overridable timing (@theme-registered, shared scale) -->
<!-- open  uses --st-duration-slow   default 200ms -->
<!-- close uses --st-duration-base   default 150ms -->`})]}),e.jsxs(t,{id:"field",title:"Field — .st-field",intro:"Layout + a11y wrapper around a single form input. Stacks label / description / children / error vertically and pairs the external <label htmlFor> with the input id. Vanilla HTML consumers wire htmlFor / id / aria-describedby manually — the framework-agnostic CSS does not auto-wire ARIA.",attributes:[{name:"htmlFor (label) + id (input)",meaning:"Pairs the external label with the form control",required:"always when label is present"},{name:"aria-describedby",meaning:"Links the input to the description / error message id",required:"when description or error is present"},{name:'aria-invalid="true"',meaning:"Set on the inner input to drive the error visual (NOT on the .st-field root)",required:"when the value is invalid"},{name:'data-error="true"',meaning:"Observability hook on .st-field root — does NOT drive built-in visuals; consumers may attach external styling to it",required:"optional (mirror of aria-invalid for external observability)"},{name:'data-disabled="true"',meaning:"Set on .st-field root when the field is disabled",required:"optional"}],children:[e.jsxs("div",{className:"cssapi-doc__col-form cssapi-doc__stack",children:[e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"cssapi-field-email",className:"st-field__label",children:"Email"})}),e.jsx("label",{htmlFor:"cssapi-field-email",id:"cssapi-field-email-desc",className:"st-field__description",children:"We never share your email"}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"cssapi-field-email",type:"email",className:"st-input",defaultValue:"user@example.com","aria-describedby":"cssapi-field-email-desc"})})]}),e.jsxs("div",{className:"st-field","data-error":"true",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsxs("label",{htmlFor:"cssapi-field-name",className:"st-field__label",children:["Name",e.jsx("span",{className:"st-field__required-marker",children:"*"})]})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"cssapi-field-name",className:"st-input",required:!0,"aria-invalid":"true","aria-describedby":"cssapi-field-name-error"})}),e.jsx("p",{id:"cssapi-field-name-error",className:"st-field__error",children:"Name is required"})]})]}),e.jsx(s,{children:`<!-- Basic field (label + description + input) -->
<div class="st-field">
  <div class="st-field__label-row">
    <label for="email" class="st-field__label">Email</label>
  </div>
  <label for="email" id="email-desc" class="st-field__description">
    We never share your email
  </label>
  <div class="st-input-wrapper st-input-wrapper--md">
    <input id="email" type="email" class="st-input"
           aria-describedby="email-desc">
  </div>
</div>

<!-- Required + error -->
<div class="st-field" data-error="true">
  <div class="st-field__label-row">
    <label for="name" class="st-field__label">
      Name<span class="st-field__required-marker">*</span>
    </label>
  </div>
  <div class="st-input-wrapper st-input-wrapper--md">
    <input id="name" class="st-input" required
           aria-invalid="true" aria-describedby="name-error">
  </div>
  <p id="name-error" class="st-field__error">Name is required</p>
</div>

<!-- Modifier vocabulary (derived from props in React; emit alongside .st-field) -->
<!-- flex grow:    --grow | --grow-0 -->
<!-- flex shrink:  --shrink | --shrink-0 -->
<!-- flex basis:   inline style="flex-basis: 12rem" (CSS values are arbitrary) -->

<!-- Sub-elements -->
<!-- .st-field__label-row       label + optional tooltip info icon  -->
<!-- .st-field__label           the <label htmlFor> for the input    -->
<!-- .st-field__required-marker the * span next to the label         -->
<!-- .st-field__info            tooltip info icon (Lucide Info)      -->
<!-- .st-field__description     <label htmlFor> rendered as clickable
                                description (clicks focus the input) -->
<!-- .st-field__error           error <p> below the input            -->`})]}),e.jsxs(t,{id:"fieldset",title:"FieldSet — .st-fieldset",intro:"Group wrapper around multiple Field instances. Uses native <fieldset> + <legend> so disabling the fieldset cascades to every form control inside. Direction (column / row) and wrap layout live on the inner .st-fieldset__children wrapper.",attributes:[{name:"aria-describedby",meaning:"Links the fieldset to its description / error message ids",required:"when description or error is present"},{name:'aria-invalid="true"',meaning:"Set on the root <fieldset> when the group has an error",required:"when isError is true"},{name:"disabled",meaning:"Native <fieldset disabled> — browser cascades to every descendant form control automatically",required:"when the group is disabled"},{name:'data-error="true" / data-disabled="true"',meaning:"Observability hooks mirroring aria-invalid / disabled",required:"optional"}],children:[e.jsxs("fieldset",{className:"st-fieldset","aria-describedby":"cssapi-fs-desc",children:[e.jsx("legend",{className:"st-fieldset__legend",children:"Personal Info"}),e.jsx("p",{id:"cssapi-fs-desc",className:"st-fieldset__description",children:"Optional details"}),e.jsxs("div",{className:"st-fieldset__children",children:[e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"cssapi-fs-first",className:"st-field__label",children:"First name"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"cssapi-fs-first",className:"st-input"})})]}),e.jsxs("div",{className:"st-field",children:[e.jsx("div",{className:"st-field__label-row",children:e.jsx("label",{htmlFor:"cssapi-fs-last",className:"st-field__label",children:"Last name"})}),e.jsx("div",{className:"st-input-wrapper st-input-wrapper--md",children:e.jsx("input",{id:"cssapi-fs-last",className:"st-input"})})]})]})]}),e.jsx(s,{children:`<fieldset class="st-fieldset" aria-describedby="fs-desc">
  <legend class="st-fieldset__legend">Personal Info</legend>
  <p id="fs-desc" class="st-fieldset__description">Optional details</p>
  <div class="st-fieldset__children">
    <div class="st-field"> … </div>
    <div class="st-field"> … </div>
  </div>
  <!-- optional group-level error message -->
  <p id="fs-error" class="st-fieldset__error">Address is required</p>
</fieldset>

<!-- Modifier vocabulary (on .st-fieldset__children, not the root) -->
<!-- direction:  --row     (default = column, no modifier emitted) -->
<!-- wrap:       --wrap                                            -->

<!-- Structural CSS -->
<!-- The 1rem margin-top between header (legend or description) and
     children is driven by :has(> .st-fieldset__legend) /
     :has(> .st-fieldset__description) selectors — header presence is
     determined by the DOM shape itself. No "hasHeader" class is needed
     on the root. -->

<!-- Sub-elements -->
<!-- .st-fieldset__legend       the <legend> (HTML-mandated first child) -->
<!-- .st-fieldset__description  description <p> below the legend         -->
<!-- .st-fieldset__children     inner <div> flex container with the
                                actual fields                            -->
<!-- .st-fieldset__error        group-level error <p>                    -->`})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Reference (all 18 lv1 components)',
  render: () => <>
      <ChromeStyles />
      <div className="cssapi-doc">
        <h1 className="st-text st-text--heading st-text--2xl st-text--default cssapi-doc__title-spacing">
          CSS API — every lv1 component
        </h1>
        <p className="st-text st-text--body st-text--md st-text--muted cssapi-doc__intro-spacing--lg">
          The classes below are emitted by \`dist/schatten.css\`. Import it once and the markup
          samples render with no React and no consumer Tailwind setup.
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
          <div className="cssapi-doc__col-wide cssapi-doc__stack">
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
          <div className="cssapi-doc__stack cssapi-doc__stack--tight">
            <h2 className="st-text st-text--heading st-text--lg st-text--default">Heading lg</h2>
            <p className="st-text st-text--body st-text--md st-text--default">
              Body md, default color.
            </p>
            <p className="st-text st-text--body st-text--sm st-text--muted">
              Body sm, muted color.
            </p>
            <p className="st-text st-text--body st-text--md st-text--error">
              Body md, error color.
            </p>
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
          <div className="cssapi-doc__row">
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

        <Section id="spinner" title="Spinner — .st-spinner" intro="Loading indicator. Two modifier axes (variant × size) plus six sub-element classes spanning the two animation types (default: rotor / track / arc; ripple: dot / ripple-1 / ripple-2). SVG sizing is handled automatically via the .st-spinner > svg child selector — no Tailwind utility needed. Ripple timing is exposed via two consumer-overridable CSS variables (--st-spinner-duration / --st-spinner-ripple-delay); default-type rotation is hardcoded to 1s linear infinite." attributes={[{
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
          <div className="cssapi-doc__row cssapi-doc__row--wide">
            <div className="st-spinner st-spinner--default st-spinner--sm" role="status">
              <svg className="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="st-spinner__track" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className="st-spinner__arc" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="cssapi-doc__sr-only">Loading</span>
            </div>
            <div className="st-spinner st-spinner--default st-spinner--md" role="status">
              <svg className="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="st-spinner__track" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className="st-spinner__arc" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="cssapi-doc__sr-only">Loading</span>
            </div>
            <div className="st-spinner st-spinner--default st-spinner--lg" role="status">
              <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
                <circle className="st-spinner__dot" cx="36" cy="36" r="2.6" />
                <circle className="st-spinner__ripple-1" cx="36" cy="36" r="10" stroke="currentColor" strokeWidth="1.4" />
                <circle className="st-spinner__ripple-2" cx="36" cy="36" r="10" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="cssapi-doc__sr-only">Loading</span>
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
<!-- __ripple-2  : outer ripple wave (delayed by --st-spinner-ripple-delay) -->

<!-- Consumer-overridable timing (@theme-registered, ripple type only) -->
<!-- --st-spinner-duration        default 2.8s -->
<!-- --st-spinner-ripple-delay    default 1.1s -->

<!-- Default-type rotation is hardcoded 1s linear infinite. SVG sizing is
     handled by the .st-spinner > svg child selector — no Tailwind utility
     is required on the inner SVG. -->\`}</CodeBlock>
        </Section>

        <Section id="badge" title="Badge — .st-badge" intro="Status descriptor. Pattern B (tone × shape): five variants × three appearances, all written as double-class selectors so every combination shares the same specificity. Includes --icon-only modifier for square icon-only chips." attributes={[{
        name: 'role',
        meaning: 'Set role="img" on icon-only badges so the aria-label is exposed (a bare div is role generic and drops the name)',
        required: 'when --icon-only'
      }, {
        name: 'aria-label',
        meaning: 'Required for icon-only badges (no visible text)',
        required: 'when --icon-only'
      }]}>
          <div className="cssapi-doc__stack">
            <div className="cssapi-doc__row cssapi-doc__row--tight">
              <span className="cssapi-doc__col-narrow cssapi-doc__label">subtle</span>
              <div className="st-badge st-badge--neutral st-badge--subtle st-badge--md">
                neutral
              </div>
              <div className="st-badge st-badge--success st-badge--subtle st-badge--md">
                success
              </div>
              <div className="st-badge st-badge--error st-badge--subtle st-badge--md">error</div>
              <div className="st-badge st-badge--warning st-badge--subtle st-badge--md">
                warning
              </div>
              <div className="st-badge st-badge--info st-badge--subtle st-badge--md">info</div>
            </div>
            <div className="cssapi-doc__row cssapi-doc__row--tight">
              <span className="cssapi-doc__col-narrow cssapi-doc__label">solid</span>
              <div className="st-badge st-badge--neutral st-badge--solid st-badge--md">neutral</div>
              <div className="st-badge st-badge--success st-badge--solid st-badge--md">success</div>
              <div className="st-badge st-badge--error st-badge--solid st-badge--md">error</div>
              <div className="st-badge st-badge--warning st-badge--solid st-badge--md">warning</div>
              <div className="st-badge st-badge--info st-badge--solid st-badge--md">info</div>
            </div>
            <div className="cssapi-doc__row cssapi-doc__row--tight">
              <span className="cssapi-doc__col-narrow cssapi-doc__label">outline</span>
              <div className="st-badge st-badge--neutral st-badge--outline st-badge--md">
                neutral
              </div>
              <div className="st-badge st-badge--success st-badge--outline st-badge--md">
                success
              </div>
              <div className="st-badge st-badge--error st-badge--outline st-badge--md">error</div>
              <div className="st-badge st-badge--warning st-badge--outline st-badge--md">
                warning
              </div>
              <div className="st-badge st-badge--info st-badge--outline st-badge--md">info</div>
            </div>
          </div>
          <CodeBlock>{\`<!-- variant × appearance combination resolved by double-class selectors -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md">Saved</span>
<span class="st-badge st-badge--error st-badge--solid st-badge--md">Failed</span>
<span class="st-badge st-badge--info st-badge--outline st-badge--md">Beta</span>

<!-- Icon-only — square, padded; requires role="img" + aria-label -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md st-badge--icon-only"
      role="img" aria-label="Done">
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
          <div className="cssapi-doc__stack">
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

        <Section id="button" title="Button — .st-btn" intro="Action element. Pattern A (single-axis role): six variants × three sizes plus the --icon-only modifier. Loading state is signalled by aria-busy='true' alongside disabled; CSS routes the cursor to wait and fades the content / spinner overlay sub-elements. The link variant uses a flat DOM (no overlay / content wrapper) and inherits font-size by default so a <a class='st-btn st-btn--link'> embedded in a paragraph follows the surrounding text." attributes={[{
        name: 'type="button"',
        meaning: 'Avoid implicit form submission on <button>',
        required: 'when inside <form>'
      }, {
        name: 'aria-label',
        meaning: 'Required for icon-only buttons (no visible text)',
        required: 'when --icon-only'
      }, {
        name: 'aria-busy="true" + disabled',
        meaning: 'Loading state — CSS reveals the spinner overlay and switches cursor to wait',
        required: 'while loading'
      }, {
        name: 'aria-hidden on spinner overlay',
        meaning: 'Set on .st-btn__spinner-overlay when NOT loading (hide from a11y tree)',
        required: 'always (toggle inverse of loading)'
      }]}>
          <div className="cssapi-doc__stack">
            <div className="cssapi-doc__row cssapi-doc__row--tight">
              <button type="button" className="st-btn st-btn--primary st-btn--md">
                <span className="st-btn__spinner-overlay" aria-hidden="true" />
                <span className="st-btn__content">Primary</span>
              </button>
              <button type="button" className="st-btn st-btn--secondary st-btn--md">
                <span className="st-btn__spinner-overlay" aria-hidden="true" />
                <span className="st-btn__content">Secondary</span>
              </button>
              <button type="button" className="st-btn st-btn--tertiary st-btn--md">
                <span className="st-btn__spinner-overlay" aria-hidden="true" />
                <span className="st-btn__content">Tertiary</span>
              </button>
              <button type="button" className="st-btn st-btn--destructive st-btn--md">
                <span className="st-btn__spinner-overlay" aria-hidden="true" />
                <span className="st-btn__content">Destructive</span>
              </button>
            </div>
            <div className="cssapi-doc__row cssapi-doc__row--tight">
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
          <CodeBlock>{\`<!-- Non-link variants — keep the __spinner-overlay + __content structure -->
<button type="button" class="st-btn st-btn--primary st-btn--md">
  <span class="st-btn__spinner-overlay" aria-hidden="true">
    <!-- Spinner SVG, only visible when host has aria-busy="true" -->
  </span>
  <span class="st-btn__content">Save</span>
</button>

<!-- Loading — set both aria-busy and disabled; remove aria-hidden from overlay -->
<button type="button" class="st-btn st-btn--primary st-btn--md"
        aria-busy="true" disabled>
  <span class="st-btn__spinner-overlay">…spinner…</span>
  <span class="st-btn__content">Saving</span>
</button>

<!-- Icon-only — add --icon-only and aria-label -->
<button type="button" class="st-btn st-btn--primary st-btn--md st-btn--icon-only"
        aria-label="Add">
  <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
  <span class="st-btn__content"><svg aria-hidden="true">…</svg></span>
</button>

<!-- Link — flat DOM, no overlay / content wrapper. Size modifier only
     affects font-size; height + padding stay at zero / inherit. -->
<a href="/docs" class="st-btn st-btn--link st-btn--md">Docs</a>

<!-- Modifier vocabulary -->
<!-- variant   : --primary | --secondary | --tertiary | --inverted | --destructive | --link -->
<!-- size      : --sm | --md | --lg
                 (link uses these for font-size only; height/padding reset) -->
<!-- icon-only : --icon-only (presence-only; square aspect ratio) -->

<!-- Sub-elements (non-link variants only) -->
<!-- __spinner-overlay : absolute-positioned loading box (CSS shows on [aria-busy]) -->
<!-- __content         : inline-flex row holding icon + children (CSS fades on [aria-busy]) -->

<!-- State attributes -->
<!-- :disabled                       — standard disabled treatment -->
<!-- [aria-busy="true"]:disabled     — restores variant colour + cursor: wait -->\`}</CodeBlock>
        </Section>

        <Section id="checkbox" title="Checkbox — .st-checkbox + .st-checkbox-wrapper" intro="Two blocks: the wrapper carries the inline-flex layout for [checkbox] + <label>; the inner block is the Radix Root (the actual button). The label's font-size is derived from the inner checkbox's size modifier via :has(), so vanilla HTML consumers only set the size class on the checkbox itself." attributes={[{
        name: 'role="checkbox"',
        meaning: 'Schatten renders Radix Root which already provides the role',
        required: 'always (Radix-provided)'
      }, {
        name: 'aria-checked',
        meaning: '"true" / "false" / "mixed" (mixed for indeterminate)',
        required: 'always'
      }, {
        name: 'data-state',
        meaning: '"checked" / "unchecked" / "indeterminate" — drives the indicator visibility',
        required: 'always'
      }, {
        name: 'aria-invalid="true"',
        meaning: 'Error state — CSS shifts border + bg-subtle + focus-ring',
        required: 'when in error'
      }, {
        name: '<label for={id}>',
        meaning: 'Associates with the checkbox via id (the wrapper sees it)',
        required: 'when label present'
      }]}>
          <div className="cssapi-doc__stack">
            <div className="cssapi-doc__row cssapi-doc__row--wide">
              <div className="st-checkbox-wrapper">
                {/* biome-ignore lint/a11y/useSemanticElements: Mirrors Radix's
                 * Checkbox.Root output — vanilla HTML consumers replicate the
                 * <button role="checkbox"> shape, not <input type="checkbox">. */}
                <button type="button" id="doc-cb-1" role="checkbox" aria-checked={false} data-state="unchecked" className="st-checkbox st-checkbox--md">
                  <span className="st-checkbox__indicator">
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
                    </svg>
                  </span>
                </button>
                <label htmlFor="doc-cb-1" className="st-checkbox-wrapper__label">
                  Unchecked
                </label>
              </div>
              <div className="st-checkbox-wrapper">
                {/* biome-ignore lint/a11y/useSemanticElements: see preceding comment */}
                <button type="button" id="doc-cb-2" role="checkbox" aria-checked={true} data-state="checked" className="st-checkbox st-checkbox--md">
                  <span className="st-checkbox__indicator">
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
                    </svg>
                  </span>
                </button>
                <label htmlFor="doc-cb-2" className="st-checkbox-wrapper__label">
                  Checked
                </label>
              </div>
              <div className="st-checkbox-wrapper">
                {/* biome-ignore lint/a11y/useSemanticElements: see preceding comment */}
                <button type="button" id="doc-cb-3" role="checkbox" aria-checked="mixed" data-state="indeterminate" className="st-checkbox st-checkbox--md">
                  <span className="st-checkbox__indicator">
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8H13" stroke="currentColor" strokeWidth="2.5" />
                    </svg>
                  </span>
                </button>
                <label htmlFor="doc-cb-3" className="st-checkbox-wrapper__label">
                  Indeterminate
                </label>
              </div>
            </div>
          </div>
          <CodeBlock>{\`<div class="st-checkbox-wrapper">
  <button type="button" id="terms"
          role="checkbox" aria-checked="false"
          data-state="unchecked"
          class="st-checkbox st-checkbox--md">
    <span class="st-checkbox__indicator">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="…" fill="currentColor" />
      </svg>
    </span>
  </button>
  <label for="terms" class="st-checkbox-wrapper__label">Accept terms</label>
</div>

<!-- Modifier vocabulary -->
<!-- size: --sm (16px) | --md (20px) | --lg (24px) -->

<!-- Sub-elements -->
<!-- .st-checkbox-wrapper          — outer flex container (label sizing derived via :has) -->
<!-- .st-checkbox-wrapper__label   — internal <label> -->
<!-- .st-checkbox__indicator       — absolute-positioned check / minus icon
                                      (hidden via CSS when [data-state="unchecked"]) -->

<!-- State attributes -->
<!-- [data-state]      — "checked" / "unchecked" / "indeterminate" -->
<!-- [aria-invalid]    — error styling -->
<!-- :disabled         — disabled tokens (wrapper :has() also picks this up) -->\`}</CodeBlock>
        </Section>

        <Section id="switch" title="Switch — .st-switch + .st-switch-wrapper" intro="On/off toggle. Same wrapper + block shape as Checkbox. The thumb's position and the check-icon's opacity are both driven by .st-switch[data-state='checked'] descendant selectors — no Tailwind 'group' utility on the JSX." attributes={[{
        name: 'role="switch"',
        meaning: 'Radix Root provides the role',
        required: 'always (Radix-provided)'
      }, {
        name: 'aria-checked',
        meaning: '"true" / "false" — switches are binary',
        required: 'always'
      }, {
        name: 'data-state',
        meaning: '"checked" / "unchecked" — drives thumb position + check icon visibility',
        required: 'always'
      }, {
        name: 'aria-invalid="true"',
        meaning: 'Error state — CSS shifts border + bg + checked-state bg to error tokens',
        required: 'when in error'
      }]}>
          <div className="cssapi-doc__stack">
            <div className="cssapi-doc__row cssapi-doc__row--wide">
              <div className="st-switch-wrapper">
                <button type="button" id="doc-sw-1" role="switch" aria-checked={false} data-state="unchecked" className="st-switch st-switch--md">
                  <span className="st-switch__check">
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="st-switch__thumb" data-state="unchecked" />
                </button>
                <label htmlFor="doc-sw-1" className="st-switch-wrapper__label">
                  Off
                </label>
              </div>
              <div className="st-switch-wrapper">
                <button type="button" id="doc-sw-2" role="switch" aria-checked={true} data-state="checked" className="st-switch st-switch--md">
                  <span className="st-switch__check">
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="st-switch__thumb" data-state="checked" />
                </button>
                <label htmlFor="doc-sw-2" className="st-switch-wrapper__label">
                  On
                </label>
              </div>
            </div>
          </div>
          <CodeBlock>{\`<div class="st-switch-wrapper">
  <button type="button" id="notifications"
          role="switch" aria-checked="false"
          data-state="unchecked"
          class="st-switch st-switch--md">
    <span class="st-switch__check">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="…" fill="currentColor" />
      </svg>
    </span>
    <span class="st-switch__thumb" data-state="unchecked"></span>
  </button>
  <label for="notifications" class="st-switch-wrapper__label">Notifications</label>
</div>

<!-- Modifier vocabulary -->
<!-- size: --sm | --md | --lg (track width × height pairs) -->

<!-- Sub-elements -->
<!-- .st-switch-wrapper          — outer flex container (cursor: pointer) -->
<!-- .st-switch-wrapper__label   — internal <label> -->
<!-- .st-switch__thumb           — sliding circle (translate driven by parent [data-state]) -->
<!-- .st-switch__check           — checkmark icon (opacity driven by parent [data-state]) -->

<!-- State attributes -->
<!-- [data-state]      — "checked" / "unchecked" -->
<!-- [aria-invalid]    — error styling -->
<!-- :disabled         — disabled tokens -->\`}</CodeBlock>
        </Section>

        <Section id="input" title="Input — .st-input-wrapper + .st-input" intro="Single-line text input. Two blocks: the wrapper carries the flex row, border, background, focus ring, and the disabled / readOnly / error surfaces; the inner .st-input is just flex-1 with inherited font + color. State (aria-invalid / read-only / disabled) is read off the inner input via :has() — vanilla HTML consumers set the attributes on the <input> and the wrapper restyles automatically. Sub-elements .st-input__icon-left/right and .st-input__text-left/right inherit sizing from the wrapper size modifier." attributes={[{
        name: '<label for={id}>',
        meaning: 'Pairs with the inner input via id',
        required: 'when externally labelled'
      }, {
        name: 'aria-invalid="true"',
        meaning: 'Error state — wrapper recolors border + background via .st-input-wrapper:has(.st-input[aria-invalid="true"])',
        required: 'when in error'
      }, {
        name: 'readonly',
        meaning: 'Warm-tint readOnly surface; value still focusable',
        required: 'when display-only'
      }, {
        name: 'disabled',
        meaning: 'Disabled tokens; cursor flips to not-allowed',
        required: 'when not interactable'
      }, {
        name: 'aria-describedby',
        meaning: 'Links to description / error message id (Schatten <Field> auto-wires this)',
        required: 'when description present'
      }]}>
          <div className="cssapi-doc__stack cssapi-doc__col-form">
            <div className="st-input-wrapper st-input-wrapper--md">
              <input type="text" placeholder="Default" className="st-input" aria-label="doc-input-default" />
            </div>
            <div className="st-input-wrapper st-input-wrapper--md">
              <span className="st-input__text-left">$</span>
              <input type="number" placeholder="0.00" className="st-input" aria-label="doc-input-amount" />
              <span className="st-input__text-right">USD</span>
            </div>
            <div className="st-input-wrapper st-input-wrapper--md">
              <input type="text" placeholder="Error" className="st-input" aria-invalid="true" aria-label="doc-input-error" />
            </div>
            <div className="st-input-wrapper st-input-wrapper--md">
              <input type="text" defaultValue="Read-only" readOnly className="st-input" aria-label="doc-input-readonly" />
            </div>
            <div className="st-input-wrapper st-input-wrapper--md">
              <input type="text" defaultValue="Disabled" disabled className="st-input" aria-label="doc-input-disabled" />
            </div>
          </div>
          <CodeBlock>{\`<div class="st-input-wrapper st-input-wrapper--md">
  <input id="email" type="email" class="st-input" placeholder="you@example.com" />
</div>

<!-- With text adornments -->
<div class="st-input-wrapper st-input-wrapper--md">
  <span class="st-input__text-left">$</span>
  <input id="amount" type="number" class="st-input" placeholder="0.00" />
  <span class="st-input__text-right">USD</span>
</div>

<!-- With icon adornments — inline SVG carries the sub-element class -->
<div class="st-input-wrapper st-input-wrapper--md">
  <svg class="st-input__icon-left" aria-hidden="true">…</svg>
  <input id="search" type="search" class="st-input" placeholder="Search" />
</div>

<!-- Error state — wrapper restyles via :has() -->
<div class="st-input-wrapper st-input-wrapper--md">
  <input class="st-input" aria-invalid="true" />
</div>

<!-- Date input — JSX emits the .st-input--date derived modifier -->
<div class="st-input-wrapper st-input-wrapper--md">
  <input type="date" class="st-input st-input--date" />
</div>

<!-- Modifier vocabulary -->
<!-- wrapper size: --sm | --md | --lg (height + padding + gap + font) -->
<!-- input --date: presence-only; emit when type is one of
                   date / datetime-local / month / week / time -->

<!-- Sub-elements -->
<!-- .st-input-wrapper          outer flex container (focus ring via :has) -->
<!-- .st-input                  inner <input> (font/color inherit) -->
<!-- .st-input__icon-left/right leading/trailing decorative SVG -->
<!-- .st-input__text-left/right leading/trailing text span -->

<!-- State (all on the inner <input>) -->
<!-- [aria-invalid="true"] — error tokens -->
<!-- :read-only            — warm readOnly surface -->
<!-- :disabled             — disabled tokens (wins on source order) -->

<!-- NB: wrapper-click → focus-input is React-only ergonomics.
     Vanilla HTML consumers click the <input> itself. -->\`}</CodeBlock>
        </Section>

        <Section id="textarea" title="Textarea — .st-textarea" intro="Multi-line text input. Single-element primitive: all state (aria-invalid / read-only / disabled) lives on the same <textarea>, so precedence is plain CSS source order (default < error < readOnly < disabled). Same focus ring shape as Input / Checkbox / Switch." attributes={[{
        name: '<label for={id}>',
        meaning: 'Pairs with the textarea via id',
        required: 'when externally labelled'
      }, {
        name: 'aria-invalid="true"',
        meaning: 'Error state — border + bg-subtle + error focus ring',
        required: 'when in error'
      }, {
        name: 'readonly',
        meaning: 'Warm-tint readOnly surface',
        required: 'when display-only'
      }, {
        name: 'disabled',
        meaning: 'Disabled tokens; wins over readOnly + error on source order',
        required: 'when not interactable'
      }]}>
          <div className="cssapi-doc__stack cssapi-doc__col-form">
            <textarea rows={3} placeholder="Default" className="st-textarea st-textarea--md" aria-label="doc-textarea-default" />
            <textarea rows={2} placeholder="Error" className="st-textarea st-textarea--md" aria-invalid="true" aria-label="doc-textarea-error" />
            <textarea rows={2} defaultValue="Read-only" readOnly className="st-textarea st-textarea--md" aria-label="doc-textarea-readonly" />
            <textarea rows={2} defaultValue="Disabled" disabled className="st-textarea st-textarea--md" aria-label="doc-textarea-disabled" />
          </div>
          <CodeBlock>{\`<textarea id="bio" rows="4" class="st-textarea st-textarea--md"
          placeholder="Tell us about yourself"></textarea>

<!-- Error -->
<textarea class="st-textarea st-textarea--md" aria-invalid="true"></textarea>

<!-- ReadOnly + error (readOnly wins visually via source order;
     aria-invalid still announces the error to AT) -->
<textarea class="st-textarea st-textarea--md" readonly aria-invalid="true">…</textarea>

<!-- Modifier vocabulary -->
<!-- size: --sm | --md | --lg (padding + font-size + line-height) -->

<!-- State (all on the <textarea> itself) -->
<!-- [aria-invalid="true"] — error tokens -->
<!-- :read-only            — warm readOnly surface -->
<!-- :disabled             — disabled tokens (wins on source order) -->\`}</CodeBlock>
        </Section>

        <Section id="radio" title="Radio — .st-radio-group + .st-radio-wrapper + .st-radio" intro="Single-select group. Three nested levels: the group root (Radix RadioGroup.Root), the per-item wrapper carrying the [radio] + <label> row, and the inner Radix RadioGroup.Item. Radix unmounts the indicator when unchecked, so vanilla HTML consumers omit the .st-radio__indicator element entirely for unchecked items (compare with Checkbox where the indicator is always in the tree)." attributes={[{
        name: 'role="radiogroup" (on the group root)',
        meaning: 'Radix RadioGroup.Root provides the role',
        required: 'always (Radix-provided)'
      }, {
        name: 'role="radio"',
        meaning: 'Radix RadioGroup.Item provides the role',
        required: 'always (Radix-provided)'
      }, {
        name: 'aria-checked',
        meaning: '"true" or "false" — radios are binary within the group',
        required: 'always'
      }, {
        name: 'data-state',
        meaning: '"checked" / "unchecked" — drives indicator presence',
        required: 'always'
      }, {
        name: 'aria-invalid="true"',
        meaning: 'Error state — border + bg-subtle + focus-ring re-colour',
        required: 'when in error'
      }, {
        name: '<label for={id}>',
        meaning: 'Associates with the radio via id (the wrapper sees it)',
        required: 'when label present'
      }]}>
          <div className="cssapi-doc__stack">
            <div role="radiogroup" className="st-radio-group">
              <div className="st-radio-wrapper">
                {/* biome-ignore lint/a11y/useSemanticElements: Mirrors Radix's
                 * RadioGroup.Item output — vanilla HTML consumers replicate the
                 * <button role="radio"> shape, not <input type="radio">. */}
                <button type="button" id="doc-radio-a" role="radio" aria-checked={false} data-state="unchecked" className="st-radio st-radio--md" />
                <label htmlFor="doc-radio-a" className="st-radio-wrapper__label">
                  Option A
                </label>
              </div>
              <div className="st-radio-wrapper">
                {/* biome-ignore lint/a11y/useSemanticElements: see preceding comment */}
                <button type="button" id="doc-radio-b" role="radio" aria-checked={true} data-state="checked" className="st-radio st-radio--md">
                  <span className="st-radio__indicator">
                    <span className="st-radio__dot" />
                  </span>
                </button>
                <label htmlFor="doc-radio-b" className="st-radio-wrapper__label">
                  Option B (selected)
                </label>
              </div>
              <div className="st-radio-wrapper">
                {/* biome-ignore lint/a11y/useSemanticElements: see preceding comment */}
                <button type="button" id="doc-radio-c" role="radio" aria-checked={false} data-state="unchecked" disabled className="st-radio st-radio--md" />
                <label htmlFor="doc-radio-c" className="st-radio-wrapper__label">
                  Option C (disabled)
                </label>
              </div>
            </div>
          </div>
          <CodeBlock>{\`<div role="radiogroup" class="st-radio-group">
  <div class="st-radio-wrapper">
    <button type="button" id="r-a"
            role="radio" aria-checked="false"
            data-state="unchecked"
            class="st-radio st-radio--md"></button>
    <label for="r-a" class="st-radio-wrapper__label">Option A</label>
  </div>
  <div class="st-radio-wrapper">
    <button type="button" id="r-b"
            role="radio" aria-checked="true"
            data-state="checked"
            class="st-radio st-radio--md">
      <!-- Radix unmounts this in unchecked state — omit it for unchecked items -->
      <span class="st-radio__indicator">
        <span class="st-radio__dot"></span>
      </span>
    </button>
    <label for="r-b" class="st-radio-wrapper__label">Option B</label>
  </div>
</div>

<!-- Modifier vocabulary -->
<!-- radio size: --sm (16px) | --md (20px) | --lg (24px)
                 (label sizing + dot sizing both derive via :has()) -->

<!-- Sub-elements -->
<!-- .st-radio-group           group root (flex-col gap-2; consumer
                                 className wins for horizontal layouts) -->
<!-- .st-radio-wrapper         per-item flex row -->
<!-- .st-radio-wrapper__label  internal <label> -->
<!-- .st-radio__indicator      absolute-positioned centring wrapper
                                 (omit when unchecked — Radix unmounts it) -->
<!-- .st-radio__dot            inner filled circle (background: currentColor) -->

<!-- State attributes -->
<!-- [data-state]      "checked" / "unchecked" — drives indicator presence -->
<!-- [aria-invalid]    error styling -->
<!-- :disabled         disabled tokens (wrapper :has() recolours label too) -->\`}</CodeBlock>
        </Section>

        <Section id="toast" title="Toast — .st-toast + .st-toaster" intro="Transient notification mounted into a portal viewport. The per-toast <li> uses Pattern B (tone × shape) via double-class selectors; the viewport <ol> takes a 6-value --{position} modifier. The CSS surface covers ONLY the static visual frame — enter/exit dissolve animation, swipe-to-dismiss handoff, auto-dismiss timing, and stacking order are all React + Radix concerns set via the toast() store and the [data-state] / [data-swipe] attributes Radix emits. Vanilla HTML consumers get the visual shell; they need their own JS for any dynamic behavior (or simply render static toasts as inline status messages)." attributes={[{
        name: 'role',
        meaning: '"status" for polite announcements, "alert" for assertive',
        required: 'required for vanilla — Radix sets this automatically for React'
      }, {
        name: 'aria-live',
        meaning: '"polite" (most toasts) or "assertive" (urgent — errors)',
        required: 'required for vanilla — pair with role'
      }, {
        name: 'aria-label',
        meaning: 'On the close button',
        required: 'always'
      }]}>
          <p className="st-text st-text--body st-text--sm st-text--muted mb-3">
            The toaster renders fixed-positioned against the viewport, so an inline live preview
            here would visually overlap the rest of the reference page. See Components/lv1/Toast for
            the rendered behaviour; the snippet below is the markup contract.
          </p>
          <CodeBlock>{\`<ol class="st-toaster st-toaster--bottom-center">
  <li class="st-toast st-toast--success st-toast--subtle"
      role="status" aria-live="polite">
    <svg class="st-toast__icon" aria-hidden="true">…</svg>
    <div class="st-toast__content">
      <div class="st-toast__title">Saved</div>
      <div class="st-toast__description">…</div>
    </div>
    <button type="button"
            class="st-btn st-btn--tertiary st-btn--sm st-btn--icon-only"
            aria-label="Close">
      <svg aria-hidden="true">…</svg>
    </button>
  </li>
</ol>

<!-- Modifier vocabulary -->
<!-- .st-toast variant (tone, Pattern B axis 1):
       --neutral | --success | --error | --warning | --info -->
<!-- .st-toast appearance (shape, Pattern B axis 2):
       --subtle | --solid -->
<!-- .st-toaster position (one of six):
       --top-left   --top-center   --top-right
       --bottom-left --bottom-center --bottom-right -->

<!-- Sub-elements (direct children of .st-toast) -->
<!-- .st-toast__icon         variant icon (20px, shrink-0) -->
<!-- .st-toast__content      title + description column (min-w-0, flex-col) -->
<!-- .st-toast__title        bold heading -->
<!-- .st-toast__description  optional body; triggers icon-top alignment
                             via :has() when present -->

<!-- State attributes (set by Radix in the React path — vanilla
     HTML consumers do not get animation / swipe / auto-dismiss) -->
<!-- [data-state="open"|"closed"]   enter / exit dissolve animation -->
<!-- [data-swipe="move"|"cancel"|"end"]  swipe-to-dismiss handoff -->

<!-- Consumer-overridable timing (@theme-registered, shared scale) -->
<!-- swipe-cancel snap-back + swipe-end dissolve use --st-duration-slow
     (default 200ms). The dissolve enter/exit (320ms / 220ms) are
     deliberately OFF the shared scale and stay hardcoded. -->

<!-- The action / close button is rendered as a .st-btn chain directly
     inside .st-toast — no wrapper. Toast.tsx renders action OR close
     (exclusive); the content column's flex:1 pushes the button right. -->\`}</CodeBlock>
        </Section>

        <Section id="dialog" title="Dialog — .st-dialog__*" intro="Modal overlay + content panel mounted into a portal. Dialog has no .st-dialog block root: Radix's Root emits no DOM, and Overlay + Content are sibling portal children. The 8 sub-element classes below are the SSOT. Vanilla HTML consumers DO NOT get Radix's focus trap, ESC dismissal, or aria-* auto-wiring — those must be implemented separately if needed." attributes={[{
        name: 'role="dialog"',
        meaning: 'Identifies the content panel as a dialog',
        required: 'always (vanilla)'
      }, {
        name: 'aria-modal="true"',
        meaning: 'Tells assistive tech the dialog blocks the rest of the page',
        required: 'always (vanilla)'
      }, {
        name: 'aria-labelledby',
        meaning: 'Points at the .st-dialog__title id',
        required: 'always (vanilla)'
      }, {
        name: 'aria-describedby',
        meaning: 'Points at the .st-dialog__description id (when present)',
        required: 'when description is rendered'
      }, {
        name: 'aria-label',
        meaning: 'On the close button',
        required: 'always'
      }]}>
          <p className="st-text st-text--body st-text--sm st-text--muted mb-3">
            The dialog renders fixed-positioned at the viewport center. The static reference below
            shows the markup; in production the overlay covers the page and the content sits on top.
          </p>
          <CodeBlock>{\`<!-- DialogPrimitive.Root: no DOM output in React.
     For vanilla HTML, write the overlay + content as portal children. -->
<div class="st-dialog__overlay"></div>
<div class="st-dialog__content"
     role="dialog"
     aria-modal="true"
     aria-labelledby="dialog-title"
     aria-describedby="dialog-desc">
  <div class="st-dialog__header">
    <h2 id="dialog-title" class="st-dialog__title">Confirm action</h2>
    <p  id="dialog-desc"  class="st-dialog__description">
      Are you sure you want to proceed?
    </p>
  </div>
  <div class="st-dialog__body">
    <p>Optional body content. Long content scrolls inside the
       cap-height of the dialog frame.</p>
  </div>
  <div class="st-dialog__footer">
    <!-- Visual order in vanilla = DOM order. React side reverses for
         Radix focus reasons (Action gets initial focus); vanilla
         consumers just write left → right. -->
    <button type="button"
            class="st-btn st-btn--secondary st-btn--md">Cancel</button>
    <button type="button"
            class="st-btn st-btn--primary st-btn--md">Confirm</button>
  </div>
  <div class="st-dialog__close">
    <button type="button"
            class="st-btn st-btn--tertiary st-btn--sm st-btn--icon-only"
            aria-label="Close">
      <svg aria-hidden="true">…</svg>
    </button>
  </div>
</div>

<!-- Sub-elements -->
<!-- .st-dialog__overlay      fixed-inset dim layer (z-modal-backdrop) -->
<!-- .st-dialog__content      fixed center-stage panel (z-modal) -->
<!-- .st-dialog__header       title + description block; reserves
                              padding-right for the close button -->
<!-- .st-dialog__title        Radix Title (h2 by default) -->
<!-- .st-dialog__description  Radix Description (optional, but
                              required by aria-describedby) -->
<!-- .st-dialog__body         children scroll region — capped height,
                              overflow-y-auto inside the frame -->
<!-- .st-dialog__footer       flex container; column on mobile, row on
                              sm+; per-button order is consumer's call -->
<!-- .st-dialog__close        absolute-positioned wrapper for the
                              close ✕ button (top-right) -->

<!-- State attributes (set by Radix in the React path; vanilla HTML
     consumers do NOT get the enter / exit animation) -->
<!-- [data-state="open"|"closed"]  on overlay AND content — drives the
                                    fade-in / zoom-in / fade-out / zoom-out
                                    keyframes -->

<!-- Consumer-overridable timing (@theme-registered, shared scale) -->
<!-- open  uses --st-duration-slow   default 200ms -->
<!-- close uses --st-duration-base   default 150ms -->\`}</CodeBlock>
        </Section>

        <Section id="field" title="Field — .st-field" intro="Layout + a11y wrapper around a single form input. Stacks label / description / children / error vertically and pairs the external <label htmlFor> with the input id. Vanilla HTML consumers wire htmlFor / id / aria-describedby manually — the framework-agnostic CSS does not auto-wire ARIA." attributes={[{
        name: 'htmlFor (label) + id (input)',
        meaning: 'Pairs the external label with the form control',
        required: 'always when label is present'
      }, {
        name: 'aria-describedby',
        meaning: 'Links the input to the description / error message id',
        required: 'when description or error is present'
      }, {
        name: 'aria-invalid="true"',
        meaning: 'Set on the inner input to drive the error visual (NOT on the .st-field root)',
        required: 'when the value is invalid'
      }, {
        name: 'data-error="true"',
        meaning: 'Observability hook on .st-field root — does NOT drive built-in visuals; consumers may attach external styling to it',
        required: 'optional (mirror of aria-invalid for external observability)'
      }, {
        name: 'data-disabled="true"',
        meaning: 'Set on .st-field root when the field is disabled',
        required: 'optional'
      }]}>
          <div className="cssapi-doc__col-form cssapi-doc__stack">
            <div className="st-field">
              <div className="st-field__label-row">
                <label htmlFor="cssapi-field-email" className="st-field__label">
                  Email
                </label>
              </div>
              <label htmlFor="cssapi-field-email" id="cssapi-field-email-desc" className="st-field__description">
                We never share your email
              </label>
              <div className="st-input-wrapper st-input-wrapper--md">
                <input id="cssapi-field-email" type="email" className="st-input" defaultValue="user@example.com" aria-describedby="cssapi-field-email-desc" />
              </div>
            </div>
            <div className="st-field" data-error="true">
              <div className="st-field__label-row">
                <label htmlFor="cssapi-field-name" className="st-field__label">
                  Name<span className="st-field__required-marker">*</span>
                </label>
              </div>
              <div className="st-input-wrapper st-input-wrapper--md">
                <input id="cssapi-field-name" className="st-input" required aria-invalid="true" aria-describedby="cssapi-field-name-error" />
              </div>
              <p id="cssapi-field-name-error" className="st-field__error">
                Name is required
              </p>
            </div>
          </div>
          <CodeBlock>{\`<!-- Basic field (label + description + input) -->
<div class="st-field">
  <div class="st-field__label-row">
    <label for="email" class="st-field__label">Email</label>
  </div>
  <label for="email" id="email-desc" class="st-field__description">
    We never share your email
  </label>
  <div class="st-input-wrapper st-input-wrapper--md">
    <input id="email" type="email" class="st-input"
           aria-describedby="email-desc">
  </div>
</div>

<!-- Required + error -->
<div class="st-field" data-error="true">
  <div class="st-field__label-row">
    <label for="name" class="st-field__label">
      Name<span class="st-field__required-marker">*</span>
    </label>
  </div>
  <div class="st-input-wrapper st-input-wrapper--md">
    <input id="name" class="st-input" required
           aria-invalid="true" aria-describedby="name-error">
  </div>
  <p id="name-error" class="st-field__error">Name is required</p>
</div>

<!-- Modifier vocabulary (derived from props in React; emit alongside .st-field) -->
<!-- flex grow:    --grow | --grow-0 -->
<!-- flex shrink:  --shrink | --shrink-0 -->
<!-- flex basis:   inline style="flex-basis: 12rem" (CSS values are arbitrary) -->

<!-- Sub-elements -->
<!-- .st-field__label-row       label + optional tooltip info icon  -->
<!-- .st-field__label           the <label htmlFor> for the input    -->
<!-- .st-field__required-marker the * span next to the label         -->
<!-- .st-field__info            tooltip info icon (Lucide Info)      -->
<!-- .st-field__description     <label htmlFor> rendered as clickable
                                description (clicks focus the input) -->
<!-- .st-field__error           error <p> below the input            -->\`}</CodeBlock>
        </Section>

        <Section id="fieldset" title="FieldSet — .st-fieldset" intro="Group wrapper around multiple Field instances. Uses native <fieldset> + <legend> so disabling the fieldset cascades to every form control inside. Direction (column / row) and wrap layout live on the inner .st-fieldset__children wrapper." attributes={[{
        name: 'aria-describedby',
        meaning: 'Links the fieldset to its description / error message ids',
        required: 'when description or error is present'
      }, {
        name: 'aria-invalid="true"',
        meaning: 'Set on the root <fieldset> when the group has an error',
        required: 'when isError is true'
      }, {
        name: 'disabled',
        meaning: 'Native <fieldset disabled> — browser cascades to every descendant form control automatically',
        required: 'when the group is disabled'
      }, {
        name: 'data-error="true" / data-disabled="true"',
        meaning: 'Observability hooks mirroring aria-invalid / disabled',
        required: 'optional'
      }]}>
          <fieldset className="st-fieldset" aria-describedby="cssapi-fs-desc">
            <legend className="st-fieldset__legend">Personal Info</legend>
            <p id="cssapi-fs-desc" className="st-fieldset__description">
              Optional details
            </p>
            <div className="st-fieldset__children">
              <div className="st-field">
                <div className="st-field__label-row">
                  <label htmlFor="cssapi-fs-first" className="st-field__label">
                    First name
                  </label>
                </div>
                <div className="st-input-wrapper st-input-wrapper--md">
                  <input id="cssapi-fs-first" className="st-input" />
                </div>
              </div>
              <div className="st-field">
                <div className="st-field__label-row">
                  <label htmlFor="cssapi-fs-last" className="st-field__label">
                    Last name
                  </label>
                </div>
                <div className="st-input-wrapper st-input-wrapper--md">
                  <input id="cssapi-fs-last" className="st-input" />
                </div>
              </div>
            </div>
          </fieldset>
          <CodeBlock>{\`<fieldset class="st-fieldset" aria-describedby="fs-desc">
  <legend class="st-fieldset__legend">Personal Info</legend>
  <p id="fs-desc" class="st-fieldset__description">Optional details</p>
  <div class="st-fieldset__children">
    <div class="st-field"> … </div>
    <div class="st-field"> … </div>
  </div>
  <!-- optional group-level error message -->
  <p id="fs-error" class="st-fieldset__error">Address is required</p>
</fieldset>

<!-- Modifier vocabulary (on .st-fieldset__children, not the root) -->
<!-- direction:  --row     (default = column, no modifier emitted) -->
<!-- wrap:       --wrap                                            -->

<!-- Structural CSS -->
<!-- The 1rem margin-top between header (legend or description) and
     children is driven by :has(> .st-fieldset__legend) /
     :has(> .st-fieldset__description) selectors — header presence is
     determined by the DOM shape itself. No "hasHeader" class is needed
     on the root. -->

<!-- Sub-elements -->
<!-- .st-fieldset__legend       the <legend> (HTML-mandated first child) -->
<!-- .st-fieldset__description  description <p> below the legend         -->
<!-- .st-fieldset__children     inner <div> flex container with the
                                actual fields                            -->
<!-- .st-fieldset__error        group-level error <p>                    -->\`}</CodeBlock>
        </Section>
      </div>
    </>
}`,...i.parameters?.docs?.source}}};const M=["Reference"];export{i as Reference,M as __namedExportsOrder,T as default};
