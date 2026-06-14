import{j as e,r as R}from"./iframe-akMoLjc6.js";import{B as j}from"./Button-BAJcVuI3.js";import{C as T}from"./Callout-BkAjLCb0.js";import{D as F}from"./Dialog-CQbdO4E5.js";import{F as O}from"./Field-DMEmWinN.js";import{I as L}from"./Input-BYnwF7H_.js";import{S as B,a as D,b as N,c as I,d as f}from"./Select-8xV5d-kt.js";import{t as A,T as E}from"./Toaster-BRMCnxCc.js";import{T as w,a as S,b as v,c as P}from"./Tooltip-cmnLz95X.js";import{P as o,L as s,C as a,N as i,a as k,D as q,S as l}from"./docs-ui-yLJyg3_B.js";import"./preload-helper-BMI3okD1.js";import"./index-BKQCvdxp.js";import"./index-DWABRn4b.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               */import"./Spinner-CTnKIS6C.js";/* empty css                *//* empty css                */import"./circle-alert-A27CW_a9.js";import"./createLucideIcon-DEueBLH-.js";import"./triangle-alert-BLAU6qcZ.js";import"./info-KfHBbNcb.js";import"./x-QWKV1QcI.js";import"./index-EUpbra1b.js";import"./index-DAFERG8c.js";import"./index-BN64-buP.js";import"./index-C9XD7ZmY.js";import"./index-CLUZGYRv.js";import"./index-CtVCrG-b.js";import"./index-DgZAj0Az.js";import"./Combination-D5KshZgV.js";/* empty css               */import"./Separator-Bj3sIgFI.js";/* empty css                  */import"./field-BCSg2yyj.js";/* empty css              *//* empty css              */import"./index-Ba6qGwWj.js";import"./index-CjHLXwPn.js";import"./floating-ui.react-dom-CT3UvAxA.js";import"./index-JY9Rkca5.js";import"./index-C9GeDq5k.js";/* empty css               */import"./chevron-up-DZQZlDBa.js";import"./check-BKaQ7kIW.js";/* empty css              *//* empty css                */const Le={title:"Patterns/Testing",parameters:{layout:"fullscreen"}},r=({children:d})=>e.jsx("div",{className:"max-w-3xl mx-auto px-8 py-12",children:d}),t=({children:d})=>e.jsx("code",{className:"rounded bg-surface px-1 py-0.5 font-mono text-[0.85em] text-foreground",children:d}),n=({label:d,children:c})=>e.jsxs("div",{className:"border border-border rounded-lg p-4 mb-4",children:[e.jsx("h3",{className:"text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3",children:d}),e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:c})]}),h={name:"Overview",render:()=>e.jsxs(r,{children:[e.jsx(o,{children:"Testing"}),e.jsxs(s,{children:["How to make Schatten components addressable from a consumer E2E suite (Playwright / Cypress / React Testing Library). The plumbing is deliberately thin: components forward"," ",e.jsx(t,{children:"data-testid"})," (and every other unknown DOM attribute) onto their root element — there is no bespoke ",e.jsx(t,{children:"testId"})," prop to learn."]}),e.jsxs(T,{variant:"info",title:"Role first, testid second",children:["Prefer ",e.jsx(t,{children:"getByRole(role, { name })"})," with an accessible name. It is stable across refactors and doubles as an accessibility check. Reach for ",e.jsx(t,{children:"data-testid"})," ","only when a role-based query is ambiguous, unstable, or impossible (anonymous wrappers, repeated rows)."]}),e.jsx(l,{children:"What this page covers"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Root pass-through"})," — testid lands on the rendered root via ",e.jsx(t,{children:"{...props}"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Compound components"})," — each sub-part takes its own testid (Select)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"asChild caveat"})," — with an element child the testid merges onto the child (Tooltip)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Portal content"})," — testid goes on the Content, and queries scope from the page (Select / Tooltip)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Curated-props exceptions"})," — Dialog and Toast do not forward arbitrary attributes; address their children or their role."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-foreground",children:"Naming & no auto-testid"})," — the value is yours to choose; Schatten never injects one."]})]}),e.jsx(l,{children:"Contributor contract"}),e.jsxs(i,{children:["The implementer-facing source of truth is"," ",e.jsx(t,{children:".claude/rules/component-testid-guideline.md"}),". This page is its live, runnable companion — when the rule and this page disagree, the rule wins."]})]})},p={name:"1. data-testid on the root",render:()=>e.jsxs(r,{children:[e.jsx(o,{children:"1. data-testid on the root"}),e.jsxs(s,{children:["Pass ",e.jsx(t,{children:"data-testid"})," like any other DOM attribute. There is no ",e.jsx(t,{children:"testId"})," ","prop — the component spreads ",e.jsx(t,{children:"{...props}"})," onto its rendered root, so the attribute appears on the real element. The same mechanism works for ",e.jsx(t,{children:"data-cy"}),","," ",e.jsx(t,{children:"data-test"}),", or any custom hook."]}),e.jsx(n,{label:"A button with a testid",children:e.jsx(j,{"data-testid":"submit-btn",children:"Save"})}),e.jsx(l,{children:"Rendered DOM"}),e.jsxs(i,{children:["Inspect the button above — the attribute is on the native ",e.jsx(t,{children:"<button>"}),", alongside the public ",e.jsx(t,{children:"st-*"})," classes."]}),e.jsx(a,{children:`<button data-testid="submit-btn" class="st-btn st-btn--primary st-btn--md">
  Save
