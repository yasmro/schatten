import{j as e}from"./iframe-FV8AgVr4.js";import{C as H}from"./Checkbox-ZqCt5gfi.js";import{I as a}from"./Input-EF-3HWpD.js";import{R as M,a as u}from"./Radio-FIcqQcku.js";import{S as Q,a as X,b as Y,c as Z,d as h}from"./Select-CAbgAdWi.js";import{S as z}from"./Switch-BX1J2QU5.js";import{T as $}from"./Textarea-Cc1S_J7Q.js";import{F as r}from"./Field-CFt64cZQ.js";import"./preload-helper-DT0q8JqK.js";import"./index-CIkv--eF.js";import"./index-UHnWc5N2.js";import"./index-zxQO5GXw.js";import"./index-me13alp6.js";import"./field-LuJw8wpW.js";import"./index-DHk-Frat.js";import"./index-CmWFBTh-.js";import"./chevron-up-DFzAM7vc.js";import"./index-BCsfqb5n.js";const je={title:"Components/lv1/Field",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{description:"Label text for the field.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed above the input.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display.",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},required:{description:"Show required indicator (*).",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disable the field. Propagates to child components via context.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},l={name:"Playground",args:{label:"Email",description:"We'll never share your email."},render:A=>e.jsx(r,{...A,children:e.jsx(a,{placeholder:"you@example.com"})})},s={name:"With Input",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Username",description:"Choose a unique username.",children:e.jsx(a,{placeholder:"johndoe"})}),e.jsx(r,{label:"Email",required:!0,children:e.jsx(a,{type:"email",placeholder:"you@example.com"})})]})},i={name:"With Textarea",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Bio",description:"Tell us about yourself.",children:e.jsx($,{placeholder:"Write something..."})})})},o={name:"With Select",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Country",description:"Select your country.",children:e.jsxs(Q,{children:[e.jsx(X,{children:e.jsx(Y,{placeholder:"Select a country"})}),e.jsxs(Z,{children:[e.jsx(h,{value:"us",children:"United States"}),e.jsx(h,{value:"uk",children:"United Kingdom"}),e.jsx(h,{value:"jp",children:"Japan"})]})]})})})},t={name:"With Checkbox",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Terms and Conditions",description:"Please read and accept.",required:!0,children:e.jsx(H,{})})})},d={name:"With Switch",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Notifications",description:"Enable push notifications.",children:e.jsx(z,{})})})},c={name:"With RadioGroup",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Plan",description:"Choose your subscription plan.",children:e.jsxs(M,{defaultValue:"free",children:[e.jsx(u,{value:"free",label:"Free"}),e.jsx(u,{value:"pro",label:"Pro"}),e.jsx(u,{value:"enterprise",label:"Enterprise"})]})})})},n={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Email",error:"Please enter a valid email address.",children:e.jsx(a,{type:"email",defaultValue:"invalid-email"})}),e.jsx(r,{label:"Password",error:"Password must be at least 8 characters.",required:!0,children:e.jsx(a,{type:"password",defaultValue:"123"})})]})},p={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Username",description:"This field is disabled.",disabled:!0,children:e.jsx(a,{placeholder:"johndoe"})}),e.jsx(r,{label:"Notifications",disabled:!0,children:e.jsx(z,{})})]})},m={name:"Required",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Full Name",required:!0,children:e.jsx(a,{placeholder:"John Doe"})}),e.jsx(r,{label:"Email",required:!0,description:"Required field.",children:e.jsx(a,{type:"email",placeholder:"you@example.com"})})]})};var x,b,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Email',
    description: "We'll never share your email."
  },
  render: args => <Field {...args}>
      <Input placeholder="you@example.com" />
    </Field>
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,y,v;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'With Input',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="Choose a unique username.">
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,g,F;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Textarea',
  render: () => <div className="w-80">
      <Field label="Bio" description="Tell us about yourself.">
        <Textarea placeholder="Write something..." />
      </Field>
    </div>
}`,...(F=(g=i.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var w,W,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With Select',
  render: () => <div className="w-80">
      <Field label="Country" description="Select your country.">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
}`,...(N=(W=o.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var I,E,R;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With Checkbox',
  render: () => <div className="w-80">
      <Field label="Terms and Conditions" description="Please read and accept." required>
        <Checkbox />
      </Field>
    </div>
}`,...(R=(E=t.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var q,C,P;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Switch',
  render: () => <div className="w-80">
      <Field label="Notifications" description="Enable push notifications.">
        <Switch />
      </Field>
    </div>
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var T,V,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With RadioGroup',
  render: () => <div className="w-80">
      <Field label="Plan" description="Choose your subscription plan.">
        <RadioGroup defaultValue="free">
          <Radio value="free" label="Free" />
          <Radio value="pro" label="Pro" />
          <Radio value="enterprise" label="Enterprise" />
        </RadioGroup>
      </Field>
    </div>
}`,...(k=(V=c.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var D,U,G;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Email" error="Please enter a valid email address.">
        <Input type="email" defaultValue="invalid-email" />
      </Field>
      <Field label="Password" error="Password must be at least 8 characters." required>
        <Input type="password" defaultValue="123" />
      </Field>
    </div>
}`,...(G=(U=n.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,B,K;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="This field is disabled." disabled>
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Notifications" disabled>
        <Switch />
      </Field>
    </div>
}`,...(K=(B=p.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var _,L,O;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Required',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Full Name" required>
        <Input placeholder="John Doe" />
      </Field>
      <Field label="Email" required description="Required field.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const ye=["Playground","WithInput","WithTextarea","WithSelect","WithCheckbox","WithSwitch","WithRadioGroup","ErrorState","Disabled","Required"];export{p as Disabled,n as ErrorState,l as Playground,m as Required,t as WithCheckbox,s as WithInput,c as WithRadioGroup,o as WithSelect,d as WithSwitch,i as WithTextarea,ye as __namedExportsOrder,je as default};
