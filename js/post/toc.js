KEEP.initTOC=()=>{const t=document.querySelector(".page-container"),e=document.querySelector(".post-page-container"),o=document.querySelector(".pc-post-toc"),c=document.querySelector(".tablet-post-toc");KEEP.utils.hasToc?(KEEP.utils.tocHelper={pcTocNavSections:[],tabletTocNavSections:[],getActiveIndex(t){if(!Array.isArray(t))return;const{isHideHeader:e,headerWrapperDom:o}=KEEP.utils,c=e?0:o.getBoundingClientRect().height;let i=t.findIndex((t=>t&&t.getBoundingClientRect().top-(20+c)>0));return-1===i?i=t.length-1:i>0&&i--,i},activeNav(){this.activateNavByIndex(o,this.getActiveIndex(this.pcTocNavSections)),this.activateNavByIndex(c,this.getActiveIndex(this.tabletTocNavSections))},registerTocNav(){const t=t=>[...t.querySelectorAll(".post-toc li a.nav-link")].map((t=>{const e=document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""));return KEEP.utils.title2Top4HTag(t,e,500),e}));this.pcTocNavSections=t(o),this.tabletTocNavSections=t(c)},activateNavByIndex(t,e){const o=t.querySelectorAll(".post-toc li a.nav-link")[e];if(!o||o.classList.contains("active-current"))return;t.querySelectorAll(".post-toc .active").forEach((t=>{t.classList.remove("active","active-current")})),o.classList.add("active","active-current");let c=o.parentNode;for(;!c.matches(".post-toc");)c.matches("li")&&c.classList.add("active"),c=c.parentNode;const i=t.querySelector(".post-toc-wrap");window.anime({targets:i,duration:200,easing:"linear",scrollTop:i.scrollTop-i.offsetHeight/2+o.getBoundingClientRect().top-i.getBoundingClientRect().top})},handleShowWhenHasToc(){const t=()=>{const t=KEEP.getStyleStatus(),e="isShowToc";t&&t.hasOwnProperty(e)?KEEP.utils.postHelper.hasToc(t[e]):KEEP.utils.postHelper.hasToc(!0)},e="init_open";KEEP.theme_config.toc.hasOwnProperty(e)?KEEP.theme_config.toc[e]?t():KEEP.utils.postHelper.hasToc(!1):t()}},KEEP.utils.tocHelper.handleShowWhenHasToc(),KEEP.utils.tocHelper.registerTocNav()):(o&&e.removeChild(o),c&&t.removeChild(document.querySelector(".tablet-post-toc-mask")))},!0===KEEP.theme_config?.pjax?.enable&&KEEP.utils?KEEP.initTOC():window.addEventListener("DOMContentLoaded",KEEP.initTOC);