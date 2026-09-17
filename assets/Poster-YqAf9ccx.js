import{i as e,r as t,t as n}from"./index-CJmvirYJ.js";var r=e(t(),1),i=n();function a(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{document.title=`Poster - Bengaluru Skill Summit`,window.scrollTo(0,0);let e=`iframe-resizer-script`,t=document.getElementById(e),n=()=>{if(window.iFrameResize&&document.getElementById(`posterFrame`))try{window.iFrameResize({log:!1,autoResize:!0,checkOrigin:!1,heightCalculationMethod:`max`},`#posterFrame`)}catch(e){console.warn(`iFrameResize error:`,e)}};return t?n():(t=document.createElement(`script`),t.id=e,t.src=`https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js`,t.async=!0,t.onload=n,document.body.appendChild(t)),()=>{let e=document.getElementById(`posterFrame`);if(e&&e.iFrameResizer)try{e.iFrameResizer.close()}catch{}}},[]),(0,i.jsxs)(`div`,{className:`bss-poster-page`,children:[(0,i.jsx)(`div`,{className:`bss-poster-container`,children:(0,i.jsx)(`iframe`,{ref:e,id:`posterFrame`,src:`https://poster.bengaluruskillsummit.com/`,style:{width:`100%`,border:`none`,minHeight:`850px`,display:`block`},allow:`camera; microphone; autoplay; fullscreen`,scrolling:`no`,title:`Bengaluru Skill Summit Poster`})}),(0,i.jsx)(`style`,{children:`
        .bss-poster-page {
          width: 100%;
          min-height: 85vh;
          background-color: #ffffff;
          padding: 0;
          margin: 0;
        }
        .bss-poster-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
        }
      `})]})}export{a as default};