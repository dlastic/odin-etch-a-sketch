const gridSize = 10;
let containerSize = 700;
const squareSize = Math.round(containerSize / gridSize);
containerSize = gridSize * squareSize
const containerDiv = document.querySelector(".container");

document.documentElement.style.setProperty("--container-size", `${containerSize}px`);
document.documentElement.style.setProperty("--square-size", `${squareSize}px`);

// Create grid of square divs
for (let i = 0; i < gridSize ** 2; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square");
  containerDiv.appendChild(newDiv);
}

// Change div color when the mouse is down and moves over it
let isMouseDown = false;
const squareColor = "blue";

document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);

const squareDivs = document.querySelectorAll(".square");
squareDivs.forEach((square) => {
    square.addEventListener("mousedown", () => {
      square.style.backgroundColor = squareColor;
    })
    square.addEventListener("mousemove", () => {
      if (isMouseDown) {
        square.style.backgroundColor = squareColor;
      }
    });
});