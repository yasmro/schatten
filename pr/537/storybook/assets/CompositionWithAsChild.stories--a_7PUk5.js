import{j as e,r as t}from"./iframe-CdMGCCcj.js";import{B as d,b as l}from"./Button-Ck6LFVV5.js";import{T as h,t as p}from"./Text-DPcDunjV.js";import{S as s,N as i,P as u,L as g,D as y,C as f}from"./docs-ui-Bs6su0_M.js";import{A as N}from"./arrow-right-DCf8w2ub.js";import"./preload-helper-BPUsv9fc.js";import"./index-BjCHTBLr.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css               */import"./Spinner-BARv3lgy.js";/* empty css                *//* empty css             */import"./createLucideIcon-CQRKT7Fn.js";const W={title:"Patterns/Composition with asChild",parameters:{layout:"fullscreen"}},c=({title:x,children:m})=>e.jsxs("div",{className:"border border-border rounded-lg p-4",children:[e.jsx("h3",{className:"text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3",children:x}),e.jsx("div",{className:"flex flex-wrap items-center gap-3",children:m})]}),a={name:"Overview",render:()=>e.jsxs("div",{className:"mx-auto max-w-3xl px-8 py-12",children:[e.jsx(u,{children:"Composition with asChild"}),e.jsxs(g,{children:['Schatten offers three escape hatches for "render this styling on a different element". They are not interchangeable — reach for the narrowest one that fits. (The contributor-facing contract lives in ',e.jsx("code",{className:"text-xs",children:"component-api-conventions.md"})," and"," ",e.jsx("code",{className:"text-xs",children:"component-architecture.md"}),".)"]}),e.jsx(y,{caption:"Escape-hatch comparison: asChild / *Variants() / as",headers:["Escape hatch","What you get","Where it works","Available on"],rows:[{key:"aschild",cells:[e.jsxs(t.Fragment,{children:[e.jsx("code",{className:"text-xs",children:"asChild"})," (Radix"," ",e.jsx("code",{className:"text-xs",children:"Slot"}),")"]},"hatch"),e.jsxs(t.Fragment,{children:["The component's resolved ",e.jsx("code",{className:"text-xs",children:"className"})," ",e.jsx("strong",{children:"plus its forwarded props / ref"})," merged onto a single child — the child ",e.jsx("em",{children:"becomes"})," the component"]},"get"),"React only",e.jsxs("strong",{children:[e.jsx("code",{className:"text-xs",children:"Button"})," only"]},"on")]},{key:"variants",cells:[e.jsxs(t.Fragment,{children:[e.jsx("code",{className:"text-xs",children:"*Variants()"})," (",e.jsx("code",{className:"text-xs",children:"buttonVariants()"})," /"," ",e.jsx("code",{className:"text-xs",children:"textVariants()"}),")"]},"hatch"),e.jsxs(t.Fragment,{children:[e.jsx("strong",{children:"Only the class string"})," — your element keeps its full native typing"]},"get"),e.jsxs(t.Fragment,{children:["Any context: React, SSR HTML, email, framework"," ",e.jsx("code",{className:"text-xs",children:"<Link>"})]},"where"),e.jsxs(t.Fragment,{children:[e.jsx("code",{className:"text-xs",children:"Button"}),", ",e.jsx("code",{className:"text-xs",children:"Text"})]},"on")]},{key:"as",cells:[e.jsxs(t.Fragment,{children:[e.jsx("code",{className:"text-xs",children:"as"})," (closed tag enum)"]},"hatch"),e.jsxs(t.Fragment,{children:["Swaps the rendered semantic tag (",e.jsx("code",{className:"text-xs",children:"p"})," /"," ",e.jsx("code",{className:"text-xs",children:"span"})," / ",e.jsx("code",{className:"text-xs",children:"h1"}),"–",e.jsx("code",{className:"text-xs",children:"h6"}),")"]},"get"),"React only",e.jsxs("strong",{children:[e.jsx("code",{className:"text-xs",children:"Text"})," only"]},"on")]}]}),e.jsxs(i,{children:["This table is the consumer-facing companion to the contributor contract in"," ",e.jsx("code",{className:"text-xs",children:'component-api-conventions.md §"asChild vs *Variants()"'})," — keep that doc as the source of truth if the two ever drift."]}),e.jsx(s,{children:"Decision tree"}),e.jsxs("ol",{className:"list-decimal flex flex-col gap-2 pl-6 text-sm text-foreground-muted",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Just need a different semantic tag on Text?"})," (e.g. render a paragraph as an ",e.jsx("code",{className:"text-xs",children:"<h2>"}),") → use ",e.jsx("code",{className:"text-xs",children:"as"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Only want the class string on your own element?"})," (framework"," ",e.jsx("code",{className:"text-xs",children:"<Link>"}),", server-rendered HTML, email) → use"," ",e.jsx("code",{className:"text-xs",children:"*Variants()"}),". Your element keeps its own typing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Want your element to behave as the Button"})," — forward Button's events / ref / class onto it (the shadcn idiom)? → use ",e.jsx("code",{className:"text-xs",children:"asChild"}),"."]})]}),e.jsx(s,{children:"asChild does not project inner content"}),e.jsxs(i,{children:["In ",e.jsx("code",{className:"text-xs",children:"asChild"})," mode Button renders"," ",e.jsxs("strong",{children:["only ",e.jsx("code",{className:"text-xs",children:"children"})]})," ","— its ",e.jsx("code",{className:"text-xs",children:"icon"})," and ",e.jsx("code",{className:"text-xs",children:"isLoading"})," ","are ",e.jsx("em",{children:"not"})," rendered. ",e.jsx("code",{className:"text-xs",children:"asChild"})," makes your element a button-styled, button-behaving element; it does not stamp Button's icon / spinner internals onto your child. Author any icon inside your own child."]}),e.jsx(s,{children:"Anti-patterns"}),e.jsx(f,{children:`// ✗ Text no longer exposes asChild (removed in v0.11.0).
<Text asChild><a href="/x">Link</a></Text>
// ✓ Use textVariants() on your element instead:
<a href="/x" className={textVariants({ variant: 'body' })}>Link</a>

