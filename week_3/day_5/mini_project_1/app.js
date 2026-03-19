// 1. Select elements
const btn = document.querySelector(".btn-random");
const box = document.querySelector(".gold-box");

// 2. Fetch character
async function fetchCharacter() {
  const randomId = Math.floor(Math.random() * 83) + 1;
  console.log(randomId);
  showLoading();

  try {
    const res = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    const data = await res.json();

    const character = data.result.properties;

    // Show instantly with placeholder
    displayCharacter(character, "Loading...");

    // Fetch homeworld WITHOUT blocking UI
    fetch(character.homeworld)
      .then(res => res.json())
      .then(homeworldData => {
        const homeworldName = homeworldData.result.properties.name;
        displayCharacter(character, homeworldName);
      })
      .catch(() => {});
  } catch (err) {
    console.error(err);
    showError();
  }
}

// 3. Display character info in the gold box
function displayCharacter(character, homeworld) {
  box.innerHTML = `
    <div class="character-card">
      <h2 class="character-name">${character.name}</h2>
      <div class="character-grid">
        <p><span class="label">HEIGHT</span><br>${character.height} cm</p>
        <p><span class="label">GENDER</span><br>${character.gender}</p>
        <p><span class="label">BIRTH YEAR</span><br>${character.birth_year}</p>
        <p><span class="label">HOMEWORLD</span><br>${homeworld}</p>
      </div>
    </div>
  `;
}

// Loading state
function showLoading() {
  box.innerHTML = `
    <div class="state state-loading">
      <i class="fa-solid fa-spinner fa-spin-pulse fa-lg"></i>
      LOADING CHARACTER...
    </div>
  `;
}

// Error state
function showError() {
  box.innerHTML = `
    <div class="state state-error">
      <i class="fa-solid fa-triangle-exclamation fa-lg"></i>
      ERROR — COULD NOT RETRIEVE DATA
    </div>
  `;
}

// 4. Attach event listener to button
btn.addEventListener("click", fetchCharacter);
