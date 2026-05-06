import{r as s}from"./iframe-eu52t8KU.js";/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(...t)=>t.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,r)=>r?r.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t=>{const e=A(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},L=s.createContext({}),W=()=>s.useContext(L),_=s.forwardRef(({color:t,size:e,strokeWidth:o,absoluteStrokeWidth:r,className:c="",children:n,iconNode:p,...d},m)=>{const{size:a=24,strokeWidth:u=2,absoluteStrokeWidth:k=!1,color:w="currentColor",className:f=""}=W()??{},x=r??k?Number(o??u)*24/Number(e??a):o??u;return s.createElement("svg",{ref:m,...i,width:e??a??i.width,height:e??a??i.height,stroke:t??w,strokeWidth:x,className:C("lucide",f,c),...!n&&!y(d)&&{"aria-hidden":"true"},...d},[...p.map(([g,b])=>s.createElement(g,b)),...Array.isArray(n)?n:[n]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(t,e)=>{const o=s.forwardRef(({className:r,...c},n)=>s.createElement(_,{ref:n,iconNode:e,className:C(`lucide-${v(h(t))}`,`lucide-${t}`,r),...c}));return o.displayName=h(t),o};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],U=l("check",$);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],j=l("chevron-down",N);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],z=l("chevron-up",S);export{j as C,U as a,z as b,l as c};
