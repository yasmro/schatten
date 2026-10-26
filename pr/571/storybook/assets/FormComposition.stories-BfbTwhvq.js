import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,n}from"./iframe-Kq2YAeAp.js";import{n as r,t as i}from"./Button-DOtsBEzS.js";import{n as a,t as o}from"./Checkbox-DbsQRZ4_.js";import{n as s,t as c}from"./Input-D8O9Y2Xk.js";import{n as l,t as u}from"./Field-CWYMAoLt.js";import{n as d,r as f,t as p}from"./Radio-CM01eSrR.js";import{c as m,i as h,l as g,n as _,s as v,t as y}from"./Select-BEVhVzQL.js";import{n as b,t as x}from"./Switch-BCLXrUoc.js";import{n as S,t as C}from"./FieldSet-DsRCJRkB.js";import{c as w,i as T,o as E}from"./docs-ui-BelCc-7u.js";var D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{D=t(),r(),a(),l(),S(),s(),f(),g(),b(),w(),O=n(),k={title:`Patterns/Form Composition`,parameters:{layout:`fullscreen`}},A={name:`1. Field basics`,render:()=>(0,O.jsxs)(`div`,{className:`mx-auto mt-12 flex w-96 flex-col gap-4`,children:[(0,O.jsxs)(T,{children:[`A single Field wires the label, description, and required marker to the input. Note:`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`required`}),` renders the visual`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`*`}),` and sets `,(0,O.jsx)(`code`,{className:`text-xs`,children:`aria-required`}),` `,`on the input (announce-only) — native validation is `,(0,O.jsx)(`strong`,{children:`not`}),` enabled; add`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`required`}),` to the input element yourself when you want form-submission blocking.`]}),(0,O.jsx)(u,{label:`Email`,description:`Used when you sign in`,required:!0,children:(0,O.jsx)(c,{type:`email`,placeholder:`you@example.com`})})]})},j={name:`2. Error state`,render:()=>(0,O.jsxs)(`div`,{className:`mx-auto mt-12 flex w-96 flex-col gap-4`,children:[(0,O.jsxs)(T,{children:[`Passing `,(0,O.jsx)(`code`,{className:`text-xs`,children:`error`}),` auto-derives`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`isError`}),`, which wires`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`aria-invalid="true"`}),` +`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`aria-describedby`}),` on the input. Meaning comes from the error text, not colour alone.`]}),(0,O.jsx)(u,{label:`Email`,error:`Enter a valid email address`,required:!0,children:(0,O.jsx)(c,{type:`email`,defaultValue:`invalid-email`})})]})},M={name:`3. Grouping with FieldSet`,render:()=>(0,O.jsxs)(`div`,{className:`mx-auto mt-12 w-96`,children:[(0,O.jsxs)(T,{children:[`FieldSet renders a native `,(0,O.jsx)(`code`,{className:`text-xs`,children:`<fieldset>`}),` +`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`<legend>`}),`, and`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`disabled`}),` propagates to every descendant control. A nested`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`direction="row"`}),` FieldSet lays two fields side by side, tuned with `,(0,O.jsx)(`code`,{className:`text-xs`,children:`flexGrow`}),` /`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`flexShrink`}),`.`]}),(0,O.jsxs)(C,{legend:`Shipping address`,description:`Where we deliver`,children:[(0,O.jsx)(u,{label:`Street`,required:!0,children:(0,O.jsx)(c,{placeholder:`1-2-3 Minato`})}),(0,O.jsxs)(C,{direction:`row`,children:[(0,O.jsx)(u,{label:`City`,required:!0,flexGrow:1,children:(0,O.jsx)(c,{placeholder:`Minato`})}),(0,O.jsx)(u,{label:`Postal code`,required:!0,flexShrink:0,children:(0,O.jsx)(c,{placeholder:`100-0001`,className:`w-32`})})]}),(0,O.jsx)(u,{label:`Country`,children:(0,O.jsxs)(y,{defaultValue:`jp`,children:[(0,O.jsx)(v,{children:(0,O.jsx)(m,{})}),(0,O.jsxs)(_,{children:[(0,O.jsx)(h,{value:`jp`,children:`Japan`}),(0,O.jsx)(h,{value:`us`,children:`United States`})]})]})})]})]})},N={name:`4. Checkbox / Radio / Switch`,render:()=>(0,O.jsxs)(`div`,{className:`mx-auto mt-12 w-96`,children:[(0,O.jsxs)(T,{children:[`Checkbox / Switch / Radio carry their own `,(0,O.jsx)(`code`,{className:`text-xs`,children:`<label>`}),`, so they are `,(0,O.jsx)(`strong`,{children:`not`}),` wrapped in Field — group them directly under a FieldSet. Radio is wrapped in a RadioGroup, and that group is wrapped by a single Field for its group label.`]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,O.jsxs)(C,{legend:`Notifications`,description:`Choose any`,children:[(0,O.jsx)(o,{label:`Email`,defaultChecked:!0}),(0,O.jsx)(o,{label:`SMS`}),(0,O.jsx)(o,{label:`Push`,defaultChecked:!0})]}),(0,O.jsx)(u,{label:`Plan`,required:!0,children:(0,O.jsxs)(d,{defaultValue:`pro`,children:[(0,O.jsx)(p,{value:`free`,label:`Free`}),(0,O.jsx)(p,{value:`pro`,label:`Pro`}),(0,O.jsx)(p,{value:`enterprise`,label:`Enterprise`})]})}),(0,O.jsxs)(C,{legend:`Display`,children:[(0,O.jsx)(x,{label:`Dark mode`}),(0,O.jsx)(x,{label:`High contrast`})]})]})]})},P={name:`5. Complete sign-up form`,render:()=>{let[e,t]=(0,D.useState)(!1),[n,r]=(0,D.useState)({});return(0,O.jsxs)(`div`,{className:`mx-auto mt-12 w-96`,children:[(0,O.jsxs)(T,{children:[`Errors live in one state object;`,` `,(0,O.jsxs)(`code`,{className:`text-xs`,children:[`disabled=`,`{submitting}`]}),` plus Button`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`isLoading`}),` (which sets`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`aria-busy="true"`}),`) keep the form consistent while the simulated request runs.`]}),(0,O.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let n=new FormData(e.currentTarget),i=n.get(`password`),a={};n.get(`email`)||(a.email=`Email is required`),i?i!==n.get(`passwordConfirm`)&&(a.passwordConfirm=`Passwords do not match`):a.password=`Password is required`,r(a),Object.keys(a).length===0&&(t(!0),setTimeout(()=>t(!1),1200))},className:`flex flex-col gap-4`,children:[(0,O.jsx)(u,{label:`Email`,required:!0,error:n.email,children:(0,O.jsx)(c,{type:`email`,name:`email`,disabled:e})}),(0,O.jsx)(u,{label:`Password`,required:!0,error:n.password,children:(0,O.jsx)(c,{type:`password`,name:`password`,disabled:e})}),(0,O.jsx)(u,{label:`Password (confirm)`,required:!0,error:n.passwordConfirm,children:(0,O.jsx)(c,{type:`password`,name:`passwordConfirm`,disabled:e})}),(0,O.jsx)(o,{label:`I agree to the terms`,name:`agree`,disabled:e}),(0,O.jsx)(i,{type:`submit`,isLoading:e,className:`self-start`,children:`Sign up`})]})]})}},F={name:`6. react-hook-form integration`,render:()=>(0,O.jsxs)(`div`,{className:`mx-auto max-w-2xl px-8 py-12`,children:[(0,O.jsx)(E,{children:`react-hook-form integration`}),(0,O.jsxs)(T,{children:[`Recommended pattern for pairing with `,(0,O.jsx)(`code`,{className:`text-xs`,children:`react-hook-form`}),`. The snippet below works as-is — the three Schatten-side guarantees that make it work:`]}),(0,O.jsxs)(`ul`,{className:`flex list-disc flex-col gap-2 pl-6 text-sm text-foreground-muted`,children:[(0,O.jsxs)(`li`,{children:[(0,O.jsx)(`code`,{className:`text-xs`,children:`Input`}),` is `,(0,O.jsx)(`code`,{className:`text-xs`,children:`forwardRef`}),`-ed, so spreading `,(0,O.jsx)(`code`,{className:`text-xs`,children:`{...register(...)}`}),` alone delivers the ref / onChange.`]}),(0,O.jsxs)(`li`,{children:[(0,O.jsx)(`code`,{className:`text-xs`,children:`Select`}),` / `,(0,O.jsx)(`code`,{className:`text-xs`,children:`RadioGroup`}),` /`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`Switch`}),` are controlled, so wrap them in`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`Controller`}),`.`]}),(0,O.jsxs)(`li`,{children:[`Pass `,(0,O.jsx)(`code`,{className:`text-xs`,children:`errors.<name>?.message`}),` straight into the Field`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`error`}),` prop.`]})]}),(0,O.jsx)(`pre`,{className:`mt-4 overflow-x-auto rounded-md border border-border bg-surface-hover p-4 text-xs text-foreground`,children:(0,O.jsx)(`code`,{children:`import { useForm } from 'react-hook-form'

function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Email" required error={errors.email?.message}>
        <Input {...register('email', { required: 'Required' })} />
      </Field>
      <Button type="submit">Sign up</Button>
    </form>
  )
}`})}),(0,O.jsxs)(T,{children:[`TanStack Form / Conform work the same way — wrap controlled components in their`,` `,(0,O.jsx)(`code`,{className:`text-xs`,children:`Controller`}),` equivalent.`]})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '1. Field basics',
  render: () => <div className="mx-auto mt-12 flex w-96 flex-col gap-4">
      <Note>
        A single Field wires the label, description, and required marker to the input. Note:{' '}
        <code className="text-xs">required</code> renders the visual{' '}
        <code className="text-xs">*</code> and sets <code className="text-xs">aria-required</code>{' '}
        on the input (announce-only) — native validation is <strong>not</strong> enabled; add{' '}
        <code className="text-xs">required</code> to the input element yourself when you want
        form-submission blocking.
      </Note>
      <Field label="Email" description="Used when you sign in" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '2. Error state',
  render: () => <div className="mx-auto mt-12 flex w-96 flex-col gap-4">
      <Note>
        Passing <code className="text-xs">error</code> auto-derives{' '}
        <code className="text-xs">isError</code>, which wires{' '}
        <code className="text-xs">aria-invalid="true"</code> +{' '}
        <code className="text-xs">aria-describedby</code> on the input. Meaning comes from the error
        text, not colour alone.
      </Note>
      <Field label="Email" error="Enter a valid email address" required>
        <Input type="email" defaultValue="invalid-email" />
      </Field>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '3. Grouping with FieldSet',
  render: () => <div className="mx-auto mt-12 w-96">
      <Note>
        FieldSet renders a native <code className="text-xs">&lt;fieldset&gt;</code> +{' '}
        <code className="text-xs">&lt;legend&gt;</code>, and{' '}
        <code className="text-xs">disabled</code> propagates to every descendant control. A nested{' '}
        <code className="text-xs">direction="row"</code> FieldSet lays two fields side by side,
        tuned with <code className="text-xs">flexGrow</code> /{' '}
        <code className="text-xs">flexShrink</code>.
      </Note>
      <FieldSet legend="Shipping address" description="Where we deliver">
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
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '4. Checkbox / Radio / Switch',
  render: () => <div className="mx-auto mt-12 w-96">
      <Note>
        Checkbox / Switch / Radio carry their own <code className="text-xs">&lt;label&gt;</code>, so
        they are <strong>not</strong> wrapped in Field — group them directly under a FieldSet. Radio
        is wrapped in a RadioGroup, and that group is wrapped by a single Field for its group label.
      </Note>
      <div className="flex flex-col gap-8">
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
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '5. Complete sign-up form',
  render: () => {
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const password = data.get('password');
      const next: Record<string, string> = {};
      if (!data.get('email')) next.email = 'Email is required';
      if (!password) next.password = 'Password is required';else if (password !== data.get('passwordConfirm')) next.passwordConfirm = 'Passwords do not match';
      setErrors(next);
      if (Object.keys(next).length === 0) {
        setSubmitting(true);
        // Simulate an async request so the loading / disabled state is visible.
        setTimeout(() => setSubmitting(false), 1200);
      }
    };
    return <div className="mx-auto mt-12 w-96">
        <Note>
          Errors live in one state object;{' '}
          <code className="text-xs">disabled={'{submitting}'}</code> plus Button{' '}
          <code className="text-xs">isLoading</code> (which sets{' '}
          <code className="text-xs">aria-busy="true"</code>) keep the form consistent while the
          simulated request runs.
        </Note>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <Button type="submit" isLoading={submitting} className="self-start">
            Sign up
          </Button>
        </form>
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '6. react-hook-form integration',
  render: () => <div className="mx-auto max-w-2xl px-8 py-12">
      <SectionTitle>react-hook-form integration</SectionTitle>
      <Note>
        Recommended pattern for pairing with <code className="text-xs">react-hook-form</code>. The
        snippet below works as-is — the three Schatten-side guarantees that make it work:
      </Note>
      <ul className="flex list-disc flex-col gap-2 pl-6 text-sm text-foreground-muted">
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
      <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-surface-hover p-4 text-xs text-foreground">
        <code>{\`import { useForm } from 'react-hook-form'

function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Email" required error={errors.email?.message}>
        <Input {...register('email', { required: 'Required' })} />
      </Field>
      <Button type="submit">Sign up</Button>
    </form>
  )
}\`}</code>
      </pre>
      <Note>
        TanStack Form / Conform work the same way — wrap controlled components in their{' '}
        <code className="text-xs">Controller</code> equivalent.
      </Note>
    </div>
}`,...F.parameters?.docs?.source}}},I=[`BasicField`,`FieldWithError`,`FieldSetGrouping`,`CheckboxRadioSwitch`,`CompleteSignUpForm`,`WithReactHookForm`]})))()}L();export{A as BasicField,N as CheckboxRadioSwitch,P as CompleteSignUpForm,M as FieldSetGrouping,j as FieldWithError,F as WithReactHookForm,I as __namedExportsOrder,k as default};