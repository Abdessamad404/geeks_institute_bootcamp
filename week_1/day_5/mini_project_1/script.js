const colors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#8B00FF",
  "#FF1493",
  "#00FFFF",
  "#FF4500",
  "#32CD32",
  "#1E90FF",
  "#FF69B4",
  "#FFD700",
  "#ADFF2F",
  "#FF6347",
  "#40E0D0",
  "#EE82EE",
  "#A0522D",
  "#808080",
  "#000000",
];

const d = document;
const sidebar = d.querySelector(".sidebar-items");
const main = d.querySelector(".main");
const clearButton = d.getElementById("clear-button");

let selectedColor = colors[0];
let isDrawing = false;

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

// Create 21 color swatches in the sidebar
for (let i = 0; i < 21; i++) {
  const div = d.createElement("div");
  div.classList.add("sidebar-item");
  div.style.backgroundColor = colors[i];
  div.addEventListener("click", () => selectedColor = colors[i]);
  sidebar.appendChild(div);
}

// Create 2500 drawing squares in the main grid
for (let i = 0; i < 2500; i++) {
  const div = d.createElement("div");
  div.classList.add("main-item");
  div.addEventListener("mouseover", () => {
    if (isDrawing) div.style.backgroundColor = selectedColor;
  });
  main.appendChild(div);
}

// Clear button resets all squares to white
clearButton.addEventListener("click", () => {
  d.querySelectorAll(".main-item").forEach(sq => sq.style.backgroundColor = "white");
});