// ✗ Form inputs and Select trigger never take asChild (hard exclusion).
<SelectTrigger asChild>…</SelectTrigger>

// ✗ asChild does not add an icon — icon is dropped here:
<Button asChild icon={ArrowRight}><a href="/x">Go</a></Button>
// ✓ Author the icon inside your child:
<Button asChild><a href="/x">Go <ArrowRight aria-hidden /></a></Button>`})]})},n={name:"asChild — Button as a link",render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx(s,{children:"asChild — Button as a link"}),e.jsxs(i,{children:['<Button asChild><a href="…">…</a></Button>'," — the anchor receives Button styling and forwarded props / ref. The icon is authored inside the anchor;"," ",e.jsx("code",{className:"text-xs",children:"asChild"})," does not project Button's"," ",e.jsx("code",{className:"text-xs",children:"icon"})," prop."]}),e.jsxs(c,{title:"Rendered",children:[e.jsx(d,{asChild:!0,children:e.jsx("a",{href:"#button-as-link",children:"Primary link"})}),e.jsx(d,{asChild:!0,variant:"secondary",children:e.jsx("a",{href:"#button-as-link",children:"Secondary link"})}),e.jsx(d,{asChild:!0,children:e.jsxs("a",{href:"#button-as-link",children:["With icon ",e.jsx(N,{"aria-hidden":"true"})]})})]})]})},r={name:"buttonVariants() — class only",render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx(s,{children:"buttonVariants() — class only"}),e.jsxs(i,{children:["<a className={buttonVariants({ variant })}>…</a>"," — identical DOM, no prop forwarding, fully typed. Works outside React too (server-rendered HTML, email)."]}),e.jsxs(c,{title:"Rendered",children:[e.jsx("a",{href:"#link-variants",className:l({variant:"primary"}),children:"Primary"}),e.jsx("a",{href:"#link-variants",className:l({variant:"secondary"}),children:"Secondary"}),e.jsx("a",{href:"#link-variants",className:l({variant:"destructive",size:"sm"}),children:"Destructive sm"})]})]})},o={name:"Text — as vs textVariants()",render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx(s,{children:"Text — as vs textVariants()"}),e.jsx(i,{children:"`as` for a semantic tag swap; `textVariants()` for an arbitrary element."}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(c,{title:"as — semantic tag swap",children:[e.jsx(h,{as:"h2",variant:"heading",size:"lg",children:"Heading rendered as <h2>"}),e.jsx(h,{as:"span",color:"muted",children:"Body rendered as <span>"})]}),e.jsx(c,{title:"textVariants() — styling on an arbitrary element",children:e.jsx("a",{href:"#text-variants",className:p({variant:"body",color:"info"}),children:"An anchor styled with textVariants()"})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Composition with asChild</PageTitle>
      <Lead>
        Schatten offers three escape hatches for "render this styling on a different element". They
        are not interchangeable — reach for the narrowest one that fits. (The contributor-facing
        contract lives in <code className="text-xs">component-api-conventions.md</code> and{' '}
        <code className="text-xs">component-architecture.md</code>.)
      </Lead>

      <DocsTable caption="Escape-hatch comparison: asChild / *Variants() / as" headers={['Escape hatch', 'What you get', 'Where it works', 'Available on']} rows={[{
      key: 'aschild',
      cells: [<Fragment key="hatch">
                <code className="text-xs">asChild</code> (Radix{' '}
                <code className="text-xs">Slot</code>)
              </Fragment>, <Fragment key="get">
                The component's resolved <code className="text-xs">className</code>{' '}
                <strong>plus its forwarded props / ref</strong> merged onto a single child — the
                child <em>becomes</em> the component
              </Fragment>, 'React only', <strong key="on">
                <code className="text-xs">Button</code> only
              </strong>]
    }, {
      key: 'variants',
      cells: [<Fragment key="hatch">
                <code className="text-xs">*Variants()</code> (
                <code className="text-xs">buttonVariants()</code> /{' '}
                <code className="text-xs">textVariants()</code>)
              </Fragment>, <Fragment key="get">
                <strong>Only the class string</strong> — your element keeps its full native typing
              </Fragment>, <Fragment key="where">
                Any context: React, SSR HTML, email, framework{' '}
                <code className="text-xs">&lt;Link&gt;</code>
              </Fragment>, <Fragment key="on">
                <code className="text-xs">Button</code>, <code className="text-xs">Text</code>
              </Fragment>]
    }, {
      key: 'as',
      cells: [<Fragment key="hatch">
                <code className="text-xs">as</code> (closed tag enum)
              </Fragment>, <Fragment key="get">
                Swaps the rendered semantic tag (<code className="text-xs">p</code> /{' '}
                <code className="text-xs">span</code> / <code className="text-xs">h1</code>–
                <code className="text-xs">h6</code>)
              </Fragment>, 'React only', <strong key="on">
                <code className="text-xs">Text</code> only
              </strong>]
    }]} />

      <Note>
        This table is the consumer-facing companion to the contributor contract in{' '}
        <code className="text-xs">component-api-conventions.md §"asChild vs *Variants()"</code> —
        keep that doc as the source of truth if the two ever drift.
      </Note>

      <SectionTitle>Decision tree</SectionTitle>
      <ol className="list-decimal flex flex-col gap-2 pl-6 text-sm text-foreground-muted">
        <li>
          <strong>Just need a different semantic tag on Text?</strong> (e.g. render a paragraph as
          an <code className="text-xs">&lt;h2&gt;</code>) → use <code className="text-xs">as</code>.
        </li>
        <li>
          <strong>Only want the class string on your own element?</strong> (framework{' '}
          <code className="text-xs">&lt;Link&gt;</code>, server-rendered HTML, email) → use{' '}
          <code className="text-xs">*Variants()</code>. Your element keeps its own typing.
        </li>
        <li>
          <strong>Want your element to behave as the Button</strong> — forward Button's events / ref
          / class onto it (the shadcn idiom)? → use <code className="text-xs">asChild</code>.
        </li>
      </ol>

      <SectionTitle>asChild does not project inner content</SectionTitle>
      <Note>
        In <code className="text-xs">asChild</code> mode Button renders{' '}
        <strong>
          only <code className="text-xs">children</code>
        </strong>{' '}
        — its <code className="text-xs">icon</code> and <code className="text-xs">isLoading</code>{' '}
        are <em>not</em> rendered. <code className="text-xs">asChild</code> makes your element a
        button-styled, button-behaving element; it does not stamp Button's icon / spinner internals
        onto your child. Author any icon inside your own child.
      </Note>

      <SectionTitle>Anti-patterns</SectionTitle>
      <CodeBlock>{\`// ✗ Text no longer exposes asChild (removed in v0.11.0).
<Text asChild><a href="/x">Link</a></Text>
// ✓ Use textVariants() on your element instead:
<a href="/x" className={textVariants({ variant: 'body' })}>Link</a>

// ✗ Form inputs and Select trigger never take asChild (hard exclusion).
<SelectTrigger asChild>…</SelectTrigger>

// ✗ asChild does not add an icon — icon is dropped here:
<Button asChild icon={ArrowRight}><a href="/x">Go</a></Button>
// ✓ Author the icon inside your child:
<Button asChild><a href="/x">Go <ArrowRight aria-hidden /></a></Button>\`}</CodeBlock>
    </div>
}`,...a.parameters?.docs?.source},description:{story:`Landing page for the three escape hatches. The narrative (comparison table /
decision tree / anti-patterns) is rendered inline here so it is visible in
Canvas — see storybook-guideline.md "Hand-built docs pages — render prose
inline".`,...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'asChild — Button as a link',
  render: () => <div className="p-8">
      <SectionTitle>asChild — Button as a link</SectionTitle>
      <Note>
        {'<Button asChild><a href="…">…</a></Button>'} — the anchor receives Button styling and
        forwarded props / ref. The icon is authored inside the anchor;{' '}
        <code className="text-xs">asChild</code> does not project Button's{' '}
        <code className="text-xs">icon</code> prop.
      </Note>
      <Block title="Rendered">
        <Button asChild>
          <a href="#button-as-link">Primary link</a>
        </Button>
        <Button asChild variant="secondary">
          <a href="#button-as-link">Secondary link</a>
        </Button>
        <Button asChild>
          <a href="#button-as-link">
            With icon <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </Block>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"`asChild` — make a non-`<button>` element behave as a Button. Radix\n`Slot` merges Button's `className` and forwards its props / ref onto the\nsingle child. The child authors its own inner content (including any\nicon), because Button renders only `children` in `asChild` mode.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'buttonVariants() — class only',
  render: () => <div className="p-8">
      <SectionTitle>buttonVariants() — class only</SectionTitle>
      <Note>
        {'<a className={buttonVariants({ variant })}>…</a>'} — identical DOM, no prop forwarding,
        fully typed. Works outside React too (server-rendered HTML, email).
      </Note>
      <Block title="Rendered">
        <a href="#link-variants" className={buttonVariants({
        variant: 'primary'
      })}>
          Primary
        </a>
        <a href="#link-variants" className={buttonVariants({
        variant: 'secondary'
      })}>
          Secondary
        </a>
        <a href="#link-variants" className={buttonVariants({
        variant: 'destructive',
        size: 'sm'
      })}>
          Destructive sm
        </a>
      </Block>
    </div>
}`,...r.parameters?.docs?.source},description:{story:"`buttonVariants()` — only the class string. The consumer's element keeps\nits full native typing, and it works in any context (SSR HTML, email,\nframework Link) because nothing React-specific is involved.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Text — as vs textVariants()',
  render: () => <div className="p-8">
      <SectionTitle>Text — as vs textVariants()</SectionTitle>
      <Note>\`as\` for a semantic tag swap; \`textVariants()\` for an arbitrary element.</Note>
      <div className="flex flex-col gap-4">
        <Block title="as — semantic tag swap">
          <Text as="h2" variant="heading" size="lg">
            Heading rendered as &lt;h2&gt;
          </Text>
          <Text as="span" color="muted">
            Body rendered as &lt;span&gt;
          </Text>
        </Block>
        <Block title="textVariants() — styling on an arbitrary element">
          <a href="#text-variants" className={textVariants({
          variant: 'body',
          color: 'info'
        })}>
            An anchor styled with textVariants()
          </a>
        </Block>
      </div>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"`Text` polymorphism — `as` swaps the semantic tag; `textVariants()` puts\nText styling on an arbitrary element. `Text` does **not** expose\n`asChild` (removed in v0.11.0).",...o.parameters?.docs?.description}}};const O=["Overview","ButtonAsLink","LinkWithButtonVariants","TextPolymorphism"];export{n as ButtonAsLink,r as LinkWithButtonVariants,a as Overview,o as TextPolymorphism,O as __namedExportsOrder,W as default};
