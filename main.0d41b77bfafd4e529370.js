(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(i,e,t){"use strict";t.r(e);t("hjJ8");var n=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],o=(t("iPZ8"),t("kypl"),t("8cZI"),t("lmye"),document.querySelector(".js-gallery")),a=n.map((function(i){var e=i.preview,t=i.original;return'\n        <li class="gallery__item">\n        <a class="gallery__link"\n            href="'+t+'">\n        <img\n            loading="lazy"\n            class="gallery__image"\n            src="'+e+'"\n            data-src="'+t+'"\n            alt="'+i.description+'"/>\n        </a>\n        </li>'})).join("");o.innerHTML=a;var p=document.querySelector(".js-gallery"),r=document.querySelector(".js-lightbox"),c=document.querySelector(".lightbox__image"),s=document.querySelector('[data-action="close-lightbox"]'),l=document.querySelector(".lightbox__overlay");t("IlJM"),t("uQK7");function d(i){"ArrowRight"===i.code?function(){var i=n.find((function(i){return i.original===c.src})),e=n.indexOf(i)+1;if(void 0===n[e])return c.src=n[0].original,void(c.alt=n[0].description);c.src=n[e].original,c.alt=n[e].description}():"ArrowLeft"===i.code&&function(){var i=n.find((function(i){return i.original===c.src})),e=n.indexOf(i)-1;if(void 0===n[e])return c.src=n[n.length-1].original,void(c.alt=n[n.length-1].description);c.src=n[e].original,c.alt=n[e].description}()}function g(){c.src=event.target.dataset.src,c.alt=event.target.alt}function h(){r.classList.remove("is-open"),c.src="",c.alt="",window.removeEventListener("keydown",u),window.removeEventListener("keydown",d)}function u(i){"Escape"===i.code&&h()}s.addEventListener("click",h),l.addEventListener("click",(function(i){i.currentTarget===i.target&&h()})),p.addEventListener("click",(function(i){if(i.preventDefault(),"IMG"!==i.target.nodeName)return;r.classList.add("is-open"),g(),window.addEventListener("keydown",d),window.addEventListener("keydown",u)}))},hjJ8:function(i,e,t){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.0d41b77bfafd4e529370.js.map