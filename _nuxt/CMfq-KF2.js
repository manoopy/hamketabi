import{u as G}from"./B-0IRHAp.js";import{S as W,U as Z,l as k,s as D,A as K,i as h,V as T,B as q,w as X,o as p,c as m,K as C,n as y,d as w,W as S,m as $,F as z,O as E,t as O,b as A,X as J,e as R,h as I,f as H,g as M,z as L,y as Y,x as B,Y as Q,v as _,Z as x}from"./DgGCtTaB.js";import{_ as N}from"./DlAUqK2U.js";import{t as U,n as ee,i as re,b as te}from"./BRXS0K6-.js";function Ve(e,r,t){let o;Z(t)?o={evaluating:t}:o=t||{};const{lazy:a=!1,evaluating:n=void 0,shallow:c=!0,onError:u=ee}=o,l=k(!a),d=c?D(r):k(r);let s=0;return K(async i=>{if(!l.value)return;s++;const f=s;let g=!1;n&&Promise.resolve().then(()=>{n.value=!0});try{const b=await e(v=>{i(()=>{n&&(n.value=!1),g||v()})});f===s&&(d.value=b)}catch(b){u(b)}finally{n&&f===s&&(n.value=!1),g=!0}}),a?h(()=>(l.value=!0,d.value)):d}const ne=re?window:void 0;function P(e){var r;const t=U(e);return(r=t==null?void 0:t.$el)!=null?r:t}function se(){const e=k(!1),r=T();return r&&q(()=>{e.value=!0},r),e}function ae(e){const r=se();return h(()=>(r.value,!!e()))}function Ce(e,r,t={}){const{window:o=ne,...a}=t;let n;const c=ae(()=>o&&"ResizeObserver"in o),u=()=>{n&&(n.disconnect(),n=void 0)},l=h(()=>{const i=U(e);return Array.isArray(i)?i.map(f=>P(f)):[P(i)]}),d=X(l,i=>{if(u(),c.value&&o){n=new ResizeObserver(r);for(const f of i)f&&n.observe(f,a)}},{immediate:!0,flush:"post"}),s=()=>{u(),d()};return te(s),{isSupported:c,stop:s}}const j=new Map;function ie(e){const r=W();function t(u){var l;const d=j.get(e)||new Set;d.add(u),j.set(e,d);const s=()=>a(u);return(l=r==null?void 0:r.cleanups)==null||l.push(s),s}function o(u){function l(...d){a(l),u(...d)}return t(l)}function a(u){const l=j.get(e);l&&(l.delete(u),l.size||n())}function n(){j.delete(e)}function c(u,l){var d;(d=j.get(e))==null||d.forEach(s=>s(u,l))}return{on:t,once:o,off:a,emit:c,reset:n}}const oe={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},F=H(M.ui.strategy,M.ui.formGroup,oe),le=R({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(F.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:r,attrs:t}=G("formGroup",I(e,"ui"),F,I(e,"class")),o=L("form-errors",null),a=h(()=>{var u,l;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(l=(u=o==null?void 0:o.value)==null?void 0:u.find(d=>d.path===e.name))==null?void 0:l.message}),n=h(()=>r.value.size[e.size??F.default.size]),c=k(Y());return B("form-group",{error:a,inputId:c,name:h(()=>e.name),size:h(()=>e.size),eagerValidation:h(()=>e.eagerValidation)}),{ui:r,attrs:t,inputId:c,size:n,error:a}}}),ue=["for"];function fe(e,r,t,o,a,n){return p(),m("div",$({class:e.ui.wrapper},e.attrs),[C("div",{class:y(e.ui.inner)},[e.label||e.$slots.label?(p(),m("div",{key:0,class:y([e.ui.label.wrapper,e.size])},[C("label",{for:e.inputId,class:y([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?w(e.$slots,"label",S($({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(p(),m(z,{key:1},[E(O(e.label),1)],64))],10,ue),e.hint||e.$slots.hint?(p(),m("span",{key:0,class:y([e.ui.hint])},[e.$slots.hint?w(e.$slots,"hint",S($({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(p(),m(z,{key:1},[E(O(e.hint),1)],64))],2)):A("",!0)],2)):A("",!0),e.description||e.$slots.description?(p(),m("p",{key:1,class:y([e.ui.description,e.size])},[e.$slots.description?w(e.$slots,"description",S($({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(p(),m(z,{key:1},[E(O(e.description),1)],64))],2)):A("",!0)],2),C("div",{class:y([e.label?e.ui.container:""])},[w(e.$slots,"default",S(J({error:e.error}))),typeof e.error=="string"&&e.error?(p(),m("p",{key:0,class:y([e.ui.error,e.size])},[e.$slots.error?w(e.$slots,"error",S($({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(p(),m(z,{key:1},[E(O(e.error),1)],64))],2)):e.help||e.$slots.help?(p(),m("p",{key:1,class:y([e.ui.help,e.size])},[e.$slots.help?w(e.$slots,"help",S($({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(p(),m(z,{key:1},[E(O(e.help),1)],64))],2)):A("",!0)],2)],16)}const Fe=N(le,[["render",fe]]);class V extends Error{constructor(r){super(r),this.message=r,Object.setPrototypeOf(this,V.prototype)}}const de=R({props:{schema:{type:[Object,Function],default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:r,emit:t}){const o=Y(),a=ie(`form-${o}`);q(()=>{a.on(async s=>{var i;s.type!=="submit"&&((i=e.validateOn)!=null&&i.includes(s.type))&&await l(s.path,{silent:!0})})}),_(()=>{a.reset()});const n=k([]);B("form-errors",n),B("form-events",a);const c=k({});B("form-inputs",c);async function u(){let s=await e.validate(e.state);if(e.schema){const{errors:i,result:f}=await ze(e.state,e.schema);i?s=s.concat(i):Object.assign(e.state,f)}return s}async function l(s,i={silent:!1}){let f=s;if(s&&!Array.isArray(s)&&(f=[s]),f){const g=n.value.filter(v=>!f.includes(v.path)),b=(await u()).filter(v=>f.includes(v.path));n.value=g.concat(b)}else n.value=await u();if(n.value.length>0){if(i.silent)return!1;throw new V(`Form validation failed: ${JSON.stringify(n.value,null,2)}`)}return e.state}async function d(s){var f;const i=s;try{(f=e.validateOn)!=null&&f.includes("submit")&&await l(),i.data=e.state,t("submit",i)}catch(g){if(!(g instanceof V))throw g;const b={...i,errors:n.value.map(v=>({...v,id:c.value[v.path]}))};t("error",b)}}return r({validate:l,errors:n,setErrors(s,i){i?n.value=n.value.filter(f=>f.path!==i).concat(s):n.value=s},async submit(){await d(new Event("submit"))},getErrors(s){return s?n.value.filter(i=>i.path===s):n.value},clear(s){s?n.value=n.value.filter(i=>i.path!==s):n.value=[]}}),{onSubmit:d,errors:x(n)}}});function ce(e){return e.validate&&e.__isYupSchema__}function pe(e){return e.inner!==void 0}function me(e){return"schema"in e&&typeof e.coercer=="function"&&typeof e.validator=="function"&&typeof e.refiner=="function"}function ve(e){return e.validateAsync!==void 0&&e.id!==void 0}function ye(e){return e.isJoi===!0}function he(e){return"_parse"in e||"_run"in e||typeof e=="function"&&"schema"in e}function ge(e){return e.parse!==void 0}async function be(e,r){const t=await("_parse"in r?r._parse(e):"_run"in r?r._run({typed:!1,value:e},{}):r(e));return!t.issues||t.issues.length===0?{errors:null,result:"output"in t?t.output:"value"in t?t.value:null}:{errors:t.issues.map(a=>{var n;return{path:((n=a.path)==null?void 0:n.map(c=>c.key).join("."))||"",message:a.message}}),result:null}}async function we(e,r){try{return await r.validateAsync(e,{abortEarly:!1}),{errors:null,result:e}}catch(t){if(ye(t))return{errors:t.details.map(a=>({path:a.path.join("."),message:a.message})),result:null};throw t}}async function Se(e,r){const t=await r.safeParseAsync(e);return t.success===!1?{errors:t.error.issues.map(a=>({path:a.path.join("."),message:a.message})),result:null}:{result:t.data,errors:null}}async function $e(e,r){const[t,o]=r.validate(e);return t?{errors:t.failures().map(n=>({message:n.message,path:n.path.join(".")})),result:null}:{errors:null,result:o}}async function ke(e,r){try{return{errors:null,result:r.validateSync(e,{abortEarly:!1})}}catch(t){if(pe(t))return{errors:t.inner.map(a=>({path:a.path??"",message:a.message})),result:null};throw t}}function ze(e,r){if(ge(r))return Se(e,r);if(ve(r))return we(e,r);if(he(r))return be(e,r);if(ce(r))return ke(e,r);if(me(r))return $e(e,r);throw new Error("Form validation failed: Unsupported form schema")}function Ee(e,r,t,o,a,n){return p(),m("form",{onSubmit:r[0]||(r[0]=Q((...c)=>e.onSubmit&&e.onSubmit(...c),["prevent"]))},[w(e.$slots,"default",S(J({errors:e.errors})))],32)}const Ie=N(de,[["render",Ee]]);export{Ie as _,Fe as a,Ce as b,Ve as c,P as u};
