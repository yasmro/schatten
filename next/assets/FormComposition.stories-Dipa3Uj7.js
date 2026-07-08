import{j as e,r as S}from"./iframe-Crujsqc1.js";import{B as y}from"./Button-BgpE2Xgz.js";import{C as x}from"./Checkbox-DWSEBhm8.js";import{F as r}from"./Field-BVPi_ZUE.js";import{F as p}from"./FieldSet-E7oRD024.js";import{I as t}from"./Input-DP9rAiFQ.js";import{R as k,a as g}from"./Radio-BGWAVVeC.js";import{S as C,a as q,b as R,c as E,d as j}from"./Select-CIWgFVDs.js";import{S as N}from"./Switch-C85KTCqw.js";import{N as s,S as I}from"./docs-ui-DjaVezmD.js";import"./preload-helper-CrztxVc4.js";import"./index-CVDe9VRO.js";import"./index-CV1sIpys.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css               */import"./Spinner-oE552hIO.js";/* empty css                */import"./index-m2MOX9zm.js";import"./index-u9XEdHl3.js";import"./index-BM9FpueR.js";import"./index-Dfj2k-np.js";import"./index-o-NwpvT3.js";import"./index-B1cv9EWW.js";import"./index-B7B6olZB.js";import"./index-BYpy7KSL.js";import"./field-Cu5E-2Yb.js";/* empty css                 */import"./Tooltip-idRe-FWe.js";import"./index-CuvKwgm9.js";import"./index-CGZFKocF.js";import"./index-Qm1dVl_r.js";import"./floating-ui.react-dom-BqnZccx1.js";import"./index-40EFb1-A.js";import"./index-C26ZYSy8.js";/* empty css                *//* empty css              */import"./info-CfcFgi51.js";import"./createLucideIcon-JrO_Biuh.js";/* empty css                 *//* empty css              */import"./index-MAmEXX8e.js";import"./index-CGgfHF7Y.js";/* empty css              */import"./Combination-aScEIa7v.js";import"./index-Cwzl_bk4.js";/* empty css               */import"./chevron-up-DCG4GQgP.js";import"./check-BTJwxAfA.js";/* empty css               */const qe={title:"Patterns/Form Composition",parameters:{layout:"fullscreen"}},i={name:"1. Field basics",render:()=>e.jsxs("div",{className:"mx-auto mt-12 flex w-96 flex-col gap-4",children:[e.jsxs(s,{children:["A single Field wires the label, description, and required marker to the input. Note:"," ",e.jsx("code",{className:"text-xs",children:"required"})," renders the visual"," ",e.jsx("code",{className:"text-xs",children:"*"})," but does ",e.jsx("strong",{children:"not"})," set"," ",e.jsx("code",{className:"text-xs",children:"aria-required"})," on the input — add"," ",e.jsx("code",{className:"text-xs",children:"required"})," to the input element yourself (a known limitation)."]}),e.jsx(r,{label:"Email",description:"Used when you sign in",required:!0,children:e.jsx(t,{type:"email",placeholder:"you@example.com"})})]})},l={name:"2. Error state",render:()=>e.jsxs("div",{className:"mx-auto mt-12 flex w-96 flex-col gap-4",children:[e.jsxs(s,{children:["Passing ",e.jsx("code",{className:"text-xs",children:"error"})," auto-derives"," ",e.jsx("code",{className:"text-xs",children:"isError"}),", which wires"," ",e.jsx("code",{className:"text-xs",children:'aria-invalid="true"'})," +"," ",e.jsx("code",{className:"text-xs",children:"aria-describedby"})," on the input. Meaning comes from the error text, not colour alone."]}),e.jsx(r,{label:"Email",error:"Enter a valid email address",required:!0,children:e.jsx(t,{type:"email",defaultValue:"invalid-email"})})]})},d={name:"3. Grouping with FieldSet",render:()=>e.jsxs("div",{className:"mx-auto mt-12 w-96",children:[e.jsxs(s,{children:["FieldSet renders a native ",e.jsx("code",{className:"text-xs",children:"<fieldset>"})," +"," ",e.jsx("code",{className:"text-xs",children:"<legend>"}),", and"," ",e.jsx("code",{className:"text-xs",children:"disabled"})," propagates to every descendant control. A nested"," ",e.jsx("code",{className:"text-xs",children:'direction="row"'})," FieldSet lays two fields side by side, tuned with ",e.jsx("code",{className:"text-xs",children:"flexGrow"})," /"," ",e.jsx("code",{className:"text-xs",children:"flexShrink"}),"."]}),e.jsxs(p,{legend:"Shipping address",description:"Where we deliver",children:[e.jsx(r,{label:"Street",required:!0,children:e.jsx(t,{placeholder:"1-2-3 Minato"})}),e.jsxs(p,{direction:"row",children:[e.jsx(r,{label:"City",required:!0,flexGrow:1,children:e.jsx(t,{placeholder:"Minato"})}),e.jsx(r,{label:"Postal code",required:!0,flexShrink:0,children:e.jsx(t,{placeholder:"100-0001",className:"w-32"})})]}),e.jsx(r,{label:"Country",children:e.jsxs(C,{defaultValue:"jp",children:[e.jsx(q,{children:e.jsx(R,{})}),e.jsxs(E,{children:[e.jsx(j,{value:"jp",children:"Japan"}),e.jsx(j,{value:"us",children:"United States"})]})]})})]})]})},n={name:"4. Checkbox / Radio / Switch",render:()=>e.jsxs("div",{className:"mx-auto mt-12 w-96",children:[e.jsxs(s,{children:["Checkbox / Switch / Radio carry their own ",e.jsx("code",{className:"text-xs",children:"<label>"}),", so they are ",e.jsx("strong",{children:"not"})," wrapped in Field — group them directly under a FieldSet. Radio is wrapped in a RadioGroup, and that group is wrapped by a single Field for its group label."]}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs(p,{legend:"Notifications",description:"Choose any",children:[e.jsx(x,{label:"Email",defaultChecked:!0}),e.jsx(x,{label:"SMS"}),e.jsx(x,{label:"Push",defaultChecked:!0})]}),e.jsx(r,{label:"Plan",required:!0,children:e.jsxs(k,{defaultValue:"pro",children:[e.jsx(g,{value:"free",label:"Free"}),e.jsx(g,{value:"pro",label:"Pro"}),e.jsx(g,{value:"enterprise",label:"Enterprise"})]})}),e.jsxs(p,{legend:"Display",children:[e.jsx(N,{label:"Dark mode"}),e.jsx(N,{label:"High contrast"})]})]})]})},c={name:"5. Complete sign-up form",render:()=>{const[a,b]=S.useState(!1),[u,F]=S.useState({}),v=f=>{f.preventDefault();const h=new FormData(f.currentTarget),w=h.get("password"),o={};h.get("email")||(o.email="Email is required"),w?w!==h.get("passwordConfirm")&&(o.passwordConfirm="Passwords do not match"):o.password="Password is required",F(o),Object.keys(o).length===0&&(b(!0),setTimeout(()=>b(!1),1200))};return e.jsxs("div",{className:"mx-auto mt-12 w-96",children:[e.jsxs(s,{children:["Errors live in one state object;"," ",e.jsxs("code",{className:"text-xs",children:["disabled=","{submitting}"]})," plus Button"," ",e.jsx("code",{className:"text-xs",children:"isLoading"})," (which sets"," ",e.jsx("code",{className:"text-xs",children:'aria-busy="true"'}),") keep the form consistent while the simulated request runs."]}),e.jsxs("form",{onSubmit:v,className:"flex flex-col gap-4",children:[e.jsx(r,{label:"Email",required:!0,error:u.email,children:e.jsx(t,{type:"email",name:"email",disabled:a})}),e.jsx(r,{label:"Password",required:!0,error:u.password,children:e.jsx(t,{type:"password",name:"password",disabled:a})}),e.jsx(r,{label:"Password (confirm)",required:!0,error:u.passwordConfirm,children:e.jsx(t,{type:"password",name:"passwordConfirm",disabled:a})}),e.jsx(x,{label:"I agree to the terms",name:"agree",disabled:a}),e.jsx(y,{type:"submit",isLoading:a,className:"self-start",children:"Sign up"})]})]})}},m={name:"6. react-hook-form integration",render:()=>e.jsxs("div",{className:"mx-auto max-w-2xl px-8 py-12",children:[e.jsx(I,{children:"react-hook-form integration"}),e.jsxs(s,{children:["Recommended pattern for pairing with ",e.jsx("code",{className:"text-xs",children:"react-hook-form"}),". The snippet below works as-is — the three Schatten-side guarantees that make it work:"]}),e.jsxs("ul",{className:"flex list-disc flex-col gap-2 pl-6 text-sm text-foreground-muted",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-xs",children:"Input"})," is ",e.jsx("code",{className:"text-xs",children:"forwardRef"}),"-ed, so spreading ",e.jsx("code",{className:"text-xs",children:"{...register(...)}"})," alone delivers the ref / onChange."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-xs",children:"Select"})," / ",e.jsx("code",{className:"text-xs",children:"RadioGroup"})," /"," ",e.jsx("code",{className:"text-xs",children:"Switch"})," are controlled, so wrap them in"," ",e.jsx("code",{className:"text-xs",children:"Controller"}),"."]}),e.jsxs("li",{children:["Pass ",e.jsx("code",{className:"text-xs",children:"errors.<name>?.message"})," straight into the Field"," ",e.jsx("code",{className:"text-xs",children:"error"})," prop."]})]}),e.jsx("pre",{className:"mt-4 overflow-x-auto rounded-md border border-border bg-surface-hover p-4 text-xs text-foreground",children:e.jsx("code",{children:`import { useForm } from 'react-hook-form'

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
}`})}),e.jsxs(s,{children:["TanStack Form / Conform work the same way — wrap controlled components in their"," ",e.jsx("code",{className:"text-xs",children:"Controller"})," equivalent."]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Re=["BasicField","FieldWithError","FieldSetGrouping","CheckboxRadioSwitch","CompleteSignUpForm","WithReactHookForm"];export{i as BasicField,n as CheckboxRadioSwitch,c as CompleteSignUpForm,d as FieldSetGrouping,l as FieldWithError,m as WithReactHookForm,Re as __namedExportsOrder,qe as default};
