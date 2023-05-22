const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => document.querySelectorAll(selector);

// Toggle icon and topnav
const menuIcon = getElement("#menu-icon");
const topnav = getElement(".topnav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle('bx-x');
  topnav.classList.toggle('active');
});

// Open and close buttons for login
const openClosePairs = [
  { open: ".btnOpen", close: ".close", box: ".box" },
  { open: ".btnOpen1", close: ".close1", box: ".box1" },
  { open: ".btnOpen2", close: ".close2", box: ".box2" },
  { open: ".btnOpen3", close: ".close3", box: ".box3" },
  { open: ".btnOpen4", close: ".close4", box: ".box4" },
  { open: ".btnOpen5", close: ".close5", box: ".box5" },
];

openClosePairs.forEach((pair) => {
  const openBtn = getElement(pair.open);
  const closeBtn = getElement(pair.close);
  const box = getElement(pair.box);

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openBtn.style.display = "none";
    box.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    openBtn.style.display = "inline";
    box.style.display = "none";
  });
});

// Profile image upload
const imgDiv = getElement(".user-image");
const img = getElement("#photo");
const file = getElement("#file");

file.addEventListener("change", function () {
  const chosenFile = this.files[0];

  if (chosenFile) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(chosenFile);
  }
});
