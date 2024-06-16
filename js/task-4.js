const loginForm = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (login === "" || password === "") {
    return window.alert("All form fields must be filled in");
  }
  const formData = {
    email: login,
    password: password,
  };
  console.log(formData);
  form.reset();
}

loginForm.addEventListener("submit", handleSubmit);
