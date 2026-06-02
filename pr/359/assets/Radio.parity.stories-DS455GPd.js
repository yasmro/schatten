import{i as e}from"./preload-helper-ChaSUgV0.js";import{t}from"./iframe-DK9TY03R.js";import{n,r,t as i}from"./Radio-CNeVsnGe.js";var a,o,s,c,l,u;e((()=>{r(),a=t(),o={title:`Components/lv1/Radio`,component:i,parameters:{layout:`padded`,docs:{description:{component:"Parity stories — React `<RadioGroup>` / `<Radio>` and a hand-written\n`.st-radio-group` / `.st-radio-wrapper` / `.st-radio` chain must\nrender pixel-identical. Backs the VRT in `Radio.parity.vrt.spec.ts`.\n\nCovered combinations:\n- RadioGroup × 3 sizes (sm / md / lg)\n- Single Radio with label × 3 sizes\n- Selected / unselected within a group\n- isError\n- disabled (group-level)\n- disabled + error\n- Horizontal (RadioGroup with consumer className overriding the\n  default `flex-direction: column`)\n\nVanilla side carries `data-state`, `aria-checked`, `aria-invalid`,\nand `disabled` manually. Radix Radio unmounts the indicator when\nunchecked — the vanilla side mirrors that by omitting the\n`.st-radio__indicator` element for unchecked items."}}}},s=({size:e,state:t=`unchecked`,disabled:n,isError:r,label:i,id:o})=>(0,a.jsxs)(`div`,{className:`st-radio-wrapper`,children:[(0,a.jsx)(`button`,{type:`button`,id:o,role:`radio`,"aria-checked":t===`checked`,"aria-invalid":r?`true`:void 0,"data-state":t,disabled:n,className:`st-radio st-radio--${e}`,children:t===`checked`&&(0,a.jsx)(`span`,{className:`st-radio__indicator`,children:(0,a.jsx)(`span`,{className:`st-radio__dot`})})}),i&&(0,a.jsx)(`label`,{htmlFor:o,className:`st-radio-wrapper__label`,children:i})]}),c=({size:e,selectedValue:t,disabled:n,isError:r,horizontal:i,items:o,idPrefix:c})=>(0,a.jsx)(`div`,{role:`radiogroup`,"aria-invalid":r?`true`:void 0,className:`st-radio-group${i?` flex flex-row gap-4`:``}`,children:o.map(i=>(0,a.jsx)(s,{size:e,state:t===i.value?`checked`:`unchecked`,disabled:n,isError:r,label:i.label,id:`${c}-${i.value}`},i.value))}),l={name:`React vs Vanilla HTML`,render:()=>(0,a.jsxs)(`div`,{className:`grid grid-cols-2 gap-12 max-w-5xl`,children:[(0,a.jsxs)(`div`,{className:`space-y-6`,children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted`,children:`React`}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`Sizes`}),(0,a.jsx)(n,{defaultValue:`sm`,size:`sm`,children:(0,a.jsx)(i,{value:`sm`,label:`Small`})}),(0,a.jsx)(n,{defaultValue:`md`,size:`md`,className:`mt-2`,children:(0,a.jsx)(i,{value:`md`,label:`Medium`})}),(0,a.jsx)(n,{defaultValue:`lg`,size:`lg`,className:`mt-2`,children:(0,a.jsx)(i,{value:`lg`,label:`Large`})})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`Group with selection`}),(0,a.jsxs)(n,{defaultValue:`b`,children:[(0,a.jsx)(i,{value:`a`,label:`Option A`}),(0,a.jsx)(i,{value:`b`,label:`Option B (selected)`}),(0,a.jsx)(i,{value:`c`,label:`Option C`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`isError`}),(0,a.jsxs)(n,{defaultValue:`b`,isError:!0,children:[(0,a.jsx)(i,{value:`a`,label:`Unselected error`}),(0,a.jsx)(i,{value:`b`,label:`Selected error`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`Disabled`}),(0,a.jsxs)(n,{defaultValue:`b`,disabled:!0,children:[(0,a.jsx)(i,{value:`a`,label:`Disabled unselected`}),(0,a.jsx)(i,{value:`b`,label:`Disabled selected`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`Disabled + error`}),(0,a.jsxs)(n,{defaultValue:`b`,disabled:!0,isError:!0,children:[(0,a.jsx)(i,{value:`a`,label:`Disabled + error, unselected`}),(0,a.jsx)(i,{value:`b`,label:`Disabled + error, selected`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`Horizontal`}),(0,a.jsxs)(n,{defaultValue:`one`,className:`flex flex-row gap-4`,children:[(0,a.jsx)(i,{value:`one`,label:`One`}),(0,a.jsx)(i,{value:`two`,label:`Two`}),(0,a.jsx)(i,{value:`three`,label:`Three`})]})]})]}),(0,a.jsxs)(`div`,{className:`space-y-6`,children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted`,children:`Vanilla HTML`}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`Sizes`}),(0,a.jsx)(c,{size:`sm`,selectedValue:`sm`,items:[{value:`sm`,label:`Small`}],idPrefix:`v-rg-sm`}),(0,a.jsx)(`div`,{className:`mt-2`,children:(0,a.jsx)(c,{size:`md`,selectedValue:`md`,items:[{value:`md`,label:`Medium`}],idPrefix:`v-rg-md`})}),(0,a.jsx)(`div`,{className:`mt-2`,children:(0,a.jsx)(c,{size:`lg`,selectedValue:`lg`,items:[{value:`lg`,label:`Large`}],idPrefix:`v-rg-lg`})})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`Group with selection`}),(0,a.jsx)(c,{size:`md`,selectedValue:`b`,items:[{value:`a`,label:`Option A`},{value:`b`,label:`Option B (selected)`},{value:`c`,label:`Option C`}],idPrefix:`v-rg-sel`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`isError`}),(0,a.jsx)(c,{size:`md`,selectedValue:`b`,isError:!0,items:[{value:`a`,label:`Unselected error`},{value:`b`,label:`Selected error`}],idPrefix:`v-rg-err`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`Disabled`}),(0,a.jsx)(c,{size:`md`,selectedValue:`b`,disabled:!0,items:[{value:`a`,label:`Disabled unselected`},{value:`b`,label:`Disabled selected`}],idPrefix:`v-rg-dis`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`Disabled + error`}),(0,a.jsx)(c,{size:`md`,selectedValue:`b`,disabled:!0,isError:!0,items:[{value:`a`,label:`Disabled + error, unselected`},{value:`b`,label:`Disabled + error, selected`}],idPrefix:`v-rg-de`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`text-xs text-foreground-muted mb-2`,children:`Horizontal`}),(0,a.jsx)(c,{size:`md`,selectedValue:`one`,horizontal:!0,items:[{value:`one`,label:`One`},{value:`two`,label:`Two`},{value:`three`,label:`Three`}],idPrefix:`v-rg-h`})]})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Parity`]}))();export{l as Parity,u as __namedExportsOrder,o as default};