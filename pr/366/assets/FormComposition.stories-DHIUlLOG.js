import{j as e,r as w}from"./iframe-CbV5k-_I.js";import{B as C}from"./Button-E37_iRSe.js";import{C as k}from"./Callout-DI2shFcg.js";import{C as p}from"./Checkbox-XG4fxi3F.js";import{F as r}from"./Field-BIlFKf2H.js";import{F as u}from"./FieldSet-BB689Ax-.js";import{I as t}from"./Input-oklObyQt.js";import{R as N,a as x}from"./Radio-DXWk-T87.js";import{S as R,a as q,b as E,c as I,d as S}from"./Select-Dg1_KT_p.js";import{S as F}from"./Switch-YlM5GXqH.js";import{S as T,N as y}from"./docs-ui-C3XKoq03.js";import"./preload-helper-VY8rRz73.js";import"./index-BWgpEsHA.js";import"./index-jIEpeXus.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               */import"./Spinner-DdE_zQLv.js";/* empty css                *//* empty css                */import"./circle-alert-BIu_UBhu.js";import"./createLucideIcon-j-KKbTfp.js";import"./triangle-alert-D6J96sFZ.js";import"./info-CEkWEvF0.js";import"./x-DMyLZzCs.js";import"./index-CKXc5KXA.js";import"./index-C_F8iLN-.js";import"./index-d16wfKSQ.js";import"./index-BpaEESb8.js";import"./index-CW_yh920.js";import"./index-BERfyLGF.js";import"./field-hIx49El6.js";/* empty css                 */import"./Tooltip-CybSDkd8.js";import"./index-C73NHCru.js";import"./index-BaJfmlwD.js";import"./index-BGlNJeIt.js";import"./index-pZrhy7nm.js";import"./index-B5nXdQdX.js";/* empty css                *//* empty css              *//* empty css                 *//* empty css              */import"./index-Bl5cs4ME.js";import"./index-DMROcqh0.js";/* empty css              */import"./Combination-BS52WgZK.js";/* empty css               */import"./chevron-up-D0t-O2yi.js";import"./check-DXbEJOm1.js";/* empty css               */const Ee={title:"Patterns/Form Composition",parameters:{layout:"fullscreen",docs:{description:{component:["Recipes for composing forms with Field and FieldSet.","Every section is written so the code can be copy-pasted as-is.","","- **Field** — flat API wrapping a single input with label / description / error","- **FieldSet** — groups multiple Fields with a group-level legend / error","- **Checkbox / Radio / Switch** — carry their own label, so they are not wrapped in Field","","The lv2 `FormField` short form is planned for v1+ (#123)."].join(`
`)}}}},a={name:"1. Field basics",parameters:{docs:{description:{story:"The `<label htmlFor>` is wired to the input through Field's `useId()`, so `getByRole('textbox', { name: 'Email' })` resolves it. Note: `required` only renders a visual `*` — it does **not** propagate `aria-required` to the input (a known gap documented in component-architecture §8). For now, set `required` on the input element yourself."}}},render:()=>e.jsx("div",{className:"w-96 mx-auto mt-12",children:e.jsx(r,{label:"Email",description:"Used when you sign in",required:!0,children:e.jsx(t,{type:"email",placeholder:"you@example.com"})})})},s={name:"2. Error state",parameters:{docs:{description:{story:'Setting `error` automatically derives `isError: true`, which wires `aria-invalid="true"` + `aria-describedby` on the input pointing at the message. Meaning is carried by the error text, not colour alone (see css-api.md "Color alone is not enough").'}}},render:()=>e.jsx("div",{className:"w-96 mx-auto mt-12",children:e.jsx(r,{label:"Email",error:"Enter a valid email address",required:!0,children:e.jsx(t,{type:"email",defaultValue:"invalid-email"})})})},n={name:"3. Grouping with FieldSet",parameters:{docs:{description:{story:'FieldSet renders a native `<fieldset>` + `<legend>` for built-in a11y, and `disabled` propagates to every descendant control through the native fieldset. A nested `direction="row"` FieldSet lays two Fields side by side; `flexGrow` / `flexShrink` tune how each one stretches.'}}},render:()=>e.jsxs(u,{legend:"Shipping address",description:"Where we deliver",className:"w-96 mx-auto mt-12",children:[e.jsx(r,{label:"Street",required:!0,children:e.jsx(t,{placeholder:"1-2-3 Minato"})}),e.jsxs(u,{direction:"row",children:[e.jsx(r,{label:"City",required:!0,flexGrow:1,children:e.jsx(t,{placeholder:"Minato"})}),e.jsx(r,{label:"Postal code",required:!0,flexShrink:0,children:e.jsx(t,{placeholder:"100-0001",className:"w-32"})})]}),e.jsx(r,{label:"Country",children:e.jsxs(R,{defaultValue:"jp",children:[e.jsx(q,{children:e.jsx(E,{})}),e.jsxs(I,{children:[e.jsx(S,{value:"jp",children:"Japan"}),e.jsx(S,{value:"us",children:"United States"})]})]})})]})},l={name:"4. Checkbox / Radio / Switch",parameters:{docs:{description:{story:"Checkbox / Switch / Radio carry their own `<label>`, so they are **not** wrapped in Field (no id wiring needed — see field-context-guideline.md). To group them, drop them directly under a FieldSet. Radio is wrapped in a RadioGroup, and that group is wrapped by a single Field to give it a group label."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-96 mx-auto mt-12",children:[e.jsxs(u,{legend:"Notifications",description:"Choose any",children:[e.jsx(p,{label:"Email",defaultChecked:!0}),e.jsx(p,{label:"SMS"}),e.jsx(p,{label:"Push",defaultChecked:!0})]}),e.jsx(r,{label:"Plan",required:!0,children:e.jsxs(N,{defaultValue:"pro",children:[e.jsx(x,{value:"free",label:"Free"}),e.jsx(x,{value:"pro",label:"Pro"}),e.jsx(x,{value:"enterprise",label:"Enterprise"})]})}),e.jsxs(u,{legend:"Display",children:[e.jsx(F,{label:"Dark mode"}),e.jsx(F,{label:"High contrast"})]})]})},d={name:"5. Complete sign-up form",parameters:{docs:{description:{story:"Manages every Field `error` in one state object and disables the controls with `disabled={submitting}` while in flight. Button's `isLoading` raises `aria-busy=\"true\"` and keeps the form's disabled state consistent."}}},render:()=>{const[i,g]=w.useState(!1),[h,j]=w.useState({}),v=b=>{b.preventDefault();const f=new FormData(b.currentTarget),o={};f.get("email")||(o.email="Email is required"),f.get("password")||(o.password="Password is required"),j(o),Object.keys(o).length===0&&(g(!0),g(!1))};return e.jsxs("form",{onSubmit:v,className:"w-96 mx-auto mt-12 flex flex-col gap-4",children:[e.jsx(r,{label:"Email",required:!0,error:h.email,children:e.jsx(t,{type:"email",name:"email",disabled:i})}),e.jsx(r,{label:"Password",required:!0,error:h.password,children:e.jsx(t,{type:"password",name:"password",disabled:i})}),e.jsx(r,{label:"Password (confirm)",required:!0,error:h.passwordConfirm,children:e.jsx(t,{type:"password",name:"passwordConfirm",disabled:i})}),e.jsx(p,{label:"I agree to the terms",name:"agree",disabled:i}),e.jsx(C,{type:"submit",isLoading:i,children:"Sign up"})]})}},c={name:"6. react-hook-form integration",parameters:{docs:{description:{story:["Recommended pattern for pairing with `react-hook-form`:","","```tsx","import { useForm } from 'react-hook-form'","","function SignUpForm() {","  const { register, handleSubmit, formState: { errors } } = useForm()","  return (","    <form onSubmit={handleSubmit(onSubmit)}>",'      <Field label="Email" required error={errors.email?.message}>',"        <Input {...register('email', { required: 'Required' })} />","      </Field>",'      <Button type="submit">Sign up</Button>',"    </form>","  )","}","```"].join(`
`)}}},render:()=>e.jsxs("div",{className:"max-w-2xl mx-auto px-8 py-12",children:[e.jsx(T,{children:"react-hook-form integration"}),e.jsx(y,{children:"The code in the Docs panel above works as-is. The three Schatten-side guarantees that make it work:"}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-xs",children:"Input"})," is ",e.jsx("code",{className:"text-xs",children:"forwardRef"}),"-ed, so spreading ",e.jsx("code",{className:"text-xs",children:"{...register(...)}"})," alone delivers the ref / onChange."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-xs",children:"Select"})," / ",e.jsx("code",{className:"text-xs",children:"RadioGroup"})," /"," ",e.jsx("code",{className:"text-xs",children:"Switch"})," are controlled, so wrap them in"," ",e.jsx("code",{className:"text-xs",children:"Controller"}),"."]}),e.jsxs("li",{children:["Pass ",e.jsx("code",{className:"text-xs",children:"errors.<name>?.message"})," straight into the Field"," ",e.jsx("code",{className:"text-xs",children:"error"})," prop."]})]}),e.jsxs(y,{children:["TanStack Form / Conform work the same way — wrap controlled components in their"," ",e.jsx("code",{className:"text-xs",children:"Controller"})," equivalent."]})]})},m={name:"7. FormField (lv2) — coming in v1+",parameters:{docs:{description:{story:"The lv2 `FormField` (a one-component short form of Field + label + description + error) is planned for v1+ as #123. Once it lands, it will be added here as a dedicated section."}}},render:()=>e.jsx("div",{className:"max-w-lg mx-auto mt-12",children:e.jsxs(k,{variant:"info",title:"Coming soon",children:["The lv2 ",e.jsx("code",{children:"FormField"})," (a one-component short form of Field + label + description + error) is planned for the v1+ milestone as"," ",e.jsx("a",{href:"https://github.com/yasmro/schatten/issues/123",children:"#123"}),". Once it lands, it will be added to this page as a dedicated section."]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '1. Field basics',
  parameters: {
    docs: {
      description: {
        story: "The \`<label htmlFor>\` is wired to the input through Field's \`useId()\`, so \`getByRole('textbox', { name: 'Email' })\` resolves it. Note: \`required\` only renders a visual \`*\` — it does **not** propagate \`aria-required\` to the input (a known gap documented in component-architecture §8). For now, set \`required\` on the input element yourself."
      }
    }
  },
  render: () => <div className="w-96 mx-auto mt-12">
      <Field label="Email" description="Used when you sign in" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '2. Error state',
  parameters: {
    docs: {
      description: {
        story: 'Setting \`error\` automatically derives \`isError: true\`, which wires \`aria-invalid="true"\` + \`aria-describedby\` on the input pointing at the message. Meaning is carried by the error text, not colour alone (see css-api.md "Color alone is not enough").'
      }
    }
  },
  render: () => <div className="w-96 mx-auto mt-12">
      <Field label="Email" error="Enter a valid email address" required>
        <Input type="email" defaultValue="invalid-email" />
      </Field>
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '3. Grouping with FieldSet',
  parameters: {
    docs: {
      description: {
        story: 'FieldSet renders a native \`<fieldset>\` + \`<legend>\` for built-in a11y, and \`disabled\` propagates to every descendant control through the native fieldset. A nested \`direction="row"\` FieldSet lays two Fields side by side; \`flexGrow\` / \`flexShrink\` tune how each one stretches.'
      }
    }
  },
  render: () => <FieldSet legend="Shipping address" description="Where we deliver" className="w-96 mx-auto mt-12">
      <Field label="Street" required>
        <Input placeholder="1-2-3 Minato" />
      </Field>
      <FieldSet direction="row">
        <Field label="City" required flexGrow={1}>
          <Input placeholder="Minato" />
        </Field>
        <Field label="Postal code" required flexShrink={0}>
          <Input placeholder="100-0001" className="w-32" />
        </Field>
      </FieldSet>
      <Field label="Country">
        <Select defaultValue="jp">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jp">Japan</SelectItem>
            <SelectItem value="us">United States</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </FieldSet>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '4. Checkbox / Radio / Switch',
  parameters: {
    docs: {
      description: {
        story: 'Checkbox / Switch / Radio carry their own \`<label>\`, so they are **not** wrapped in Field (no id wiring needed — see field-context-guideline.md). To group them, drop them directly under a FieldSet. Radio is wrapped in a RadioGroup, and that group is wrapped by a single Field to give it a group label.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-8 w-96 mx-auto mt-12">
      {/* Checkbox owns its label — place under FieldSet, not Field */}
      <FieldSet legend="Notifications" description="Choose any">
        <Checkbox label="Email" defaultChecked />
        <Checkbox label="SMS" />
        <Checkbox label="Push" defaultChecked />
      </FieldSet>

      {/* Radio is wrapped in RadioGroup, then Field gives the group a label */}
      <Field label="Plan" required>
        <RadioGroup defaultValue="pro">
          <Radio value="free" label="Free" />
          <Radio value="pro" label="Pro" />
          <Radio value="enterprise" label="Enterprise" />
        </RadioGroup>
      </Field>

      {/* Switch owns its label too */}
      <FieldSet legend="Display">
        <Switch label="Dark mode" />
        <Switch label="High contrast" />
      </FieldSet>
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '5. Complete sign-up form',
  parameters: {
    docs: {
      description: {
        story: 'Manages every Field \`error\` in one state object and disables the controls with \`disabled={submitting}\` while in flight. Button\\'s \`isLoading\` raises \`aria-busy="true"\` and keeps the form\\'s disabled state consistent.'
      }
    }
  },
  render: () => {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const next: Record<string, string> = {};
      if (!data.get('email')) next.email = 'Email is required';
      if (!data.get('password')) next.password = 'Password is required';
      setErrors(next);
      if (Object.keys(next).length === 0) {
        setSubmitting(true);
        // In a real form this would call an API; reset immediately for the demo.
        setSubmitting(false);
      }
    };
    return <form onSubmit={handleSubmit} className="w-96 mx-auto mt-12 flex flex-col gap-4">
        <Field label="Email" required error={errors.email}>
          <Input type="email" name="email" disabled={submitting} />
        </Field>
        <Field label="Password" required error={errors.password}>
          <Input type="password" name="password" disabled={submitting} />
        </Field>
        <Field label="Password (confirm)" required error={errors.passwordConfirm}>
          <Input type="password" name="passwordConfirm" disabled={submitting} />
        </Field>
        <Checkbox label="I agree to the terms" name="agree" disabled={submitting} />
        <Button type="submit" isLoading={submitting}>
          Sign up
        </Button>
      </form>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '6. react-hook-form integration',
  parameters: {
    docs: {
      description: {
        story: ['Recommended pattern for pairing with \`react-hook-form\`:', '', '\`\`\`tsx', "import { useForm } from 'react-hook-form'", '', 'function SignUpForm() {', '  const { register, handleSubmit, formState: { errors } } = useForm()', '  return (', '    <form onSubmit={handleSubmit(onSubmit)}>', '      <Field label="Email" required error={errors.email?.message}>', "        <Input {...register('email', { required: 'Required' })} />", '      </Field>', '      <Button type="submit">Sign up</Button>', '    </form>', '  )', '}', '\`\`\`'].join('\\n')
      }
    }
  },
  render: () => <div className="max-w-2xl mx-auto px-8 py-12">
      <SectionTitle>react-hook-form integration</SectionTitle>
      <Note>
        The code in the Docs panel above works as-is. The three Schatten-side guarantees that make
        it work:
      </Note>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2">
        <li>
          <code className="text-xs">Input</code> is <code className="text-xs">forwardRef</code>-ed,
          so spreading <code className="text-xs">{'{...register(...)}'}</code> alone delivers the
          ref / onChange.
        </li>
        <li>
          <code className="text-xs">Select</code> / <code className="text-xs">RadioGroup</code> /{' '}
          <code className="text-xs">Switch</code> are controlled, so wrap them in{' '}
          <code className="text-xs">Controller</code>.
        </li>
        <li>
          Pass <code className="text-xs">errors.&lt;name&gt;?.message</code> straight into the Field{' '}
          <code className="text-xs">error</code> prop.
        </li>
      </ul>
      <Note>
        TanStack Form / Conform work the same way — wrap controlled components in their{' '}
        <code className="text-xs">Controller</code> equivalent.
      </Note>
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '7. FormField (lv2) — coming in v1+',
  parameters: {
    docs: {
      description: {
        story: 'The lv2 \`FormField\` (a one-component short form of Field + label + description + error) is planned for v1+ as #123. Once it lands, it will be added here as a dedicated section.'
      }
    }
  },
  render: () => <div className="max-w-lg mx-auto mt-12">
      <Callout variant="info" title="Coming soon">
        The lv2 <code>FormField</code> (a one-component short form of Field + label + description +
        error) is planned for the v1+ milestone as{' '}
        <a href="https://github.com/yasmro/schatten/issues/123">#123</a>. Once it lands, it will be
        added to this page as a dedicated section.
      </Callout>
    </div>
}`,...m.parameters?.docs?.source}}};const Ie=["BasicField","FieldWithError","FieldSetGrouping","CheckboxRadioSwitch","CompleteSignUpForm","WithReactHookForm","FormFieldComingSoon"];export{a as BasicField,l as CheckboxRadioSwitch,d as CompleteSignUpForm,n as FieldSetGrouping,s as FieldWithError,m as FormFieldComingSoon,c as WithReactHookForm,Ie as __namedExportsOrder,Ee as default};
