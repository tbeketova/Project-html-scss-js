var a=document.querySelector(".slider__button-back"),l=document.querySelector(".slider__button-next"),r=Array.from(document.querySelectorAll(".slider__item")),s=Array.from(document.querySelectorAll(".slider__pagination-button")),i=["hero--white","hero--lavender","hero--espresso"],c=document.querySelector(".hero"),e=0;function o(){r.forEach(t=>t.classList.remove("slider__item--active")),r[e].classList.add("slider__item--active"),s.forEach(t=>t.classList.remove("slider__pagination-button--active")),s[e].classList.add("slider__pagination-button--active"),i.forEach(t=>c.classList.remove(t)),c.classList.add(i[e])}s.forEach((t,n)=>{t.addEventListener("click",()=>{e=n,o()})});a.addEventListener("click",()=>{e>0&&(e--,o())});l.addEventListener("click",()=>{e<r.length-1&&(e++,o())});o();