</button>`}),e.jsx(l,{children:"Selecting it"}),e.jsx(a,{children:`// Playwright
await page.getByTestId('submit-btn').click()

// …but prefer role + name when it is unambiguous:
await page.getByRole('button', { name: 'Save' }).click()`})]})},u={name:"2. Compound components",render:()=>e.jsxs(r,{children:[e.jsx(o,{children:"2. Compound components"}),e.jsxs(s,{children:["Compound components (Select, Tooltip, RadioGroup) are built from named parts, and each part forwards its own props. Put a ",e.jsx(t,{children:"data-testid"})," on whichever parts your test needs — they are independent. Select is the canonical example."]}),e.jsx(n,{label:"Select with a testid on every part (open it)",children:e.jsxs(B,{children:[e.jsx(D,{"data-testid":"country-trigger",className:"w-56",children:e.jsx(N,{placeholder:"Country"})}),e.jsxs(I,{"data-testid":"country-content",children:[e.jsx(f,{value:"jp","data-testid":"country-item-jp",children:"Japan"}),e.jsx(f,{value:"us","data-testid":"country-item-us",children:"United States"})]})]})}),e.jsx(a,{children:`<Select>
  <SelectTrigger data-testid="country-trigger">
    <SelectValue placeholder="Country" />
  </SelectTrigger>
  <SelectContent data-testid="country-content">
    <SelectItem value="jp" data-testid="country-item-jp">Japan</SelectItem>
    <SelectItem value="us" data-testid="country-item-us">United States</SelectItem>
  </SelectContent>
</Select>`}),e.jsxs(i,{children:["Note: Schatten Dialog is ",e.jsx("strong",{children:"not"})," a compound component — it takes structured props (",e.jsx(t,{children:"title"}),", ",e.jsx(t,{children:"actionButton"}),", …) rather than"," ",e.jsx(t,{children:"Dialog.Trigger"})," / ",e.jsx(t,{children:"Dialog.Content"})," sub-parts. See section 5 for how to address it."]})]})},m={name:"3. asChild trigger caveat",render:()=>e.jsxs(r,{children:[e.jsx(o,{children:"3. asChild trigger caveat"}),e.jsxs(s,{children:[e.jsx(t,{children:"TooltipTrigger"})," switches to Radix ",e.jsx(t,{children:"asChild"})," mode when its child is a non-string element (for example a ",e.jsx(t,{children:"Button"}),"). In that mode Radix merges props onto the child, so a ",e.jsx(t,{children:"data-testid"})," on the trigger ends up on ",e.jsx("em",{children:"your"})," element, not on a Schatten-rendered wrapper. Both cases below resolve with"," ",e.jsx(t,{children:"getByTestId('help')"})," — the difference is only where the attribute lands."]}),e.jsx(n,{label:"Text child → Schatten renders the button → testid on it (hover)",children:e.jsx(w,{delayDuration:100,children:e.jsxs(S,{children:[e.jsx(v,{"data-testid":"help-text",children:"Hover for help"}),e.jsx(P,{children:"Saved drafts stay for 30 days."})]})})}),e.jsx(n,{label:"Element child → asChild merges testid onto your Button (hover)",children:e.jsx(w,{delayDuration:100,children:e.jsxs(S,{children:[e.jsx(v,{"data-testid":"help-element",children:e.jsx(j,{variant:"secondary",children:"Help"})}),e.jsx(P,{children:"Saved drafts stay for 30 days."})]})})}),e.jsx(a,{children:`// text child → testid on the Schatten-generated <button>
<TooltipTrigger data-testid="help">Hover for help</TooltipTrigger>

