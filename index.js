import{a as u,S as d,i as n}from"./assets/vendor-B-FnSNcE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",p="54459012-5e63b86c877094f2e2839be1c";function m(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(f,{params:o}).then(t=>t.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function y(s){const o=s.map(t=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
        <img 
        class="gallery-image" 
        src="${t.webformatURL}" 
        alt="${t.tags}" 
        />
        </a>
        <div class="info">
        <p><b>Likes:</b>${t.likes}</p>
        <p><b>Views:</b>${t.views}</p>
        <p><b>Comments:</b>${t.comments}</p>
        <p><b>Downloads:</b>${t.downloads}</p>
        </div>
        </li>
`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){c.innerHTML=""}function b(){l.classList.remove("is-hidden")}function L(){l.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.error({message:"Please enter a search query",position:"topRight"});return}g(),b(),m(o).then(t=>{if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
