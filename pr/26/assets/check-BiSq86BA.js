import{r as s}from"./iframe-B-5iTyjT.js";/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(...e)=>e.filter((t,o,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,r)=>r?r.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=e=>{const t=b(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},W=s.createContext({}),y=()=>s.useContext(W),S=s.forwardRef(({color:e,size:t,strokeWidth:o,absoluteStrokeWidth:r,className:c="",children:a,iconNode:C,...l},m)=>{const{size:n=24,strokeWidth:u=2,absoluteStrokeWidth:p=!1,color:f="currentColor",className:x=""}=y()??{},k=r??p?Number(o??u)*24/Number(t??n):o??u;return s.createElement("svg",{ref:m,...i,width:t??n??i.width,height:t??n??i.height,stroke:e??f,strokeWidth:k,className:h("lucide",x,c),...!a&&!L(l)&&{"aria-hidden":"true"},...l},[...C.map(([w,g])=>s.createElement(w,g)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(e,t)=>{const o=s.forwardRef(({className:r,...c},a)=>s.createElement(S,{ref:a,iconNode:t,className:h(`lucide-${A(d(e))}`,`lucide-${e}`,r),...c}));return o.displayName=d(e),o};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],N=v("check",E);export{N as C,v as c};
