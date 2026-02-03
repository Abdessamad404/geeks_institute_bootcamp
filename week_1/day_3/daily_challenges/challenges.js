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
  //? Create the story using the values from the inputs
  const story = `Once upon a time in ${values[0]}, there lived a ${values[1]} who loved to ${values[2]}. Every day, the ${values[1]} would ${values[2]} and dream of ${values[3]}. One day, everything changed when a mysterious ${values[4]} appeared, leading to an unforgettable adventure!`;
  const storyDiv = document.getElementById("story");
  storyDiv.textContent = story;

  //   add a shuffle button after the paragraph not inside it
  const shuffleButton = document.createElement("button");
  shuffleButton.textContent = "Shuffle!";
  // add style to it
  shuffleButton.style.color = "red";
  shuffleButton.style.marginLeft = "10px";
  storyDiv.insertAdjacentElement("afterend", shuffleButton);
});
//? Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed while keeping the same values from the inputs.
// shuffleButton.addEventListener("click", function () {