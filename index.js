let squaresPerSide = 10;
const gridContainerSize = 600;
let isMouseDown = false;
const containerDiv = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector("#grid-size");
const squareColor = "black";

function generateGrid(size, squareCount) {
  const squareSize = size / squareCount;
  document.documentElement.style.setProperty("--container-size", `${gridContainerSize}px`);
  document.documentElement.style.setProperty("--square-size", `${squareSize}px`);
  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    containerDiv.appendChild(newDiv);
  }
  setColoringEffect();
}

function removeGrid() {
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }
}

function setColoringEffect() {
  const squareDivs = document.querySelectorAll(".square");
  document.addEventListener("mousedown", () => isMouseDown = true);
  document.addEventListener("mouseup", () => isMouseDown = false);
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
}

// Generate the starting grid
generateGrid(gridContainerSize, squaresPerSide);

// Change the grid size with a button
gridSizeBtn.addEventListener("click", () => {
  do {
    squaresPerSide = parseInt(prompt("Enter the number of squares per side (between 1 and 100)"), 10);
  } while (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100);
  removeGrid();
  generateGrid(gridContainerSize, squaresPerSide);
})