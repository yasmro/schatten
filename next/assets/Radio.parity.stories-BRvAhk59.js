import{j as e}from"./iframe-BHrSwmUv.js";import{a,R as l}from"./Radio-DEYDt3Rr.js";import"./preload-helper-CrztxVc4.js";import"./index-BAR3WVoG.js";import"./index-BkKiwxKo.js";import"./index-B6mFKotW.js";import"./index-DhvC8sA1.js";import"./index-B9TNsngD.js";import"./index-Bf3VuaRZ.js";import"./index-THy1Zngk.js";import"./index-t7-AojLa.js";import"./index-DCdOIP_n.js";import"./index-B3JtcLja.js";import"./index-0J2NsinB.js";import"./index-ASBVEi3W.js";import"./index-BEx7TGAj.js";import"./field-CIy68D0H.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css              */const k={title:"Components/lv1/Radio",component:a,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<RadioGroup>` / `<Radio>` and a hand-written\n`.st-radio-group` / `.st-radio-wrapper` / `.st-radio` chain must\nrender pixel-identical. Backs the VRT in `Radio.parity.vrt.spec.ts`.\n\nCovered combinations:\n- RadioGroup × 3 sizes (sm / md / lg)\n- Single Radio with label × 3 sizes\n- Selected / unselected within a group\n- isError\n- disabled (group-level)\n- disabled + error\n- Horizontal (RadioGroup with consumer className overriding the\n  default `flex-direction: column`)\n\nVanilla side carries `data-state`, `aria-checked`, `aria-invalid`,\nand `disabled` manually. Radix Radio unmounts the indicator when\nunchecked — the vanilla side mirrors that by omitting the\n`.st-radio__indicator` element for unchecked items."}}}},x=({size:m,state:d="unchecked",disabled:n,isError:i,label:r,id:t})=>e.jsxs("div",{className:"st-radio-wrapper",children:[e.jsx("button",{type:"button",id:t,role:"radio","aria-checked":d==="checked","aria-invalid":i?"true":void 0,"data-state":d,disabled:n,className:`st-radio st-radio--${m}`,children:d==="checked"&&e.jsx("span",{className:"st-radio__indicator",children:e.jsx("span",{className:"st-radio__dot"})})}),r&&e.jsx("label",{htmlFor:t,className:"st-radio-wrapper__label",children:r})]}),s=({size:m,selectedValue:d,disabled:n,isError:i,horizontal:r,items:t,idPrefix:c})=>e.jsx("div",{role:"radiogroup","aria-invalid":i?"true":void 0,className:`st-radio-group${r?" flex flex-row gap-4":""}`,children:t.map(o=>e.jsx(x,{size:m,state:d===o.value?"checked":"unchecked",disabled:n,isError:i,label:o.label,id:`${c}-${o.value}`},o.value))}),u={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"React"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"Sizes"}),e.jsx(l,{defaultValue:"sm",size:"sm",children:e.jsx(a,{value:"sm",label:"Small"})}),e.jsx(l,{defaultValue:"md",size:"md",className:"mt-2",children:e.jsx(a,{value:"md",label:"Medium"})}),e.jsx(l,{defaultValue:"lg",size:"lg",className:"mt-2",children:e.jsx(a,{value:"lg",label:"Large"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"Group with selection"}),e.jsxs(l,{defaultValue:"b",children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B (selected)"}),e.jsx(a,{value:"c",label:"Option C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"isError"}),e.jsxs(l,{defaultValue:"b",isError:!0,children:[e.jsx(a,{value:"a",label:"Unselected error"}),e.jsx(a,{value:"b",label:"Selected error"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"Disabled"}),e.jsxs(l,{defaultValue:"b",disabled:!0,children:[e.jsx(a,{value:"a",label:"Disabled unselected"}),e.jsx(a,{value:"b",label:"Disabled selected"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"Disabled + error"}),e.jsxs(l,{defaultValue:"b",disabled:!0,isError:!0,children:[e.jsx(a,{value:"a",label:"Disabled + error, unselected"}),e.jsx(a,{value:"b",label:"Disabled + error, selected"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"Horizontal"}),e.jsxs(l,{defaultValue:"one",className:"flex flex-row gap-4",children:[e.jsx(a,{value:"one",label:"One"}),e.jsx(a,{value:"two",label:"Two"}),e.jsx(a,{value:"three",label:"Three"})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"Sizes"}),e.jsx(s,{size:"sm",selectedValue:"sm",items:[{value:"sm",label:"Small"}],idPrefix:"v-rg-sm"}),e.jsx("div",{className:"mt-2",children:e.jsx(s,{size:"md",selectedValue:"md",items:[{value:"md",label:"Medium"}],idPrefix:"v-rg-md"})}),e.jsx("div",{className:"mt-2",children:e.jsx(s,{size:"lg",selectedValue:"lg",items:[{value:"lg",label:"Large"}],idPrefix:"v-rg-lg"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"Group with selection"}),e.jsx(s,{size:"md",selectedValue:"b",items:[{value:"a",label:"Option A"},{value:"b",label:"Option B (selected)"},{value:"c",label:"Option C"}],idPrefix:"v-rg-sel"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"isError"}),e.jsx(s,{size:"md",selectedValue:"b",isError:!0,items:[{value:"a",label:"Unselected error"},{value:"b",label:"Selected error"}],idPrefix:"v-rg-err"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"Disabled"}),e.jsx(s,{size:"md",selectedValue:"b",disabled:!0,items:[{value:"a",label:"Disabled unselected"},{value:"b",label:"Disabled selected"}],idPrefix:"v-rg-dis"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"Disabled + error"}),e.jsx(s,{size:"md",selectedValue:"b",disabled:!0,isError:!0,items:[{value:"a",label:"Disabled + error, unselected"},{value:"b",label:"Disabled + error, selected"}],idPrefix:"v-rg-de"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-foreground-muted mb-2",children:"Horizontal"}),e.jsx(s,{size:"md",selectedValue:"one",horizontal:!0,items:[{value:"one",label:"One"},{value:"two",label:"Two"},{value:"three",label:"Three"}],idPrefix:"v-rg-h"})]})]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">React</p>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Sizes</p>
          <RadioGroup defaultValue="sm" size="sm">
            <Radio value="sm" label="Small" />
          </RadioGroup>
          <RadioGroup defaultValue="md" size="md" className="mt-2">
            <Radio value="md" label="Medium" />
          </RadioGroup>
          <RadioGroup defaultValue="lg" size="lg" className="mt-2">
            <Radio value="lg" label="Large" />
          </RadioGroup>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Group with selection</p>
          <RadioGroup defaultValue="b">
            <Radio value="a" label="Option A" />
            <Radio value="b" label="Option B (selected)" />
            <Radio value="c" label="Option C" />
          </RadioGroup>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">isError</p>
          <RadioGroup defaultValue="b" isError>
            <Radio value="a" label="Unselected error" />
            <Radio value="b" label="Selected error" />
          </RadioGroup>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Disabled</p>
          <RadioGroup defaultValue="b" disabled>
            <Radio value="a" label="Disabled unselected" />
            <Radio value="b" label="Disabled selected" />
          </RadioGroup>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Disabled + error</p>
          <RadioGroup defaultValue="b" disabled isError>
            <Radio value="a" label="Disabled + error, unselected" />
            <Radio value="b" label="Disabled + error, selected" />
          </RadioGroup>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Horizontal</p>
          <RadioGroup defaultValue="one" className="flex flex-row gap-4">
            <Radio value="one" label="One" />
            <Radio value="two" label="Two" />
            <Radio value="three" label="Three" />
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">Vanilla HTML</p>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Sizes</p>
          <VanillaRadioGroup size="sm" selectedValue="sm" items={[{
          value: 'sm',
          label: 'Small'
        }]} idPrefix="v-rg-sm" />
          <div className="mt-2">
            <VanillaRadioGroup size="md" selectedValue="md" items={[{
            value: 'md',
            label: 'Medium'
          }]} idPrefix="v-rg-md" />
          </div>
          <div className="mt-2">
            <VanillaRadioGroup size="lg" selectedValue="lg" items={[{
            value: 'lg',
            label: 'Large'
          }]} idPrefix="v-rg-lg" />
          </div>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Group with selection</p>
          <VanillaRadioGroup size="md" selectedValue="b" items={[{
          value: 'a',
          label: 'Option A'
        }, {
          value: 'b',
          label: 'Option B (selected)'
        }, {
          value: 'c',
          label: 'Option C'
        }]} idPrefix="v-rg-sel" />
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">isError</p>
          <VanillaRadioGroup size="md" selectedValue="b" isError items={[{
          value: 'a',
          label: 'Unselected error'
        }, {
          value: 'b',
          label: 'Selected error'
        }]} idPrefix="v-rg-err" />
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Disabled</p>
          <VanillaRadioGroup size="md" selectedValue="b" disabled items={[{
          value: 'a',
          label: 'Disabled unselected'
        }, {
          value: 'b',
          label: 'Disabled selected'
        }]} idPrefix="v-rg-dis" />
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Disabled + error</p>
          <VanillaRadioGroup size="md" selectedValue="b" disabled isError items={[{
          value: 'a',
          label: 'Disabled + error, unselected'
        }, {
          value: 'b',
          label: 'Disabled + error, selected'
        }]} idPrefix="v-rg-de" />
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Horizontal</p>
          <VanillaRadioGroup size="md" selectedValue="one" horizontal items={[{
          value: 'one',
          label: 'One'
        }, {
          value: 'two',
          label: 'Two'
        }, {
          value: 'three',
          label: 'Three'
        }]} idPrefix="v-rg-h" />
        </div>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const _=["Parity"];export{u as Parity,_ as __namedExportsOrder,k as default};
