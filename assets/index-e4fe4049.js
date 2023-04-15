import{j as l,a as t,R as X,o as y,F as f,l as A}from"./@uiw-1ade4b46.js";import{R as v,r as c}from"./react-ef05dfbe.js";import{c as N}from"./react-dom-a984e88f.js";import{F as p,f as b,a as L,b as E,c as M}from"./@fortawesome-50343fc8.js";import"./@babel-6c5c234b.js";import"./@codemirror-a96673d0.js";import"./@lezer-f93b584d.js";import"./crelt-7bb88e1d.js";import"./style-mod-c7de426b.js";import"./w3c-keyname-aa008802.js";import"./prop-types-32f71778.js";import"./scheduler-04ce0582.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m=({title:s,language:o,value:n,setValue:i,icon:e})=>{const r=v.useCallback((d,x)=>{i(d)},[]),[a,u]=c.useState(!1);return l("div",{className:`editor-panel ${a?"expand":""}`,children:[l("div",{className:"header",children:[l("div",{className:"title",children:[t(p,{icon:e}),t("h3",{children:s})]}),t("button",{className:"expand-collapsed-btn",title:"Expand the current section",onClick:()=>u(d=>!d),children:t(p,{icon:b})})]}),t("div",{className:"editor-body",children:t(X,{value:n,height:"100%",theme:y,extensions:[o],onChange:r,maxWidth:"600px",className:"codemirror-custom-editor",placeholder:`Start typing the ${s} code`,basicSetup:{lineNumbers:!0,autocompletion:!0,mode:o,foldGutter:!0,highlightActiveLine:!0,highlightSelectionMatches:!0,bracketMatching:!0}})})]})},V="data:image/png;base64,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",R=({onClickExample:s,onClickNew:o})=>t(f,{children:l("ul",{className:"menu-item-list",children:[t("li",{children:t("a",{className:"active brand",href:"/",children:t("img",{src:V,className:"logo"})})}),t("li",{style:{marginRight:"1rem"},children:l("ul",{className:"right-menu-items",children:[t("li",{children:t("button",{className:"example-btn",onClick:s,children:"Try Example"})}),t("li",{children:t("button",{className:"example-btn",onClick:o,children:"New CodeME"})})]})})]})}),S="codepen-clone-";function h(s,o){const n=S+s,[i,e]=c.useState(()=>{const r=localStorage.getItem(n);return r!=null?JSON.parse(r):typeof o=="function"?o():o});return c.useEffect(()=>{localStorage.setItem(n,JSON.stringify(i))},[n,i]),[i,e]}function H(){const[s,o]=h("html",""),[n,i]=h("css",""),[e,r]=h("javascript",""),[a,u]=c.useState("");return c.useEffect(()=>{const g=setTimeout(()=>{const w=`<html>
            <style>${n}</style>
            <body>${s}</body>
             <script>${e}<\/script>
            </html>`;u(w)},500);return()=>{clearTimeout(g)}},[s,n,e]),l(f,{children:[t(R,{onClickExample:()=>{o(`
      <main> 
      <div class="scene">
        <div class="wrapper">
          <div id="sphere" class="sphere">
          </div>
        </div>
      </div>
    </main>
  `),i(`
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    html {
      background: #141414;
    }

    body {
      display: flex;
      flex-direction: column;
      background: #141414;
      background: linear-gradient(147deg, rgb(18 34 42) 9%, #040404 53%);
      color: #fff;
      overflow: auto;
    }

    main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1 1 auto;
      overflow: auto;
    }

    .scene {
      width: 600px;
      height: 600px;
      margin: 2% auto;
      perspective: 1000px;
    }

    .wrapper {
      width: 100%;
      height: 100%;
      transform: rotateX(45deg) rotateY(45deg);
      transform-style: preserve-3d;
    }

    .sphere {
      position: relative;
      width: 70%;
      height: 70%;
      margin: 0 auto;
      transform-style:  preserve-3d;
      animation: rotate 100s infinite linear;
    }

    .line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px; 
      border-style: dotted;
      border-color: #06e0fd;
      box-shadow: 1px 0px 20px -2px rgba(0,0,0), 1px 0px 50px -2px #06fdd4; 
    }


    @keyframes rotate {
      to {
        transform: rotateX(360deg) rotateY(360deg);
      }
    }
  `),r(`
    const sphere = document.getElementById('sphere');
    const rows = []

    for(i = 0; i < 180; i += 9) {
      rows.push(\`<div class="line" style="transform: rotateY(\${i}deg);"></div>\`)
    }

    sphere.innerHTML = rows.join("");
  `)},onClickNew:()=>{o(""),i(""),r("")}}),l("div",{className:"container",children:[l("div",{className:"pane top-pane",children:[t(m,{title:"HTML",language:A.html(),value:s,setValue:o,icon:L}),t(m,{title:"CSS",language:A.css(),value:n,setValue:i,icon:E}),t(m,{title:"JAVASCRIPT",language:A.javascript(),value:e,setValue:r,icon:M})]}),t("div",{className:"pane bottom-pane",children:t("iframe",{srcDoc:a,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",className:"iframe-custom-class"})})]})]})}N.createRoot(document.getElementById("root")).render(t(v.StrictMode,{children:t(H,{})}));
