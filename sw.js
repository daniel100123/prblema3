if(!self.define){let e,i={};const o=(o,r)=>(o=new URL(o+".js",r).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const c=e=>o(e,t),f={module:{uri:t},exports:n,require:c};i[t]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(s(...e),n)))}}define(["./workbox-27547b5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"div.js",revision:"0a1d1b17e7cf2a8c9493ac559949e218"},{url:"home.html",revision:"0f2e42695eaf689f9efc54c77fec7329"},{url:"logo.PNG",revision:"bf061fd676679b59054e1953ba58cad3"},{url:"manifest.json",revision:"8803e767a6c214331694b3ff00cbbde0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map