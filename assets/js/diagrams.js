window.renderInteractiveDiagrams = function(content) {
  document.querySelectorAll("[data-matrix]").forEach(host=>{
    const cols=content.zachmanColumns, rows=content.zachmanRows, details=content.zachmanDetails;
    host.innerHTML=`<div class="diagram-wrap"><p class="diagram-title">ZACHMAN MATRIX · SELECT A CELL</p><div class="matrix-wrap"><table class="z-matrix"><thead><tr><th>Perspective / Interrogative</th>${cols.map(c=>`<th>${c[0]}<br><small>${c[1]}</small></th>`).join("")}</tr></thead><tbody>${rows.map((r,ri)=>`<tr><th>${String(ri+1).padStart(2,"0")} · ${r}</th>${cols.map((c,ci)=>`<td><button type="button" data-row="${ri}" data-col="${ci}" aria-label="${r}, ${c[0]}"><small>${c[0].toUpperCase()}</small>${(details[ri][ci]||"").slice(0,48)}…</button></td>`).join("")}</tr>`).join("")}</tbody></table></div><div class="matrix-detail" aria-live="polite"><strong>${rows[0]} × ${cols[0][0]}</strong><p>${details[0][0]}</p></div></div>`;
    const detail=host.querySelector(".matrix-detail");
    host.querySelectorAll("button[data-row]").forEach(btn=>btn.addEventListener("click",()=>{
      host.querySelectorAll("button.selected").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected");
      const r=Number(btn.dataset.row),c=Number(btn.dataset.col);
      detail.innerHTML=`<strong>${rows[r]} × ${cols[c][0]} — ${cols[c][1]}</strong><p>${details[r][c]}</p>`;
    }));
    host.querySelector("button")?.classList.add("selected");
  });
};
