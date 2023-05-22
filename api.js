const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fromCity = document.getElementById('from');
const toCity = document.getElementById('toCity');
const departureDate = document.getElementById("departureDate");

// For handling Registration
function handleRegister() {
  console.log(
    username.value,
    email.value,
    password.value
  );

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
      }
    })
    .catch((err) => console.log(err));
}

// For handling Login....POST Method
function handlerLogin() {
  console.log(
    email.value,
    password.value
  );

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
      }
    })
    .catch((err) => console.log(err));
}

// For handling Availability
function handleAvailability() {
  // Retrieve the <select> elements and input element by their ids
  const fromCity = document.getElementById('fromCity');
  const toCity = document.getElementById('toCity');
  const departureDate = document.getElementById('departureDate');

  // Retrieve the selected values
  const selectedFromCity = fromCity.value;
  const selectedToCity = toCity.value;
  const selectedDepartureDate = departureDate.value;

  console.log(selectedFromCity, selectedToCity, selectedDepartureDate);

  // Send a POST request to the server
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
        // Redirect to index2.html if the request was successful
        window.location.href = 'index2.html';
      }
    })
    .catch((err) => console.log(err));
}
