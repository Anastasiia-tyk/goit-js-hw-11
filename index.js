import{a as u,S as f,i}from"./assets/vendor-B-FnSNcE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",p="54459012-5e63b86c877094f2e2839be1c";function m(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(d,{params:o}).then(t=>t.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function y(s){const o=s.map(t=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
        <img 
        class="gallery-image" 
        src="${t.webformatURL}" 
        alt="${t.tags}" 
        loading="lazy"
        />
        </a>
        <div class="info">
        <p class="text-info"><b>Likes:</b>${t.likes}</p>
        <p class="text-info"><b>Views:</b>${t.views}</p>
        <p class="text-info"><b>Comments:</b>${t.comments}</p>
        <p class="text-info"><b>Downloads:</b>${t.downloads}</p>
        </div>
        </li>
`).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function h(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}function L(){c.innerHTML=""}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.error({message:"Please enter a search query",position:"topRight"});return}L(),h(),m(o).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",progressBar:"#B51B1B",messageColor:"#FFFFFF"});return}y(t.hits)}).catch(()=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
