import{p as e,a as s,r as t,o,c as a,w as n,b as r,F as p,d as c,t as u,e as l,f as m,g as d}from"./vendor.16821e6d.js";!function(e=".",s="__import__"){try{self[s]=new Function("u","return import(u)")}catch(t){const o=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[s]=e=>new Promise(((t,n)=>{const r=new URL(e,o);if(self[s].moduleMap[r])return t(self[s].moduleMap[r]);const p=new Blob([`import * as m from '${r}';`,`${s}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(p),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){t(self[s].moduleMap[r]),a(c)}});document.head.appendChild(c)})),self[s].moduleMap={}}}("/issue-generator/assets/");const i=n("data-v-66b441e9");e("data-v-66b441e9");const f=r("span",null,"Issue Generator",-1),b=r("span",null,"English",-1);s();const v={expose:[],props:{msg:String},setup:e=>(t({count:0}),i(((e,s)=>(o(),a("header",null,[f,b]))))),__scopeId:"data-v-66b441e9"};const g={expose:[],setup:e=>(e,s)=>{const t=c("router-view");return o(),a(p,null,[r(v),r(t)],64)}};const h=n("data-v-b1f73c14"),w={expose:[],props:{msg:String},setup:e=>(t({count:0}),h(((s,t)=>(o(),a("h1",null,u(e.msg),1))))),__scopeId:"data-v-b1f73c14"},_=[{path:"/",name:"Home",component:w}],L=l({history:m(),routes:_}),R=d(g);R.use(L),R.mount("#app");