// element child → testid merged onto YOUR <Button>
<TooltipTrigger data-testid="help">
  <Button>Help</Button>
</TooltipTrigger>`})]})},g={name:"4. Portal-rendered content",render:()=>e.jsxs(r,{children:[e.jsx(o,{children:"4. Portal-rendered content"}),e.jsxs(s,{children:[e.jsx(t,{children:"SelectContent"}),", ",e.jsx(t,{children:"TooltipContent"}),", and similar popups render through a Portal into ",e.jsx(t,{children:"document.body"})," — outside ",e.jsx(t,{children:"#storybook-root"})," and outside the trigger's DOM subtree. A selector rooted at the trigger will never reach them by DOM traversal."]}),e.jsx(l,{children:"Two rules"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2 mb-4",children:[e.jsx("li",{children:"Put the testid on the Content element itself, not on the trigger."}),e.jsxs("li",{children:["Scope the query from ",e.jsx(t,{children:"page"})," (Playwright) / ",e.jsx(t,{children:"screen"})," (RTL), not from a trigger-rooted locator."]})]}),e.jsx(n,{label:"Open the select — the listbox is portaled to body",children:e.jsxs(B,{children:[e.jsx(D,{"data-testid":"fruit-trigger",className:"w-56",children:e.jsx(N,{placeholder:"Pick a fruit"})}),e.jsxs(I,{"data-testid":"fruit-content",children:[e.jsx(f,{value:"apple",children:"Apple"}),e.jsx(f,{value:"banana",children:"Banana"}),e.jsx(f,{value:"cherry",children:"Cherry"})]})]})}),e.jsx(a,{children:`// Playwright — open via the trigger, then scope into the portaled content
await page.getByTestId('fruit-trigger').click()
await page
  .getByTestId('fruit-content')
  .getByRole('option', { name: 'Banana' })
  .click()`})]})};function M(){const[d,c]=R.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(j,{"data-testid":"delete-open",onClick:()=>c(!0),children:"Delete account"}),e.jsx(F,{isOpen:d,onOpenChange:c,title:"Delete account",description:"This action cannot be undone.",actionButton:{label:"Delete",variant:"destructive",onClick:()=>c(!1)},cancelButton:{label:"Cancel"},children:e.jsx("p",{"data-testid":"delete-message",children:"Are you sure you want to delete your account?"})})]})}function H(){return e.jsxs(e.Fragment,{children:[e.jsx(j,{onClick:()=>A({title:"Saved successfully",variant:"success"}),children:"Save"}),e.jsx(E,{})]})}const y={name:"5. Curated-props components",render:()=>e.jsxs(r,{children:[e.jsx(o,{children:"5. Curated-props components"}),e.jsxs(s,{children:["A few high-level components take a curated prop surface and do ",e.jsx("strong",{children:"not"})," spread unknown attributes onto their content. For these, address the children you pass in, or query by role + accessible name."]}),e.jsx(k,{children:"Dialog — put the testid on your children"}),e.jsxs(i,{children:["Dialog renders structured props (",e.jsx(t,{children:"title"}),", ",e.jsx(t,{children:"actionButton"}),","," ",e.jsx(t,{children:"cancelButton"}),") and its ",e.jsx(t,{children:"children"})," in the body — it does not forward a"," ",e.jsx(t,{children:"data-testid"})," onto its Content. Put testids on the elements you author, and use"," ",e.jsx(t,{children:"getByRole('dialog', { name })"})," for the frame (Radix sets"," ",e.jsx(t,{children:'role="dialog"'})," and links the title as its name)."]}),e.jsx(n,{label:"Open the dialog (rendered into a Portal)",children:e.jsx(M,{})}),e.jsx(a,{children:`<Dialog title="Delete account" isOpen={open} onOpenChange={setOpen}
  actionButton={{ label: 'Delete', variant: 'destructive', onClick }}>
  <p data-testid="delete-message">Are you sure?</p>
</Dialog>

