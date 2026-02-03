//? Get the value of each of the inputs in the HTML file when the form is submitted.
const form = document.getElementById("libform");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  inputs = form.querySelectorAll('input[type="text"]');

  //? Make sure the values are not empty
  let values = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      alert("Please fill in all fields.");
      return;
    }
    values.push(inputs[i].value);
  }
  //? Create three different stories using the values from the inputs
  const stories = [
    `Once upon a time in ${values[0]}, there lived a ${values[1]} who loved to ${values[2]}. Every day, the ${values[1]} would ${values[2]} and dream of ${values[3]}. One day, everything changed when a mysterious ${values[4]} appeared, leading to an unforgettable adventure!`,
    `In a distant land called ${values[0]}, a ${values[1]} named ${values[3]} decided to ${values[2]} for the very first time. The ${values[1]} traveled far and wide, eventually arriving at ${values[4]}, where an incredible discovery awaited!`,
    
  ];

  const storyDiv = document.getElementById("story");
  let currentStoryIndex = 0;
  storyDiv.textContent = stories[currentStoryIndex];

  //   add a shuffle button after the paragraph not inside it
  const shuffleButton = document.createElement("button");
  shuffleButton.textContent = "Shuffle!";

  // add style to it
  shuffleButton.style.color = "red";
  shuffleButton.style.marginLeft = "10px";
  storyDiv.insertAdjacentElement("afterend", shuffleButton);

  //? Shuffle the stories when the button is clicked
  shuffleButton.addEventListener("click", function () {
    currentStoryIndex = (currentStoryIndex + 1) % stories.length;
    storyDiv.textContent = stories[currentStoryIndex];
  });
});
