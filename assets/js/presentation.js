window.initPresentation = function(content) {
  const btn=document.querySelector("#presentation-toggle");
  btn.addEventListener("click",()=>{
    const active=document.body.classList.toggle("presentation-mode");
    btn.setAttribute("aria-pressed",String(active));btn.textContent=active?"Exit presentation":"Presentation mode";
  });
  document.addEventListener("keydown",e=>{
    if(e.altKey||e.ctrlKey||e.metaKey) return;
    const tag=document.activeElement?.tagName;
    if(["INPUT","TEXTAREA","SELECT"].includes(tag)) return;
    if(e.key==="ArrowRight"||e.key==="PageDown"){e.preventDefault();document.querySelector("#next-section").click();}
    if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();document.querySelector("#prev-section").click();}
    if(e.key==="Home"){e.preventDefault();document.querySelector("#hero").scrollIntoView({behavior:"smooth"});}
    if(e.key==="End"){e.preventDefault();document.querySelector("#references").scrollIntoView({behavior:"smooth"});}
    if(e.key==="Escape"&&document.body.classList.contains("presentation-mode")){document.body.classList.remove("presentation-mode");btn.setAttribute("aria-pressed","false");btn.textContent="Presentation mode";}
  });
};
