function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    boxes.append(div);
  }
};

function destroyBoxes() {
  boxes.innerHTML = "";
};

buttonCreate.addEventListener("click", () => {
  if (input.value > 0 && input.value < 100) {
    destroyBoxes();
    createBoxes(input.value);
    input.value = "";
  }
});

buttonDestroy.addEventListener("click", destroyBoxes);
