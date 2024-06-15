const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  let trimmedValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedValue ? trimmedValue : "Anonymous";
});
