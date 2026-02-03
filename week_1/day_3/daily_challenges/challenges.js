//? Get the value of each of the inputs in the HTML file when the form is submitted.
const form = document.getElementById("libform");
let currentStoryIndex = 0;
let shuffleButton = null;

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
  // values[0] = noun, values[1] = adjective, values[2] = person, values[3] = verb, values[4] = place
  const stories = [
    `Once upon a time in ${values[4]}, there lived a ${values[1]} ${values[0]} who loved to ${values[3]}. Every day, ${values[2]} would ${values[3]} and dream of visiting that special place. One day, everything changed when a mysterious visitor appeared, leading to an unforgettable adventure!`,
    `In ${values[4]}, a ${values[1]} ${values[0]} named ${values[2]} decided to ${values[3]} for the very first time. The ${values[1]} creature traveled far and wide, eventually discovering that ${values[3]} was their true passion!`,
    `${values[2]} was a ${values[1]} person who loved a peculiar ${values[0]}. Every day, ${values[2]} would ${values[3]} in ${values[4]}, becoming famous throughout the land for their dedication to ${values[3]}!`,
  ];

  const storyDiv = document.getElementById("story");
  currentStoryIndex = 0;
  storyDiv.textContent = stories[currentStoryIndex];

  //? Add a shuffle button only if it doesn't already exist
  if (!shuffleButton) {
    shuffleButton = document.createElement("button");
    shuffleButton.textContent = "Shuffle!";
    shuffleButton.style.color = "red";
    shuffleButton.style.marginLeft = "10px";
    storyDiv.insertAdjacentElement("afterend", shuffleButton);

    //? Shuffle the stories when the button is clicked
    shuffleButton.addEventListener("click", function () {
      currentStoryIndex = (currentStoryIndex + 1) % stories.length;
      storyDiv.textContent = stories[currentStoryIndex];
    });
  }
});
