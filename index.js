let squaresPerSide = 20;
const gridContainerSize = 600;
let isMouseDown = false;
let rainbowMode = false;
const containerDiv = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector("#grid-size");
const rainbowModeBtn = document.querySelector("#rainbow-mode");
const clearGridBtn = document.querySelector("#clear");

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

function clearGrid() {
  document.querySelectorAll(".square").forEach((square) => {
    square.style.removeProperty("background-color");
  })
}

function setColor() {
  if (rainbowMode) {
    const rgbRed = Math.floor(Math.random() * 255);
    const rgbGreen = Math.floor(Math.random() * 255);
    const rgbBlue = Math.floor(Math.random() * 255);
    return `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
  } else {
    return "red";
  }

}

function setColoringEffect() {
  const squareDivs = document.querySelectorAll(".square");
  document.addEventListener("mousedown", () => isMouseDown = true);
  document.addEventListener("mouseup", () => isMouseDown = false);

  squareDivs.forEach((square) => {
      square.addEventListener("mousedown", () => {
        square.style.backgroundColor = setColor();
      })
      square.addEventListener("mouseover", () => {
        if (isMouseDown) {
          square.style.backgroundColor = setColor();
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
});

// Rainbow button
rainbowModeBtn.addEventListener("click", () => {
  rainbowModeBtn.classList.toggle("rainbow");
  rainbowMode = !rainbowMode;
  setColoringEffect();
});

// Clear button
clearGridBtn.addEventListener("click", () => {
  clearGrid();
})