function resetCategoriesPage(){const e=t=>{t.forEach((t=>{const l=t.querySelector(".site-all-category-list-link"),s=t.querySelector(".site-all-category-list-count"),i=t.querySelector(".site-all-category-list-child");let r=`\n            <div class="self-category-info border-box">\n              <div class="left border-box">${i?'<i class="icon border-box fa-regular fa-square-plus"></i> ':""}${l.outerHTML}</div>\n              <div class="right border-box">${s.outerHTML}</div>\n            </div>\n          `;i&&(e(i.querySelectorAll(".site-all-category-list-item")),r+=i.outerHTML),t.innerHTML=r}))};e(document.querySelectorAll(".site-all-category-list .site-all-category-list-item")),document.querySelectorAll(".site-all-category-list-item").forEach((e=>{let t=!1;const l=e.querySelector(".self-category-info .left .icon"),s=e.querySelector(".site-all-category-list-child");l&&l.addEventListener("click",(()=>{t=!t,s&&(t?(s.style.height="auto",s.style.visibility="visible",l.classList.add("fa-square-minus"),l.classList.remove("fa-square-plus")):(s.style.height="0",s.style.visibility="hidden",l.classList.add("fa-square-plus"),l.classList.remove("fa-square-minus")))}))}))}!0===KEEP.theme_config.pjax.enable&&KEEP.utils?resetCategoriesPage():window.addEventListener("DOMContentLoaded",resetCategoriesPage);