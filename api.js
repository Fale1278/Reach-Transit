const username = document.getElementById("username");
const email = document.getElementById("email");
const date = document.getElementById("date");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

function handleRegister() {
  // ... existing code
  console.log(
    username.value,
    email.value,
    password.value,
  );

  fetch("https://reach-0hh4.onrender.com/authenticationRoute/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
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