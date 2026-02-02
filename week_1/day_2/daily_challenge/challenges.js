const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

// Each planet should have a different background color.
const colors = [
  "gray",
  "yellow",
  "blue",
  "red",
  "orange",
  "green",
  "purple",
  "pink",
];

// Moons array
const moons = [0, 0, 1, 2, 67, 62, 27, 14];

solarSystem = document.getElementById("solarSystem");
planets.forEach((planet, index) => {
  // create a div
  const planetDiv = document.createElement("div");
  // give it the class "planet"
  planetDiv.className = "planet";
  // add the name of the planet to the div
  planetDiv.textContent = planet;

  // set the background color of the div
  planetDiv.style.backgroundColor = colors[index];

  //   create the moons
  if (moons[index] !== 0) {
    const moonDiv = document.createElement("div");
    moonDiv.className = "moon";
    moonDiv.textContent = "Moon x" + moons[index];
    planetDiv.appendChild(moonDiv);
  }
  // append the div to the section in the HTML page
  solarSystem.appendChild(planetDiv);
});
