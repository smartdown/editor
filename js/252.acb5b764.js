"use strict";(globalThis["webpackChunksmartdown_editor"]=globalThis["webpackChunksmartdown_editor"]||[]).push([[252],{6051:(t,o,e)=>{e.d(o,{Z:()=>s});var l=e(59835);const n={class:"q-mr-auto q-ml-auto"};function r(t,o){return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.WI)(t.$slots,"default")])}var a=e(11639);const i={},c=(0,a.Z)(i,[["render",r]]),s=c},32252:(t,o,e)=>{e.r(o),e.d(o,{default:()=>C});var l=e(59835),n=e(86970);const r={key:0,style:{border:"3px solid lightgray",padding:"5px"}},a=(0,l._)("hr",null,null,-1),i={key:1,style:{border:"3px solid lightgray",padding:"5px"}},c=(0,l._)("hr",null,null,-1);function s(t,o,e,s,u,p){const d=(0,l.up)("q-avatar"),g=(0,l.up)("q-btn"),m=(0,l.up)("Container"),w=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(w,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l._)("h3",null,[(0,l.Wm)(d,{icon:"file_download",color:"primary","text-color":"white"}),(0,l.Uk)(" Export ")]),t.note?((0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("h3",null,(0,n.zw)(t.note.title),1),(0,l._)("p",null,(0,n.zw)(t.note.description),1),a,(0,l.Wm)(g,{onClick:t.exportCurrentNote,flat:"",label:"Export Current Note",color:"primary"},null,8,["onClick"])])):((0,l.wg)(),(0,l.iD)("div",i,[c,(0,l.Wm)(g,{onClick:t.exportAllNotes,flat:"",label:"Export All Notes",color:"primary"},null,8,["onClick"])]))])),_:1})])),_:1})}var u=e(20367),p=e(86646),d=e(47506),g=e(56429),m=e(6051);const w=(0,l.aZ)({components:{Container:m.Z},name:"Export",setup(){const t=(0,u.o)(),o=(0,l.Fl)({get:()=>t.getNote.value}),e=async()=>{const t=o.value.title.replaceAll("/","__").replaceAll(":",".."),e=t.endsWith(".md")?"":".md",l=`${t}${e}`,n=o.value.content;if(d.ZP.is.capacitor)try{await g.fy.writeFile({path:l,data:n,directory:g.tP.Documents,encoding:g.ez.UTF8})}catch(r){console.log("#e",r)}else{const t=(0,p.Z)(l,n);!0===t||console.log("Error: ",t)}},n=async()=>{console.log("#exportAllNotes NYI")};return{note:o,exportCurrentNote:e,exportAllNotes:n}}});var h=e(11639),x=e(69885),y=e(61357),v=e(24455),_=e(69984),f=e.n(_);const k=(0,h.Z)(w,[["render",s]]),C=k;f()(w,"components",{QPage:x.Z,QAvatar:y.Z,QBtn:v.Z})}}]);