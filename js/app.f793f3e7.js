(()=>{"use strict";var e={59118:(e,t,o)=>{var r=o(61957),n=o(37198),a=o(60499),i=o(59835);function l(e,t,o,r,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}var s=o(20367);const d=(0,i.aZ)({name:"App",setup(){(0,s.N)(),window.SmartdownEditor={version:"0.0.13"}}});var c=o(11639);const u=(0,c.Z)(d,[["render",l]]),f=u;var p=o(21502),h=o(23340),m=o(28339);const v=[{path:"/",component:()=>Promise.all([o.e(736),o.e(963)]).then(o.bind(o,59963)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(318)]).then(o.bind(o,68318))},{path:"about",component:()=>Promise.all([o.e(736),o.e(196)]).then(o.bind(o,41196))},{path:"reset",component:()=>Promise.all([o.e(736),o.e(226)]).then(o.bind(o,66226))},{path:"github",component:()=>Promise.all([o.e(736),o.e(942)]).then(o.bind(o,2942))},{path:"export/:id(.*)",component:()=>Promise.all([o.e(736),o.e(252)]).then(o.bind(o,32252))},{path:"note/:id(.*)",component:()=>Promise.all([o.e(736),o.e(866)]).then(o.bind(o,27866))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(293)]).then(o.bind(o,73293))}],b=v,w=(0,h.BC)((()=>{const e=m.PO,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("/editor//")});return t}));async function g(e,t){const r=e(f);r.use(n.Z,t);const i="function"===typeof p.Z?await(0,p.Z)({}):p.Z,{storeKey:l}=await Promise.resolve().then(o.bind(o,21502)),s=(0,a.Xl)("function"===typeof w?await w({store:i}):w);return i.$router=s,{app:r,store:i,storeKey:l,router:s}}const y={config:{}},P="/editor//",T=/\/\//,O=e=>(P+e).replace(T,"/");async function S({app:e,router:t,store:o,storeKey:r},n){let a=!1;const i=e=>{try{return O(t.resolve(e).href)}catch(o){}return Object(e)===e?null:e},l=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<n.length;c++)try{await n[c]({app:e,router:t,store:o,ssrContext:null,redirect:l,urlPath:s,publicPath:P})}catch(d){return d&&d.url?void l(d.url):void console.error("[Quasar] boot error:",d)}!0!==a&&(e.use(t),e.use(o,r),e.mount("#q-app"))}g(r.ri,y).then((e=>{const[t,r]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(o.bind(o,56288)),Promise.resolve().then(o.bind(o,11367)),Promise.resolve().then(o.bind(o,63991))]).then((t=>{const o=r(t).filter((e=>"function"===typeof e));S(e,o)}))}))},56288:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var r=o(23340),n=o(76647);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},l=(0,r.xr)((({app:e})=>{const t=(0,n.o)({locale:"en-US",messages:i});e.use(t)}))},11367:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var r=o(60499);const n=(0,r.iH)(""),a=(0,r.iH)(0),i=(0,r.iH)(!0),l=(0,r.iH)(!1);function s(e){a.value=e}function d(e){i.value=e}function c(e){l.value=e}function u(){const e=e=>{n.value=null,window.setTimeout((()=>{n.value=e}))},t="0.0.13";return{loadCard:e,cardToLoad:n,setToolbarTransparency:s,setToolbarVisibility:d,setToolbarFade:c,toolbarTransparency:a,toolbarVisibility:i,toolbarFade:l,version:t}}var f=o(85335);const p=async()=>{const e={},t=smartdown.defaultCalcHandlers;function o(e){console.log("cardLoader",e),window.SQ.loadCard(e)}window.SQ=u();const r=[{prefix:"/resources/",replace:"/gallery/resources/"}];function n(e){let t=!0;if(e){const o=document.getElementById(e);o&&(t=!1,window.setTimeout((()=>{o.scrollIntoView({behavior:"smooth"})}),300))}t&&window.scrollTo({top:0,behavior:"smooth"})}function a(){let e=window.location.hash;return e.startsWith("##")&&(e=e.slice(2),n(e)),!1}await(0,f.Z3)(),(0,f.um)();const i=async()=>{window.onhashchange=a},l="/editor/",s=window.publicFolder||`${l}/`,d=new Promise((n=>{const l="https://unpkg.com/smartdown@1.0.64/dist/lib/xypic.js",d={media:e,baseURL:s,cardLoader:o,calcHandlers:t,linkRules:r,xypicURL:l},c=async()=>{MathJax.Hub.Config({"fast-preview":{disabled:!0}}),i(),window.setTimeout(a,1e3),n()};smartdown.configure(d,c)}));return d}},63991:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});var r=o(47506),n=o(5816),a=o(92245);const i=async()=>{await n.c.hide(),window.addEventListener("statusTap",(()=>{console.log("StatusBar tapped")})),r.ZP.is.capacitor&&(await a.A_.setStyle({style:a.bg.Light}),await a.A_.hide())}},85335:(e,t,o)=>{o.d(t,{AL:()=>p,Ak:()=>d,DB:()=>f,DY:()=>c,R6:()=>b,Z3:()=>s,kM:()=>h,nU:()=>v,um:()=>m});o(69665);var r=o(60499),n=o(59835),a=o(58672);const i=(e,t)=>{const o=(0,r.iH)(t),a=()=>{const t=window.localStorage.getItem(e);null!=t&&(o.value=JSON.parse(t))};a();const i=()=>{window.localStorage.setItem(e,JSON.stringify(o.value))};return(0,n.YP)([o],i,{deep:!0}),o};let l=null;async function s(){l=await(await fetch("gallery/index.json")).json();for(const e of l){const t=await(await fetch(`gallery/${e.title}.md`)).text();e.content=t,e.createdAt=Date.now(),e.updatedAt=e.createdAt}}function d(e){let t=null;return l.forEach((o=>{o.title===e&&(t=(0,a.structuredClone)(o))})),t}const c=()=>i("notes",[]),u=c();function f(){u.value.splice(0)}function p(e){const t=e;return u.value.push(t),t}function h(){const e=(0,a.structuredClone)(l);u.value.push(...e)}function m(){if(0===u.value.length){console.log("loadGalleryNotesIfEmpty");const e=(0,a.structuredClone)(l);u.value.push(...e)}}function v(e){const t=u.value.find((t=>t.title===e));return t}function b(e){const t=u.value.find((t=>t.title===e));if(t){const e=u.value.indexOf(t);u.value.splice(e,1)}else console.log("removeNoteByTitle() NOT FOUND",e)}},20367:(e,t,o)=>{o.d(t,{N:()=>a,o:()=>i});var r=o(60499),n=o(59835);const a=()=>{const e=(0,r.qj)({editMode:{editing:!1,detailed:!1,source:!1},note:null}),t=(0,n.Fl)((()=>e.editMode)),o=(0,n.Fl)((()=>e.note)),a=t=>{e.editMode=t},i=t=>{e.note=t},l=e=>{a(e)},s=e=>{i(e)};(0,n.JJ)("getEditMode",t),(0,n.JJ)("updateEditMode",l),(0,n.JJ)("getNote",o),(0,n.JJ)("updateNote",s)},i=()=>({getEditMode:(0,n.f3)("getEditMode"),updateEditMode:(0,n.f3)("updateEditMode"),getNote:(0,n.f3)("getNote"),updateNote:(0,n.f3)("updateNote")})},21502:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(23340),n=o(33100);const a=(0,r.h)((()=>{const e=(0,n.MT)({modules:{},strict:!1});return e}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}o.m=e,(()=>{o.amdO={}})(),(()=>{var e=[];o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{196:"3ba81749",226:"556fa34a",252:"acb5b764",293:"8ca6ff64",318:"fbf0ffde",866:"d4e2c34d",942:"ee0d66e5",963:"5bb68327"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+e+"."+{866:"b48dffd4",942:"e1f686fd",963:"2a6e35e9"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="smartdown-editor:";o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var l,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[n];var f=(t,o)=>{l.onerror=l.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p="/editor//"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,o,r,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),n(s)}};return a.onerror=a.onload=i,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=r=>new Promise(((n,a)=>{var i=o.miniCssF(r),l=o.p+i;if(t(i,l))return n();e(r,l,null,n,a)})),n={143:0};o.f.miniCss=(e,t)=>{var o={866:1,942:1,963:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=a);var i=o.p+o.u(t),l=new Error,s=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};o.l(i,s,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,l,s]=r,d=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(s)var c=s(o)}for(t&&t(r);d<i.length;d++)a=i[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},r=globalThis["webpackChunksmartdown_editor"]=globalThis["webpackChunksmartdown_editor"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(59118)));r=o.O(r)})();