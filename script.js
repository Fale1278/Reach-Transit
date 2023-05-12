 let btnOpen = document.querySelector(".btnOpen");
 let btnOpen1 = document.querySelector(".btnOpen1");
 let btnOpen2 = document.querySelector(".btnOpen2");
 let box = document.querySelector(".box");
 let box1 = document.querySelector(".box1");
 let box2 = document.querySelector(".box2");
 let body = document.querySelector("body");
 let close = document.querySelector(".close");
 let close1 = document.querySelector(".close1");
 let close2 = document.querySelector(".close2");

 btnOpen.addEventListener("click", (e)=>{
  e.preventDefault();
  btnOpen.style.display="none";
  box.style.display="block";
 });
 close.addEventListener("click", ()=>{
  btnOpen.style.display="inline";
  box.style.display="none";
 });

 btnOpen1.addEventListener("click", (e)=>{
  e.preventDefault();
  btnOpen1.style.display="none";
  box1.style.display="block";
 });

 close1.addEventListener("click", ()=>{
  btnOpen1.style.display="inline";
  box1.style.display="none";
 });

 btnOpen2.addEventListener("click", (e)=>{
  e.preventDefault();
  btnOpen2.style.display="none";
  box2.style.display="block";
 });

 close2.addEventListener("click", ()=>{
  btnOpen2.style.display="inline";
  box2.style.display="none";
 });