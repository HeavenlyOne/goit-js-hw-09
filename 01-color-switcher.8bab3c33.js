function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;d.disabled=!0,e.addEventListener("click",(function(){n.style.backgroundColor=t(),o=setInterval((()=>{n.style.backgroundColor=t()}),1e3),e.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){clearInterval(o),e.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.8bab3c33.js.map
