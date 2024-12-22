KEEP.initCodeBlock=()=>{!0===KEEP.theme_config?.code_block?.tools?.enable&&(KEEP.utils.initCodeBlockTools=()=>{const{style:e}=KEEP.theme_config?.code_block||{},{style:t}=KEEP.theme_config?.code_block?.tools||{},o="mac"===(e||t||"default"),l=o?"fas fa-chevron-left":"fas fa-chevron-right",{copy:s,copied:n,fold:c,folded:a}=KEEP.language_code_block,i=`<span class="tool fold tooltip" data-tooltip-content="${c}" data-tooltip-offset-y="-2px"><i class="fas fa-chevron-down"></i></span>`;document.querySelectorAll("figure.highlight").forEach((e=>{let t=e.classList.length?e.classList[1].toUpperCase():"";"PLAINTEXT"===t&&(t="");const d=document.createElement("div");d.classList.add("highlight-container"),o&&d.classList.add("mac"),e.wrap(d);const r=""+(t?'<span class="code-lang">'+t+"</span>":"");d.insertAdjacentHTML("afterbegin",`<div class="code-tools-box">\n        ${o?i+r:"<span>"+i+r+"</span>"}\n        <span class="tool copy tooltip" data-tooltip-content="${s}" data-tooltip-offset-y="-2px"><i class="fas fa-copy"></i></span>\n      </div>`);const p=e.parentNode.querySelector(".code-tools-box"),f=p.querySelector(".copy"),y=p.querySelector(".fold");f.addEventListener("click",(t=>{const o=t.currentTarget,l=[...e.querySelectorAll(".code .line")].map((e=>e.innerText)).join("\n"),s=document.createElement("textarea");s.style.top=window.scrollY+"px",s.style.position="absolute",s.style.opacity="0",s.readOnly=!0,s.value=l,document.body.append(s);const c=document.getSelection(),a=c.rangeCount>0&&c.getRangeAt(0);s.select(),s.setSelectionRange(0,l.length),s.readOnly=!1;const i=document.execCommand("copy"),d=o.querySelector("i"),r=p.querySelector(".copy .tooltip-content");i?(d.className="fas fa-check",r&&(r.innerHTML=n)):d.className="fas fa-times",s.blur(),o.blur(),a&&(c.removeAllRanges(),c.addRange(a)),document.body.removeChild(s)})),f.addEventListener("mouseleave",(e=>{setTimeout((()=>{e.target.querySelector("i").className="fas fa-copy";const t=p.querySelector(".copy .tooltip-content");t&&(t.innerHTML=s)}),500)}));let u=!1;y.addEventListener("click",(t=>{const o=t.currentTarget.querySelector("i"),s=p.querySelector(".fold .tooltip-content");u=!u,u?(o.className=l,e.classList.add("folded"),p.classList.add("folded"),s&&(s.innerHTML=a)):(o.className="fas fa-chevron-down",e.classList.remove("folded"),p.classList.remove("folded"),s&&(s.innerHTML=c))}))}))},KEEP.utils.initCodeBlockTools());const e=document.querySelector(".post-content");e&&!e.classList.contains("code-block-unshrink")&&(KEEP.utils.shrinkCodeBlock=()=>{document.querySelectorAll("figure.highlight").forEach((e=>{(e=>{const t=e.getBoundingClientRect().height;if(t-200>50){e.style.position="relative",e.style.overflow="hidden",e.style.height="200px";const o=document.createElement("div");o.setAttribute("class","shrink-line flex-center"),o.style.height="30px",o.style.top="170px",o.addEventListener("click",(()=>{e.style.removeProperty("overflow"),e.style.overflowY="hidden",e.style.overflowX="auto",e.style.height=`${t}px`,o.style.display="none"})),e.appendChild(o)}})(e)}))},KEEP.utils.shrinkCodeBlock())};