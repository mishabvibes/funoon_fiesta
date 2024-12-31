import{c as S,g as E,r as f,j as e,_ as D,b as T,a as O,m as y,f as N}from"./index-DM-f00sk.js";import{S as v,T as b}from"./trophy-Cg_1rF28.js";import{M as R}from"./medal-BdkP1w6y.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=S("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=S("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);var w={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var C;function L(){return C||(C=1,function(n){(function(){var c={}.hasOwnProperty;function o(){for(var s="",a=0;a<arguments.length;a++){var t=arguments[a];t&&(s=m(s,p(t)))}return s}function p(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return o.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var a="";for(var t in s)c.call(s,t)&&s[t]&&(a=m(a,t));return a}function m(s,a){return a?s?s+" "+a:s+a:s}n.exports?(o.default=o,n.exports=o):window.classNames=o})()}(w)),w.exports}var _=L();const G=E(_),I=({programCategory:n="",programName:c="",stage:o="ON STAGE",records:p=[],defaultBackground:m="",backgroundImage:s=""})=>{const[a,t]=f.useState(!1),l=f.useRef(null),i=d=>{const r={};return d.forEach(x=>{const u=x.fields.Place;r[u]||(r[u]=[]),r[u].push(x)}),r},h=async()=>{if(!(!l.current||a))try{t(!0);const{default:d}=await D(async()=>{const{default:P}=await import("./html2canvas.esm-CBrSDip1.js");return{default:P}},[]),r=l.current.cloneNode(!0);r.style.width="400px",r.style.height="400px",r.style.left="-9999px",document.body.appendChild(r);const x=await d(r,{width:400,height:400,scale:2,useCORS:!0,backgroundColor:null});document.body.removeChild(r);const u=x.toDataURL("image/png",1),g=document.createElement("a");g.download=`${c.toLowerCase().replace(/\s+/g,"-")}-winners.png`,g.href=u,g.click()}catch(d){console.error("Error generating poster:",d)}finally{t(!1)}},k={1:"#FFD700",2:"#C0C0C0",3:"#CD7F32"};return e.jsxs("div",{className:"w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] mx-auto",children:[e.jsxs("div",{id:"poster-content",ref:l,className:"relative w-full aspect-square overflow-hidden shadow-2xl",style:{backgroundImage:s?`url(${s})`:`url(${m})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-black/35"}),e.jsx("div",{className:G("absolute inset-0",{"bg-[linear-gradient(45deg,#2e1065,transparent)]":o==="OFF STAGE","bg-[linear-gradient(45deg,#78350f,transparent)]":o==="ON STAGE"})}),e.jsxs("div",{className:"relative z-10 w-full h-full p-4 sm:p-6 md:p-8 flex flex-col",children:[e.jsxs("div",{className:"text-center ",children:[e.jsx("h1",{className:"text-lg sm:text-xl font-bold text-white mb-2",children:c}),e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx(v,{className:"w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"}),e.jsx("h2",{className:"text-xs sm:text-sm text-yellow-400 font-medium",children:n}),e.jsx(v,{className:"w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"})]})]}),e.jsx("div",{className:"flex-grow flex flex-col justify-center space-y-2 sm:space-y-3",children:Object.entries(i(p)).map(([d,r])=>r.map((x,u)=>e.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 lg:gap-4",children:[e.jsx("div",{className:"p-1.5 sm:p-2 rounded-md sm:rounded-xl bg-white/20",children:e.jsx(R,{className:"w-3 h-3 sm:w-6 sm:h-6",style:{color:k[parseInt(d)]}})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"text-xs sm:text-sm lg:text-base font-bold text-white truncate",children:x.fields.Name}),e.jsx("p",{className:"text-xs text-yellow-400 truncate",children:x.fields.Team})]}),e.jsxs("div",{className:"text-sm sm:text-base lg:text-lg font-bold text-white/50",children:["#",d]})]},`${d}-${u}`)))}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx("p",{className:"text-xs text-white/60",children:"Funoon Fiesta • 2024 - 2025"})})]})]}),e.jsxs("button",{onClick:h,disabled:a,className:"mt-3 sm:mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl py-2 sm:py-3 px-4 flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(A,{className:"w-4 h-4 sm:w-5 sm:h-5"}),e.jsx("span",{className:"text-sm sm:text-base",children:a?"Generating...":"Download Poster"})]})]})},j="/assets/poster-DfPZmIBh.jpeg",U="/assets/poster1-DZLVP1q7.jpg",V="/assets/poster2-imUVk4x8.jpg",B=()=>{const{programName:n}=T(),{results:c}=O(),[o,p]=f.useState([]),[m,s]=f.useState({category:"",stage:"ON STAGE"}),a=[j,U,V];return f.useEffect(()=>{if(c.length>0&&n){const t=c.find(i=>i.programName.toUpperCase()===n.toUpperCase()),l=c.filter(i=>i.programName.toUpperCase()===n.toUpperCase()).sort((i,h)=>h.points-i.points).slice(0,3).map((i,h)=>({fields:{Place:(h+1).toString(),Name:i.studentName||"---",Team:i.teamName||"Individual"}}));for(;l.length<3;)l.push({fields:{Place:(l.length+1).toString(),Name:"---",Team:"---"}});p(l),s({category:(t==null?void 0:t.category)||"",stage:(t==null?void 0:t.stage)||"ON STAGE"})}},[c,n]),e.jsx("div",{className:"min-h-screen p-4 md:p-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsxs("div",{className:"inline-flex items-center justify-center gap-2 mb-4",children:[e.jsx(b,{className:"w-8 h-8 text-yellow-500"}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-bold text-gray-900 dark:text-white",children:[n," Winners"]}),e.jsx(b,{className:"w-8 h-8 text-yellow-500"})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:["Celebrating excellence and outstanding achievements in ",n]})]}),e.jsx("div",{className:"w-full max-w-5xl mx-auto mb-16",children:e.jsx("div",{className:"bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20 rounded-2xl p-8",children:e.jsx("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8",children:o.map((t,l)=>e.jsxs(y.div,{variants:N("left",.3),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 w-full md:w-auto",children:[e.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center ${l===0?"bg-yellow-400":l===1?"bg-gray-400":"bg-amber-600"}`,children:e.jsx(F,{className:"w-6 h-6 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-gray-900 dark:text-white font-bold text-lg",children:t.fields.Name}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:t.fields.Team})]})]},l))})})}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full",children:a.map((t,l)=>e.jsx(y.div,{variants:N("down",.3),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"flex justify-center",children:e.jsx(I,{programName:n,programCategory:m.category,stage:m.stage,records:o,defaultBackground:(m.stage==="OFF STAGE",j),backgroundImage:t})},l))})]})})};export{B as default};
