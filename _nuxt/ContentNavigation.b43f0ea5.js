import{q as m,w as c,h as f,e as v,s as l,j as d,a as g,u as h}from"./query.e1885ca5.js";import{$ as y,E as _,O as w,X as C,a0 as $,h as P,a1 as x,k as N,Y as E,Q as p}from"./entry.fad53452.js";import{_ as T}from"./nuxt-link.41b30c0e.js";import{u as j}from"./preview.ff3c66dd.js";const S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=w(),i=y(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(_(s))return r.payload.state[a]=s,s;i.value=s}return i}const D=async t=>{const{content:e}=C().public;typeof(t==null?void 0:t.params)!="function"&&(t=m(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${v(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(l())return(await $(()=>import("./client-db.265c1ad3.js"),["./client-db.265c1ad3.js","./entry.fad53452.js","./query.e1885ca5.js","./preview.ff3c66dd.js","./index.a6ef77ff.js"],import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:d(n),previewToken:j().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},R=P({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=x(t),n=N(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await h(`content-navigation-${f(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=E(),{navigation:n}=t,o=i=>p(T,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),L=R;export{L as default};