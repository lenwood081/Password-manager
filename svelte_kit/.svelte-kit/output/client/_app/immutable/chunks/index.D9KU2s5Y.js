var C=Object.defineProperty;var M=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var h=(e,t,n)=>(M(e,typeof t!="symbol"?t+"":t,n),n);import{r as p,n as v,j as b,k as j,l as g,m as I,p as A,q as E,w as B,x as P,y as R,z as q,A as T}from"./scheduler.Cem9nN_3.js";let y=!1;function z(){y=!0}function H(){y=!1}function V(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function L(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const u=t[l];u.claim_order!==void 0&&s.push(u)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,u=(r>0&&t[n[r]].claim_order<=l?r+1:V(1,r,m=>t[n[m]].claim_order,l))-1;i[s]=n[u]+1;const a=u+1;n[a]=s,r=Math.max(a,r)}const f=[],o=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(f.push(t[s-1]);c>=s;c--)o.push(t[c]);c--}for(;c>=0;c--)o.push(t[c]);f.reverse(),o.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<o.length;s++){for(;l<f.length&&o[s].claim_order>=f[l].claim_order;)l++;const u=l<f.length?f[l]:null;e.insertBefore(o[s],u)}}function N(e,t){if(y){for(L(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function U(e,t,n){y&&!n?N(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function W(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function ce(){return x(" ")}function fe(){return x("")}function F(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return e.dataset.svelteH}function G(e){return Array.from(e.childNodes)}function J(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function D(e,t,n,i,r=!1){J(e);const f=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const c=e[o];if(t(c)){const s=n(c);return s===void 0?e.splice(o,1):e[o]=s,r||(e.claim_info.last_index=o),c}}for(let o=e.claim_info.last_index-1;o>=0;o--){const c=e[o];if(t(c)){const s=n(c);return s===void 0?e.splice(o,1):e[o]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,c}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function K(e,t,n,i){return D(e,r=>r.nodeName===t,r=>{const f=[];for(let o=0;o<r.attributes.length;o++){const c=r.attributes[o];n[c.name]||f.push(c.name)}f.forEach(o=>r.removeAttribute(o))},()=>i(t))}function ue(e,t,n){return K(e,t,n,W)}function Q(e,t){return D(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function de(e){return Q(e," ")}function _e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function X(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}const $=new Set;let d;function he(){d={r:0,c:[],p:d}}function me(){d.r||p(d.c),d=d.p}function Y(e,t){e&&e.i&&($.delete(e),e.i(t))}function $e(e,t,n,i){if(e&&e.o){if($.has(e))return;$.add(e),d.c.push(()=>{$.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Z(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function pe(e){e&&e.c()}function ye(e,t){e&&e.l(t)}function k(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),g(()=>{const f=e.$$.on_mount.map(P).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...f):p(f),e.$$.on_mount=[]}),r.forEach(g)}function ee(e,t){const n=e.$$;n.fragment!==null&&(R(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){e.$$.dirty[0]===-1&&(q.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,r,f,o=null,c=[-1]){const s=I;A(e);const l=e.$$={fragment:null,ctx:[],props:f,update:v,not_equal:r,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:b(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(a,m,...w)=>{const S=w.length?w[0]:m;return l.ctx&&r(l.ctx[a],l.ctx[a]=S)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](S),u&&te(e,a)),m}):[],l.update(),u=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){z();const a=G(t.target);l.fragment&&l.fragment.l(a),a.forEach(O)}else l.fragment&&l.fragment.c();t.intro&&Y(e.$$.fragment),k(e,t.target,t.anchor),H(),j()}A(s)}class ne{constructor(){h(this,"$$");h(this,"$$set")}$destroy(){ee(this,1),this.$destroy=v}$on(t,n){if(!E(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ie="4.2.17",se="4";function _(e,t){document.dispatchEvent(X(e,{version:ie,...t},{bubbles:!0}))}function xe(e,t){_("SvelteDOMInsert",{target:e,node:t}),N(e,t)}function we(e,t,n){_("SvelteDOMInsert",{target:e,node:t,anchor:n}),U(e,t,n)}function Se(e){_("SvelteDOMRemove",{node:e}),O(e)}function be(e,t,n){F(e,t,n),n==null?_("SvelteDOMRemoveAttribute",{node:e,attribute:t}):_("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function ge(e,t,n){e[t]=n,_("SvelteDOMSetProperty",{node:e,property:t,value:n})}function Ae(e,t){t=""+t,e.data!==t&&(_("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function Ee(e){if(typeof e!="string"&&!(e&&typeof e=="object"&&"length"in e)&&!(typeof Symbol=="function"&&e&&Symbol.iterator in e))throw new Error("{#each} only works with iterable values.");return Z(e)}function Ne(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}function Oe(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new e(t);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:r}=i;throw typeof r=="string"&&r.indexOf("is not a constructor")!==-1?new Error(n):i}}class De extends ne{constructor(n){if(!n||!n.target&&!n.$$inline)throw new Error("'target' is a required option");super();h(this,"$$prop_def");h(this,"$$events_def");h(this,"$$slot_def")}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);export{me as A,Oe as B,_e as C,he as D,De as S,$e as a,x as b,ue as c,_ as d,W as e,G as f,Q as g,Se as h,ve as i,de as j,we as k,xe as l,Ae as m,ae as n,Ee as o,be as p,oe as q,ge as r,ce as s,Y as t,pe as u,Ne as v,ye as w,k as x,ee as y,fe as z};