import{i as e,s as t}from"./preload-helper-BwGARNBo.js";import{t as n,w as r}from"./iframe-Dc0mLLnz.js";import{n as i,t as a}from"./Button-BGdGuDrw.js";import{n as o,t as s}from"./Callout-DdZx91JX.js";import{n as c,t as l}from"./Checkbox-BuD7xSqC.js";import{n as u,t as d}from"./Input-QjhTX4Ha.js";import{n as f,t as p}from"./Field-C627VQCD.js";import{n as m,r as h,t as g}from"./Radio-BTFWtyuT.js";import{c as _,i as v,l as y,n as b,s as x,t as S}from"./Select-HfpzpoTY.js";import{n as C,t as w}from"./Switch-DhuMKv2A.js";import{n as T,t as E}from"./FieldSet-BuoiEod5.js";import{c as D,i as O,o as k}from"./docs-ui-Da22FkRD.js";var A,j,M,N,P,F,I,L,R,z,B;e((()=>{A=t(r(),1),i(),o(),c(),f(),T(),u(),h(),y(),C(),D(),j=n(),M={title:`Patterns/Form Composition`,parameters:{layout:`fullscreen`}},N={name:`1. Field basics`,render:()=>(0,j.jsxs)(`div`,{className:`mx-auto mt-12 flex w-96 flex-col gap-4`,children:[(0,j.jsxs)(O,{children:[`A single Field wires the label, description, and required marker to the input. Note:`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`required`}),` renders the visual`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`*`}),` but does `,(0,j.jsx)(`strong`,{children:`not`}),` set`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`aria-required`}),` on the input — add`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`required`}),` to the input element yourself (a known limitation).`]}),(0,j.jsx)(p,{label:`Email`,description:`Used when you sign in`,required:!0,children:(0,j.jsx)(d,{type:`email`,placeholder:`you@example.com`})})]})},P={name:`2. Error state`,render:()=>(0,j.jsxs)(`div`,{className:`mx-auto mt-12 flex w-96 flex-col gap-4`,children:[(0,j.jsxs)(O,{children:[`Passing `,(0,j.jsx)(`code`,{className:`text-xs`,children:`error`}),` auto-derives`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`isError`}),`, which wires`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`aria-invalid="true"`}),` +`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`aria-describedby`}),` on the input. Meaning comes from the error text, not colour alone.`]}),(0,j.jsx)(p,{label:`Email`,error:`Enter a valid email address`,required:!0,children:(0,j.jsx)(d,{type:`email`,defaultValue:`invalid-email`})})]})},F={name:`3. Grouping with FieldSet`,render:()=>(0,j.jsxs)(`div`,{className:`mx-auto mt-12 w-96`,children:[(0,j.jsxs)(O,{children:[`FieldSet renders a native `,(0,j.jsx)(`code`,{className:`text-xs`,children:`<fieldset>`}),` +`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`<legend>`}),`, and`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`disabled`}),` propagates to every descendant control. A nested`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`direction="row"`}),` FieldSet lays two fields side by side, tuned with `,(0,j.jsx)(`code`,{className:`text-xs`,children:`flexGrow`}),` /`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`flexShrink`}),`.`]}),(0,j.jsxs)(E,{legend:`Shipping address`,description:`Where we deliver`,children:[(0,j.jsx)(p,{label:`Street`,required:!0,children:(0,j.jsx)(d,{placeholder:`1-2-3 Minato`})}),(0,j.jsxs)(E,{direction:`row`,children:[(0,j.jsx)(p,{label:`City`,required:!0,flexGrow:1,children:(0,j.jsx)(d,{placeholder:`Minato`})}),(0,j.jsx)(p,{label:`Postal code`,required:!0,flexShrink:0,children:(0,j.jsx)(d,{placeholder:`100-0001`,className:`w-32`})})]}),(0,j.jsx)(p,{label:`Country`,children:(0,j.jsxs)(S,{defaultValue:`jp`,children:[(0,j.jsx)(x,{children:(0,j.jsx)(_,{})}),(0,j.jsxs)(b,{children:[(0,j.jsx)(v,{value:`jp`,children:`Japan`}),(0,j.jsx)(v,{value:`us`,children:`United States`})]})]})})]})]})},I={name:`4. Checkbox / Radio / Switch`,render:()=>(0,j.jsxs)(`div`,{className:`mx-auto mt-12 w-96`,children:[(0,j.jsxs)(O,{children:[`Checkbox / Switch / Radio carry their own `,(0,j.jsx)(`code`,{className:`text-xs`,children:`<label>`}),`, so they are `,(0,j.jsx)(`strong`,{children:`not`}),` wrapped in Field — group them directly under a FieldSet. Radio is wrapped in a RadioGroup, and that group is wrapped by a single Field for its group label.`]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,j.jsxs)(E,{legend:`Notifications`,description:`Choose any`,children:[(0,j.jsx)(l,{label:`Email`,defaultChecked:!0}),(0,j.jsx)(l,{label:`SMS`}),(0,j.jsx)(l,{label:`Push`,defaultChecked:!0})]}),(0,j.jsx)(p,{label:`Plan`,required:!0,children:(0,j.jsxs)(m,{defaultValue:`pro`,children:[(0,j.jsx)(g,{value:`free`,label:`Free`}),(0,j.jsx)(g,{value:`pro`,label:`Pro`}),(0,j.jsx)(g,{value:`enterprise`,label:`Enterprise`})]})}),(0,j.jsxs)(E,{legend:`Display`,children:[(0,j.jsx)(w,{label:`Dark mode`}),(0,j.jsx)(w,{label:`High contrast`})]})]})]})},L={name:`5. Complete sign-up form`,render:()=>{let[e,t]=(0,A.useState)(!1),[n,r]=(0,A.useState)({});return(0,j.jsxs)(`div`,{className:`mx-auto mt-12 w-96`,children:[(0,j.jsxs)(O,{children:[`Errors live in one state object;`,` `,(0,j.jsxs)(`code`,{className:`text-xs`,children:[`disabled=`,`{submitting}`]}),` plus Button`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`isLoading`}),` (which sets`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`aria-busy="true"`}),`) keep the form consistent while the simulated request runs.`]}),(0,j.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let n=new FormData(e.currentTarget),i=n.get(`password`),a={};n.get(`email`)||(a.email=`Email is required`),i?i!==n.get(`passwordConfirm`)&&(a.passwordConfirm=`Passwords do not match`):a.password=`Password is required`,r(a),Object.keys(a).length===0&&(t(!0),setTimeout(()=>t(!1),1200))},className:`flex flex-col gap-4`,children:[(0,j.jsx)(p,{label:`Email`,required:!0,error:n.email,children:(0,j.jsx)(d,{type:`email`,name:`email`,disabled:e})}),(0,j.jsx)(p,{label:`Password`,required:!0,error:n.password,children:(0,j.jsx)(d,{type:`password`,name:`password`,disabled:e})}),(0,j.jsx)(p,{label:`Password (confirm)`,required:!0,error:n.passwordConfirm,children:(0,j.jsx)(d,{type:`password`,name:`passwordConfirm`,disabled:e})}),(0,j.jsx)(l,{label:`I agree to the terms`,name:`agree`,disabled:e}),(0,j.jsx)(a,{type:`submit`,isLoading:e,className:`self-start`,children:`Sign up`})]})]})}},R={name:`6. react-hook-form integration`,render:()=>(0,j.jsxs)(`div`,{className:`mx-auto max-w-2xl px-8 py-12`,children:[(0,j.jsx)(k,{children:`react-hook-form integration`}),(0,j.jsxs)(O,{children:[`Recommended pattern for pairing with `,(0,j.jsx)(`code`,{className:`text-xs`,children:`react-hook-form`}),`. The snippet below works as-is — the three Schatten-side guarantees that make it work:`]}),(0,j.jsxs)(`ul`,{className:`flex list-disc flex-col gap-2 pl-6 text-sm text-foreground-muted`,children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{className:`text-xs`,children:`Input`}),` is `,(0,j.jsx)(`code`,{className:`text-xs`,children:`forwardRef`}),`-ed, so spreading `,(0,j.jsx)(`code`,{className:`text-xs`,children:`{...register(...)}`}),` alone delivers the ref / onChange.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{className:`text-xs`,children:`Select`}),` / `,(0,j.jsx)(`code`,{className:`text-xs`,children:`RadioGroup`}),` /`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`Switch`}),` are controlled, so wrap them in`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`Controller`}),`.`]}),(0,j.jsxs)(`li`,{children:[`Pass `,(0,j.jsx)(`code`,{className:`text-xs`,children:`errors.<name>?.message`}),` straight into the Field`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`error`}),` prop.`]})]}),(0,j.jsx)(`pre`,{className:`mt-4 overflow-x-auto rounded-md border border-border bg-surface-hover p-4 text-xs text-foreground`,children:(0,j.jsx)(`code`,{children:`import { useForm } from 'react-hook-form'

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
}`})}),(0,j.jsxs)(O,{children:[`TanStack Form / Conform work the same way — wrap controlled components in their`,` `,(0,j.jsx)(`code`,{className:`text-xs`,children:`Controller`}),` equivalent.`]})]})},z={name:`7. FormField (lv2) — coming in v1+`,render:()=>(0,j.jsx)(`div`,{className:`mx-auto mt-12 max-w-lg`,children:(0,j.jsxs)(s,{variant:`info`,title:`Coming soon`,children:[`The lv2 `,(0,j.jsx)(`code`,{children:`FormField`}),` (a one-component short form of Field + label + description + error) is planned for the v1+ milestone as`,` `,(0,j.jsx)(`a`,{href:`https://github.com/yasmro/schatten/issues/123`,children:`#123`}),`. Once it lands, it will be added to this page as a dedicated section.`]})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '1. Field basics',
  render: () => <div className="mx-auto mt-12 flex w-96 flex-col gap-4">
      <Note>
        A single Field wires the label, description, and required marker to the input. Note:{' '}
        <code className="text-xs">required</code> renders the visual{' '}
        <code className="text-xs">*</code> but does <strong>not</strong> set{' '}
        <code className="text-xs">aria-required</code> on the input — add{' '}
        <code className="text-xs">required</code> to the input element yourself (a known
        limitation).
      </Note>
      <Field label="Email" description="Used when you sign in" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '7. FormField (lv2) — coming in v1+',
  render: () => <div className="mx-auto mt-12 max-w-lg">
      <Callout variant="info" title="Coming soon">
        The lv2 <code>FormField</code> (a one-component short form of Field + label + description +
        error) is planned for the v1+ milestone as{' '}
        <a href="https://github.com/yasmro/schatten/issues/123">#123</a>. Once it lands, it will be
        added to this page as a dedicated section.
      </Callout>
    </div>
}`,...z.parameters?.docs?.source}}},B=[`BasicField`,`FieldWithError`,`FieldSetGrouping`,`CheckboxRadioSwitch`,`CompleteSignUpForm`,`WithReactHookForm`,`FormFieldComingSoon`]}))();export{N as BasicField,I as CheckboxRadioSwitch,L as CompleteSignUpForm,F as FieldSetGrouping,P as FieldWithError,z as FormFieldComingSoon,R as WithReactHookForm,B as __namedExportsOrder,M as default};