var L=Object.defineProperty,M=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var C=(r,t,n)=>t in r?L(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,S=(r,t)=>{for(var n in t||(t={}))G.call(t,n)&&C(r,n,t[n]);if(k)for(var n of k(t))D.call(t,n)&&C(r,n,t[n]);return r},x=(r,t)=>M(r,j(t));import{j as $,r as m,R,a as T}from"./vendor.de4d7695.js";const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};E();const e=$.exports.jsx,u=$.exports.jsxs,V=()=>e("div",{className:"footer",children:u("p",{children:[e("img",{src:"./assets/images/profile.png"}),e("a",{href:"https://github.com/brunocout",target:"_blank",children:"@brunocout"})]})});const I=({winner:r})=>u("div",{className:"overlay-text",children:[e("h1",{children:"Victory"}),u("p",{className:"overlay-text-winner",children:[r," won!!"]}),u("button",{className:"overlay-text-button",onClick:()=>{window.location.reload()},children:["Restart",e("img",{src:"./assets/images/restart.png"})]})]});const O=({icon:r="pokebola"})=>e("div",{className:"card-game",children:e("img",{src:"./assets/images/"+r+".png"})});let v=!1,b=!1,g,N;const K=({icon:r,handleChoice:t,setWinner:n})=>{const d=l=>{const i=l.target.closest(".card-front-back");if(!b&&i!==g){if(i.classList.add("-active"),t(r),!v){v=!0,g=i;return}v=!1,N=i,a()}},a=()=>{const l=document.querySelector(".arrow-down"),i=document.querySelector("#player1"),c=document.querySelector("#player2");let y=g.dataset.pokemon===N.dataset.pokemon;!y&&s(),i.dataset.points=="three"||c.dataset.points=="three"?console.log("ganhei"):y&&(l.dataset.currentplayer==1?h("player1"):h("player2"))},s=()=>{b=!0,setTimeout(()=>{g.classList.remove("-active"),N.classList.remove("-active"),p()},700)},p=()=>{[v,b]=[!1,!1][N]=[null,null]},h=l=>{const i=document.querySelector(".overlay-text"),c=document.querySelector(`#${l}`);setTimeout(()=>{c.dataset.points==0?c.dataset.points=1:c.dataset.points==1?c.dataset.points=2:(c.dataset.points=3,n(l),i.classList.add("-visible"))},900)};return u("div",{className:"card-front-back",onClick:l=>d(l),"data-pokemon":r,children:[e("div",{className:"card -front",children:e(O,{icon:"pokebola",alt:"pokebola"})}),e("div",{className:"card -back","data-color":r,children:e(O,{icon:r})})]})},P=[{icon:"charmander"},{icon:"bulbasaur"},{icon:"squirtle"},{icon:"pikachu"},{icon:"eevee"},{icon:"mew"}];const W=({setWinner:r})=>{const[t,n]=m.exports.useState([]),[d,a]=m.exports.useState(null),[s,p]=m.exports.useState(null),h=()=>{const o=[...P,...P].sort(()=>Math.random()-.5).map(f=>x(S({},f),{id:Math.random()}));n(o)};m.exports.useEffect(()=>{h()},[]),m.exports.useEffect(()=>{d&&s&&l()},[d,s]);const l=()=>{a(null),p(null)},i=o=>{d?p(o):a(o)},c=()=>{const o=document.querySelector(".arrow-down"),f=o.getAttribute("data-currentplayer");o.setAttribute("data-currentplayer",f==1?2:1)},y=()=>{const f=document.querySelector(".board-game").querySelectorAll(".card-front-back.-active"),B=document.querySelector("#player1"),F=document.querySelector("#player2");s?B.dataset.points==3?w("player1"):F.dataset.points==3&&w("player2"):A(f)},w=o=>{r(o)},A=o=>{setTimeout(()=>{(o.length==2||o.length==4||o.length==6||o.length==8||o.length==10)&&c()},1e3)};return e("div",{className:"board-game",onClick:y,children:t.map(o=>e(K,{icon:o.icon,handleChoice:i,setWinner:r}))})};const _=({currentPlayer:r=1})=>e("img",{className:"arrow-down","data-currentplayer":r,src:"./assets/images/arrow.png",alt:"arrow"});const q=({player:r})=>e("p",{className:"player-name",children:r});const z=({player:r="vs"})=>e("span",{className:"vs-player",children:r});const H=()=>u("div",{className:"score-board",children:[e(_,{currentPlayer:1}),e(q,{player:"Player1"}),u("ol",{className:"player-score","data-points":0,id:"player1",children:[e("li",{className:"pointer",children:"1"}),e("li",{className:"pointer",children:"2"}),e("li",{className:"pointer",children:"3"})]}),e(z,{}),u("ol",{className:"player-score","data-points":0,id:"player2",children:[e("li",{className:"pointer",children:"1"}),e("li",{className:"pointer",children:"2"}),e("li",{className:"pointer",children:"3"})]}),e(q,{player:"Player2"})]});function J(){const[r,t]=m.exports.useState("");return u("div",{className:"App",children:[e(I,{winner:r}),e(H,{}),e(W,{setWinner:t}),e(V,{})]})}R.render(e(T.StrictMode,{children:e(J,{})}),document.getElementById("root"));
