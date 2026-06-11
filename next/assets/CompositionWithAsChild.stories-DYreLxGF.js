import{j as e}from"./iframe-DcZIkNsT.js";import{B as i,b as o}from"./Button-BVrxnGZi.js";import{T as c,t as m}from"./Text-CQRwnLx0.js";import{A as p}from"./arrow-right-BZoGHXV7.js";import"./preload-helper-CrztxVc4.js";import"./index-B9FAEF7m.js";import"./index-Dw2NetIq.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               */import"./Spinner-t-_OU83X.js";/* empty css                *//* empty css             */import"./createLucideIcon-De4lYWcg.js";const N={title:"Patterns/Composition with asChild",parameters:{layout:"fullscreen",docs:{description:{component:['Schatten offers **three escape hatches** for "render this styling on a different element". Reach for the narrowest one that fits.',"","| Escape hatch | What you get | Where it works | Available on |","|---|---|---|---|","| **`asChild`** (Radix `Slot`) | The component's resolved `className` **plus its forwarded props / ref** merged onto a **single child** — the child *becomes* the component | React only | **`Button` only** |","| **`*Variants()`** (`buttonVariants()` / `textVariants()`) | **Only the class string** — your element keeps its full native typing | Any context: React, SSR HTML, email, framework `<Link>` | `Button`, `Text` |","| **`as`** (closed tag enum) | Swaps the rendered semantic tag (`p` / `span` / `h1`–`h6`) | React only | **`Text` only** |","","## Decision tree","","1. **Just need a different semantic tag on `Text`?** (e.g. render a paragraph as an `<h2>`) → use **`as`**.","2. **Only want the class string on your own element?** (framework `<Link>`, server-rendered HTML, email) → use **`*Variants()`**. Your element keeps its own typing.","3. **Want your element to *behave as* the Button** — forward Button's events / ref / class onto it (the shadcn idiom)? → use **`asChild`**.","","## `asChild` does **not** project inner content","","In `asChild` mode Button renders **only `children`** — its `icon` and `isLoading` are *not* rendered. `asChild` makes your element a button-styled, button-behaving element; it does **not** stamp Button's icon / spinner internals onto your child. Author any icon inside your own child.","","## Anti-patterns","","```tsx","// ✗ Text no longer exposes asChild (removed in v0.11.0).",'<Text asChild><a href="/x">Link</a></Text>',"// ✓ Use textVariants() on your element instead:",`<a href="/x" className={textVariants({ variant: 'body' })}>Link</a>`,"","// ✗ Form inputs and Select trigger never take asChild (hard exclusion).","<SelectTrigger asChild>…</SelectTrigger>","","// ✗ asChild does not add an icon — icon is dropped here:",'<Button asChild icon={ArrowRight}><a href="/x">Go</a></Button>',"// ✓ Author the icon inside your child:",'<Button asChild><a href="/x">Go <ArrowRight aria-hidden /></a></Button>',"```"].join(`
`)}}}},d=({children:t})=>e.jsx("h2",{className:"text-2xl font-bold text-foreground mt-8 mb-2",children:t}),l=({children:t})=>e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:t}),r=({title:t,children:h})=>e.jsxs("div",{className:"border border-border rounded-lg p-4",children:[e.jsx("h3",{className:"text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3",children:t}),e.jsx("div",{className:"flex flex-wrap items-center gap-3",children:h})]}),n={name:"asChild — Button as a link",parameters:{docs:{description:{story:"Use `asChild` when an anchor (or framework `<Link>`) should *behave as* a Button — events, ref, and classes are forwarded onto your element. Note the icon is authored inside the anchor; `asChild` does not project Button's `icon` prop."}}},render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx(d,{children:"asChild — Button as a link"}),e.jsxs(l,{children:['<Button asChild><a href="…">…</a></Button>'," — the anchor receives Button styling and forwarded props."]}),e.jsxs(r,{title:"Rendered",children:[e.jsx(i,{asChild:!0,children:e.jsx("a",{href:"#button-as-link",children:"Primary link"})}),e.jsx(i,{asChild:!0,variant:"secondary",children:e.jsx("a",{href:"#button-as-link",children:"Secondary link"})}),e.jsx(i,{asChild:!0,children:e.jsxs("a",{href:"#button-as-link",children:["With icon ",e.jsx(p,{"aria-hidden":"true"})]})})]})]})},a={name:"buttonVariants() — class only",parameters:{docs:{description:{story:"Use `buttonVariants()` when you want only the Button look on your own element — no prop forwarding, fully-typed. Works outside React too (server-rendered HTML, email)."}}},render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx(d,{children:"buttonVariants() — class only"}),e.jsxs(l,{children:["<a className={buttonVariants({ variant })}>…</a>"," — identical DOM, no prop forwarding."]}),e.jsxs(r,{title:"Rendered",children:[e.jsx("a",{href:"#link-variants",className:o({variant:"primary"}),children:"Primary"}),e.jsx("a",{href:"#link-variants",className:o({variant:"secondary"}),children:"Secondary"}),e.jsx("a",{href:"#link-variants",className:o({variant:"destructive",size:"sm"}),children:"Destructive sm"})]})]})},s={name:"Text — as vs textVariants()",parameters:{docs:{description:{story:"Render Text as a different semantic tag with `as`, or apply Text styling to an arbitrary element with `textVariants()`. These two cover everything the removed `asChild` did."}}},render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx(d,{children:"Text — as vs textVariants()"}),e.jsx(l,{children:"`as` for a semantic tag swap; `textVariants()` for an arbitrary element."}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{title:"as — semantic tag swap",children:[e.jsx(c,{as:"h2",variant:"heading",size:"lg",children:"Heading rendered as <h2>"}),e.jsx(c,{as:"span",color:"muted",children:"Body rendered as <span>"})]}),e.jsx(r,{title:"textVariants() — styling on an arbitrary element",children:e.jsx("a",{href:"#text-variants",className:m({variant:"body",color:"info"}),children:"An anchor styled with textVariants()"})})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'asChild — Button as a link',
  parameters: {
    docs: {
      description: {
        story: "Use \`asChild\` when an anchor (or framework \`<Link>\`) should *behave as* a Button — events, ref, and classes are forwarded onto your element. Note the icon is authored inside the anchor; \`asChild\` does not project Button's \`icon\` prop."
      }
    }
  },
  render: () => <div className="p-8">
      <SectionTitle>asChild — Button as a link</SectionTitle>
      <Caption>
        {'<Button asChild><a href="…">…</a></Button>'} — the anchor receives Button styling and
        forwarded props.
      </Caption>
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
}`,...n.parameters?.docs?.source},description:{story:"`asChild` — make a non-`<button>` element behave as a Button. Radix\n`Slot` merges Button's `className` and forwards its props / ref onto the\nsingle child. The child authors its own inner content (including any\nicon), because Button renders only `children` in `asChild` mode.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'buttonVariants() — class only',
  parameters: {
    docs: {
      description: {
        story: 'Use \`buttonVariants()\` when you want only the Button look on your own element — no prop forwarding, fully-typed. Works outside React too (server-rendered HTML, email).'
      }
    }
  },
  render: () => <div className="p-8">
      <SectionTitle>buttonVariants() — class only</SectionTitle>
      <Caption>
        {'<a className={buttonVariants({ variant })}>…</a>'} — identical DOM, no prop forwarding.
      </Caption>
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
}`,...a.parameters?.docs?.source},description:{story:"`buttonVariants()` — only the class string. The consumer's element keeps\nits full native typing, and it works in any context (SSR HTML, email,\nframework Link) because nothing React-specific is involved.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Text — as vs textVariants()',
  parameters: {
    docs: {
      description: {
        story: 'Render Text as a different semantic tag with \`as\`, or apply Text styling to an arbitrary element with \`textVariants()\`. These two cover everything the removed \`asChild\` did.'
      }
    }
  },
  render: () => <div className="p-8">
      <SectionTitle>Text — as vs textVariants()</SectionTitle>
      <Caption>\`as\` for a semantic tag swap; \`textVariants()\` for an arbitrary element.</Caption>
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
}`,...s.parameters?.docs?.source},description:{story:"`Text` polymorphism — `as` swaps the semantic tag; `textVariants()` puts\nText styling on an arbitrary element. `Text` does **not** expose\n`asChild` (removed in v0.11.0).",...s.parameters?.docs?.description}}};const S=["ButtonAsLink","LinkWithButtonVariants","TextPolymorphism"];export{n as ButtonAsLink,a as LinkWithButtonVariants,s as TextPolymorphism,S as __namedExportsOrder,N as default};
