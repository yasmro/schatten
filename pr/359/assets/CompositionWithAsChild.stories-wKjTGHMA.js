import{i as e}from"./preload-helper-ChaSUgV0.js";import{t}from"./iframe-DK9TY03R.js";import{I as n,t as r}from"./lucide-react-DLEtKJ8w.js";import{a as i,i as a,n as o,t as s}from"./Button-uALweSOg.js";import{i as c,n as l,r as u,t as d}from"./Text-DJ5gcrz8.js";var f,p,m,h,g,_,v,y,b;e((()=>{r(),o(),l(),i(),u(),f=t(),p={title:`Patterns/Composition with asChild`,parameters:{layout:`fullscreen`,docs:{description:{component:[`Schatten offers **three escape hatches** for "render this styling on a different element". Reach for the narrowest one that fits.`,``,`| Escape hatch | What you get | Where it works | Available on |`,`|---|---|---|---|`,"| **`asChild`** (Radix `Slot`) | The component's resolved `className` **plus its forwarded props / ref** merged onto a **single child** — the child *becomes* the component | React only | **`Button` only** |","| **`*Variants()`** (`buttonVariants()` / `textVariants()`) | **Only the class string** — your element keeps its full native typing | Any context: React, SSR HTML, email, framework `<Link>` | `Button`, `Text` |","| **`as`** (closed tag enum) | Swaps the rendered semantic tag (`p` / `span` / `h1`–`h6`) | React only | **`Text` only** |",``,`## Decision tree`,``,"1. **Just need a different semantic tag on `Text`?** (e.g. render a paragraph as an `<h2>`) → use **`as`**.","2. **Only want the class string on your own element?** (framework `<Link>`, server-rendered HTML, email) → use **`*Variants()`**. Your element keeps its own typing.","3. **Want your element to *behave as* the Button** — forward Button's events / ref / class onto it (the shadcn idiom)? → use **`asChild`**.",``,"## `asChild` does **not** project inner content",``,"In `asChild` mode Button renders **only `children`** — its `icon` and `isLoading` are *not* rendered. `asChild` makes your element a button-styled, button-behaving element; it does **not** stamp Button's icon / spinner internals onto your child. Author any icon inside your own child.",``,`## Anti-patterns`,``,"```tsx",`// ✗ Text no longer exposes asChild (removed in v0.11.0).`,`<Text asChild><a href="/x">Link</a></Text>`,`// ✓ Use textVariants() on your element instead:`,`<a href="/x" className={textVariants({ variant: 'body' })}>Link</a>`,``,`// ✗ Form inputs and Select trigger never take asChild (hard exclusion).`,`<SelectTrigger asChild>…</SelectTrigger>`,``,`// ✗ asChild does not add an icon — icon is dropped here:`,`<Button asChild icon={ArrowRight}><a href="/x">Go</a></Button>`,`// ✓ Author the icon inside your child:`,`<Button asChild><a href="/x">Go <ArrowRight aria-hidden /></a></Button>`,"```"].join(`
`)}}}},m=({children:e})=>(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-foreground mt-8 mb-2`,children:e}),h=({children:e})=>(0,f.jsx)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:e}),g=({title:e,children:t})=>(0,f.jsxs)(`div`,{className:`border border-border rounded-lg p-4`,children:[(0,f.jsx)(`h3`,{className:`text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3`,children:e}),(0,f.jsx)(`div`,{className:`flex flex-wrap items-center gap-3`,children:t})]}),_={name:`asChild — Button as a link`,parameters:{docs:{description:{story:"Use `asChild` when an anchor (or framework `<Link>`) should *behave as* a Button — events, ref, and classes are forwarded onto your element. Note the icon is authored inside the anchor; `asChild` does not project Button's `icon` prop."}}},render:()=>(0,f.jsxs)(`div`,{className:`p-8`,children:[(0,f.jsx)(m,{children:`asChild — Button as a link`}),(0,f.jsxs)(h,{children:[`<Button asChild><a href="…">…</a></Button>`,` — the anchor receives Button styling and forwarded props.`]}),(0,f.jsxs)(g,{title:`Rendered`,children:[(0,f.jsx)(s,{asChild:!0,children:(0,f.jsx)(`a`,{href:`#button-as-link`,children:`Primary link`})}),(0,f.jsx)(s,{asChild:!0,variant:`secondary`,children:(0,f.jsx)(`a`,{href:`#button-as-link`,children:`Secondary link`})}),(0,f.jsx)(s,{asChild:!0,children:(0,f.jsxs)(`a`,{href:`#button-as-link`,children:[`With icon `,(0,f.jsx)(n,{"aria-hidden":`true`})]})})]})]})},v={name:`buttonVariants() — class only`,parameters:{docs:{description:{story:"Use `buttonVariants()` when you want only the Button look on your own element — no prop forwarding, fully-typed. Works outside React too (server-rendered HTML, email)."}}},render:()=>(0,f.jsxs)(`div`,{className:`p-8`,children:[(0,f.jsx)(m,{children:`buttonVariants() — class only`}),(0,f.jsxs)(h,{children:[`<a className={buttonVariants({ variant })}>…</a>`,` — identical DOM, no prop forwarding.`]}),(0,f.jsxs)(g,{title:`Rendered`,children:[(0,f.jsx)(`a`,{href:`#link-variants`,className:a({variant:`primary`}),children:`Primary`}),(0,f.jsx)(`a`,{href:`#link-variants`,className:a({variant:`secondary`}),children:`Secondary`}),(0,f.jsx)(`a`,{href:`#link-variants`,className:a({variant:`destructive`,size:`sm`}),children:`Destructive sm`})]})]})},y={name:`Text — as vs textVariants()`,parameters:{docs:{description:{story:"Render Text as a different semantic tag with `as`, or apply Text styling to an arbitrary element with `textVariants()`. These two cover everything the removed `asChild` did."}}},render:()=>(0,f.jsxs)(`div`,{className:`p-8`,children:[(0,f.jsx)(m,{children:`Text — as vs textVariants()`}),(0,f.jsx)(h,{children:"`as` for a semantic tag swap; `textVariants()` for an arbitrary element."}),(0,f.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,f.jsxs)(g,{title:`as — semantic tag swap`,children:[(0,f.jsx)(d,{as:`h2`,variant:`heading`,size:`lg`,children:`Heading rendered as <h2>`}),(0,f.jsx)(d,{as:`span`,color:`muted`,children:`Body rendered as <span>`})]}),(0,f.jsx)(g,{title:`textVariants() — styling on an arbitrary element`,children:(0,f.jsx)(`a`,{href:`#text-variants`,className:c({variant:`body`,color:`info`}),children:`An anchor styled with textVariants()`})})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"`asChild` — make a non-`<button>` element behave as a Button. Radix\n`Slot` merges Button's `className` and forwards its props / ref onto the\nsingle child. The child authors its own inner content (including any\nicon), because Button renders only `children` in `asChild` mode.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`\`buttonVariants()\` — only the class string. The consumer's element keeps
its full native typing, and it works in any context (SSR HTML, email,
framework Link) because nothing React-specific is involved.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"`Text` polymorphism — `as` swaps the semantic tag; `textVariants()` puts\nText styling on an arbitrary element. `Text` does **not** expose\n`asChild` (removed in v0.11.0).",...y.parameters?.docs?.description}}},b=[`ButtonAsLink`,`LinkWithButtonVariants`,`TextPolymorphism`]}))();export{_ as ButtonAsLink,v as LinkWithButtonVariants,y as TextPolymorphism,b as __namedExportsOrder,p as default};