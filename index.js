const gridSize = 10;
let containerSize = 700;
const squareSize = Math.round(containerSize / gridSize);
containerSize = gridSize * squareSize
const containerDiv = document.querySelector(".container");

document.documentElement.style.setProperty("--container-size", `${containerSize}px`);
document.documentElement.style.setProperty("--square-size", `${squareSize}px`);

for (let i = 0; i < gridSize ** 2; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square");
  containerDiv.appendChild(newDiv)
}