// Playwright
await page.getByRole('dialog', { name: 'Delete account' })   // the frame
await page.getByTestId('delete-message')                     // your children`}),e.jsx(k,{children:"Toast — imperative, so query by role"}),e.jsxs(i,{children:["Toasts are created by the imperative ",e.jsx(t,{children:"toast({ … })"})," call, which takes no JSX — there is no element to hang a ",e.jsx(t,{children:"data-testid"})," on. Every toast renders with"," ",e.jsx(t,{children:'role="status"'}),", so query by role + accessible name (the title)."]}),e.jsx(n,{label:"Fire a toast",children:e.jsx(H,{})}),e.jsx(a,{children:`toast({ title: 'Saved successfully', variant: 'success' })

// Playwright
await page.getByRole('status', { name: 'Saved successfully' })`})]})},x={name:"6. Form fields",render:()=>e.jsxs(r,{children:[e.jsx(o,{children:"6. Form fields"}),e.jsxs(s,{children:["Compose a labelled field with the flat ",e.jsx(t,{children:"Field"})," API and put the"," ",e.jsx(t,{children:"data-testid"})," on the input you pass as children. Field wires the label, description, and error state around it; the input is still a plain DOM element that forwards"," ","the attribute."]}),e.jsx(n,{label:"Field + Input with a testid",children:e.jsx(O,{label:"Email",error:"Enter a valid email address.",className:"w-72",children:e.jsx(L,{type:"email","data-testid":"email-input",defaultValue:"not-an-email"})})}),e.jsx(a,{children:`<Field label="Email" error={emailError}>
  <Input type="email" data-testid="email-input" />
</Field>

