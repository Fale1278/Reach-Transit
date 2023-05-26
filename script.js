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
// Get references to the elements
// Get references to the elements
const imgDiv = document.querySelector(".user-image");
const img = document.querySelector("#photo");
const fileInput = document.getElementById("file");
const selectCam = document.querySelector(".user-image");
const replaceCam = document.getElementById("replaceCam");

// Attach event listener to file input
fileInput.addEventListener("change", function () {
  const chosenFile = this.files[0];

  if (chosenFile) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(chosenFile);
  }

  const selectedCam = selectCam.options[selectCam.selectedIndex].text;
  replaceCam.textContent = selectedCam;
});


// API consumption

// For handling Registration
function handleRegister() {
  
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const locate = document.getElementById("location");
  const date = document.getElementById("date");
  const cpassword = document.getElementById("cpassword");
  console.log(username.value, email.value, password.value, locate.value, date.value, cpassword.value);
  fetch("https://reach-0hh4.onrender.com/authenticationRoute/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
      location: locate.value,
      date: date.value,
    }),
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

  const selectEmail = document.getElementById("email");
  const selectedEmail = selectEmail.options[selectEmail.selectedIndex].text;

  const replaceEmail = document.getElementById("replaceEmail");
  replaceEmail.textContent = selectedEmail;

  const selectPassword = document.getElementById("password");
  const selectedPassword = selectPassword.options[selectPassword.selectedIndex].text;

  const replacePassword = document.getElementById("replacePassword");
  replacePassword.textContent = selectedPassword;

  const selectLocation = document.getElementById("locate");
  const selectedLocation = selectLocation.options[selectLocation.selectedIndex].text;

  const replaceLocation = document.getElementById("replaceCity");
  replaceLocation.textContent = selectedLocation;

}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// For handling Login....POST Method
function handlerLogin() {
  // Check if email and password are filled
  if (!email.value || !password.value) {
    console.error("Please fill in all required fields.");
    return;
  }

  // Send a POST request to the login endpoint
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
    .then((res) => res.json()) // Parse response as JSON
    .then((data) => {
      console.log(data);
      localStorage.setItem('userDate', JSON.stringify(data)); // Store data in local storage
      if (data.user) {
        window.location.href = 'index2.html'; // Redirect to index2.html if login is successful
      } else {
        errorMessage.innerHTML = data; // Display error message
      }
    })
    .catch((err) => {
      console.error(err);
    });

    const loginModal = document.getElementById("loginModal");
  loginModal.style.display = "none";
}


// For handling Availability
function handlerAvailability() {
  
  const selectedFromCity = document.getElementById('from');
  const selectedToCity = document.getElementById('toCity');
  const selectedDepartureDate = document.getElementById('departureDate');
  
  if (!selectedFromCity.value || !selectedToCity.value || !selectedDepartureDate.value) {
    alert("Please fill in all required fields.");
    return;
  }
  console.log(selectedFromCity, selectedToCity, selectedDepartureDate);

  fetch("https://reach-0hh4.onrender.com/reservationRoute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: selectedFromCity.value,
      to: selectedToCity.value,
      date: selectedDepartureDate.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(err));

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

  const selectElement4 = document.getElementById("departureDate");
  const selectedOption4 = selectElement4.value;

  const replaceDate2 = document.getElementById("replaceDate2");
  replaceDate2.textContent = selectedOption4;

  const selectElement5 = document.getElementById("departureDate");
  const selectedOption5 = selectElement5.value;

  const replaceDate3 = document.getElementById("replaceDate2");
  replaceDate3.textContent = selectedOption5;

  const selectElement6 = document.getElementById("departureDate");
  const selectedOption6 = selectElement6.value;

  const replaceDate4 = document.getElementById("replaceDate4");
  replaceDate4.textContent = selectedOption6;
}

document.addEventListener("DOMContentLoaded", function() {
  const carSelect = document.getElementById("changeCar");
  const carDisplay = document.getElementById("car");

  carSelect.addEventListener("change", function() {
    const selectedOption = carSelect.options[carSelect.selectedIndex].text;
    carDisplay.textContent = selectedOption;
  });
});
