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

// API consumption
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fromCity = document.getElementById('from');
const toCity = document.getElementById('toCity');
const departureDate = document.getElementById("departureDate");

// For handling Registration
function handleRegister() {
  if (!username.value || !email.value || !password.value) {
    console.error("Please fill in all required fields.");
    return;
  }

  fetch("https://reach-0hh4.onrender.com/authenticationRoute/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value
    })
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        window.location.href = 'index2.html';
      } else {
        console.error(data.error);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

// For handling Login....POST Method
function handlerLogin() {
  if (!email.value || !password.value) {
    console.error("Please fill in all required fields.");
    return;
  }

  fetch("https://reach-0hh4.onrender.com/authenticationRoute/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        window.location.href = 'index2.html';
      } else {
        console.error(data.error);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

// For handling Availability
function handlerAvailability() {
  if (!fromCity.value || !toCity.value || !departureDate.value) {
    console.error("Please fill in all required fields.");
    return;
  }

  const selectedFromCity = fromCity.value;
  const selectedToCity = toCity.value;
  const selectedDepartureDate = departureDate.value;

  console.log(selectedFromCity, selectedToCity, selectedDepartureDate);

  fetch("https://reach-0hh4.onrender.com/tripRoute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: selectedFromCity,
      time: selectedToCity,
      date: selectedDepartureDate
    })
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        window.location.href = 'index2.html';
      } else {
        console.error(data.error);
      }
    })
    .catch((err) => {
      console.error(err);
    });

  const selectElement = document.getElementById("from");
  const selectedOption = selectElement.options[selectElement.selectedIndex].text;

  const replaceFrom = document.getElementById("replaceFrom");
  replaceFrom.textContent = selectedOption;

  const selectElement2 = document.getElementById("toCity");
  const selectedOption2 = selectElement2.options[selectElement2.selectedIndex].text;

  const replaceTo = document.getElementById("replaceTo");
  replaceTo.textContent = selectedOption2;

  const selectElement3 = document.getElementById("departureDate");
  const selectedOption3 = selectElement3.value;

  const replaceDate = document.getElementById("replaceDate");
  replaceDate.textContent = selectedOption3;
}

document.addEventListener("DOMContentLoaded", function() {
  const carSelect = document.getElementById("changeCar");
  const carDisplay = document.getElementById("car");

  carSelect.addEventListener("change", function() {
    const selectedOption = carSelect.options[carSelect.selectedIndex].text;
    carDisplay.textContent = selectedOption;
  });
});