// Playwright
await page.getByTestId('email-input').fill('foo@example.com')`}),e.jsxs(T,{variant:"info",title:"FormField (lv2) is coming in v1+",children:["The one-component short form ",e.jsx(t,{children:"FormField"})," (Field + label + description + error) is planned for v1+ as ",e.jsx("a",{href:"https://github.com/yasmro/schatten/issues/123",children:"#123"}),". It will forward testids onto its children the same way. Until then, compose with ",e.jsx(t,{children:"Field"})," ","as above."]})]})},C={name:"7. Naming & no auto-testid",render:()=>e.jsxs(r,{children:[e.jsx(o,{children:"7. Naming & no auto-testid"}),e.jsx(s,{children:"Choosing testid values is the consuming product's responsibility, not Schatten's. This page only describes the plumbing — where the attribute lands and how it survives a Portal boundary. The naming scheme is yours."}),e.jsx(l,{children:"A recommendation, not a rule"}),e.jsxs(i,{children:["A feature-scoped, purpose-suffixed shape reads well and avoids collisions —"," ",e.jsx(t,{children:"{feature}-{purpose}"}),", e.g. ",e.jsx(t,{children:"signup-email-input"})," or"," ",e.jsx(t,{children:"dashboard-user-menu"}),". ",e.jsx(t,{children:"camelCase"})," and ",e.jsx(t,{children:"kebab-case"})," both work; pick one and keep it consistent across your codebase. Reserve testids for elements that role + accessible name cannot already address."]}),e.jsx(l,{children:"Schatten never injects a testid"}),e.jsxs(T,{variant:"warning",title:"No library-supplied testids",children:["Schatten does not emit ",e.jsx(t,{children:"data-testid"})," from inside the library — no fixed testids on internal Slots or Portals, no values derived from ",e.jsx(t,{children:"displayName"}),", no"," ",e.jsx(t,{children:"testing"}),"-flag toggles. A library-supplied testid would pollute your namespace and force you to dodge reserved names. The single source of truth is you."]}),e.jsxs(i,{children:["Runtime ",e.jsx(t,{children:"data-*"})," attributes that Radix emits for behaviour / styling (",e.jsx(t,{children:"data-state"}),", ",e.jsx(t,{children:"data-disabled"}),", ",e.jsx(t,{children:"data-side"}),") are a separate concern — they are not testids and are safe to rely on for state-scoped assertions."]})]})},b={name:"8. Selector cheatsheet",render:()=>e.jsxs(r,{children:[e.jsx(o,{children:"8. Selector cheatsheet"}),e.jsx(s,{children:"The same intent expressed across the three common test runners. Reach for the role-based row first; fall back to the testid row when role + name cannot disambiguate."}),e.jsx(q,{headers:["Intent","Playwright","Cypress","React Testing Library"],rows:[{key:"role",cells:["By role + name (first choice)",e.jsx(t,{children:"page.getByRole('button', { name })"},"c"),e.jsx(t,{children:"cy.findByRole('button', { name })"},"c"),e.jsx(t,{children:"screen.getByRole('button', { name })"},"c")]},{key:"testid",cells:["By testid (fallback)",e.jsx(t,{children:"page.getByTestId('x')"},"c"),e.jsx(t,{children:`cy.get('[data-testid="x"]')`},"c"),e.jsx(t,{children:"screen.getByTestId('x')"},"c")]},{key:"portal",cells:["Portal content","Scope from page","Document-wide by default",e.jsxs("span",{children:[e.jsx(t,{children:"screen"})," (not ",e.jsx(t,{children:"within"}),")"]},"c")]}]}),e.jsxs(i,{children:["Cypress is shown for reference only — Schatten does not depend on it. The role-based queries come from Testing Library's queries (built into Playwright and"," ",e.jsx(t,{children:"@testing-library/cypress"}),")."]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <Page>
      <PageTitle>Testing</PageTitle>
      <Lead>
        How to make Schatten components addressable from a consumer E2E suite (Playwright / Cypress
        / React Testing Library). The plumbing is deliberately thin: components forward{' '}
        <Code>data-testid</Code> (and every other unknown DOM attribute) onto their root element —
        there is no bespoke <Code>testId</Code> prop to learn.
      </Lead>

      <Callout variant="info" title="Role first, testid second">
        Prefer <Code>{'getByRole(role, { name })'}</Code> with an accessible name. It is stable
        across refactors and doubles as an accessibility check. Reach for <Code>data-testid</Code>{' '}
        only when a role-based query is ambiguous, unstable, or impossible (anonymous wrappers,
        repeated rows).
      </Callout>

      <SectionTitle>What this page covers</SectionTitle>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2">
        <li>
          <strong className="text-foreground">Root pass-through</strong> — testid lands on the
          rendered root via <Code>{'{...props}'}</Code>.
        </li>
        <li>
          <strong className="text-foreground">Compound components</strong> — each sub-part takes its
          own testid (Select).
        </li>
        <li>
          <strong className="text-foreground">asChild caveat</strong> — with an element child the
          testid merges onto the child (Tooltip).
        </li>
        <li>
          <strong className="text-foreground">Portal content</strong> — testid goes on the Content,
          and queries scope from the page (Select / Tooltip).
        </li>
        <li>
          <strong className="text-foreground">Curated-props exceptions</strong> — Dialog and Toast
          do not forward arbitrary attributes; address their children or their role.
        </li>
        <li>
          <strong className="text-foreground">Naming &amp; no auto-testid</strong> — the value is
          yours to choose; Schatten never injects one.
        </li>
      </ul>

      <SectionTitle>Contributor contract</SectionTitle>
      <Note>
        The implementer-facing source of truth is{' '}
        <Code>.claude/rules/component-testid-guideline.md</Code>. This page is its live, runnable
        companion — when the rule and this page disagree, the rule wins.
      </Note>
    </Page>
}`,...h.parameters?.docs?.source},description:{story:"§0 — Overview. The framing for the whole page: role + accessible name is the\nfirst-choice selector; `data-testid` is the fallback hook for elements that\nrole-based queries cannot reach.",...h.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '1. data-testid on the root',
  render: () => <Page>
      <PageTitle>1. data-testid on the root</PageTitle>
      <Lead>
        Pass <Code>data-testid</Code> like any other DOM attribute. There is no <Code>testId</Code>{' '}
        prop — the component spreads <Code>{'{...props}'}</Code> onto its rendered root, so the
        attribute appears on the real element. The same mechanism works for <Code>data-cy</Code>,{' '}
        <Code>data-test</Code>, or any custom hook.
      </Lead>

      <Demo label="A button with a testid">
        <Button data-testid="submit-btn">Save</Button>
      </Demo>

      <SectionTitle>Rendered DOM</SectionTitle>
      <Note>
        Inspect the button above — the attribute is on the native <Code>&lt;button&gt;</Code>,
        alongside the public <Code>st-*</Code> classes.
      </Note>
      <CodeBlock>{\`<button data-testid="submit-btn" class="st-btn st-btn--primary st-btn--md">
  Save
</button>\`}</CodeBlock>

      <SectionTitle>Selecting it</SectionTitle>
      <CodeBlock>{\`// Playwright
await page.getByTestId('submit-btn').click()

// …but prefer role + name when it is unambiguous:
await page.getByRole('button', { name: 'Save' }).click()\`}</CodeBlock>
    </Page>
}`,...p.parameters?.docs?.source},description:{story:"§1 — Root pass-through. Every component spreads `...props` onto its root, so\n`data-testid` (and `data-cy`, `data-test`, …) ride straight through.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '2. Compound components',
  render: () => <Page>
      <PageTitle>2. Compound components</PageTitle>
      <Lead>
        Compound components (Select, Tooltip, RadioGroup) are built from named parts, and each part
        forwards its own props. Put a <Code>data-testid</Code> on whichever parts your test needs —
        they are independent. Select is the canonical example.
      </Lead>

      <Demo label="Select with a testid on every part (open it)">
        <Select>
          <SelectTrigger data-testid="country-trigger" className="w-56">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent data-testid="country-content">
            <SelectItem value="jp" data-testid="country-item-jp">
              Japan
            </SelectItem>
            <SelectItem value="us" data-testid="country-item-us">
              United States
            </SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <CodeBlock>{\`<Select>
  <SelectTrigger data-testid="country-trigger">
    <SelectValue placeholder="Country" />
  </SelectTrigger>
  <SelectContent data-testid="country-content">
    <SelectItem value="jp" data-testid="country-item-jp">Japan</SelectItem>
    <SelectItem value="us" data-testid="country-item-us">United States</SelectItem>
  </SelectContent>
</Select>\`}</CodeBlock>

      <Note>
        Note: Schatten Dialog is <strong>not</strong> a compound component — it takes structured
        props (<Code>title</Code>, <Code>actionButton</Code>, …) rather than{' '}
        <Code>Dialog.Trigger</Code> / <Code>Dialog.Content</Code> sub-parts. See section 5 for how
        to address it.
      </Note>
    </Page>
}`,...u.parameters?.docs?.source},description:{story:`§2 — Compound components. Each named sub-component forwards its own props, so
every part can carry an independent testid. Select is the canonical example.`,...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '3. asChild trigger caveat',
  render: () => <Page>
      <PageTitle>3. asChild trigger caveat</PageTitle>
      <Lead>
        <Code>TooltipTrigger</Code> switches to Radix <Code>asChild</Code> mode when its child is a
        non-string element (for example a <Code>Button</Code>). In that mode Radix merges props onto
        the child, so a <Code>data-testid</Code> on the trigger ends up on <em>your</em> element,
        not on a Schatten-rendered wrapper. Both cases below resolve with{' '}
        <Code>{"getByTestId('help')"}</Code> — the difference is only where the attribute lands.
      </Lead>

      <Demo label="Text child → Schatten renders the button → testid on it (hover)">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger data-testid="help-text">Hover for help</TooltipTrigger>
            <TooltipContent>Saved drafts stay for 30 days.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Demo>

      <Demo label="Element child → asChild merges testid onto your Button (hover)">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger data-testid="help-element">
              <Button variant="secondary">Help</Button>
            </TooltipTrigger>
            <TooltipContent>Saved drafts stay for 30 days.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Demo>

      <CodeBlock>{\`// text child → testid on the Schatten-generated <button>
<TooltipTrigger data-testid="help">Hover for help</TooltipTrigger>

// element child → testid merged onto YOUR <Button>
<TooltipTrigger data-testid="help">
  <Button>Help</Button>
</TooltipTrigger>\`}</CodeBlock>
    </Page>
}`,...m.parameters?.docs?.source},description:{story:`§3 — asChild caveat. A Trigger whose child is an element merges its props onto
that child (Radix Slot), so the testid lands on the child, not on a wrapper.`,...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '4. Portal-rendered content',
  render: () => <Page>
      <PageTitle>4. Portal-rendered content</PageTitle>
      <Lead>
        <Code>SelectContent</Code>, <Code>TooltipContent</Code>, and similar popups render through a
        Portal into <Code>document.body</Code> — outside <Code>#storybook-root</Code> and outside
        the trigger&apos;s DOM subtree. A selector rooted at the trigger will never reach them by
        DOM traversal.
      </Lead>

      <SectionTitle>Two rules</SectionTitle>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2 mb-4">
        <li>Put the testid on the Content element itself, not on the trigger.</li>
        <li>
          Scope the query from <Code>page</Code> (Playwright) / <Code>screen</Code> (RTL), not from
          a trigger-rooted locator.
        </li>
      </ul>

      <Demo label="Open the select — the listbox is portaled to body">
        <Select>
          <SelectTrigger data-testid="fruit-trigger" className="w-56">
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent data-testid="fruit-content">
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <CodeBlock>{\`// Playwright — open via the trigger, then scope into the portaled content
await page.getByTestId('fruit-trigger').click()
await page
  .getByTestId('fruit-content')
  .getByRole('option', { name: 'Banana' })
  .click()\`}</CodeBlock>
    </Page>
}`,...g.parameters?.docs?.source},description:{story:`§4 — Portal content. SelectContent / TooltipContent render into document.body,
outside the component subtree. Put the testid on the Content, scope from page.`,...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '5. Curated-props components',
  render: () => <Page>
      <PageTitle>5. Curated-props components</PageTitle>
      <Lead>
        A few high-level components take a curated prop surface and do <strong>not</strong> spread
        unknown attributes onto their content. For these, address the children you pass in, or query
        by role + accessible name.
      </Lead>

      <SubsectionTitle>Dialog — put the testid on your children</SubsectionTitle>
      <Note>
        Dialog renders structured props (<Code>title</Code>, <Code>actionButton</Code>,{' '}
        <Code>cancelButton</Code>) and its <Code>children</Code> in the body — it does not forward a{' '}
        <Code>data-testid</Code> onto its Content. Put testids on the elements you author, and use{' '}
        <Code>{"getByRole('dialog', { name })"}</Code> for the frame (Radix sets{' '}
        <Code>role=&quot;dialog&quot;</Code> and links the title as its name).
      </Note>
      <Demo label="Open the dialog (rendered into a Portal)">
        <DialogTestidDemo />
      </Demo>
      <CodeBlock>{\`<Dialog title="Delete account" isOpen={open} onOpenChange={setOpen}
  actionButton={{ label: 'Delete', variant: 'destructive', onClick }}>
  <p data-testid="delete-message">Are you sure?</p>
</Dialog>

// Playwright
await page.getByRole('dialog', { name: 'Delete account' })   // the frame
await page.getByTestId('delete-message')                     // your children\`}</CodeBlock>

      <SubsectionTitle>Toast — imperative, so query by role</SubsectionTitle>
      <Note>
        Toasts are created by the imperative <Code>{'toast({ … })'}</Code> call, which takes no JSX
        — there is no element to hang a <Code>data-testid</Code> on. Every toast renders with{' '}
        <Code>role=&quot;status&quot;</Code>, so query by role + accessible name (the title).
      </Note>
      <Demo label="Fire a toast">
        <ToastTestidDemo />
      </Demo>
      <CodeBlock>{\`toast({ title: 'Saved successfully', variant: 'success' })

// Playwright
await page.getByRole('status', { name: 'Saved successfully' })\`}</CodeBlock>
    </Page>
}`,...y.parameters?.docs?.source},description:{story:"§5 — Curated-props exceptions. Dialog and Toast expose a curated prop surface\n(no `...rest` pass-through). Address their children / their role instead.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '6. Form fields',
  render: () => <Page>
      <PageTitle>6. Form fields</PageTitle>
      <Lead>
        Compose a labelled field with the flat <Code>Field</Code> API and put the{' '}
        <Code>data-testid</Code> on the input you pass as children. Field wires the label,
        description, and error state around it; the input is still a plain DOM element that forwards{' '}
        the attribute.
      </Lead>

      <Demo label="Field + Input with a testid">
        <Field label="Email" error="Enter a valid email address." className="w-72">
          <Input type="email" data-testid="email-input" defaultValue="not-an-email" />
        </Field>
      </Demo>

      <CodeBlock>{\`<Field label="Email" error={emailError}>
  <Input type="email" data-testid="email-input" />
</Field>

// Playwright
await page.getByTestId('email-input').fill('foo@example.com')\`}</CodeBlock>

      <Callout variant="info" title="FormField (lv2) is coming in v1+">
        The one-component short form <Code>FormField</Code> (Field + label + description + error) is
        planned for v1+ as <a href="https://github.com/yasmro/schatten/issues/123">#123</a>. It will
        forward testids onto its children the same way. Until then, compose with <Code>Field</Code>{' '}
        as above.
      </Callout>
    </Page>
}`,...x.parameters?.docs?.source},description:{story:`§6 — Form fields. The flat Field API wraps a labelled input; put the testid on
the input element you pass as children.`,...x.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '7. Naming & no auto-testid',
  render: () => <Page>
      <PageTitle>7. Naming &amp; no auto-testid</PageTitle>
      <Lead>
        Choosing testid values is the consuming product&apos;s responsibility, not Schatten&apos;s.
        This page only describes the plumbing — where the attribute lands and how it survives a
        Portal boundary. The naming scheme is yours.
      </Lead>

      <SectionTitle>A recommendation, not a rule</SectionTitle>
      <Note>
        A feature-scoped, purpose-suffixed shape reads well and avoids collisions —{' '}
        <Code>{'{feature}-{purpose}'}</Code>, e.g. <Code>signup-email-input</Code> or{' '}
        <Code>dashboard-user-menu</Code>. <Code>camelCase</Code> and <Code>kebab-case</Code> both
        work; pick one and keep it consistent across your codebase. Reserve testids for elements
        that role + accessible name cannot already address.
      </Note>

      <SectionTitle>Schatten never injects a testid</SectionTitle>
      <Callout variant="warning" title="No library-supplied testids">
        Schatten does not emit <Code>data-testid</Code> from inside the library — no fixed testids
        on internal Slots or Portals, no values derived from <Code>displayName</Code>, no{' '}
        <Code>testing</Code>-flag toggles. A library-supplied testid would pollute your namespace
        and force you to dodge reserved names. The single source of truth is you.
      </Callout>
      <Note>
        Runtime <Code>data-*</Code> attributes that Radix emits for behaviour / styling (
        <Code>data-state</Code>, <Code>data-disabled</Code>, <Code>data-side</Code>) are a separate
        concern — they are not testids and are safe to rely on for state-scoped assertions.
      </Note>
    </Page>
}`,...C.parameters?.docs?.source},description:{story:`§7 — Naming & no auto-testid. The value is the consumer's call; Schatten never
injects a testid of its own.`,...C.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '8. Selector cheatsheet',
  render: () => <Page>
      <PageTitle>8. Selector cheatsheet</PageTitle>
      <Lead>
        The same intent expressed across the three common test runners. Reach for the role-based row
        first; fall back to the testid row when role + name cannot disambiguate.
      </Lead>

      <DocsTable headers={['Intent', 'Playwright', 'Cypress', 'React Testing Library']} rows={[{
      key: 'role',
      cells: ['By role + name (first choice)', <Code key="c">{"page.getByRole('button', { name })"}</Code>, <Code key="c">{"cy.findByRole('button', { name })"}</Code>, <Code key="c">{"screen.getByRole('button', { name })"}</Code>]
    }, {
      key: 'testid',
      cells: ['By testid (fallback)', <Code key="c">{"page.getByTestId('x')"}</Code>, <Code key="c">{'cy.get(\\'[data-testid="x"]\\')'}</Code>, <Code key="c">{"screen.getByTestId('x')"}</Code>]
    }, {
      key: 'portal',
      cells: ['Portal content', 'Scope from page', 'Document-wide by default', <span key="c">
                <Code>screen</Code> (not <Code>within</Code>)
              </span>]
    }]} />

      <Note>
        Cypress is shown for reference only — Schatten does not depend on it. The role-based queries
        come from Testing Library&apos;s queries (built into Playwright and{' '}
        <Code>@testing-library/cypress</Code>).
      </Note>
    </Page>
}`,...b.parameters?.docs?.source},description:{story:`§8 — Selector cheatsheet. The same intent across Playwright, Cypress, and
React Testing Library, with role-first as the default.`,...b.parameters?.docs?.description}}};const Ae=["Overview","RootPassThrough","CompoundComponents","AsChildCaveat","PortalContent","CuratedPropsExceptions","FormFields","NamingAndNoAutoTestid","FrameworkSelectors"];export{m as AsChildCaveat,u as CompoundComponents,y as CuratedPropsExceptions,x as FormFields,b as FrameworkSelectors,C as NamingAndNoAutoTestid,h as Overview,g as PortalContent,p as RootPassThrough,Ae as __namedExportsOrder,Le as default};
