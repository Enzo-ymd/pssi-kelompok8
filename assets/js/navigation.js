window.initNavigation = function(content) {
  const header=document.querySelector("#site-header"), nav=document.querySelector("#main-nav");
  const progress=document.querySelector("#reading-progress"), toggle=document.querySelector("#menu-toggle");
  const links=[...nav.querySelectorAll("a")], sections=[...document.querySelectorAll("[data-section-index]")];
  const update=()=>{
    const y=window.scrollY, max=document.documentElement.scrollHeight-window.innerHeight;
    progress.style.width=(max>0?Math.min(100,y/max*100):0)+"%";
    header.classList.toggle("scrolled",y>40);
    const current=sections.reduce((best,s)=>s.getBoundingClientRect().top<window.innerHeight*.42?s:best,sections[0]);
    if(current){
      const dark=current.classList.contains("dark-section") || current.id==="hero";
      header.classList.toggle("on-light",!dark && y>40);
      links.forEach(a=>a.classList.toggle("active",a.dataset.target===current.id || (current.id==="scope"&&a.dataset.target==="introduction")));
      const idx=Number(current.dataset.sectionIndex||0)+1;
      document.querySelector("#section-count").textContent=String(idx).padStart(2,"0")+" / "+String(sections.length).padStart(2,"0");
    }
  };
  window.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);update();
  toggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));header.classList.toggle("menu-open",open);
  });
  links.forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");header.classList.remove("menu-open");toggle.setAttribute("aria-expanded","false");}));
  const go=delta=>{
    const y=window.scrollY+window.innerHeight*.35;
    let idx=sections.findIndex(s=>s.offsetTop<=y && s.offsetTop+s.offsetHeight>y);
    idx=Math.max(0,Math.min(sections.length-1,idx+delta));
    sections[idx].scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
  };
  document.querySelector("#prev-section").addEventListener("click",()=>go(-1));
  document.querySelector("#next-section").addEventListener("click",()=>go(1));
};
