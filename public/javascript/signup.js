function signupFormHandler(event) {
  console.log("SIGN UP FORM IS CALLED")

  event.preventDefault();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log("SCRIPT IS CONNECTED");

  if (email && password) {
    fetch("/workout/users", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log(response);
    });
  }
}

function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log("SCRIPT IS CONNECTED");

  if (email && password) {
    console.log("CONNECTED TO FETCH LOGIC");
    fetch("/workout/users", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log(response);
    });
  }
}

// document
//   .querySelector("#login-form")
//   .addEventListener("submit", loginFormHandler);
// document.querySelector('.submit').addEventListener('click', signupFormHandler);
document.querySelector("#signUpBtn").addEventListener("click", signupFormHandler);
