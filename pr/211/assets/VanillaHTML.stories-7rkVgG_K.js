import{j as e}from"./iframe-CqX8WWbV.js";import{C as g}from"./Callout-jUivems3.js";import{B as i}from"./Badge-D5-Q8MPW.js";import"./preload-helper-BChGx1N7.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./index-CF2LzMLE.js";import"./chevron-up-CGpKJT6z.js";import"./Button-owlhVvou.js";import"./index-Cn5HvFhX.js";import"./index-RMMnwkWv.js";import"./Spinner-DLvTg6GW.js";const V={title:"Getting Started/Vanilla HTML",parameters:{layout:"fullscreen"}},n=({children:r})=>e.jsx("h2",{className:"text-xl font-bold text-foreground mt-12 mb-3",children:r}),l=({children:r})=>e.jsx("h3",{className:"text-base font-semibold text-foreground mt-6 mb-2",children:r}),s=({children:r})=>e.jsx("p",{className:"text-sm text-foreground-muted leading-relaxed mb-3",children:r}),t=({children:r})=>e.jsx("code",{className:"px-1 py-0.5 text-xs font-mono bg-surface border border-border rounded",children:r}),o=({children:r})=>e.jsx("pre",{className:"bg-surface border border-border rounded-md p-4 text-xs font-mono overflow-x-auto leading-relaxed text-foreground",children:e.jsx("code",{children:r})}),a=({className:r,status:u,description:p})=>e.jsxs("div",{className:"grid grid-cols-[1fr_auto_2fr] items-center gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsx("code",{className:"text-xs font-mono text-foreground",children:r}),u==="available"?e.jsx(i,{variant:"success",appearance:"subtle",children:"Available"}):e.jsx(i,{variant:"info",appearance:"outline",children:"Coming in v1.0"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:p})]}),b=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Schatten — Vanilla HTML</title>

    <!-- jsDelivr (recommended) -->
    <link
      href="https://cdn.jsdelivr.net/npm/@yasmro/schatten/dist/schatten.css"
      rel="stylesheet"
    />

    <!-- or unpkg -->
    <!--
    <link
      href="https://unpkg.com/@yasmro/schatten/dist/schatten.css"
      rel="stylesheet"
    />
    -->
  </head>
  <body>
    <button class="btn btn--primary">Click me</button>
  </body>
</html>`,x=`<link href="/path/to/node_modules/@yasmro/schatten/dist/schatten.css" rel="stylesheet" />

<!-- or import from a JS entry your bundler picks up -->
<!-- import '@yasmro/schatten/schatten.css' -->`,f=`<style>
  /* Tokens (CSS custom properties) are available today on :root */
  .my-button {
    background-color: var(--color-solid);
    color: var(--color-solid-foreground);
    padding: 0.5rem 1.25rem;
    border-radius: var(--radius-md, 0.375rem);
  }
</style>

<button class="my-button">Available today</button>`,y=`<!-- 1. Import the CSS bundle (no JS runtime cost) -->
<link href="https://cdn.jsdelivr.net/npm/@yasmro/schatten/dist/schatten.css" rel="stylesheet" />

<!-- 2. Import the variants module from any framework with a JS toolchain. -->
<!-- Example: Astro / Vue / Svelte                                        -->
<script type="module">
  import { buttonVariants } from 'https://cdn.jsdelivr.net/npm/@yasmro/schatten/dist/variants/index.js'

  document.querySelectorAll('button[data-schatten="primary"]').forEach((el) => {
    el.className = buttonVariants({ variant: 'primary' })
  })
<\/script>

<button data-schatten="primary">Hydrated by CVA</button>`,v=`<!-- Activate a seasonal palette via the data-theme attribute -->
<html data-theme="season--spring-early">
  <!-- ... -->
</html>`,j=`<!-- Light mode — :root default -->
<html>...</html>

<!-- Dark mode — toggle the .dark class on <html> -->
<html class="dark">...</html>

<!-- Or respect the user's OS preference (handled automatically) -->`,d={name:"Vanilla HTML",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-foreground mb-3 tracking-tight",children:"Vanilla HTML"}),e.jsx("p",{className:"text-base text-foreground-muted leading-relaxed",children:"Use Schatten in plain HTML, Astro, Vue, Svelte, or any project without a React runtime. Tokens and the base reset ship today; the full class API ships in v1.0.0."})]}),e.jsxs(g,{variant:"warning",title:"Heads up — v0.7.0 status",children:["Schatten's framework-agnostic surface is"," ",e.jsx("strong",{children:"under active development through the v0.7.x → v0.14.x"})," cycle. Design tokens (CSS custom properties) and the base reset are available today; the data-attribute class API (",e.jsx(t,{children:'.btn[data-variant="solid"]'}),") lands in ",e.jsx("strong",{children:"v0.14.0"}),". Until then, the recommended bridge for non-React projects is the exported"," ",e.jsx(t,{children:"buttonVariants(...)"})," / ",e.jsx(t,{children:"badgeVariants(...)"})," / etc. — see"," ",e.jsx("a",{href:"#cva-bridge",className:"underline",children:"CVA bridge"})," ","below."]}),e.jsx(n,{children:"Why a Vanilla HTML path?"}),e.jsxs(s,{children:["Schatten is a ",e.jsx("strong",{children:"two-layer"})," design system. The lower layer is plain CSS — design tokens plus a class API keyed on ",e.jsx(t,{children:"data-*"})," attributes. The upper layer is an optional React component runtime that consumes the same tokens. Either layer can be used in isolation."]}),e.jsx(s,{children:"That split exists because a design system should outlive any one framework choice. A WordPress theme, an Astro static site, a Vue / Svelte SPA, or a server-rendered HTML page should all be able to wear the same visual identity without first installing React."}),e.jsxs(s,{children:["Long-term goal: ",e.jsx(t,{children:'<button class="btn" data-variant="solid">'})," ","renders identically to ",e.jsx(t,{children:'<Button variant="primary">'}),", with no JS runtime required."]}),e.jsx(n,{children:"Minimum setup"}),e.jsx(l,{children:"1. Load the CSS bundle"}),e.jsxs(s,{children:["The CSS bundle is published to npm and mirrored to both jsDelivr and unpkg. Drop it into the"," ",e.jsx(t,{children:"<head>"}),":"]}),e.jsx(o,{children:b}),e.jsx(l,{children:"2. Or import locally"}),e.jsx(s,{children:"For build pipelines that bundle CSS (Astro, Vite, Webpack), import the bundle once at your entry:"}),e.jsx(o,{children:x}),e.jsx(n,{children:"What works today (v0.7.0)"}),e.jsxs(s,{children:["The bundle ships ",e.jsx("strong",{children:"design tokens"})," (primitive scales + semantic tokens),",e.jsx("strong",{children:" base reset"}),", and an ",e.jsx(t,{children:"@theme"})," block that registers the tokens with Tailwind v4. The most reliable path today is to consume tokens directly via CSS custom properties:"]}),e.jsx(o,{children:f}),e.jsxs(s,{children:["See"," ",e.jsx("a",{href:"?path=/docs/foundation-color--colors",className:"underline",children:"Foundation / Color"})," ","for the full token list and"," ",e.jsx("a",{href:"?path=/docs/foundation-typography--typography",className:"underline",children:"Foundation / Typography"})," ","for the type scale."]}),e.jsx(n,{children:"Class API surface"}),e.jsxs(s,{children:["Below is the ",e.jsx("strong",{children:"planned"}),' class surface. Classes marked "Coming in v1.0" are part of the v1.0.0 public API contract (see'," ",e.jsx("a",{href:"https://github.com/yasmro/schatten/issues/154",className:"underline",target:"_blank",rel:"noreferrer",children:"#154"}),") — they are ",e.jsx("em",{children:"not yet"})," emitted as standalone CSS rules and will not style your markup yet."]}),e.jsxs("div",{className:"border border-border rounded-lg px-4 py-2 my-4",children:[e.jsx(a,{className:".btn",status:"coming",description:"Button base class."}),e.jsx(a,{className:'.btn[data-variant="solid"]',status:"coming",description:"Primary button (filled accent)."}),e.jsx(a,{className:'.btn[data-variant="outline"]',status:"coming",description:"Secondary button (outlined)."}),e.jsx(a,{className:'.btn[data-variant="ghost"]',status:"coming",description:"Tertiary button (no background)."}),e.jsx(a,{className:'.btn[data-size="sm|md|lg"]',status:"coming",description:"Button sizing."}),e.jsx(a,{className:".input-wrapper / .input",status:"coming",description:"Text input with optional icon slots."}),e.jsx(a,{className:".badge[data-variant][data-appearance]",status:"coming",description:"Badge with tone × shape (success/error/warning/info × solid/outline/subtle)."}),e.jsx(a,{className:".callout[data-variant][data-appearance]",status:"coming",description:"Inline contextual notice."}),e.jsx(a,{className:".checkbox / .radio / .switch",status:"coming",description:"Toggle form controls."}),e.jsx(a,{className:".select-trigger / .select-content",status:"coming",description:"Select primitives (popup positioning still requires JS)."})]}),e.jsxs(s,{children:["Custom properties (tokens) are ",e.jsx("em",{children:"not"})," phantom — they are emitted today and stable from v1.0.0:"]}),e.jsxs("div",{className:"border border-border rounded-lg px-4 py-2 my-4",children:[e.jsx(a,{className:"--color-foreground / --color-background",status:"available",description:"Base surface and foreground."}),e.jsx(a,{className:"--color-solid / --color-solid-foreground",status:"available",description:"Primary interactive fill (matches Button primary)."}),e.jsx(a,{className:"--color-{state}, --color-{state}-subtle, …",status:"available",description:"State tokens (error / success / warning / info / destructive)."}),e.jsx(a,{className:"--color-theme-50 … --color-theme-950",status:"available",description:"Theme scale (retunable per data-theme)."}),e.jsx(a,{className:"--color-surface-disabled, --color-foreground-disabled, …",status:"available",description:"Non-interactive state tokens."})]}),e.jsx(n,{children:e.jsx("span",{id:"cva-bridge",children:"Bridge — use the CVA variant functions"})}),e.jsxs(s,{children:["Until the data-attribute class API lands in v0.14.0, projects with any JS toolchain can call the exported variant functions (",e.jsx(t,{children:"buttonVariants"}),","," ",e.jsx(t,{children:"badgeVariants"}),", …) to get a ready-to-use class string. The functions are framework-agnostic — they only return strings — and tree-shake cleanly."]}),e.jsx(o,{children:y}),e.jsxs(s,{children:["For Astro / Vue / Svelte examples, see the"," ",e.jsx("a",{href:"https://github.com/yasmro/schatten#astro--vue--svelte",className:"underline",target:"_blank",rel:"noreferrer",children:"README — Astro / Vue / Svelte"})," ","section."]}),e.jsx(n,{children:"Theming"}),e.jsx(l,{children:"Light / dark mode"}),e.jsxs(s,{children:["Light is the implicit default. Toggle the ",e.jsx(t,{children:".dark"})," class on"," ",e.jsx(t,{children:"<html>"})," to switch, or omit the class to follow the user's OS preference via ",e.jsx(t,{children:"prefers-color-scheme"}),":"]}),e.jsx(o,{children:j}),e.jsx(l,{children:"Seasonal palettes"}),e.jsxs(s,{children:["Schatten ships eight seasonal palettes that retune the theme scale. Activate one via the"," ",e.jsx(t,{children:"data-theme"})," attribute on ",e.jsx(t,{children:"<html>"}),":"]}),e.jsx(o,{children:v}),e.jsxs(s,{children:["See the"," ",e.jsx("a",{href:"?path=/docs/foundation-color--colors",className:"underline",children:"Foundation / Color"})," ","story for all available ",e.jsx(t,{children:"data-theme"})," values."]}),e.jsx(n,{children:"Roadmap"}),e.jsxs("div",{className:"border border-border rounded-lg overflow-hidden my-4",children:[e.jsxs("div",{className:"grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 border-b border-border bg-surface",children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted",children:"v0.7.0"}),e.jsx("span",{className:"text-sm text-foreground",children:"Framework-agnostic README + this Getting Started story."}),e.jsx(i,{variant:"success",appearance:"subtle",children:"Now"})]}),e.jsxs("div",{className:"grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 border-b border-border",children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted",children:"v0.14.0"}),e.jsxs("span",{className:"text-sm text-foreground",children:["Data-attribute class API lands (",e.jsx(t,{children:'.btn[data-variant="solid"]'})," and friends). Tracked in"," ",e.jsx("a",{href:"https://github.com/yasmro/schatten/issues/154",className:"underline",target:"_blank",rel:"noreferrer",children:"#154"}),"."]}),e.jsx(i,{appearance:"outline",children:"Planned"})]}),e.jsxs("div",{className:"grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3",children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted",children:"v1.0.0"}),e.jsxs("span",{className:"text-sm text-foreground",children:["Class names and CSS variables are pinned by the"," ",e.jsx("a",{href:"https://github.com/yasmro/schatten/blob/main/.claude/rules/api-stability.md",className:"underline",target:"_blank",rel:"noreferrer",children:"API stability contract"}),"."]}),e.jsx(i,{appearance:"outline",children:"Planned"})]})]}),e.jsx(n,{children:"Related"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-foreground-muted space-y-2 mb-12",children:[e.jsxs("li",{children:[e.jsx("a",{href:"https://github.com/yasmro/schatten/issues/58",className:"underline",target:"_blank",rel:"noreferrer",children:"#58"})," ","— umbrella issue tracking the framework-agnostic CSS roadmap."]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://github.com/yasmro/schatten/issues/154",className:"underline",target:"_blank",rel:"noreferrer",children:"#154"})," ","— Phase 2 implementation (v0.14.0): the data-attribute class API."]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://github.com/yasmro/schatten/blob/main/README.md",className:"underline",target:"_blank",rel:"noreferrer",children:"README"})," ","— Quick start, including Astro / Vue / Svelte snippets."]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://github.com/yasmro/schatten/blob/main/.claude/rules/api-stability.md",className:"underline",target:"_blank",rel:"noreferrer",children:"api-stability.md"})," ",'— What "public API" means for CSS classes and variables from v1.0.0.']})]})]})};var c,h,m;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Vanilla HTML',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-3 tracking-tight">Vanilla HTML</h1>
        <p className="text-base text-foreground-muted leading-relaxed">
          Use Schatten in plain HTML, Astro, Vue, Svelte, or any project without a React runtime.
          Tokens and the base reset ship today; the full class API ships in v1.0.0.
        </p>
      </div>

      <Callout variant="warning" title="Heads up — v0.7.0 status">
        Schatten's framework-agnostic surface is{' '}
        <strong>under active development through the v0.7.x → v0.14.x</strong> cycle. Design tokens
        (CSS custom properties) and the base reset are available today; the data-attribute class API
        (<InlineCode>.btn[data-variant="solid"]</InlineCode>) lands in <strong>v0.14.0</strong>.
        Until then, the recommended bridge for non-React projects is the exported{' '}
        <InlineCode>buttonVariants(...)</InlineCode> / <InlineCode>badgeVariants(...)</InlineCode> /
        etc. — see{' '}
        <a href="#cva-bridge" className="underline">
          CVA bridge
        </a>{' '}
        below.
      </Callout>

      <SectionTitle>Why a Vanilla HTML path?</SectionTitle>
      <Paragraph>
        Schatten is a <strong>two-layer</strong> design system. The lower layer is plain CSS —
        design tokens plus a class API keyed on <InlineCode>data-*</InlineCode> attributes. The
        upper layer is an optional React component runtime that consumes the same tokens. Either
        layer can be used in isolation.
      </Paragraph>
      <Paragraph>
        That split exists because a design system should outlive any one framework choice. A
        WordPress theme, an Astro static site, a Vue / Svelte SPA, or a server-rendered HTML page
        should all be able to wear the same visual identity without first installing React.
      </Paragraph>
      <Paragraph>
        Long-term goal: <InlineCode>{'<button class="btn" data-variant="solid">'}</InlineCode>{' '}
        renders identically to <InlineCode>{'<Button variant="primary">'}</InlineCode>, with no JS
        runtime required.
      </Paragraph>

      <SectionTitle>Minimum setup</SectionTitle>
      <SubsectionTitle>1. Load the CSS bundle</SubsectionTitle>
      <Paragraph>
        The CSS bundle is published to npm and mirrored to both jsDelivr and unpkg. Drop it into the{' '}
        <InlineCode>&lt;head&gt;</InlineCode>:
      </Paragraph>
      <CodeBlock>{SETUP_CDN}</CodeBlock>

      <SubsectionTitle>2. Or import locally</SubsectionTitle>
      <Paragraph>
        For build pipelines that bundle CSS (Astro, Vite, Webpack), import the bundle once at your
        entry:
      </Paragraph>
      <CodeBlock>{SETUP_LOCAL}</CodeBlock>

      <SectionTitle>What works today (v0.7.0)</SectionTitle>
      <Paragraph>
        The bundle ships <strong>design tokens</strong> (primitive scales + semantic tokens),
        <strong> base reset</strong>, and an <InlineCode>@theme</InlineCode> block that registers
        the tokens with Tailwind v4. The most reliable path today is to consume tokens directly via
        CSS custom properties:
      </Paragraph>
      <CodeBlock>{TOKEN_USAGE}</CodeBlock>
      <Paragraph>
        See{' '}
        <a href="?path=/docs/foundation-color--colors" className="underline">
          Foundation / Color
        </a>{' '}
        for the full token list and{' '}
        <a href="?path=/docs/foundation-typography--typography" className="underline">
          Foundation / Typography
        </a>{' '}
        for the type scale.
      </Paragraph>

      <SectionTitle>Class API surface</SectionTitle>
      <Paragraph>
        Below is the <strong>planned</strong> class surface. Classes marked "Coming in v1.0" are
        part of the v1.0.0 public API contract (see{' '}
        <a href="https://github.com/yasmro/schatten/issues/154" className="underline" target="_blank" rel="noreferrer">
          #154
        </a>
        ) — they are <em>not yet</em> emitted as standalone CSS rules and will not style your markup
        yet.
      </Paragraph>

      <div className="border border-border rounded-lg px-4 py-2 my-4">
        <ClassRow className=".btn" status="coming" description="Button base class." />
        <ClassRow className='.btn[data-variant="solid"]' status="coming" description="Primary button (filled accent)." />
        <ClassRow className='.btn[data-variant="outline"]' status="coming" description="Secondary button (outlined)." />
        <ClassRow className='.btn[data-variant="ghost"]' status="coming" description="Tertiary button (no background)." />
        <ClassRow className='.btn[data-size="sm|md|lg"]' status="coming" description="Button sizing." />
        <ClassRow className=".input-wrapper / .input" status="coming" description="Text input with optional icon slots." />
        <ClassRow className=".badge[data-variant][data-appearance]" status="coming" description="Badge with tone × shape (success/error/warning/info × solid/outline/subtle)." />
        <ClassRow className=".callout[data-variant][data-appearance]" status="coming" description="Inline contextual notice." />
        <ClassRow className=".checkbox / .radio / .switch" status="coming" description="Toggle form controls." />
        <ClassRow className=".select-trigger / .select-content" status="coming" description="Select primitives (popup positioning still requires JS)." />
      </div>

      <Paragraph>
        Custom properties (tokens) are <em>not</em> phantom — they are emitted today and stable from
        v1.0.0:
      </Paragraph>

      <div className="border border-border rounded-lg px-4 py-2 my-4">
        <ClassRow className="--color-foreground / --color-background" status="available" description="Base surface and foreground." />
        <ClassRow className="--color-solid / --color-solid-foreground" status="available" description="Primary interactive fill (matches Button primary)." />
        <ClassRow className="--color-{state}, --color-{state}-subtle, …" status="available" description="State tokens (error / success / warning / info / destructive)." />
        <ClassRow className="--color-theme-50 … --color-theme-950" status="available" description="Theme scale (retunable per data-theme)." />
        <ClassRow className="--color-surface-disabled, --color-foreground-disabled, …" status="available" description="Non-interactive state tokens." />
      </div>

      <SectionTitle>
        <span id="cva-bridge">Bridge — use the CVA variant functions</span>
      </SectionTitle>
      <Paragraph>
        Until the data-attribute class API lands in v0.14.0, projects with any JS toolchain can call
        the exported variant functions (<InlineCode>buttonVariants</InlineCode>,{' '}
        <InlineCode>badgeVariants</InlineCode>, …) to get a ready-to-use class string. The functions
        are framework-agnostic — they only return strings — and tree-shake cleanly.
      </Paragraph>
      <CodeBlock>{CVA_BRIDGE}</CodeBlock>
      <Paragraph>
        For Astro / Vue / Svelte examples, see the{' '}
        <a href="https://github.com/yasmro/schatten#astro--vue--svelte" className="underline" target="_blank" rel="noreferrer">
          README — Astro / Vue / Svelte
        </a>{' '}
        section.
      </Paragraph>

      <SectionTitle>Theming</SectionTitle>
      <SubsectionTitle>Light / dark mode</SubsectionTitle>
      <Paragraph>
        Light is the implicit default. Toggle the <InlineCode>.dark</InlineCode> class on{' '}
        <InlineCode>&lt;html&gt;</InlineCode> to switch, or omit the class to follow the user's OS
        preference via <InlineCode>prefers-color-scheme</InlineCode>:
      </Paragraph>
      <CodeBlock>{DARK_MODE}</CodeBlock>

      <SubsectionTitle>Seasonal palettes</SubsectionTitle>
      <Paragraph>
        Schatten ships eight seasonal palettes that retune the theme scale. Activate one via the{' '}
        <InlineCode>data-theme</InlineCode> attribute on <InlineCode>&lt;html&gt;</InlineCode>:
      </Paragraph>
      <CodeBlock>{SEASONAL_THEME}</CodeBlock>
      <Paragraph>
        See the{' '}
        <a href="?path=/docs/foundation-color--colors" className="underline">
          Foundation / Color
        </a>{' '}
        story for all available <InlineCode>data-theme</InlineCode> values.
      </Paragraph>

      <SectionTitle>Roadmap</SectionTitle>
      <div className="border border-border rounded-lg overflow-hidden my-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 border-b border-border bg-surface">
          <span className="text-xs font-mono text-foreground-muted">v0.7.0</span>
          <span className="text-sm text-foreground">
            Framework-agnostic README + this Getting Started story.
          </span>
          <Badge variant="success" appearance="subtle">
            Now
          </Badge>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 border-b border-border">
          <span className="text-xs font-mono text-foreground-muted">v0.14.0</span>
          <span className="text-sm text-foreground">
            Data-attribute class API lands (<InlineCode>.btn[data-variant="solid"]</InlineCode> and
            friends). Tracked in{' '}
            <a href="https://github.com/yasmro/schatten/issues/154" className="underline" target="_blank" rel="noreferrer">
              #154
            </a>
            .
          </span>
          <Badge appearance="outline">Planned</Badge>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3">
          <span className="text-xs font-mono text-foreground-muted">v1.0.0</span>
          <span className="text-sm text-foreground">
            Class names and CSS variables are pinned by the{' '}
            <a href="https://github.com/yasmro/schatten/blob/main/.claude/rules/api-stability.md" className="underline" target="_blank" rel="noreferrer">
              API stability contract
            </a>
            .
          </span>
          <Badge appearance="outline">Planned</Badge>
        </div>
      </div>

      <SectionTitle>Related</SectionTitle>
      <ul className="list-disc list-inside text-sm text-foreground-muted space-y-2 mb-12">
        <li>
          <a href="https://github.com/yasmro/schatten/issues/58" className="underline" target="_blank" rel="noreferrer">
            #58
          </a>{' '}
          — umbrella issue tracking the framework-agnostic CSS roadmap.
        </li>
        <li>
          <a href="https://github.com/yasmro/schatten/issues/154" className="underline" target="_blank" rel="noreferrer">
            #154
          </a>{' '}
          — Phase 2 implementation (v0.14.0): the data-attribute class API.
        </li>
        <li>
          <a href="https://github.com/yasmro/schatten/blob/main/README.md" className="underline" target="_blank" rel="noreferrer">
            README
          </a>{' '}
          — Quick start, including Astro / Vue / Svelte snippets.
        </li>
        <li>
          <a href="https://github.com/yasmro/schatten/blob/main/.claude/rules/api-stability.md" className="underline" target="_blank" rel="noreferrer">
            api-stability.md
          </a>{' '}
          — What "public API" means for CSS classes and variables from v1.0.0.
        </li>
      </ul>
    </div>
}`,...(m=(h=d.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const B=["VanillaHTML"];export{d as VanillaHTML,B as __namedExportsOrder,V as default};
