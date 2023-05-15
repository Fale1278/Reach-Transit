
/*=============== t0ggle icon topnav =============*/
let menuIcon = document.querySelector("#menu-icon");
let topnav = document.querySelector(".topnav");

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  topnav.classList.toggle('active');
}

/* ================ scroll section active link ===================*/
let sections = document.querySelector('section');
let navLinks = document.querySelector("header nav a");

window.onscroll = (e) =>{
  e.preventDefault();
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute ('id');

    if (top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*= '+ id +']').classList.add('active');
      });
    };
  });

  /* ============== sticky topnav ==============*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);


  menuIcon.classList.remove('bx-x');
  topnav.classList.tremove('active');

};

/* =============== button open for login ==============*/
 let btnOpen = document.querySelector(".btnOpen");
 let btnOpen1 = document.querySelector(".btnOpen1");
 let btnOpen2 = document.querySelector(".btnOpen2"); 
 let btnOpen3 = document.querySelector(".btnOpen3");
 let box = document.querySelector(".box");
 let box1 = document.querySelector(".box1");
 let box2 = document.querySelector(".box2");
 let box3 = document.querySelector(".box3");
 let close = document.querySelector(".close");
 let close1 = document.querySelector(".close1");
 let close2 = document.querySelector(".close2");
 let close3 = document.querySelector(".close3");
 let close4 = document.querySelector (".close4");
 let profile = document.querySelector(".profile");
 let profileBox = document.querySelector(".profileBox");

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
 
 btnOpen3.addEventListener("click", (e)=>{
  e.preventDefault();
  btnOpen3.style.display="none";
  box3.style.display="block";
 });

 close3.addEventListener("click", ()=>{
  btnOpen3.style.display="inline";
  box3.style.display="none";
 });

 profile.addEventListener("click", (e) =>{
  e.preventDefault();
  profile.style.display = "none";
  profileBox.style.display = "block";
 });

 close4.addEventListener("click", () =>{
  profile.style.display = "inline";
  profileBox.style.display = "none";
 });