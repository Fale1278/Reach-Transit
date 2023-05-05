 let btnOpen = document.querySelector(".btnOpen");
 let box = document.querySelector(".box");
 let body = document.querySelector("body");
 let close = document.querySelector(".close");

 btnOpen.addEventListener("click", ()=>{
  btnOpen.style.display="none";
  box.style.display="block";
  box.style.backgroundColor="#333333";
 });

 close.addEventListener("click", ()=>{
  btnOpen.style.display="inline";
  box.style.display="none";
 });